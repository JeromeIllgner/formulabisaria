import { connectToDatabase } from '@/lib/mongoClient'
import { load } from 'cheerio'
import { promises as fs } from 'fs'

const freePractice = 'free_practice_laps.csv'
const qualifying = 'qualifying_laps.csv'
const race = 'race_laps.csv'

export async function loadLaps() {
  const db = await connectToDatabase()
  const collection = db.collection('laps')

  const freePracticeLaps = await loadLapsFromFile(freePractice)
  const qualifyingLaps = await loadLapsFromFile(qualifying)
  const raceLaps = await loadLapsFromFile(race)

  collection.insertMany(
    freePracticeLaps.map((lap) => ({ ...lap, raceType: 'freePractice' })),
  )
  collection.insertMany(
    qualifyingLaps.map((lap) => ({ ...lap, raceType: 'qualifying' })),
  )
  collection.insertMany(raceLaps.map((lap) => ({ ...lap, raceType: 'race' })))
}

async function loadLapsFromFile(fileName: string) {
  const text = await fs.readFile(`data/${fileName}`, 'utf8')
  const [_, ...lines] = text.split('\n')
  const laps = lines.map((line) => {
    const [
      position,
      name,
      bestLapTime,
      bestLap,
      laps,
      averageTime,
      gap,
      points,
      points_gained,
    ] = line.split(',')

    const points_gained_parsed = points_gained.substring(
      2,
      points_gained.length - 1,
    )
    return {
      position: parseInt(position),
      driverName: name,
      fastestLapTime: parseFloat(bestLapTime),
      fastestLap: parseInt(bestLap),
      laps: parseInt(laps),
      averageTime: parseFloat(averageTime),
      gap: parseFloat(gap),
      points: parseInt(points),
      pointsGained: parseInt(points_gained_parsed),
    }
  })
  return laps
}

loadLaps()

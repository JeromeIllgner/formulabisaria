import { connectToDatabase } from '@/lib/mongoClient'
import { NextRequest } from 'next/server'

type Lap = {
  raceType: 'freePractice' | 'qualifying' | 'race'
  fastestLap: string
  laps: number
  position: number
  driver: string
  driverName: string
}

export async function POST(req: NextRequest) {
  const lap = (await req.json()) as Lap
  const db = await connectToDatabase()

  db.collection('laps').insertOne(lap)
}

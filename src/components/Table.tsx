import { connectToDatabase } from '@/lib/mongoClient'

export const people = [
  {
    Rank: 1,
    Driver: 'Jerome',
    BestLap: '43.2',
  },
  // More people...
]

const headers = [
  { label: 'Position', key: 'position' },
  { label: 'Driver', key: 'driverName' },
  { label: 'Fastest Lap', key: 'fastestLapTime' },
  { label: 'Average Lap', key: 'averageTime' },
  { label: 'Gap', key: 'gap' },
]

export default async function Table({
  filter = 'race',
}: {
  filter?: 'race' | 'qualifying' | 'freePractice'
}) {
  const db = await connectToDatabase()
  const collection = db.collection('laps')
  const laps = await collection.find().toArray()

  const filteredLaps = laps.filter((lap) => lap.raceType === filter)

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header.key}
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredLaps.map((lap) => (
                  <tr key={lap._id.toString()}>
                    {headers.map((header) => {
                      return (
                        <td
                          key={`${lap._id.toString()}-${header.key}`}
                          className="whitespace-nowrap py-4 pl-6 pr-3  text-sm text-gray-500"
                        >
                          {lap[header.key]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const people = [
  {
    Rank: 1,
    Driver: 'Jerome',
    BestLap: '43.2',
    Kart: 12,
  },
  // More people...
]

export default function Table<T extends Record<string, string | number>>({
  headers,
  data,
}: {
  headers: string[]
  data: T[]
}) {
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
                      key={header}
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.Rank}>
                    {headers.map((header) => (
                      <td
                        key={header}
                        className="whitespace-nowrap py-4 pl-6 pr-3  text-sm text-gray-500"
                      >
                        {
                          // @ts-ignore
                          person[header]
                        }
                      </td>
                    ))}
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

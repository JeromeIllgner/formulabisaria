import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { connectToDatabase } from '@/lib/mongoClient'

export default async function RegistrationForm() {
  const db = await connectToDatabase()
  const collection = db.collection('drivers')
  const drivers = await collection.find().toArray()

  return (
    <>
      {/* <Container>
        <div className="mt-16 flex flex-col items-center">
          <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Registration Closed
          </h1>
          <form
            onSubmit={handleSubmit(
              async (driver, event) => {
                event?.preventDefault()
                try {
                  await fetch('/api/driver', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(driver),
                  })
                  toast({
                    title: 'Driver registered ',
                    description: 'Enjoy your race',
                  })
                  fetchDrivers()
                } catch (error) {
                  toast({
                    title: 'Error',
                    description: 'Something went wrong',
                  })
                }
              },
              () => {
                toast({
                  title: 'Missing name',
                  description: 'Please enter your first and last name',
                })
              },
            )}
            className="mt-8 flex flex-col gap-4 rounded-lg bg-zinc-100 p-8 md:w-full md:max-w-lg"
          >
            <div>
              <label
                className="m-2 font-semibold text-zinc-600"
                htmlFor="driver-fname-input"
              >
                First Name
              </label>
              <Input
                className="dark:text-black"
                id="driver-fname-input"
                placeholder="Carlos"
                {...register('firstName', { required: true })}
              />
            </div>
            <div>
              <label
                className="m-2 font-semibold text-zinc-600"
                htmlFor="driver-lname-input"
              >
                Last Name
              </label>
              <Input
                className="dark:text-black"
                id="driver-lname-input"
                placeholder="Sainz"
                {...register('lastName', { required: true })}
              />
            </div>
            <div>
              <label
                className="m-2 font-semibold text-zinc-600"
                htmlFor="driver-nickname-input"
              >
                Nickname (Optional)
              </label>
              <Input
                className="dark:text-black"
                id="driver-nickname-input"
                placeholder="Smooth operator"
                {...register('nickname')}
              />
            </div>
            <div>
              <label
                className="m-2 font-semibold text-zinc-600"
                htmlFor="driver-email-input"
              >
                Email (Optional)
              </label>
              <Input
                className="dark:text-black"
                id="driver-email-input"
                placeholder="carlos.sainz@gmail.com"
                {...register('email')}
              ></Input>
            </div>
            <Button>Save Driver</Button>
          </form>
        </div>
      </Container> */}
      <Container>
        <div className="mt-16 flex flex-col items-center gap-2">
          <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Registered Drivers
          </h1>

          {drivers.map((driver) => (
            <Card
              className="w-64 items-center justify-center rounded-md bg-slate-200 p-2 dark:bg-zinc-800 md:w-full md:max-w-lg"
              key={driver._id.toString()}
            >
              {driver.firstName} {driver.lastName}
              {driver.nickname ? ` (${driver.nickname})` : ''}
            </Card>
          ))}
        </div>
      </Container>
      <Container>
        <div className="mt-16 flex flex-col items-center gap-2">
          <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Registration has closed for this event
          </h1>
        </div>
      </Container>
    </>
  )
}

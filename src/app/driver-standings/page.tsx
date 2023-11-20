import { Container } from '@/components/Container'
import Table from '@/components/Table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Standings() {
  return (
    <Container className="flex items-center pt-16">
      <h1 className="4xl mb-4 text-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Driver&apos;s Standings
      </h1>
      <Tabs defaultValue="race">
        <TabsList className="flex w-full flex-row gap-2" defaultValue={'race'}>
          <TabsTrigger
            className="flex-1 rounded-md bg-zinc-200 data-[state=active]:bg-zinc-50 dark:bg-zinc-400 dark:data-[state=active]:bg-zinc-700"
            value="race"
          >
            Race
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 rounded-md bg-zinc-200 data-[state=active]:bg-zinc-50 dark:bg-zinc-400 dark:data-[state=active]:bg-zinc-700"
            value="qualifying"
          >
            Qualifying
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 rounded-md bg-zinc-200 data-[state=active]:bg-zinc-50 dark:bg-zinc-400 dark:data-[state=active]:bg-zinc-700"
            value="freePractice"
          >
            Free Practice
          </TabsTrigger>
        </TabsList>
        <TabsContent value="freePractice">
          <Table filter={'freePractice'} />
        </TabsContent>
        <TabsContent value="qualifying">
          <Table filter={'qualifying'} />
        </TabsContent>
        <TabsContent value="race">
          <Table filter={'race'} />
        </TabsContent>
      </Tabs>
    </Container>
  )
}

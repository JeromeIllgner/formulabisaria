import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import aniCrab from '@/images/photos/ani-crab.jpeg'
import aniCharge from '@/images/photos/ani_charge.jpeg'
import aniRecords from '@/images/photos/ani-records.webp'
import aniKid from '@/images/photos/ani_kid.jpeg'
import aniSuit from '@/images/photos/ani-suit.jpeg'
import aniBrady from '@/images/photos/ani-brady.jpeg'
import Table, { people } from '@/components/Table'
import { Carousel } from '@/components/Carousel'

function Photos() {
  return (
    <Container className="mt-16">
      <Carousel
        photos={[aniKid, aniSuit, aniCrab, aniCharge, aniBrady, aniRecords]}
      />
    </Container>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Formula Bisaria
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Strap in and get excited for Ani&apos;s unremarkable 28th birthday.
            Today we celebrate a man who has consistently used cars as a means
            to compensate for his lack of personality (and other things).
            We&apos;re so proud of you, Ani!
          </p>
          {/* <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Make sure to register to appear in the driver&apos;s standings
            below.
          </p> */}
        </div>
      </Container>
      <Photos />
      {/* <Container className="mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Driver&apos;s Standings
        </h1>
        <Table data={people} headers={Object.keys(people[0])} />
      </Container> */}
    </>
  )
}

import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import image1 from '@/images/photos/ani-crab.jpeg'
import image2 from '@/images/photos/ani_charge.jpeg'
import image3 from '@/images/photos/ani-records.webp'
import image4 from '@/images/photos/ani_kid.jpeg'
import image5 from '@/images/photos/ani-suit.jpeg'
import Table, { people } from '@/components/Table'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
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

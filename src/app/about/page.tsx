import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import track from '@/images/track.png'

const about = 'Welcome to Formula Bisaria'

export const metadata: Metadata = {
  title: 'About',
  description: about,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={track}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-white object-contain  dark:bg-white"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {about}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Saturday&apos;s race is going to follow the a typical shortened
              Formula schedule. There will be a practice session, a qualifying
              and a race. We will be racing at{' '}
              <a
                className="text-blue-600"
                href="https://www.k1speed.com/burbank-location.html"
              >
                K1&apos;s circuit in Burbank, CA
              </a>
              .
            </p>

            <h2 className="text-2xl">The Schedule</h2>
            <ul>
              <li>
                <span className="font-semibold">1:45 PM:</span> Arrival. Please
                check in at the front counter. Everyone needs to register and
                sign waivers.
              </li>
              <li>
                <span className="font-semibold">2:15 PM:</span> Safety briefing
                while stragglers arrive late.
              </li>
              <li>
                <span className="font-semibold">2:45-4:15 PM:</span> Race time
                (A 12-Lap Practice Race, a 12-Lap Qualifying Race, and a 14-Lap
                Final Event Race), and then a trophy ceremony for top 3.
              </li>
              <li>
                <span className="font-semibold">4:15-5:15 PM:</span>A room for
                our group to hang post-race. I&apos;ll order us a bunch of food.
              </li>
            </ul>
            <h2 className="text-2xl">The Location</h2>
            <p>
              The Burbank K1 karting location is an indoor track with electric
              go-karts that can reach up to 45mph. With 15 turns this will make
              for an exciting race with plenty of opportunities to overtake. You
              can see the track layout above.
            </p>
            <iframe
              className="rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73649.59382804795!2d-118.39815358587286!3d34.18930132527571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2950d0de93f87%3A0xe836c567eef46b87!2sK1%20Speed%20-%20Indoor%20Go%20Karts%2C%20Corporate%20Event%20Venue%2C%20Team%20Building%20Activities!5e0!3m2!1sen!2sus!4v1700265047548!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h2 className="text-2xl">The Objective</h2>
            <p>
              Ofcourse, the objective is to have fun. But the real objective is
              to crush Ani and make sure he doesn&apos;t win. He&apos;s been
              talking a lot of smack and we need to put him in his place. He
              likes to think that he&apos;s the best driver in the group, but we
              all know that&apos;s not true. So let&apos;s make sure he
              doesn&apos;t win.
            </p>
            <p>
              To achieve this objective be fearless, brake late and round off
              those corners.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

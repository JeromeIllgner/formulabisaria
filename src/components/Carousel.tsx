'use client'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

export function Carousel({ photos = [] }: { photos: StaticImageData[] }) {
  return (
    <Swiper
      className="h-128"
      autoplay={{ delay: 2000 }}
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {photos.map((image) => (
        <SwiperSlide key={image.src}>
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 m-4 h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { Toaster } from '@/components/ui/Toaster'

export const metadata: Metadata = {
  title: {
    template: '%s - Formula Bisaria',
    default: 'Formula Bisaria - A race to remember',
  },
  description: 'Welcome to Formula Bisaria, a celebration of the small things',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

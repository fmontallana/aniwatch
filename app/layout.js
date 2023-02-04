import "./globals.css"

import localFont from "@next/font/local"
import { Footer, Navbar } from "@/components"
import { Suspense } from "react"
import Loading from "./loading"

const hubotSans = localFont({ src: "../lib/fonts/Hubot-Sans.woff2" })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`bg-gray-900  ${hubotSans.className}`}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}

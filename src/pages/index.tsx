import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageHeading from "../components/PageHeading"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className='bg-white max-w-screen-2xl mx-auto py-40'>
      <PageHeading>CSS Blitz</PageHeading>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>CSS Blitz</title>

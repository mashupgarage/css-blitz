import React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'
import PageHeading from '../components/PageHeading'
import Card from '../components/Card'
import BlitzType from '../types/blitz'
import Nav from '../components/Nav'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          date: string
          slug: string
          title: string
          type: BlitzType
          author: string
          image: {
            publicURL: string
          }
        }
      }[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark
  return (
    <>
      <Nav />
      <main className='max-w-screen-2xl mx-auto py-40 px-8'>
        <section className='text-center border-b pb-16 mb-16'>
          <PageHeading classes='mb-4'>CSS Blitz</PageHeading>
          <p className='lg:w-1/2 mx-auto text-lg leading-loose mb-4'>Our semi-weekly challenge where we show an image that participants will have to copy and write code for in a very limited time period -- usually 15-20 minutes. An additional 15-20 mins to showcase each participant's contribution to the challenge. It's fun!</p>
          <p className='lg:w-1/2 leading-loose mb-4 mx-auto'>It's a great opportunity for developers to learn basic to advanced CSS and HTML -- which we know is still quite a challenge for most people even now. At the same time, for experienced designers/developers to work on efficient ways to approach things.</p>
          <p className='lg:w-1/2 leading-loose mx-auto'>When you think you know a lot about web designing, you are actually wrong with CSS Blitz.</p>
        </section>
        <section className='flex flex-col items-center justify-between'>
          {nodes.map((node) => {
            return (
              <Card {...node.frontmatter} key={node.frontmatter.slug} />
            )
          })}
        </section>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mashup Blitz</title>

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: {title: {ne: "Template"}}}
      sort: {frontmatter: {date: ASC}}
    ) {
      nodes {
        frontmatter {
          title
          slug
          date
          type
          author
          image {
            publicURL
          }
        }
      }
    }
  }
`

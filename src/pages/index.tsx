import React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'
import PageHeading from '../components/PageHeading'
import Card from '../components/Card'
import BlitzType from '../types/blitz'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          date: string,
          slug: string,
          title: string,
          type: BlitzType,
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
    <main className='bg-white max-w-screen-2xl mx-auto py-40'>
      <section className='mb-40'>
        <PageHeading>Mashup Blitz</PageHeading>
      </section>
      <section className='flex flex-col items-center justify-between'>
        {nodes.map((node) => {
          return (
            <Card {...node.frontmatter} key={node.frontmatter.slug} />
          )
        })}
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mashup Blitz</title>

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
      nodes {
        frontmatter {
          date
          slug
          title
          type
          image {
            publicURL
          }
        }
      }
    }
  }
`

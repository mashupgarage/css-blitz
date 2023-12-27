import React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'
import Tag from '../../components/Tag'

type CSSBlitzProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        image: {
          publicURL: string
        }
      }
      html: string
    }
  }
}

const CSSBlitz: React.FC<CSSBlitzProps> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { date, title, image } = frontmatter
  return (
    <main className='bg-white max-w-screen-2xl mx-auto py-40'>
      <section className='flex flex-col items-center gap-4 mb-16'>
        <h1 className='text-5xl font-bold text-center text-indigo-500'>
          {title}
        </h1>
        <div className='flex gap-4 items-center'>
          <Tag type='css' />
          <span>{date}</span>
        </div>
      </section>
      <section className='flex flex-col items-center justify-between'>
        <img src={image.publicURL} className='w-96 h-auto mb-8' />
        <div className='blitz-content' dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </main>
  )
}

export default CSSBlitz

export const Head: HeadFC = ({ data }) => {
  return (
    <title>CSS Blitz - {data.markdownRemark.frontmatter.title}</title>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image {
          publicURL
        }
      }
    }
  }
`

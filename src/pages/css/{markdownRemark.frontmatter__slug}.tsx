import React from 'react'
import { Link, graphql } from 'gatsby'
import type { HeadFC } from 'gatsby'
import Tag from '../../components/Tag'
import PageHeading from '../../components/PageHeading'
import Nav from '../../components/Nav'

type CSSBlitzProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        author: string
        github: string
        codepen: string
        date: string
        image: {
          publicURL: string
        }
        entries: {
          name: string
          url: string
        }[]
      }
      html: string
    }
  }
}

const CSSBlitz: React.FC<CSSBlitzProps> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { date, title, codepen, image, author, github, entries } = frontmatter
  return (
    <>
      <Nav />
      <main className='max-w-screen-2xl mx-auto py-40 px-6 lg:px-0'>
        <section className='flex flex-col items-center gap-4 mb-16'>
          <p>{date}</p>
          <PageHeading classes='text-center'>
            {title}
          </PageHeading>
          <div className='flex gap-4 items-center'>
            <Tag type='css' />
          </div>
        </section>
        <section className='flex flex-col items-center justify-between w-1/2 mx-auto'>
          <p className='text-lg mb-4'>
            <strong>Host: </strong>
            <Link to={github} target='_blank' className='text-blue-500'>{author}</Link>
          </p>
          <img src={image.publicURL} className='max-w-96 h-auto mb-8' />
          <Link to={codepen} target='_blank' className='text-3xl rounded-lg bg-indigo-500 text-white px-4 py-2 mb-8 font-bold hover:bg-indigo-600 transition-all ease-out duration-200 hover:shadow-xl'>Fork me!</Link>
          <div className='blitz-content' dangerouslySetInnerHTML={{ __html: html }} />
          <section className='w-full lg:px-8'>
            <PageHeading level={2} classes='mb-4'>Entries</PageHeading>
            <ul className='flex flex-col gap-2 list-inside list-disc'>
              {entries.map(({ name, url }) => {
                return (
                  <li key={name}>
                    <a href={url} target='_blank' className='text-blue-500 hover:underline' rel="noreferrer">{name}</a>
                  </li>
                )
              })}
            </ul>
          </section>
        </section>
      </main>
    </>
  )
}

export default CSSBlitz

export const Head: HeadFC<CSSBlitzProps['data']> = ({ data }) => {
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
        author
        github
        slug
        codepen
        title
        image {
          publicURL
        }
        entries {
          name
          url
        }
      }
    }
  }
`

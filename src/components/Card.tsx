import React from 'react'
import PageHeading from './PageHeading'
import Tag from './Tag'
import BlitzType from '../types/blitz'
import { Link } from 'gatsby'

type CardProps = {
  date: string
  slug: string
  title: string
  type: BlitzType
  author: string
  image: {
    publicURL: string
  }
}

const Card = ({ date, slug, title, type, image, author }: CardProps) => {
  return (
    <Link to={`/${type}${slug}`}>
      <article className='px-4 py-8 w-96 hover:bg-white hover:shadow-lg transition-all duration ease-out rounded'>
        <p className='uppercase text-sm text-gray-400 tracking-widest font-semibold leading-none'>{date}</p>
        <PageHeading level={2} classes='mb-2'>{title}</PageHeading>
        <p>{author}</p>
        <img src={image.publicURL} alt={title} className='h-96 w-auto object-cover mb-4' />
        <section className='flex items-center justify-start gap-4'>
          <Tag type={type} />
        </section>
      </article>
    </Link>
  )
}

export default Card

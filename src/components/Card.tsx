import React from 'react'
import PageHeading from './PageHeading'
import Tag from './Tag'
import BlitzType from '../types/blitz'
import { Link } from 'gatsby'

type CardProps = {
  slug: string,
  title: string,
  date: string,
  type: BlitzType
  image: {
    publicURL: string
  }
}

const Card = ({ slug, title, date, type, image }: CardProps) => {
  return (
    <Link to={`/${type}${slug}`}>
      <article className='p-4 pb-16 w-96 border-b border-black'>
        <img src={image.publicURL} alt={title} />
        <div className='flex flex-col items-center justify-between gap-4'>
          <PageHeading level={2}>{title}</PageHeading>
          <Tag type={type} />
        </div>
      </article>
    </Link>
  )
}

export default Card

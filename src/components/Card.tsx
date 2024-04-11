import React from 'react'
import PageHeading from './PageHeading'
import Tag from './Tag'
import BlitzType from '../types/blitz'
import { Link } from 'gatsby'
import { format } from 'date-fns'

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
  const getDate = (): React.ReactNode => {
    const newDate = date
    const splittedDate = newDate.split('-')

    if (`${splittedDate[1]}-${splittedDate[2]}` === '02-29') {
      return `Feb 29, ${splittedDate[0]}`
    }

    return format(newDate, 'MMM dd, yyyy')
  }

  return (
    <article className='px-4 py-8 w-96 hover:bg-white hover:shadow-lg transition-all duration ease-out rounded margin-auto justify-self-center'>
      <Link to={`/${type}${slug}`}>
        <p className='uppercase text-sm text-gray-400 tracking-widest font-semibold leading-none'>
          {getDate()}
        </p>
        <PageHeading level={2} classes='mb-2'>{title}</PageHeading>
        <p className='mb-1'>{author}</p>
        <img src={image.publicURL} alt={title} className='h-96 w-auto object-cover mb-4' />
        <section className='flex items-center justify-start gap-4'>
          <Tag type={type} />
        </section>
      </Link>
    </article>
  )
}

export default Card

import React from 'react'
import BlitzType from '../types/blitz'

type TagProps = {
  type: BlitzType
}

const Tag = ({ type }: TagProps) => {
  const tagColor = {
    css: 'bg-amber-500 text-black',
    react: 'bg-blue-500 text-white',
    ruby: 'bg-red-500 text-white',
    elixir: 'bg-purple-500 text-white'
  }
  return (
    <article className={`mx-auto font-medium rounded-full px-3 py-1 inline-flex tracking-widest ${tagColor[type]}`}>
      {type}
    </article>
  )
}

export default Tag

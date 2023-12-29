import React from 'react'
import BlitzType from '../types/blitz'

type TagProps = {
  type: BlitzType
}

const Tag = ({ type }: TagProps) => {
  const tagColor = {
    css: 'bg-amber-200 text-black',
    react: 'bg-blue-200 text-white',
    ruby: 'bg-red-200 text-white',
    elixir: 'bg-purple-200 text-white'
  }
  return (
    <article className={`font-medium rounded-full px-3 inline-flex tracking-widest ${tagColor[type]}`}>
      {type}
    </article>
  )
}

export default Tag

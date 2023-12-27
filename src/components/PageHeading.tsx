import React from 'react'

type PageHeadingProps = {
  children: string,
  level?: number
}

const PageHeading = ({ children, level = 1 }: PageHeadingProps) => {
  return (
    <h1 className='text-5xl font-bold text-center'>
      {children}
    </h1>
  )
}

export default PageHeading

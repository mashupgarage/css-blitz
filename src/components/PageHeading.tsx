import React from 'react'

type PageHeadingProps = {
  children: string,
  level?: number
}

const PageHeading = ({ children, level = 1 }: PageHeadingProps) => {
  if (level === 2) {
    return (
      <h2 className='text-4xl font-bold text-center'>
        {children}
      </h2>
    )
  }

  if (level === 3) {
    return (
      <h3 className='text-3xl font-bold text-center'>
        {children}
      </h3>
    )
  }

  if (level === 4) {
    return (
      <h4 className='text-2xl font-bold text-center'>
        {children}
      </h4>
    )
  }

  if (level === 5) {
    return (
      <h5 className='text-xl font-bold text-center'>
        {children}
      </h5>
    )
  }

  if (level === 6) {
    return (
      <h6 className='text-lg font-bold text-center'>
        {children}
      </h6>
    )
  }

  return (
    <h1 className='text-5xl font-bold text-center'>
      {children}
    </h1>
  )
}

export default PageHeading

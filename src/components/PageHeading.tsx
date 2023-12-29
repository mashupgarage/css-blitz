import React from 'react'

type PageHeadingProps = {
  children: string,
  level?: number,
  classes?: string
}

const PageHeading = ({ children, level = 1, classes = '' }: PageHeadingProps) => {
  const baseClasses = `font-bold text-indigo-500 ${classes}`
  if (level === 2) {
    return (
      <h2 className={`${baseClasses} text-4xl`}>
        {children}
      </h2>
    )
  }

  if (level === 3) {
    return (
      <h3 className={`${baseClasses} text-3xl`}>
        {children}
      </h3>
    )
  }

  if (level === 4) {
    return (
      <h4 className={`${baseClasses} text-2xl`}>
        {children}
      </h4>
    )
  }

  if (level === 5) {
    return (
      <h5 className={`${baseClasses} text-xl`}>
        {children}
      </h5>
    )
  }

  if (level === 6) {
    return (
      <h6 className={`${baseClasses} text-lg`}>
        {children}
      </h6>
    )
  }

  return (
    <h1 className={`${baseClasses} text-5xl`}>
      {children}
    </h1>
  )
}

export default PageHeading

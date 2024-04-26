import React from 'react'

function container(
  children,
  ...props
) {
  return (
    <div {...props}>{children}</div>
  )
}

export default container
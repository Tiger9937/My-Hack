import React from 'react'

function Button(
{children,
className="",
type = "button",
bgcolor="bg-blue-500",
hover = "hover:bg-cyan-900",
textcolor = "text-white",
...props
}) {
  return (
    <button className={`${bgcolor} ${hover} ${textcolor}  font-bold py-2 px-4 rounded-full ${className}`} {...props}>{children}</button>
  )
}

export default Button
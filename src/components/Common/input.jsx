import React, {useId } from 'react'

const Input = React.forwardRef(function input({
  Lebel,
  text="text",
  className="",
  ...props
},ref) {
    
    const id = useId()
  return (
    <div>
    
    {Lebel && <label  className={`inline-block mb-1 pl-1 ${className}`}htmlFor ={id}>{Lebel}</label>}
    
        <input
        id={id}
        ref={ref}
        type={text}
        className={`bg-gray-200 ${className}`}
        {...props}
        />
    </div>
  )
})

export default Input
import React from 'react'

 const Pin = (props) => {
   console.log(props)
  return (
    <div>
      <img src={props.PinList.destination}/>
    </div>
  )
}
export default Pin;
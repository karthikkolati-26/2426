import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo = [{
        name : "bunny",
        id : 1
    },
    {
        name : "rohith",
        id : 2
    },

    {
        name : "rahul",
        id : 3
    }
    
]
  return (
    <div>
        <List main = {demo} />
    </div>
  )
}

export default Comp3
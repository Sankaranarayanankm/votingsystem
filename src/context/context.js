import React from 'react'

const voteContext=React.createContext({
  items:[],
  onAdd:()=>{},
  onRemove:()=>{}
})
export default voteContext;
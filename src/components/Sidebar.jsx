import React from 'react'
import { catetogies } from '../utils/constants'
import { layout, styles } from '../utils/styles'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
   <nav className={` ${layout.flexStart} ${layout.flexDirection} gap-2 bg-primary px-4`} >
    {catetogies.map((nav,i)=>(
       <button type="button" key={i} className= {`sm:${layout.flexStart} ${styles.button}  `}
           onClick={()=>setSelectedCategory(nav.name)}>
        <span>{nav.icon}</span>
         <span>{nav.name}</span>
       </button>
    ))}
   </nav>
  )
}

export default Sidebar

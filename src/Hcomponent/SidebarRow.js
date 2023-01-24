import React from 'react'
import "./SidebarRow.css";

function SidebarRow({Icon, title }) {
  return (
    <div className='sidebarRow'>
        {Icon && <Icon />}
        <p>{title}</p>
        <hr></hr>
    </div>
  )
}

export default SidebarRow
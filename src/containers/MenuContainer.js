import React, { useState } from 'react'

const MenuContainer = () => {
    const [isExpanded, setisExpanded] = useState(false)
    return (
        <div className={`rounded-full bg-gray-200 w-max p-4 
        ${isExpanded ? 'h-auto' : 'h-10'}`}
            onClick={()=>setisExpanded(!isExpanded)}>
            <h1>Menu</h1>
            {isExpanded && <ul>
                <li>Nested Item 1</li>
                <li>Nested Item 2</li>
                <li>Nested Item 3</li>
            </ul>}
        </div>
    )
}
export default MenuContainer;

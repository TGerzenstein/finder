import React from 'react'
import { useState } from "react";


function Header(): JSX.Element {

  
  const [ inputSearch, setInputSearch ] = useState<string | number>('')

  function handleSubmit(event: any): any{
    event.preventDefault();
    
  }

  function handleChange(event: any): any {
    const value: string = event.target.value;
    setInputSearch(value)
    console.log(value)
  }


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
                  onChange={handleChange} 
                  value= {inputSearch}
            />
        </form>
    </div>
  )
}

export default Header

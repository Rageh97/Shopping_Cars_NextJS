"use client"

import { SearchManufacturer } from "."
import { useState } from "react"
const Searchbar = () => {
    const [manfucturer, setManfucturer] = useState("")
    const handleSearch = () => {

    }
  return (
    
    <form onSubmit={handleSearch} className='searchbar' >
        <div className="searchbar__item">
            <SearchManufacturer
            manfucturer={manfucturer}
            setManfucturer={setManfucturer}
            />
        </div>
    </form>
  )
}

export default Searchbar
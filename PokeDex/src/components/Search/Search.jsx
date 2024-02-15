import React from 'react'

import "./Search.css"
import useDebounce from '../../hooks/Usedebounce';

function Search({updateSearchterm}) {
   const debounceCallbacks =useDebounce((e) => updateSearchterm(e.target.value))
    return (
    <div className='prime'>
         <input
            id='pokemon-name-seacrh'         
            type='text'
            placeholder="Pokemon Name....."
            onChange={debounceCallbacks}
         />
         
    </div>
    )
}

export default Search;

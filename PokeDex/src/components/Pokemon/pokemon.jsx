import React from 'react'
import './pokemon.css'
import {Link} from 'react-router-dom'
function Pokemon({name,image,id}) {
    return (
    <div className="plays">
         <Link to={`/pokemon/${id}`}>
     <div className='newname'>{name.toUpperCase()}</div>
        <div><img className='poke-image' src={image} />
        </div>
        </Link>
    </div>
    )
}

export default Pokemon;

import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div id='navbar' className='row'>
            <Link to='/'>Home</Link>
            <Link to='/goods'>Catalog</Link>
            <Link to='/shopping_cart'>Cart</Link>
        </div>
    )
}

export default Navbar
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
    const {setSearchByCategory, cartProducts, openCheckoutSideMenu} = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-small font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                    to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    onClick={() => setSearchByCategory()}
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    onClick={() => setSearchByCategory('clothes')}
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    onClick={() => setSearchByCategory('electronics')}
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    onClick={() => setSearchByCategory('furnitures')}
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    onClick={() => setSearchByCategory('toys')}
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    onClick={() => setSearchByCategory('others')}
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60"> 
                   Desarrollo@anonimo.com
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/My-Account'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/Sign-In'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Sing In
                    </NavLink>
                </li>
                <li className="flex items-center"
                onClick={openCheckoutSideMenu}>
                    <ShoppingCartIcon className="h-6 w-6 text-black"/>
                    {cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }
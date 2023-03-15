import React from 'react'
import logo from "../images/logo.svg"
import imageAvatar from "../images/image-avatar.png"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Cart } from './Cart'
import { useState } from 'react'

export const Navbar = () => {


    const [cartIsOpen ,setCartIsOpen] =useState(false)

    return (
        <div>
            <nav className="navbar position-relative navbar-expand-lg p-0">
                <div className="container-lg py-4 border-bottom flex-nowrap">
                    <div className="d-flex">
                        <button className="navbar-toggler me-2 me-sm-4 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-brand me-4">
                            <img src={logo} alt=""></img>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav  justify-content-start flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link text-black-50 active" aria-current="page" href=" ">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black-50" href=" ">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black-50" href=" ">Women</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-black-50" href=" ">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black-50" href=" ">Contact</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <ul className='list-unstyled m-0 d-flex align-items-center'>
                        <li onClick={() => setCartIsOpen(!cartIsOpen)}>
                            <AiOutlineShoppingCart size={30} color="var(--Grayish-blue)" role="button"/>
                        </li>
                        {
                            cartIsOpen &&  <Cart />
                        }
                        <li>
                            <img class="ms-3" src={imageAvatar} style={{width: "40px"}} role="button" alt=''></img>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

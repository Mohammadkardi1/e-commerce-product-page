import React from 'react'
import iconDelete from '../images/icon-delete.svg'
import imageProductOne from '../images/image-product-1-thumbnail.jpg'


export const Cart = () => {
    return (
        <div className=" lightcart bg-white shadow position-absolute border rounded-3 px-2 px-sm-4 p-4">
            <h6 className='border-bottom fw-bold pb-3'>Cart</h6>
            <div className="row g-1 g-sm-2">
                <div className="col-3 d-flex align-items-center">
                    <img className='lightcart-img rounded-3' 
                                    src={imageProductOne} 
                                    alt=''
                            />
                </div>
                <div className="col-8 ps-2">
                    <p className='m-0 text-black-50'>Fall Limited Edition Sneakers</p>
                    <p className='m-0 text-black-50'>$125.00 × 3 <span className="text-black fw-bold">$375.00</span></p>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <img className='lightcart-img' src={iconDelete} alt="" />
                </div>
            </div>
            <button className='btn-orange border-0 rounded-3 mt-3  py-2 fw-bold w-100'>Checkout</button>
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import { Slider } from './Slider'
import { Carousel } from './Carousel'
import { Data } from '../Data'

export const Body = () => {
    const [products] = useState(Data)
    const [value, setValue] = useState(0)
    const {mainImage} = products[value]
    const [amount, setAmount] =useState(0)
    const handleMinus = () => {
        setAmount(amount-1)
        if (amount <= 0 ) {
            setAmount(0)
        }  
    }
    return (
        <div className='row pt-lg-5'>
            <div className="col-12 col-lg-6 p-0">
                <div className='d-none d-lg-block'>
                    <Slider products={products} 
                            value ={value} 
                            setValue={setValue}
                            mainImage={mainImage} />
                </div>
                <div className='d-block d-lg-none'>
                    <Carousel   products={products} 
                                value ={value} 
                                setValue={setValue} 
                                mainImage={mainImage}/>
                </div>
            </div>
            <div className="col-12 col-lg-6 px-5 py-5">
                    <p className='text-uppercase fw-bold' style={{color: 'var(--Orange)', letterSpacing:"3px"}}>Sneaker Company</p>
                    <h1 className='fw-bold'>Fall Limited Edition Sneakers</h1>
                    <p className='text-black-50'>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className='d-flex justify-content-between d-lg-block'>
                        <ul className='list-unstyled d-flex gap-3 m-0'>
                            <li><h5 className='fw-bold '>$125.00</h5></li>
                            <li>
                                <p className='px-2 rounded-2'
                                    style={{color:"var(--Orange)", backgroundColor:"var(--Pale-orange)"}}
                                >50%</p>
                            </li>
                        </ul>
                        <p className='text-black-50 text-decoration-line-through'>$250.00</p>
                    </div>
                    <div className='row'>
                        <div className="co-12 col-lg-4 mb-4">
                            <ul className='list-unstyled d-flex justify-content-between align-items-center gap-2 w-100 h-100 rounded-2 py-2 px-4 px-lg-2 m-0 bg-light'>
                                <li onClick={handleMinus}>
                                    <img src={minus} alt="" role="button"></img>
                                </li>
                                <li className='fw-bold'>{amount}</li>
                                <li onClick={() => setAmount(amount+1)}>
                                    <img src={plus} alt="" role="button"></img>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-8">
                            <button className='d-flex align-items-center justify-content-center gap-4 border-0 rounded-2 py-2 px-4 w-100 text-white' 
                                        style={{backgroundColor: 'var(--Orange)'}}>
                                        <AiOutlineShoppingCart size={25}/>
                                        Add to cart </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
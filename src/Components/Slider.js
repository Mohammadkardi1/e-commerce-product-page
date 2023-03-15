import React from 'react'

export const Slider = ({products,value,setValue,mainImage}) => {

    return (
        <div>
            <img className='rounded-3 mb-4 img-width ' src={mainImage} alt="" />
            <ul className='d-flex align-items-center justify-content-center gap-3 list-unstyled p-0'>
                {products.map((item, index) => {
                    return (
                        <li key={item.id}
                            onClick={() => setValue(item.id)} 
                            className={`rounded-3 overflow-hidden cursor-ponter ${value === item.id && "border-orange "}` }
                            role="button" >
                            <img    src={item.thumbnail}
                                    className= {`${value === item.id && "opacity-25 "} img-width `} 
                                    alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

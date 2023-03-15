import React from 'react'
import {BiChevronRight, BiChevronLeft} from "react-icons/bi"


export const Carousel = ({products,value, setValue}) => {
    const iconStyles = {color: "var(--Very-dark-blue)",
                        backgroundColor:"var(--White)",
                        borderRadius:"50%",
                    fontSize:"bold"}
    return (
        <div className=''>
            <div id="carouselExampleControls" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    {
                        products.map((item,index) => {
                            return (
                                <div className={`carousel-item ${item.id === value && "active"}`}>
                                    <img src={item.mainImage} className="d-block w-100" alt="..."/>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <BiChevronLeft size={50} style={iconStyles}/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" 
                        type="button" 
                        data-bs-target="#carouselExampleControls" 
                        data-bs-slide="next"
                        >
                    <BiChevronRight size={50} style={iconStyles} />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

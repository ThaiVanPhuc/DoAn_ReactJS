import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './nav.css'
import { IoPersonCircleOutline } from "react-icons/io5";

const Nav = ({ searchbtn }) => {

    const [search, setSearch] = useState()
    return (
        <>
            <div className='free'>
                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p> MIỄN PHÍ Vận Chuyển Khi Trên 500 Nghìn Đồng </p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/box-Banner/logo.gif'></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='Nhập Tên Sản Phẩm' autoComplete='off' onChange={(e) => setSearch(e.target.value)}>
                        </input>
                        <button onClick={() => searchbtn(search)}>Search</button>
                    </div>
                    <div className='icon'>
                        <div className='second_icon'>
                            <Link to="/" className='link'>< AiOutlineHeart /></Link>
                            <Link to="/cart" className='link'>< BsBagCheck /></Link>
                            <Link to="/login" className='link icon'><IoPersonCircleOutline /></Link>
                            {/* <li className="Login">
                                <IoPersonCircleOutline className="icon" />
                            </li>
                            <p className="Signup"> */}
                            {/* </p> */}
                            <p></p>

                        </div>
                    </div>
                </div>
            </div >
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
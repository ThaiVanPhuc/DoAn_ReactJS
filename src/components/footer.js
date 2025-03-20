import React from "react"
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="about">
                        <div className="logo">
                            <img src='./img/box-Banner/logo.gif' alt="logo"></img>
                        </div>
                        <div className="detail">
                            <div className="icon">
                                <li><RiFacebookFill /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>
                    </div>
                    <div className="acount">
                        <h3>Shop Manager</h3>
                        <ul>
                            <li>Thái Văn Phúc</li>
                            <li>Nguyễn Văn Hùng</li>
                            <li>Cao Nguyên Bình An</li>
                            <li>Phan Văn Thiên</li>
                            <li>Nguyễn Văn Hùng</li>
                        </ul>
                    </div>
                    <div className="page">
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Term and Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
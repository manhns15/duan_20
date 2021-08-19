import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { DataContext } from '../../../pages/views/Main/ActionCart';

import { logout } from "./../../../actions/auth";

const Header = props => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [KeyWord, setKeyWord] = useState('');
    const value = useContext(DataContext);
    const dispatch = useDispatch();
    const [cart] = value.cart;
    const handleChangeKeyWord = (e) => {
        const { value } = e.target;
        setKeyWord(value)
    }
    const logOut = () => {
        dispatch(logout());
    };
    return (
        <div className="header">
            <div className="header-top">
                <div className="container">

                    <div className="search">
                        <form onKeyPress={handleChangeKeyWord} >
                            <input type="text" onChange={handleChangeKeyWord} placeholder="Tìm kiếm sản phẩm ... " />
                            <Link to={`/search/${KeyWord}`} className="button"><img src="images/search.png" /></Link>
                        </form>

                    </div>
                    <div className="header-left">
                        <ul>
                            {currentUser ? (
                                <div >
                                    <li><Link className="lock" to="/user/login">{currentUser.username}</Link></li>
                                    <li><Link className="lock" onClick={logOut}>Logout</Link></li>
                                </div>
                            ) : (
                                    <div>
                                        <li><Link className="lock" to="/user/login">Đăng nhập</Link></li>
                                        <li><Link className="lock" to="/user/register">Đăng ký</Link></li>
                                    </div>
                                )}
                        </ul>

                        <div className="cart box_1">
                            <Link to="/cart">
                                <h3> <div className="total">
                                    <span className="simpleCart_total" /> <span id="simpleCart_quantity" className="simpleCart_quantity" />
                                    <img src="images/cart.png" alt="" /><span className="badge badge-danger">{cart.length}</span>
                                </div>
                                </h3>
                            </Link>
                            {/* <p><a href="#" className="simpleCart_empty">Giỏ hàng rỗng</a></p> */}
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="container">
                <div className="head-top">
                    <div className="logo">
                        <Link to="/"><img src="images/logo1.png" alt="" /></Link>
                    </div>
                    <div className=" h_menu4">
                        <ul className="memenu skyblue">
                            <li className="active grid"><Link className="color8" to="/">TRANG CHỦ</Link></li>

                            <li><Link className="color4" to="/sanpham">SẢN PHẨM</Link></li>
                            <li><Link className="color1" to="/gioithieu">GIỚI THIỆU</Link></li>
                            <li><Link className="color6" to="/lienhe">LIÊN HỆ</Link></li>
                            <li><Link className="color6" to="/baiviet">BÀI VIẾT</Link></li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header

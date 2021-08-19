import React, { useEffect, useState } from 'react'
import AuthService from "../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { logout } from "./../../../actions/auth";
import { clearMessage } from "./../../../actions/message";
import { history } from "./../../../helpers/history";
const Topbar = () => {

    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // const { user: currentUser } = props;
    //nếu không có tài khoản sẽ tự động chuyển sang login
    // if (!currentUser) {
    //     return <Redirect to="/logina" />
    // }
    // useEffect(() => {
    //     history.listen((location) => {
    //         dispatch(clearMessage()); // clear message when changing location
    //     });
    // }, [dispatch]);
    // debugger
    // useEffect(() => {
    //     if (currentUser) {
    //         // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
    //         setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    //     }
    // }, [currentUser]);


    const logOut = () => {
        dispatch(logout());
    };
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/member"} className="nav-link">
                                {currentUser.userName}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut</a>
                        </li>
                    </div>
                ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/registera"} className="nav-link">Sign Up</Link>
                            </li>
                        </div>
                    )}
                <ul className="navbar-nav ml-auto">
                    {showAdminBoard && (
                        <li className="nav-item dropdown no-arrow">
                            <Link to="/member" className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">DHM COLOR</span>
                                <img className="img-profile rounded-circle" src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/120321837_104956478041476_7176881432022885481_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=fPyZFnFXMKcAX_Otpvc&_nc_ht=scontent.fhan2-6.fna&oh=e01556c2163237edad7ca891359541e0&oe=5F971A09" />
                            </Link>
                        </li>
                    )}
                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/* <span className="mr-2 d-none d-lg-inline text-gray-600 small">{currentUser.user}</span> */}
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>

                            <img className="img-profile rounded-circle" src="https://yinnepal.files.wordpress.com/2017/11/admin.png?w=640" />
                        </a>
                        {/* Dropdown - User Information */}
                        {/* <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Profile
                    </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Settings
                    </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                      Activity Log
                    </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </a>
                        </div> */}
                    </li>
                </ul>
            </nav>
        </div >
    )
}

Topbar.propTypes = {

}

export default Topbar

import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <img className="img_sidebar" src="https://firebasestorage.googleapis.com/v0/b/manhnsph07598.appspot.com/o/images%2Fdhm_logo.png?alt=media&token=aaea1412-2814-48ea-9849-219daf356a75" />
                <div className="sidebar-brand-text mx-3">D H M COLOR</div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/member">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Bảng điều khiển</span></Link>
            </li>
            {/* Quan ly danh muc*/}
            <li className="nav-item">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Hóa đơn</span></Link>
            </li>


            {/* Trang chu */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Trang chủ </span></Link>
            </li>


        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar




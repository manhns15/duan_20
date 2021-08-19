import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Member/Sidebar'
import Topbar from '../../components/Member/TopBar'
import Footer from '../../components/Member/Footer'
import '../../assets/css/admin/sb-admin-2.min.css'
import '../../assets/css/admin/main.css'
import UserService from '../../api/userService'
export default ({ children }) => {

    return (
        <div className="admin-page">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}


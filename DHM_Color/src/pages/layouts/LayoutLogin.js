import React from 'react'
import '../../assets/css/admin/sb-admin-2.min.css'
import '../../assets/css/admin/main.css'


export default ({ children }) => {
    return (

        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}


import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'
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

// const LayoutAdmin = () => {
//     const [children, setchildren] = useState("");

//     useEffect(() => {
//         UserService.getAdminBoard().then(
//             (response) => {
//                 setchildren(response.data);
//             },
//             (error) => {
//                 const _children =
//                     (error.response &&
//                         error.response.data &&
//                         error.response.data.message) ||
//                     error.message ||
//                     error.toString();

//                 setchildren(_children);
//             }
//         );
//     }, []);

//     return (
//         <div className="admin-page">
//             <div id="wrapper">
//                 <Sidebar />
//                 <div id="content-wrapper" className="d-flex flex-column">
//                     <div id="content">
//                         <Topbar />
//                         <div className="container-fluid">
//                             {children}
//                         </div>
//                     </div>
//                     <Footer />
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default LayoutAdmin;
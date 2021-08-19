
import { Link } from 'react-router-dom'
import userApi from '../../../../api/userApi';
import React from 'react'
import PropTypes from 'prop-types'

const User = () => {


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Quản lý tài khoản</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Họ tên</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Mật khẩu</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 
                                <tr key={user.index}>
                                    <th scope="row">{user.index + 1}</th>
                                    <td>{user.hoten}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.trangthai}</td>
                                    <td>{user.ngaytao}</td>
                                    <td>
                                        <button onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Xóa</button>&nbsp;
                                                    <Link onClick={() => this.editEmployee(employee.id)} className="btn btn-primary" >Sửa</Link>
                                    </td>
                                </tr> */}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}


User.propTypes = {

}

export default User
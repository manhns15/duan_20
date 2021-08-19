import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import apiColor from '../../../../api/colorApi'
import Swal from 'sweetalert2'

const Color = () => {
    const [colors, setColors] = useState([]);
    useEffect(() => {
        // debugger
        apiColor.getAll().then((res) => {
            console.log(res.data);
            setColors(res.data)
        })

    }, [])


    const removeHandleCol = (id) => {
        const dataFilter = colors.filter(el => el.id !== id)
        if (dataFilter) {

            Swal.fire({
                title: 'Bạn có muốn xóa?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    setColors(dataFilter);
                    const remove = apiColor.remove(id)
                    console.log(remove)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        }
        console.log(id);

    }
    return (
        <div>
            <div className="mb4-4 d-flex justify-content-between align-items-center">
                <h1 className="h3 text-gray-800">
                    Thêm Màu
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/color/add">Thêm Màu</Link><hr />
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Quản lý Màu</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên màu</th>
                                    <th scope="col">Trang thái</th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tạo bởi</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {colors && colors.map(({ id, namecolor, status, createdate, createby }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{namecolor}</td>
                                        <td>{status == true ? <span className="label label-warning">Còn hàng</span> : <span className="label label-default">Hết hàng</span>}</td>
                                        <td>{createdate}</td>
                                        <td>{createby}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandleCol(id)}>Xóa</button>&nbsp;
                                                    <Link className="btn btn-primary" to={`/admin/color/edit/${id}`}>Sửa</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

Color.propTypes = {

}

export default Color

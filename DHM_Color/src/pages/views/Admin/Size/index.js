import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import apiSize from '../../../../api/sizeApi'
import Swal from 'sweetalert2'


const Size = () => {
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        // debugger
        apiSize.getAll().then((res) => {
            console.log(res.data);
            setSizes(res.data)
        })

    }, [])


    const removeHandleSz = (id) => {
        const dataFilter = sizes.filter(el => el.id !== id)
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
                    setSizes(dataFilter);
                    const remove = apiSize.remove(id)
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
                    Thêm Size
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/size/add">Thêm Size</Link><hr />
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Quản lý Size</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên size</th>
                                    <th scope="col">Trang thái</th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes && sizes.map(({ id, namesize, status, createdate, createby }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{namesize}</td>
                                        <td>{status == true ? <span className="label label-warning">Còn hàng</span> : <span className="label label-default">Hết hàng</span>}</td>
                                        <td>{createdate}</td>
                                        <td>{createby}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandleSz(id)}>Xóa</button>&nbsp;
                                            <Link className="btn btn-primary" to={`/admin/size/edit/${id}`}>Sửa</Link>
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

Size.propTypes = {

}

export default Size

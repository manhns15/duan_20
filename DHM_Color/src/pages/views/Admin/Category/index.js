import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import apiCategory from './../../../../api/categoryApi';
const Category = () => {

    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        apiCategory.getAll().then((res) => {
            console.log(res.data);
            setCategorys(res.data)
        })
            .catch(e => {
                console.log(e);
            })
    }, [])

    const removeHandleCt = (id) => {
        const dataFilter = categorys.filter(el => el.id !== id)
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
                    setCategorys(dataFilter);
                    const remove = apiCategory.remove(id)
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
                    Thêm Danh Mục
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/category/add">Thêm danh mục</Link><hr />

            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Quản lý danh mục</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên danh mục</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Mô tả</th>
                                        <th scope="col">Ngày tạo</th>
                                        <th scope="col">Tạo bởi</th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorys && categorys?.map(({ id, name, status, decription, createdate, createby }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{name}</td>
                                            <td>{status == true ? <span className="label label-warning">Còn hàng</span> : <span className="label label-default">Hết hàng</span>}</td>
                                            <td>{decription}</td>
                                            <td>{createdate}</td>
                                            <td>{createby}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeHandleCt(id)}>Xóa</button>&nbsp;
                                                <Link className="btn btn-primary" to={`/admin/v1/api/category/edit/${id}`}>Sửa</Link>&nbsp;
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category

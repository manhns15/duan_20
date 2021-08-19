import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import supplierApi from '../../../../api/supplierApi';
import Swal from 'sweetalert2';


const Supplier = () => {
    const [supplier, setSupplier] = useState([]);
    const [currentSupplier, setCurrentsupplier] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        supplierApi.getAll().then(res => {
            setSupplier(res.data);
            console.log(res.data);
        })
            .catch(e => {
                console.log(e);
            })
    }, [])
    // const refreshList = () => {
    //     getSupplier();
    //     setCurrentsupplier(null);
    //     setCurrentIndex(-1);
    // };
    const removeSuppiler = () => {
        supplierApi.remove()
        Swal.fire({
            title: 'Bạn có muốn thực hiện?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(res => {
            if (res.isConfirmed) {
                console.log(res.data);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            <div className="mb4-4 d-flex justify-content-between align-items-center">
                <h1 className="h3 text-gray-800">
                    Nhà cung cấp
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/suppliers/add">Thêm nhà cung cấp</Link><hr />

            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Nhà cung cấp</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên nhà cung cấp</th>
                                        <th scope="col">Địa chỉ </th>
                                        <th scope="col">Tiêu đề</th>
                                        <th scope="col">Người tạo</th>
                                        <th scope="col">Ngày tạo</th>
                                        <th scope="col">Trạng tái</th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {supplier && supplier.map(({ id, nameSupplier, address, titile, createby, createdate, status }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{nameSupplier}</td>
                                            <td>{address}</td>
                                            <td>{titile}</td>
                                            <td>{createby}</td>
                                            <td>{createdate}</td>
                                            <td>{status}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeSuppiler(id)}>Xóa</button>&nbsp;
                                                <Link className="btn btn-primary">Sửa</Link>&nbsp;
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
Supplier.propTypes = {

}

export default Supplier

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from "axios";
import apiSize from '../../../../api/sizeApi';
const AddSize = () => {

    const [sizes, setSizes] = useState([]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => addSizes(data);

    const history = useHistory()
    const addSizes = (data) => {
        console.log(data)
        axios.post(apiSize.create(data).then((res) => {
            console.log(res.data);
            setSizes(res.data)
        }), data);
        console.log(data);
        history.push('/admin/sizes')
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 2000
        })
        window.location.reload();
    }

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm Size</h6>
                </div>

                <div className="card-body" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên Size
                            <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"
                                id="categoryName" name="namesize"
                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.namesize && errors.namesize.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.namesize && errors.namesize.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Trạng thái
                            <span style={{ color: 'red' }}>*</span></label>
                            <select className="form-control form-control"
                                name="status"
                                ref={register({ required: true })} >
                                <option value="">----Lựa chọn trạng thái----</option>
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddSize.propTypes = {

}

export default AddSize

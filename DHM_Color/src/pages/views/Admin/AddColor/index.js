import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";
import apiColor from "../../../../api/colorApi"
const AddColor = () => {
    const [colors, setColors] = useState([]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => addColors(data);

    const history = useHistory()
    const addColors = (data) => {
        console.log(data)
        axios.post(apiColor.create(data).then((res) => {
            console.log(res.data);
            setColors(res.data)
        }), data);
        console.log(data);
        history.push('/admin/colors')
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 2000
        })
        // window.location.reload();
    }

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm Màu</h6>
                </div>

                <div className="card-body" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên Color
                            <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"
                                id="categoryName" name="namecolor"

                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />

                            {errors.namecolor && errors.namecolor.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.namecolor && errors.namecolor.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Trạng thái
                            <span style={{ color: 'red' }}>*</span></label>
                            <select className="form-control form-control"
                                name="status"
                                ref={register({ required: true })} >
                                <option value="">----Lựa chọn màu----</option>
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

AddColor.propTypes = {

}

export default AddColor

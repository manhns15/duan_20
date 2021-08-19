import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";
import apiCate from './../../../../api/categoryApi';
const AddCategory = () => {


    const [categorys, setCategorys] = useState([]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => addCategory(data);

    const history = useHistory()
    const addCategory = (data) => {
        console.log(data)
        axios.post(apiCate.create(data).then((res) => {
            console.log(res.data);
            setCategorys(res.data)
        }), data);
        console.log(data);
        history.push('/admin/categorys')
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
                    <h6 className="m-0 font-weight-bold text-primary">Thêm danh mục</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên danh mục<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"
                                id="categoryName" name="name"
                                // value={categorys.name}
                                // onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.name && errors.name.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.name && errors.name.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng<span style={{ color: 'red' }}>*</span></label>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                            // value={categorys.status}
                            // onChange={handleInputChange}
                            >
                                <option value="">----Chọn tình trạng-----</option>
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Mô tả<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"
                                id="categoryName" name="decription"
                                // value={categorys.decription}
                                // onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.decription && errors.decription.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.decription && errors.decription.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.decription && errors.decription.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddCategory.propTypes = {

}

export default AddCategory

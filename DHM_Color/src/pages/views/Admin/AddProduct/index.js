import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase';
import apiCategory from './../../../../api/categoryApi';
import apiColor from '../../../../api/colorApi'
import apiSize from '../../../../api/sizeApi'

import Swal from 'sweetalert2';
const AddProduct = () => {

    const { register, handleSubmit, errors } = useForm();
    const [categorys, setCategorys] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        apiCategory.getAll().then((res) => {
            console.log(res.data);
            setCategorys(res.data)
        })
            .catch(e => {
                console.log(e);
            })
    }, [])

    useEffect(() => {
        apiColor.getAll().then((res) => {
            console.log(res.data);
            setColors(res.data)
        })

    }, [])


    useEffect(() => {
        apiSize.getAll().then((res) => {
            console.log(res.data);
            setSizes(res.data)
        })

    }, [])

    // let history = useHistory();
    // const onHandleAdd = (data) => {
    //     let file = data.anh[0];
    //     let storageRef = firebase.storage().ref(`images/${file.name}`);
    //     storageRef.put(file).then(function () {
    //         storageRef.getDownloadURL().then((url) => {
    //             console.log(url)
    //             const newData = {
    //                 id: Math.random().toString(36).substr(2, 9),
    //                 ...data,
    //                 anh: url
    //             }
    //             console.log(newData);
    //             //     e.preventDefault();
    //             onAdd(newData)
    //             history.push("/admin/products");
    //             Swal.fire(
    //                 'Thêm thành công',
    //                 'You clicked the button!',
    //                 'success'
    //             )
    //         })
    //     });
    // }

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit()}>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Tên sản phẩm
                            <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"
                                id="productName" name="nameproduct"
                                ref={register({
                                    required: true,
                                    minLength: 5, pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.nameproduct && errors.nameproduct.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nameproduct && errors.nameproduct.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nameproduct && errors.nameproduct.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Nội dung ngắn
                            <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control"
                                id="productNdNgan" name="nd_ngan"
                                ref={register({ required: true, minLength: 5, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.nd_ngan && errors.nd_ngan.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nd_ngan && errors.nd_ngan.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nd_ngan && errors.nd_ngan.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Số lượng
                            <span style={{ color: 'red' }}>*</span></label>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="so_luong"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                            />
                            {errors.so_luong && errors.so_luong.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.so_luong && errors.so_luong.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng
                            <span style={{ color: 'red' }}>*</span></label>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })} >
                                <option value="">----Lựa chọn trạng thái----</option>
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>


                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Size
                            <span style={{ color: 'red' }}>*</span></label>
                            <select
                                name="idsize"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">----Lựa chọn size----</option>
                                {sizes?.map((size, index) => (
                                    <option key={index} value={size.id}>
                                        {size.namesize}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Màu
                            <span style={{ color: 'red' }}>*</span></label>
                            <select
                                name="idcolor"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">----Lựa chọn màu----</option>
                                {colors?.map((color, index) => (
                                    <option key={index} value={color.id}>
                                        {color.namecolor}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Danh mục
                            <span style={{ color: 'red' }}>*</span></label>
                            <select
                                name="idcategory"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Lựa chọn danh mục--</option>
                                {categorys?.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm
                            <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile02"
                                        name="anh"
                                        ref={register}
                                    />
                                    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                            {errors.anh && errors.anh.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá sản phẩm
                            <span style={{ color: 'red' }}>*</span></label>
                            <input type="number" className="form-control"
                                id="productRegularPrice" name="gia_nhap"
                                ref={register({
                                    required: true, min: 0
                                    , pattern: /[-+]?[0-9]*[.,]?[0-9]+/
                                })} />
                            {errors.gia_nhap && errors.gia_nhap.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.gia_nhap && errors.gia_nhap.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Nội dung chi tiết
                            <span style={{ color: 'red' }}>*</span></label>
                            <textarea type="text" className="form-control"
                                id="productName" name="nd_chitiet"
                                ref={register({
                                    required: true,
                                    minLength: 5, pattern: /[A-Z a-z0-9]/
                                })} ></textarea>
                            {errors.nd_chitiet && errors.nd_chitiet.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nd_chitiet && errors.nd_chitiet.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nd_chitiet && errors.nd_chitiet.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>

        </div >
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct
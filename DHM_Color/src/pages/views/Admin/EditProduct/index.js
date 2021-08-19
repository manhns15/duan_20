import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiRequest from '../../../../api/productApi';
import firebase from '../../../../firebase';
import Swal from 'sweetalert2';
const EditProduct = ({ onUpdate, categorys }) => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();
    let { id } = useParams();
    let history = useHistory();
    const [state, setState] = useState();
    const [editProduct, setEditProduct] = useState({});
    const [Url, setUrl] = useState();

    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.get(id);
                setEditProduct(data);
                console.log(data)
            } catch (error) {

            }
        };
        getProduct()
    }, [])
    const onHandleSubmit = (data) => {
        let file = data.anh[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id,
                    ...data,
                    anh: url
                }
                //     e.preventDefault();
                onUpdate(newData);
                console.log(newData)
                history.push("/admin/products");
                Swal.fire(
                    'Sửa thành công',
                    'You clicked the button!',
                    'success'
                )

            })
        });
    }

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Cập nhập sản phẩm</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="InputProductName">Tên sản phẩm</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text"
                                className="form-control"
                                id="InputProductName"
                                defaultValue={editProduct.ten_sp}
                                name="ten_sp"
                                ref={register({ required: true, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.ten_sp && errors.ten_sp.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.ten_sp && errors.ten_sp.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.ten_sp && errors.ten_sp.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div>
                            <label htmlFor="InputProductName">Nội dung ngắn</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                defaultValue={editProduct.nd_ngan} id="InputProductName" name="nd_ngan"
                                ref={register({ required: true, minLength: 5, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.nd_ngan && errors.nd_ngan.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nd_ngan && errors.nd_ngan.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nd_ngan && errors.nd_ngan.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Số lượng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="so_luong"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                                defaultValue={editProduct.so_luong} />
                            {errors.so_luong && errors.so_luong.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.so_luong && errors.so_luong.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="tinh_trang" ref={register({ required: true })}
                                defaultValue={editProduct.tinh_trang} >
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.tinh_trang && errors.tinh_trang.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>

                        <div className="control">
                            <label htmlFor="InputProductSize">Size</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select
                                name="size"
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Lựa chọn size--</option>
                            </select>
                        </div>

                        <div className="control">
                            <label htmlFor="InputProductColor">Màu</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select
                                name="Color"
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Lựa chọn màu--</option>
                            </select>
                        </div>

                        <div className="control">
                            <label htmlFor="InputProductCategory" >Danh mục</label>
                            <select
                                name="danhmuc_Id"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                                defaultValue={editProduct.danhmuc_Id}
                            >
                                {categorys.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.ten_danhmuc}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile02"
                                        name="anh"
                                        ref={register}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div> */}

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Ảnh</label>
                            <div class="custom-file">
                                <img style={{ height: "250px", paddingTop: "50px" }} src={Url ? Url : editProduct.anh} />
                                <input name="anh" type="hidden" defaultValue={Url ? Url : editProduct.anh} ref={register({ required: true })} />
                                <input type="file" onChange={onHandleSubmit} class="custom-file-input" id="inputGroupFile04" />

                                <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                                <small className="form-text text-danger">
                                    {errors.anh && errors.anh.type === "required" && <span>Vui lòng không để trống</span>}
                                </small>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá nhập</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="gia_nhap"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                                defaultValue={editProduct.gia_nhap} />
                            {errors.gia_nhap && errors.gia_nhap.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.gia_nhap && errors.gia_nhap.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá bán</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="gia_ban"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                                defaultValue={editProduct.gia_ban} />
                            {errors.gia_ban && errors.gia_ban.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.gia_ban && errors.gia_ban.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Nội dung chi tiết</label>
                            <span style={{ color: 'red' }}>*</span>
                            <textarea type="text" className="form-control"
                                id="productName" name="nd_chitiet"
                                ref={register({
                                    required: true,
                                    minLength: 5, pattern: /[A-Z a-z0-9]/
                                })}
                                defaultValue={editProduct.nd_chitiet}></textarea>
                            {errors.nd_chitiet && errors.nd_chitiet.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nd_chitiet && errors.nd_chitiet.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nd_chitiet && errors.nd_chitiet.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="ngaytao" ref={register}
                                value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <button className="btn btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct

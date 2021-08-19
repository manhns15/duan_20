import React, { useEffect, useState } from 'react'
import apiRequestPs from '../../../../api/postApi';
import Swal from 'sweetalert2';
import firebase from '../../../../firebase';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditPost = ({ onUpdatePs }) => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();
    const { id } = useParams();
    const history = useHistory()
    const [editPosts, setPost] = useState({});
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await apiRequestPs.get(id);
                setPost(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };
        getPosts()
    }, [])
    const onHandleSubmit = async (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`imagesPost/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newData = {
                    id,
                    ...data,
                    image: url
                }
                onUpdatePs(newData);
                console.log(newData)
                history.push('/admin/posts');
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
                    <h6 className="m-0 font-weight-bold text-primary">Thêm bài viết</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tiêu đề</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="ten_baiviet"
                                defaultValue={editPosts.ten_baiviet}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.ten_baiviet && errors.ten_baiviet.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.ten_baiviet && errors.ten_baiviet.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.ten_baiviet && errors.ten_baiviet.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile02"
                                        name="image"
                                        ref={register}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="ngaydang" ref={register}
                                value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Nội dung</label>
                            <span style={{ color: 'red' }}>*</span>
                            <textarea type="text" className="form-control"
                                id="categoryName" name="noidung"
                                defaultValue={editPosts.noidung}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} ></textarea>
                            {errors.noidung && errors.noidung.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.noidung && errors.noidung.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.noidung && errors.noidung.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditPost.propTypes = {

}

export default EditPost

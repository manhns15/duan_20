import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import supplierApi from '../../../../api/supplierApi';
const AddSuppiler = () => {

    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const initSuppilerState = {
        id: null,
        nameSupplier: "",
        titile: "",
        address: "",
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        createby: null
    };

    let history = useHistory();

    const [supplier, setSuppiler] = useState(initSuppilerState);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSuppiler({ ...supplier, [name]: value });
    };

    const addSupplier = () => {
        var data = {
            nameSupplier: supplier.nameSupplier,
            titile: supplier.titile,
            address: supplier.address,
            status: supplier.status,
        };
        supplierApi.create(data).then(res => {
            setSuppiler({
                id: res.data.id,
                nameSupplier: res.data.nameSupplier,
                titile: res.data.titile,
                address: res.data.address,
                createby: null,
                createdate: res.data.createdate,
                status: res.data.status,
            });
            setSubmitted(true);
            console.log(res.data);
            history.push('/admin/supplier');

        })
            .catch(e => {
                console.log(e);
            });
    };
    // const newSupplier = () => {
    //     setSuppiler(initSuppilerState);
    //     setSubmitted(false);
    // };
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm nhà cung cấp</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(addSupplier)}>
                        <div className="form-group">
                            <label htmlFor="InputSupplierName">Tên nhà cung cấp</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="nameSupplier" name="nameSupplier" value={supplier.nameSupplier} onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })}
                            />
                            {errors.nameSupplier && errors.nameSupplier.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nameSupplier && errors.nameSupplier.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nameSupplier && errors.nameSupplier.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputTitle">Tiêu đề</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="titile" name="titile"
                                value={supplier.titile}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })}
                            />
                            {errors.titile && errors.titile.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.titile && errors.titile.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.titile && errors.titile.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputAddress">Địa chỉ</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={supplier.address}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })}
                            />
                            {errors.address && errors.address.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.address && errors.address.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.address && errors.address.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                                value={supplier.status}
                                onChange={handleInputChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
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
AddSuppiler.propTypes = {

}

export default AddSuppiler
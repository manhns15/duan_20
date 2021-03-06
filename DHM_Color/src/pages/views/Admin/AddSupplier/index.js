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
                    <h6 className="m-0 font-weight-bold text-primary">Th??m nh?? cung c???p</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(addSupplier)}>
                        <div className="form-group">
                            <label htmlFor="InputSupplierName">T??n nh?? cung c???p</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="nameSupplier" name="nameSupplier" value={supplier.nameSupplier} onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })}
                            />
                            {errors.nameSupplier && errors.nameSupplier.type === "required"
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}
                            {errors.nameSupplier && errors.nameSupplier.type === "minLength"
                                && <span style={{ color: "red" }}>Gi?? tr??? ph???i l???n h??n 5 k?? t???</span>}
                            {errors.nameSupplier && errors.nameSupplier.type === "pattern"
                                && <span style={{ color: "red" }}>Kh??ng ch???a k?? t??? ?????c bi???t</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputTitle">Ti??u ?????</label>
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
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}
                            {errors.titile && errors.titile.type === "minLength"
                                && <span style={{ color: "red" }}>Gi?? tr??? ph???i l???n h??n 5 k?? t???</span>}
                            {errors.titile && errors.titile.type === "pattern"
                                && <span style={{ color: "red" }}>Kh??ng ch???a k?? t??? ?????c bi???t</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputAddress">?????a ch???</label>
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
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}
                            {errors.address && errors.address.type === "minLength"
                                && <span style={{ color: "red" }}>Gi?? tr??? ph???i l???n h??n 5 k?? t???</span>}
                            {errors.address && errors.address.type === "pattern"
                                && <span style={{ color: "red" }}>Kh??ng ch???a k?? t??? ?????c bi???t</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">T??nh tr???ng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                                value={supplier.status}
                                onChange={handleInputChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}
                        </div>
                        <button type="submit" className="btn btn-success">L??u</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddSuppiler.propTypes = {

}

export default AddSuppiler
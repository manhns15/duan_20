import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiSize from '../../../../api/sizeApi';
import Swal from 'sweetalert2';
const EditSize = props => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const sizeState = {
        id: null,
        namesize: '',
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        createby: null
    };
    const [sizes, setSizes] = useState(sizeState);
    const history = useHistory()
    const [message, setMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const getSize = id => {
        apiSize.get(id)
            .then(response => {
                setSizes(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getSize(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { namesize, value } = event.target;
        setSizes({ ...sizes, [namesize]: value });
    };

    const updatePublished = status => {
        var data = {
            id: sizes.id,
            namesize: sizes.namesize,
            status: status,
            createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        };

        apiSize.update(sizes.id, data)
            .then(response => {
                setSizes({ ...sizes, status: status });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    // useEffect(() => {
    //     const getSizes = async () => {
    //         try {
    //             const { data } = await apiRequestS.get(id);
    //             setEditSizes(data)
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     getSizes()
    // }, [])

    // const onHandleSubmit = async (data) => {
    //     const newData = {
    //         id,
    //         ...data,
    //     }
    //     onUpdateS(newData);
    //     console.log(newData)
    //     history.push('/admin/sizes');
    //     Swal.fire(
    //         'S???a th??nh c??ng',
    //         'You clicked the button!',
    //         'success'
    //     )
    // }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">  Color </h6>
                </div>

                <div className="card-body" >
                    <form onSubmit={handleSubmit(updatePublished)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">T??n m??u</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="namesize"
                                defaultValue={sizes.namesize}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.namesize && errors.namesize.type === "required"
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}
                            {errors.namesize && errors.namesize.type === "pattern"
                                && <span style={{ color: "red" }}>Kh??ng ch???a k?? t??? ?????c bi???t</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tr???ng th??i</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                                defaultValue={sizes.status}
                                onChange={handleInputChange} >
                                <option></option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Ng??y t???o</label>
                            <input type="datetime" name="createdate" ref={register}
                                // value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                value={sizes.createdate}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <button type="submit" className="btn btn-success">L??u</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditSize.propTypes = {

}

export default EditSize

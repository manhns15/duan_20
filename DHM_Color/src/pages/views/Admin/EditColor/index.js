import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiColor from '../../../../api/colorApi';
import Swal from 'sweetalert2';
const EditColor = props => {

    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const colorState = {
        id: null,
        namecolor: '',
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        createby: null
    };
    const [colors, setColors] = useState(colorState);
    const history = useHistory()
    const [message, setMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const getColor = id => {
        apiColor.get(id)
            .then(response => {
                setColors(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getColor(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { namecolor, value } = event.target;
        setColors({ ...colors, [namecolor]: value });
    };

    const updatePublished = status => {
        var data = {
            id: colors.id,
            namecolor: colors.namecolor,
            status: status,
            createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        };

        apiColor.update(colors.id, data)
            .then(response => {
                setColors({ ...colors, status: status });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    // useEffect(() => {
    //     const getColors = async () => {
    //         try {
    //             const { data } = await apiRequestColor.get(id);
    //             setEditColors(data)
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     getColors()
    // }, [])

    // const onHandleSubmit = async (data) => {
    //     const newData = {
    //         id,
    //         ...data,
    //     }
    //     onUpdateColor(newData);
    //     console.log(newData)
    //     history.push('/admin/colors');
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
                                id="categoryName" name="namecolor"
                                defaultValue={colors.namecolor}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.namecolor && errors.namecolor.type === "required"
                                && <span style={{ color: "red" }}>Vui l??ng kh??ng ????? tr???ng</span>}

                            {errors.namecolor && errors.namecolor.type === "pattern"
                                && <span style={{ color: "red" }}>Kh??ng ch???a k?? t??? ?????c bi???t</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tr???ng th??i</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                                defaultValue={colors.status}
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
                                value={colors.createdate}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <button type="submit" className="btn btn-success">L??u</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditColor.propTypes = {

}

export default EditColor

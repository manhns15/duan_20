import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiRequestCt from '../../../../api/categoryApi';
import Swal from 'sweetalert2';

const EditCategory = props => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const categoryState = {
        id: null,
        name: '',
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        createby: null
    };
    const [categorys, setCategorys] = useState(categoryState);
    const history = useHistory()
    const [message, setMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const getCategory = id => {
        apiRequestCt.get(id)
            .then(response => {
                setCategorys(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getCategory(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategorys({ ...categorys, [name]: value });
    };

    const updatePublished = status => {
        var data = {
            id: categorys.id,
            name: categorys.name,
            status: status,
            createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
            createby: null
        };

        apiRequestCt.update(categorys.id, data)
            .then(response => {
                setCategorys({ ...categorys, status: status });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    // const updateCategory = () => {
    //     apiRequestCt.update(categorys.id, categorys)
    //         .then(response => {
    //             console.log(response.data);
    //             setMessage("The tutorial was updated successfully!");
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };
    // useEffect(() => {
    //     const getCategorys = async () => {
    //         try {
    //             const { data } = await apiRequestCt.get(id);
    //             setEditCategorys(data)
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     getCategorys()
    // }, [])

    // const onHandleSubmit = async (data) => {
    //     const newData = {
    //         id,
    //         ...data,
    //     }
    //     onUpdateCt(newData);
    //     console.log(newData)
    //     history.push('/admin/categorys');
    //     Swal.fire(
    //         'Sửa thành công',
    //         'You clicked the button!',
    //         'success'
    //     )
    // }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(updatePublished)}>
                    <div className="form-group">
                        <h2 className="sidebar-brand-text mx-3">Sửa danh mục</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            defaultValue={categorys.name}
                            onChange={handleInputChange}
                            id="exampleInputEmail1"
                            ref={register({ required: true, pattern: /[A-Z a-z0-9]/ })}
                        />
                        <small className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không được cách</span>}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputProductName">Ngày tạo</label>
                        <input type="datetime" name="createdate" ref={register}
                            // value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                            value={categorys.createdate}
                            className="form-control" id="exampleInputEmail1" disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputProductStatus">Tình trạng</label>
                        <span style={{ color: 'red' }}>*</span>
                        <select className="form-control form-control"
                            name="status" ref={register({ required: true })}
                            value={categorys.status}
                            onChange={handleInputChange}>
                            <option value=""></option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {errors.status && errors.status.type === "required"
                            && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

EditCategory.propTypes = {

}

export default EditCategory

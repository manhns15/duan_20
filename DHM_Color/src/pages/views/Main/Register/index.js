import React, { Component, useRef, useState } from 'react'
import userApi from '../../../../api/userApi';
import { useHistory, withRouter } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import userService from "../../../../api/userApi";
import { createUser } from "../../../../actions/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Vui lòng không để trống !
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Email không hợp lệ !
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Độ dài username không hợp lệ!

            </div>
        );
    }
};


const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                Độ dài password không hợp lệ!
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    // const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        //     if (checkBtn.current.context._errors.length === 0) {
        //         dispatch(createUser(userName, password))
        //             .then(() => {
        //                 setSuccessful(true);
        //                 props.history.push("/user/login");
        //                 Swal.fire(
        //                     'Đăng ký thành công',
        //                     'You clicked the button!',
        //                     'success'
        //                 )
        //             })
        //             .catch(() => {
        //                 setSuccessful(false);
        //                 props.history.push("/user/resgister");
        //                 Swal.fire(
        //                     'Đăng ký không thành công',
        //                     'You clicked the button!',
        //                     'success'
        //                 )
        //             });
        //     }
        // };

        if (checkBtn.current.context._errors.length === 0) {
            userService.createUser(username, email, password).then(
                () => {

                    setSuccessful(true);
                    props.history.push("/user/login");
                    Swal.fire(
                        'Đăng ký thành công',
                        'You clicked the button!',
                        'success'
                    )
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };


    return (
        <div>
            <div className=" container">
                <div className=" register">
                    <h1>DHM COLOR</h1>
                    <h2>Đăng ký</h2>
                    <Form onSubmit={handleRegister} ref={form}>
                        {!successful && (
                            <div>
                                <div className="col-md-6 register-top-grid">
                                    <h3>Thông tin cá nhân</h3>
                                    <div className="form-group">
                                        <span>Họ tên</span>
                                        <Input type="text" placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <span>Email Address</span>
                                        <Input type="text" placeholder="Enter Email" className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={onChangeEmail}
                                            validations={[required, validEmail]} />
                                    </div>
                                </div>
                                <div className="col-md-6 register-bottom-grid ">
                                    <h3>Đăng nhập thông tin</h3>
                                    <div className="register-top-grid form-group">
                                        <span>Tài khoản</span>
                                        <Input type="text" placeholder="Username"
                                            name="username"
                                            value={username}
                                            onChange={onChangeUsername}
                                            validations={[required, vusername]} />
                                    </div>
                                    <div className="form-group">
                                        <span>Mật khẩu</span>
                                        <Input type="password" placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={onChangePassword}
                                            validations={[required, vpassword]} />
                                    </div>
                                    {/* <div className="form-group">
                                    <span>Nhập lại mật khẩu</span>
                                    <input type="password" placeholder="Confirm Password" className="form-control" />
                                </div> */}
                                    <div className="btn_re">
                                        <button><span>Đăng ký</span></button>&nbsp;
                                    <button><span>Hủy</span></button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {message && (
                            <div className="form-group">
                                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                        <div className="clearfix"> </div>
                    </Form>
                </div>
            </div>
        </div >
    )
}


export default Register;



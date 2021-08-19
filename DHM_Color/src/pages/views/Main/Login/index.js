
import React, { Component, useRef, useState } from 'react'
import userApi from '../../../../api/userApi'
import { Link, Redirect, withRouter } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import userService from "../../../../api/userApi";
// import { loginUser } from "../../../../actions/auth";
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Vui lòng không để trống!
            </div>
        );
    }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        //     if (checkBtn.current.context._errors.length === 0) {
        //         // debugger
        //         dispatch(loginUser(username, password))
        //             .then((result) => {
        //                 console.log(result.data, " Có");
        //                 localStorage.setItem("jwt", result.data.jwt);
        //                 props.history.push("/admin");
        //                 window.location.reload();
        //             })
        //             .catch(() => {
        //                 setLoading(false);
        //             });
        //     } else {
        //         setLoading(false);
        //     }
        // };

        if (checkBtn.current.context._errors.length === 0) {
            userService.loginUser(username, password).then(
                () => {
                    Swal.fire(
                        'Đăng nhập thành công',
                        'You clicked the button!',
                        'success'
                    )
                    props.history.push("/");
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setLoading(false);
                    // setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="account">
                    <h1>DHM COLOR</h1>
                    <h2>Đăng nhập</h2>
                    <div className="account-pass">
                        <div className="col-md-12 account-top">
                            <Form onSubmit={handleLogin} ref={form}>
                                <div className="form-group">
                                    <span>Tài khoản</span>
                                    <input type="text" className="form-control"
                                        name="username" type="text" placeholder="Tên tài khoản"
                                        className="form-control"
                                        value={username}
                                        onChange={onChangeUsername}
                                        validations={[required]} />
                                    <span className="form-message" />

                                </div>
                                <div className="form-group">
                                    <span>Mật khẩu</span>
                                    <input type="password" className="form-control"
                                        name="password" type="password" placeholder="Nhập mật khẩu"
                                        className="form-control"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required]} />
                                    <span className="form-message" />

                                </div>
                                <button className="btn_login">
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Đăng nhập</span></button>

                                {message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                <div className="link_forgot"><Link to="/user/forgotpass">Quên mật khẩu</Link></div>
                            </Form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;

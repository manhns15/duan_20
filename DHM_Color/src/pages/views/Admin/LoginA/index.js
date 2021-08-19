
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { loginUser } from "../../../../actions/auth";
import Swal from "sweetalert2";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Vui lòng không để trống!
            </div>
        );
    }
};

const LoginA = (props) => {
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

        if (checkBtn.current.context._errors.length === 0) {
            // debugger
            dispatch(loginUser(username, password))
                .then((result) => {
                    console.log(result.data, " Có");
                    localStorage.setItem("jwt", result.data.jwt);
                    props.history.push("/admin");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        Swal.fire(
            'Đăng nhập thành công',
            'You clicked the button!',
            'success'
        )
        return <Redirect to="/admin" />;
    }
    return (
        <div>

            <div className="main">
                <Form onSubmit={handleLogin} ref={form}
                    action method="POST" className="form" id="form-1">
                    <h1>DHM COLOR</h1>
                    <img src="https://firebasestorage.googleapis.com/v0/b/manhnsph07598.appspot.com/o/images%2Fdhm_logo.png?alt=media&token=aaea1412-2814-48ea-9849-219daf356a75" width="100px" style={{ opacity: '0.9' }} />
                    <h2 style={{ paddingTop: "20px" }}>ĐĂNG NHẬP</h2>
                    <div className="spacer" />
                    <div className="form-group">
                        <label htmlFor="fullname" className="form-label">User name</label>
                        <Input id="fullname" name="username" type="text" placeholder="Tên tài khoản"
                            className="form-control"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]} />
                        <span className="form-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <Input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                            className="form-control"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]} />
                        <span className="form-message" />
                    </div>
                    <button className="form-submit" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}<span>Đăng nhập</span>
                    </button>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    <Link className="dangki" to="/register">Tạo tài khoản</Link>
                </Form>
            </div>
        </div>
    )
}
export default LoginA;

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { createUser } from "../../../../actions/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Vui lòng không để trống !
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

const RegisterA = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [userName, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const userName = e.target.value;
        setUsername(userName);
    };

    // const onChangeEmail = (e) => {
    //     const email = e.target.value;
    //     setEmail(email);
    // };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(createUser(userName, password))
                .then(() => {
                    setSuccessful(true);
                    props.history.push("/login");
                    Swal.fire(
                        'Đăng ký thành công',
                        'You clicked the button!',
                        'success'
                    )
                })
                .catch(() => {
                    setSuccessful(false);
                    props.history.push("/resgister");
                    Swal.fire(
                        'Đăng ký không thành công',
                        'You clicked the button!',
                        'success'
                    )
                });
        }
    };
    return (
        <div>
            <div className="main">
                <Form onSubmit={handleRegister} ref={form}
                    action method="POST" className="form" id="form-1">
                    {!successful && (
                        <div>
                            <h1>DHM COLOR</h1>
                            <img src="https://firebasestorage.googleapis.com/v0/b/manhnsph07598.appspot.com/o/images%2Fdhm_logo.png?alt=media&token=aaea1412-2814-48ea-9849-219daf356a75" width="100px" style={{ opacity: '0.9' }} />
                            <h2 style={{ paddingTop: "20px" }}>ĐĂNG KÍ</h2>
                            <div className="spacer" />
                            <div className="form-group">
                                <label htmlFor="fullname" className="form-label">User name</label>
                                <Input id="fullname" name="userName" type="text" placeholder="Tên tài khoản"
                                    className="form-control"
                                    value={userName}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]} />
                                <span className="form-message" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Mật khẩu</label>
                                <Input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                                    className="form-control"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]} />
                                <span className="form-message" />
                            </div>
                            <button className="form-submit">Đăng ký</button>
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
                    <Link className="dangki" to="/login">Đã có tài khoản</Link>
                </Form>
            </div>
        </div>

    )
}
export default RegisterA;
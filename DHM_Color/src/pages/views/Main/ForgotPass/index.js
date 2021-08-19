import React from 'react'

const ForgotPass = props => {
    return (
        <div>
            <div className="container">
                <div className="account">
                    <h1>DHM COLOR</h1>
                    <h2>Quên mật khẩu</h2>
                    <div className="account-pass">
                        <div className="col-md-12 account-top">
                            <form>
                                <div>
                                    <span>Email</span>
                                    <input type="text" placeholder="Enter email" />
                                </div>
                                <div className="btn_forgot">

                                    <button className="btn_for"><span>Hủy</span></button>
                                    <button className="btn_for"><span>Đăng nhập</span></button>
                                </div>
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ForgotPass.propTypes = {

}

export default ForgotPass

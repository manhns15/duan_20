import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../ActionCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)
    const [qty, setQty] = useState(0)
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        const getQty = () => {
            const quantity = cart.reduce((prev, item) => {
                return prev + (item.count * 1)
            }, 0)
            setQty(quantity)
        }


        getTotal()
        getQty()
    }, [cart])
    const reduction = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count == item.so_luong ? item.count = item.so_luong : item.count += 1;
            }
        })
        setCart([...cart])
    }
    const removeProduct = id => {
        Swal.fire({
            title: 'Bạn có muốn thực hiện?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                cart.forEach((item, index) => {
                    if (item.id === id) {
                        cart.splice(index, 1)
                    }
                })
                setCart([...cart])
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className="container">
                <div className="check">
                    <h1>Giỏ hàng </h1>
                    <p>Giá có thể thay đổi dựa trên giá có hiệu lực vào ngày thanh toán</p>
                    <hr />

                    <div className="col-md-12 cart-items" style={{ paddingTop: '20px' }}>
                        {cart.map(item => (
                            <div className="cart-header">
                                <div className="close1" onClick={() => removeProduct(item.id)}> </div>
                                <div className="cart-sec simpleCart_shelfItem">
                                    <div className="cart-item cyc">
                                        <img src={item.image} className="img-responsive" alt="" />
                                    </div>
                                    <div className="cart-item-info">
                                        <p>Tên sản phẩm : {item.nameproduct}</p><br />
                                        <p>Giá : {(item.price * item.count)} vnđ</p>
                                        <ul className="qty">
                                            <li><p>Size : </p></li>
                                            <li><p>Màu : </p></li>
                                            <li>
                                                <div className="buttons_added">
                                                    <p>Số lượng :</p>&nbsp;
                                                    <input className="minus is-form" type="button" defaultValue="-" onClick={() => reduction(item.id)} />
                                                    <input aria-label="quantity" className="input-qty" type="number" placeholder={item.count} disabled />
                                                    <input className="plus is-form" type="button" defaultValue="+" onClick={() => increase(item.id)} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit()}>
                        <div className="contact-form" >
                            <div className="col-md-8 contact-grid" >

                                <div className="form-group">
                                    <label className='lb'>Họ và tên<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control"
                                        id="name" name="name"
                                        ref={register({
                                            required: true, minLength: 3,
                                            pattern: /[A-Z a-z0-9]/
                                        })} />
                                    {errors.name && errors.name.type === "required"
                                        && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                                    {errors.name && errors.name.type === "minLength"
                                        && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                                    {errors.name && errors.name.type === "pattern"
                                        && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                                </div>
                                <div className="form-group">
                                    <label className='lb'>Số điện thoại<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" lassName="form-control"
                                        id="sdt" name="sdt"
                                        ref={register({
                                            required: true, minLength: 3,
                                            pattern: /^0[0-9]{9}$/
                                        })} />
                                    {errors.sdt && errors.sdt.type === "required"
                                        && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                                    {errors.sdt && errors.sdt.type === "minLength"
                                        && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                                    {errors.sdt && errors.sdt.type === "pattern"
                                        && <span style={{ color: "red" }}>Định dạng số điện thoại không đúng</span>}
                                </div>
                                <div className="form-group">
                                    <label className='lb'>Địa chỉ<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" lassName="form-control"
                                        id="address" name="address"
                                        ref={register({
                                            required: true, minLength: 3,
                                            pattern: /[A-Z a-z0-9]/
                                        })} />
                                    {errors.address && errors.address.type === "required"
                                        && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                                    {errors.address && errors.address.type === "minLength"
                                        && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                                    {errors.address && errors.address.type === "pattern"
                                        && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                                </div>

                                <div className="form-group">
                                    <label className='lb'>Email<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" lassName="form-control"
                                        id="email" name="email"
                                        ref={register({
                                            required: true, minLength: 3,
                                            pattern: /^\S+@\S+\.\S+$/
                                        })} />
                                    {errors.email && errors.email.type === "required"
                                        && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                                    {errors.email && errors.email.type === "minLength"
                                        && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                                    {errors.email && errors.email.type === "pattern"
                                        && <span style={{ color: "red" }}>Email không đúng định dạng</span>}
                                </div>

                                <div className="form-group">
                                    <label className='lb'>Ghi chú</label>
                                    <textarea cols={77} rows={6} lassName="form-control"
                                        id="note" name="note" placeholder="Thông tin chi tiết tư vấn sản phẩm : Chiều cao, cân nặng, size, color ... " />
                                </div>

                            </div>



                            <div className="col-md-3 cart-total" style={{ paddingTop: '29px', left: '50px' }}>
                                <a className="continue" href="#">Tóm tắt đơn hàng</a>
                                <div className="price-details">
                                    <h3>Tổng đơn hàng : {cart.length} đơn hàng</h3>
                                    <h3>Tổng sản phẩm : {qty} sản phẩm</h3>
                                    <span>Giá : </span>
                                    <span className="total1">{total} vnđ</span>

                                </div>
                                <ul className="total_price">
                                    <li className="last_price"> <h4>TOTAL :</h4></li>
                                    <li className="last_price"><span>{total} vnđ</span></li>
                                    <div className="clearfix"> </div>
                                </ul>
                                <div className="clearfix" />
                                <button type="submit" className="order">Đặt hàng</button>
                                <div className="total-item">
                                    <h3>Phương thức thanh toán : </h3>
                                </div>
                                <div>
                                    <label className="radio">
                                        <input type="radio" name="r" defaultValue={1} defaultChecked />
                                        <span>Thanh toán khi nhận hàng</span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="r" defaultValue={2} />
                                        <span>Thanh toán qua chuyển khoản</span>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    )
}


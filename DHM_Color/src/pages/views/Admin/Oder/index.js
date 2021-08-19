import React from 'react'
import PropTypes from 'prop-types'
// import step from '../Oder/step';
import { Link } from 'react-router-dom';
import Step from '../Oder/step';

const Order = props => {
    return (
        <div>
            <div>
                <Step />
            </div>
            <div className="step">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Quản lý đơn hàng</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên đơn hàng</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tổng tiền</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Order.propTypes = {

}

export default Order

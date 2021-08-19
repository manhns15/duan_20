import React, { useEffect, useState } from 'react'
import apiColor from '../../../../api/colorApi';
import apiSize from '../../../../api/sizeApi';
import apiCategory from '../../../../api/categoryApi';
import apiProducts from '../../../../api/productApi';

const Dashboard = () => {
    const [sizes, setSizes] = useState([]);
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [colors, setColors] = useState([]);
    useEffect(() => {

        apiColor.getAll().then((res) => {
            console.log(res.data);
            setColors(res.data)
        })

    }, [])
    useEffect(() => {

        apiSize.getAll().then((res) => {
            console.log(res.data);
            setSizes(res.data)
        })

    }, [])
    useEffect(() => {

        apiCategory.getAll().then((res) => {
            console.log(res.data);
            setCategorys(res.data)
        })

    }, [])
    useEffect(() => {

        apiProducts.getAll().then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })

    }, [])
    return (
        <div>


            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Dashboard</h6>

                </div><br />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">



                            <div className="col-lg-3 col-md-6 col-sm-6 p-3" >
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <p className="card-category">DANH MỤC</p>
                                        <h3 className="card-title">Số lượng : {categorys.length}</h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 p-3" >
                                <div className="card card-stats">
                                    <div className="card-header card-header-warning card-header-icon">
                                        <p className="card-category">SẢN PHẨM </p>
                                        <h3 className="card-title">Số Lượng : {products.length}
                                        </h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 p-3">
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <p className="card-category">SIZE</p>
                                        <h3 className="card-title">Số lượng : {sizes.length}</h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 p-3">
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <p className="card-category">COLOR</p>
                                        <h3 className="card-title">Số lượng :{colors.length} </h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 p-3">
                                <div className="card card-stats">
                                    <div className="card-header card-header-danger card-header-icon">

                                        <p className="card-category">ĐƠN HÀNG</p>
                                        <h3 className="card-title">Số lượng : </h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>

                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

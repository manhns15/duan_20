import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import apiProduct from '../../../../api/productApi'
import apiDetail from '../../../../api/detailApi'
import { DataContext } from '../ActionCart';

const Home = () => {
    const [products, setProducts] = useState([]);
    const value = useContext(DataContext);
    const addCart = value.addCart;
    useEffect(() => {
        apiProduct.getAll().then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, []);
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="content-top">
                        <h1><img src="images/giohang.png" width="40px" /> NEW PRODUCTS</h1>
                        <div className="grid-in">
                            {products?.map((item, index) => (
                                <div key={index} className="col-md-4 grid-top">
                                    <Link to={`/productdetails/${item.id}`} className="b-link-stripe b-animate-go  thickbox">
                                        <img className="img-responsive" src={item.image} />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-left    b-delay03 ">
                                                <span>{item.nameproduct}</span>
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="clearfix"> </div>
                    <div className="content-top-bottom">
                        <br />
                        <div className="col-md-6 men">
                            <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b1.png" alt="" />
                                <div className="b-wrapper">
                                    <h3 className="b-animate b-from-top top-in   b-delay03 ">
                                        <span>NĂNG ĐỘNG</span>
                                    </h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md1 ">
                                <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b2.png" alt="" />
                                    <div className="b-wrapper">
                                        <h3 className="b-animate b-from-top top-in1   b-delay03 ">
                                            <span>MẠNH MẼ</span>
                                        </h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md2">
                                <div className="col-md-6 men1">
                                    <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b3.jpg" alt="" />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-top top-in2   b-delay03 ">
                                                <span>NGHỆ SĨ</span>
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 men2">
                                    <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b4.png" alt="" />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-top top-in2   b-delay03 ">
                                                <span>TRẺ TRUNG</span>
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>

                <div className="content-bottom">
                    <ul>
                        <li><a href="#"><img className="img-responsive" src="images/lo7.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo8.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo9.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo10.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo12.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo11.png" alt="" /></a></li>
                        <div className="clearfix"> </div>
                    </ul>
                </div>


            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home

import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import apiProduct from '../../../../api/productApi';
import apiSize from '../../../../api/sizeApi';
import { DataContext } from '../ActionCart';
import apiDetail from '../../../../api/detailApi'
import apiColor from '../../../../api/colorApi'

const ProductDetail = (props) => {

    const { match } = props
    const [products, setProducts] = useState();
    const [detail, setDetail] = useState([]);
    const value = useContext(DataContext);
    const addCart = value.addCart;

    useEffect(() => {
        apiDetail.get(match.params.id).then((res) => {
            console.log(res.data, "ii");
            setDetail(res.data)
        })

    }, [])


    return (
        <div>
            {console.log(match.params.id, " ss")}
            <div className="product">
                <div className="container">
                    <div className="col-md-3 product-price">
                        <div className=" rsidebar span_1_of_left">
                            <div className="of-left">
                                <h3 className="cate">Danh mục</h3>
                            </div>
                            <ul className="menu">
                                <li className="item1"><a href="#">Tất cả </a>
                                </li>
                                <li className="item2"><a href="#">Dior </a>
                                </li>
                                <li className="item4"><a href="#">Louis Vuitton</a>
                                </li>
                                <li className="item4"><a href="#">Chanel</a>
                                </li>
                                <li className="item4"><a href="#">Gucci</a>
                                </li>
                                <li className="item4"><a href="#">Versace</a>
                                </li>
                                <li className="item4"><a href="#">Dolce & Gabbana</a>
                                </li>

                            </ul>
                        </div>
                        {/*initiate accordion*/}
                        {/**/}
                        <div className="product-middle">
                            <div className="fit-top">
                                <h6 className="shop-top">New products</h6>
                                <Link to="/" className="shop-now">SHOP NOW</Link>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="sellers">
                            <div className="of-left-in">
                                <h3 className="tag">Tags</h3>
                            </div>
                            <div className="tags">
                                <ul>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <div className="clearfix"> </div>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-9 product-price1">

                        <div className="col-md-5 single-top">
                            <img src={match.params.image} width="300" />

                        </div>

                        <div className="col-md-7 single-top-in simpleCart_shelfItem">
                            <div className="single-para ">
                                <h4><strong>{detail.nameproduct}</strong></h4>

                            </div>
                            <div className="col-md-7 single-top-in simpleCart_shelfItem">
                                <div className="single-para ">

                                    <div className="star-on">
                                        <ul className="star-footer">
                                            <li><a href="#"><i> </i></a></li>
                                            <li><a href="#"><i> </i></a></li>
                                            <li><a href="#"><i> </i></a></li>
                                            <li><a href="#"><i> </i></a></li>
                                            <li><a href="#"><i> </i></a></li>
                                        </ul>

                                        <div className="clearfix"> </div>
                                    </div>
                                    <h5 className="item_price">{detail.namesize}</h5>
                                    <del className="dels">{detail.price} vnđ </del><h5 className="item_price">{detail.price} vnđ</h5>
                                    <p>{detail.decription} </p>


                                    <ul className="tag-men">
                                        <li><span>TAG</span>
                                            <span className="women1">: Men</span></li>
                                    </ul>
                                    <span className="women1">{detail.status == true ? <p className="women1" style={{ color: '#00BB00' }}>Còn hàng
                                <br></br>
                                        <Link to="/cart" onClick={() => addCart(products.id)} className="add-cart item_add" >ADD TO CART</Link>
                                    </p> : <p className="women1" style={{ color: 'red' }}>Hết hàng
                                <br></br>
                                            <Link className="add-cart item_add disabled-link" >ADD TO CART</Link></p>}
                                    </span>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                            {/**/}
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}


ProductDetail.propTypes = {

}

export default ProductDetail

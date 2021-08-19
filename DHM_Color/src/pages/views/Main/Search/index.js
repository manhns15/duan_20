import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import apiProduct from '../../../../api/productApi';


const Search = props => {
    const { nameproduct } = useParams();
    console.log(nameproduct)
    const [products, setProducts] = useState()
    useEffect(() => {
        apiProduct.getAll().then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, []);

    // search

    const [KeyWord, setKeyWord] = useState(nameproduct)
    console.log(KeyWord)
    const [ProductSearch, setProductSearch] = useState("")

    if (KeyWord !== nameproduct) {
        setKeyWord(nameproduct)
        setProductSearch(products.filter((p) => p.nameproduct.toUpperCase().indexOf(KeyWord.toUpperCase().toLowerCase().toLowerCase()) > -1))
    }

    props.products && !ProductSearch && setProductSearch(props.products.filter((p) => p.nameproduct.toUpperCase().toLowerCase().indexOf(KeyWord.toUpperCase().toLowerCase()) > -1))

    //Phân trang
    const [Sotrang, setSotrang] = useState(0)

    const tongSp = props.products.length;
    console.log(222, products)

    const tinhTrang = Math.ceil(tongSp / 9);

    const mang = [];
    for (var i = 1; i <= tinhTrang; i++) {
        mang.push(i)
    }
    return (
        <div>
            <div className="product">
                <div className="container">
                    <div className="col-md-3 product-price">
                        <div className=" rsidebar span_1_of_left">
                        </div>

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
                        {/**/}
                        {/* <div className="product-bottom">
                            <div className="of-left-in">
                                <h3 className="best">Bán chạy</h3>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/nk1.jpg" alt="" /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h2 className="best2"><a href="#">Nike Sportswear</a></h2>
                                    <span className=" price-in1"> 919.000 vnđ</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/nk2.jpg" alt="" /></a>
                                </div>
                                <div className="fashion-grid1">
                                    <h2 className="best2"><a href="#">LGiannis Nike Dri-FIT </a></h2>
                                    <span className=" price-in1"> 819.000 vnđ</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className=" per1">
                            <a href="#"><img className="img-responsive" src="images/gy1.jpg" alt="" />
                                <div className="six1">
                                    <h4>DISCOUNT</h4>
                                    <p>Up to</p>
                                    <span>60%</span>
                                </div>
                            </a>
                        </div> */}
                    </div>

                    {/**/}
                    <div className="col-md-9 product1">
                        <div className=" bottom-product">
                            {ProductSearch && ProductSearch?.map((item, index) => (
                                index < (((Sotrang + 1) * 9)) && index > ((Sotrang * 9) - 1) &&
                                <div key={index} className="col-md-4 bottom-cd simpleCart_shelfItem">
                                    <div className="product-at ">
                                        <Link to={`/product/${item.id}`}><img className="img-responsive" src={item.image} alt="" />
                                            <div className="pro-grid">
                                                <span className="buy-in">Buy Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <p className="tun">{item.nameproduct}</p>
                                    <a href="#" className="item_add">
                                        <p className="number item_price"><i> </i>{item.price} vnđ</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/**/}
                <div className="page container">
                    <nav className="in">
                        <ul className="pagination">
                            {Sotrang > 0 &&
                                <li
                                    onClick={() => setSotrang(Sotrang - 1)}><a href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span></a></li>}
                            {mang && mang.map((sotrang, index) =>
                                <li onClick={() => setSotrang(sotrang - 1)} className={Sotrang == (index) && "active"}>
                                    <a href="#">{sotrang}<span className="sr-only" /></a></li>)}
                            {Sotrang < (mang.length - 1) &&
                                <li onClick={() => setSotrang(Sotrang + 1)}><a href="#" aria-label="Next"><span aria-hidden="true">»</span> </a> </li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

Search.propTypes = {

}

export default Search

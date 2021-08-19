import React from 'react'


import { useParams } from 'react-router-dom';

const DetailProduct = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    console.log(id)
    console.log(product)
    return (
        <div>
            <div className="card-header py-3">
                <p className="m-0 font-weight-bold text-primary">Chi tiết sản phẩm</p>
            </div>
            <br />
            <div className="container-fluid" align="center">
                <div className="card text-left" >
                    <div className="row">
                        <div className="card-body">

                            <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                                <img src={product.anh} width="300px" />
                            </div>
                            <h2 className="card-title"> Name : {product.ten_sp} </h2>
                            <h2 className="card-title"> Nội dung ngắn : {product.nd_ngan} </h2>
                            <h2 className="card-title"> Nội dung ngắn : {product.so_luong} </h2>
                            <h2 className="card-title"> Trạng thái : {product.tinh_trang ? 'Còn hàng' : 'Hết hàng'} </h2>
                            <h2 className="card-title"> Màu : {product.mau} </h2>
                            <h2 className="card-title"> Size : {product.size} </h2>
                            {/* <h2 className="card-title"> Danh mục : {product.danhmuc} </h2> */}
                            <h2 className="card-text"> Regular Price: {product.gia_nhap} vnđ </h2>
                            <h2 className="card-text"> Sale Price: {product.gia_ban} vnđ </h2>
                            <h2 className="card-text"> Nội dung chi tiết: {product.nd_chitiet} </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

DetailProduct.propTypes = {

}

export default DetailProduct

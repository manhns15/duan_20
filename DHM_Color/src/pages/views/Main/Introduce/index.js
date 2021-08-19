import React from 'react'

const Introduce = props => {
    return (
        <div>
            <br />

            <div className="container">
                <div className="card text-center" >
                    <div className="row">
                        <div className="card-body">
                            <div className="cap">
                                <div className="contact">
                                    <h1 >Giới thiệu</h1><hr /></div>

                                <div className="contten_gt">
                                    <ul>
                                        <li>
                                            <p className="text-justify">“ DHM Color hiểu rằng , thời trang không phải chỉ là mặc một chiếc áo đẹp mà
                                là mặc một chiếc áo thật sự phù hợp với mình . ”</p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Góp mặt trên thị trường thời trang Việt Nam từ năm 2009 ,
                                                với 10 năm không ngừng phát triển , đổi mới và tạo dấu ấn , DHM Color shop tự hào trở thành một trong những thương
                                                hiệu thời trang của người Việt được yêu thích nhất của giới trẻ . Với điểm mạnh về sự đa dạng mẫu mã , chất
                                                lượng trong từng sản phẩm và luôn cập nhật những xu hướng mới nhất , đến với DHM Color , bạn không chỉ tìm
                                                kiếm được những thứ mình “ cần ” . mà còn tìm thấy được những thứ mình nên có ” .
                                        </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                DHM Color luôn đặt câu hỏi
                                                “ khách hàng cần gì và có được gì khi đến với DHM Color ? ” từ đó những sản phẩm đến tay khách hàng cũng chính
                                                là những gì DHM Color muốn gửi gắm . Nếu bạn đang tìm kiếm điểm dừng chân lý tưởng để thỏa sức trải nghiệm mua
                                                sắm , hãy nhớ đến DHM Color !
                                        </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Bằng chứng cho sự nỗ lực của DHM Color suốt 10 năm qua chính là sự phủ sóng rộng
                                                khắp các tỉnh phía Nam với 20 cửa hàng bán lẻ . DHM Color đã và đang không ngừng nỗ lực trong thời gian sớm
                                                nhất sẽ có mặt tại các tỉnh miền Trung và phù sóng rộng khắp các tỉnh miền Đông / Tây / Nam Bộ để có cơ hội
                                                đến gần hơn với khách hàng .
                                        </p>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className="container" >
                <div className="card text-center" >
                    <div className="row">
                        <div className="card-body">
                            <div className="contact">
                                <h1 className="big-tt animated fadeInDown">Tinh thần thương hiệu</h1></div><hr />
                            <div className="img_gt">
                                <div className="gird">
                                    <div className="img">
                                        <img src="images/Taobao.jpg" width='500' />
                                        <h3>Táo bạo </h3>
                                    </div>

                                    <div className="img">
                                        <img src="images/sangtao.png" width='500' />
                                        <h3>Sáng tạo</h3>
                                    </div>

                                </div>

                                <div className="gird">

                                    <div className="img" >
                                        <img src="images/docdao.png" width='500' />
                                        <h3>Độc đáo</h3>
                                    </div>
                                    <div className="img" >
                                        <img src="images/dandau.png" width='500' />
                                        <h3>Dẫn đầu</h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <br />
            </div>
        </div >

    )
}

Introduce.propTypes = {

}

export default Introduce

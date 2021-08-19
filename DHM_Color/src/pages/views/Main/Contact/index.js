import React from 'react'

const Contact = props => {
    return (
        <div>
            <div className="clearfix"> </div>
            <div className="contact">
                <div className="container">
                    <h1>Liên hệ</h1>
                    <div className="contact-form">
                        <div className="col-md-8 contact-grid">
                            <form>
                                <label className='lb'>Họ và tên</label>
                                <input type="text" />
                                <label className='lb'>Email</label>
                                <input type="text" />
                                <label className='lb'>Số điện thoại</label>
                                <input type="text" />
                                <label className='lb'>Nội dung</label>
                                <textarea cols={77} rows={6} value=" " />
                                <button className="btn btn-secondary">Gửi</button>
                            </form>
                        </div>
                        <div className="col-md-4 contact-in">
                            <div className="address-more">
                                <h4>Địa chỉ </h4>
                                <p>Số 179, Phố Trịnh Văn Bô</p>
                                <p>Phường Xuân Phương,</p>
                                <p>Q.Nam từ Liêm - Hà Nội. </p>
                            </div>
                            <div className="address-more">
                                <h4>Liên lạc</h4>
                                <p>Tel:1115550001</p>
                                <p>Fax:12 34 995 0792</p>
                                <p>Email:<a href="#"> dhmcolor@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="map">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.980498470628!2d105.75149381429789!3d21.033466292994905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345496a445f4b3%3A0x8fbf1ae2f9ccb25f!2zMTc5IFBo4buRIFRy4buLbmggVsSDbiBCw7QsIFh1w6JuIFBoxrDGoW5nLCBOYW0gVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1601288097205!5m2!1svi!2sus" width="640" height="480" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {

}

export default Contact

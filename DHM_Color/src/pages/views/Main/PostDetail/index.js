import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import apiRequestPs from '../../../../api/postApi'

const PostDetail = props => {
    const id = useParams().id;
    const [post, setPost] = useState({});
    // const product = products.find(item => item.id === id)
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await apiRequestPs.get(id);
                setPost(data)
                console.log(data)
            } catch (error) {
                console.log('Faile to request API', error)
            }
        }
        getPost()
    }, {})
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <div className="blog-top">
                        <div className=" grid_3 grid-1">
                            <h3><a href="blog_single.html">{post.ten_baiviet}</a></h3>
                            <a href="blog_single.html"><img src={post.image} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} className="img-responsive" alt="" /></a>
                            <div className="blog-poast-info">
                                <ul>
                                    <li><a className="admin" href="#"><i> </i> Admin </a></li>
                                    <li><span><i className="date"> </i>{post.ngaydang}</span></li>
                                    <li><a className="p-blog" href="#"><i className="comment"> </i>No Comments</a></li>
                                </ul>
                            </div>
                            <p>{post.noidung}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PostDetail.propTypes = {

}

export default PostDetail

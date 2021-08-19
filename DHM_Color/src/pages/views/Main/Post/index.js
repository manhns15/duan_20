import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({ posts }) => {
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <h1>Bài viết</h1>
                    <div className="blog-top">

                        {posts.map((item, index) => (
                            <div key={index} className="col-md-6 grid_3">
                                <h3><strong>{item.ten_baiviet}</strong></h3>
                                <a href="blog_single.html"><img src={item.image} width="500px" alt="" /></a>
                                <div className="blog-poast-info">
                                    <ul>
                                        <li><a className="admin" href="#"><i> </i> Admin </a></li>
                                        <li><a className="p-blog" href="#"><i className="comment"> </i>No Comments</a></li>
                                    </ul>
                                </div>
                                <div className="button"><Link to={`/post/${item.id}`}>Read More</Link></div>
                            </div>
                        ))}

                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Posts.propTypes = {

}

export default Posts

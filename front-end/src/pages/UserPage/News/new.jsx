import React from 'react';
import { useParams } from 'react-router-dom';
import './new.css';

const NewsDetail = ({ stories }) => {
    const { id } = useParams();
    const story = stories.find((item) => item.id.toString() === id);

    if (!story) return <p>Không tìm thấy bài viết</p>;

    return (
        <div className="body">
            <div className="content-page">
                <div className="title-nav-page">
                    <p className="title-page">{story.title}</p>
                    <ol className="nav-page">
                        <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                        <li className="breadcrumb-item"><a href="/tin-tuc">Tin tức</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{story.title}</li>
                    </ol>
                </div>
            </div>

            <div className="news" style={{ margin: '50px 15%', fontSize: '18px' }}>
                <div style={{ textAlign: 'center', textTransform: 'capitalize', fontSize: '25px', fontWeight: '300' }}>
                    {story.title}
                </div>
                <div style={{ margin: '25px 0', justifyContent: 'center', display: 'flex' }}>
                    <img className="card-img-top" src={`/${story.imgStory}`} alt={story.title} style={{ height: '500px' }} />
                </div>
                <div style={{ display: 'flex', fontSize: '15px', marginBottom: '25px' }}>
                    {story.createdAt} | Đăng bởi: {story.user.firstname} {story.user.lastname}
                </div>
                <div className="news-body" style={{ fontFamily: 'Calibri, sans-serif' }}>
                    <div dangerouslySetInnerHTML={{ __html: story.content }} />
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;

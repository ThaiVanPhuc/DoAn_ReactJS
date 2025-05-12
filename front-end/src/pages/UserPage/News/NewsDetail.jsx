import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styles from './NewsDetail.module.scss';
import { getImageUrl } from "../../../utils/image";

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/news/${id}`)
            .then(res => setNews(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!news) return <div className={styles.loading}>Đang tải...</div>;

    return (
        <div className={styles.detailContainer}>
            <Link to="/news" className={styles.back}>← Quay lại danh sách</Link>


            <h2 className={styles.title}>{news.title}</h2>
            <p className={styles.content}>{news.content}</p>
            {news.imgStory && (
                <div className={styles.imageWrapper}>
                    <img src={getImageUrl(news.imgStory)} alt={news.title} className={styles.image} />
                </div>
            )}
        </div>
    );
};

export default NewsDetail;

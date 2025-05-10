import React from 'react';
import { Link } from 'react-router-dom';
import './news.css';

const NewsList = ({ stories }) => {
    return (
        <div className="news-list">
            <h2 className="news-title">Tin tức mới</h2>
            <div className="news-items">
                {stories.map((story) => (
                    <div key={story.id} className="news-card">
                        <Link to={`/tin-tuc/${story.id}`}>
                            <img src={`/${story.imgStory}`} alt={story.title} className="news-image" />
                            <h3 className="news-card-title">{story.title}</h3>
                            <p className="news-card-date">{story.createdAt} | {story.user.firstname} {story.user.lastname}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;

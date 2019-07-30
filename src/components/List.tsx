import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/List.css';

export const List = ({posts}) => { 
    return posts.map(post => (
        <li className='underlined underlined--reverse' key={post.postId}>
            <Link to={`/post/${post.postId}/${post.userId}`}>{post.postTitle}</Link>
        </li>
    ));
}
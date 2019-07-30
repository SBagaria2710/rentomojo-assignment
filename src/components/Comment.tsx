import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/List.css';

const getRandomInt = (min:number, max:number):number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const Comment = ({comments}) => { 
    return comments.map(comment => (
        <li key={comment.commentId} className="comment user-comment">
            <div className="info">
                <p>{comment.commentName}</p>
                <span>{getRandomInt(1, 24)} hours ago</span>
            </div>
            <p>{comment.commentBody}</p>
        </li>
    ));
}
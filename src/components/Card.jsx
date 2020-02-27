import React from 'react'
import Button from './Button';
import defaultPic from '../static/profile_twitter.jpeg';
import './card.css';

const convertToDate = (value) => {
  const date = new Date(value);
  return date.toDateString();
  // return value.toString();
}
const CardOld = ({ post, onClick }) => {
  return (
      <div className="card border-secondary mb-3" >
  <div className="card-header">{post.user.name} <span >{convertToDate(post.created_at)}</span></div>
  <div className="card-body text-secondary">
    <p className="card-text">{post.body}</p>
  </div>
  <Button onClick={()=>onClick(post.id)} />
</div>
  )
}

const Card = ({ post, handleClick }) => (
  <div className="card">
    <div className="card--header">
      <img src={defaultPic} alt="profile of author" className="float-left" />
      <span id="author-name">{post.user.name}</span>
      <p className="post--date">{convertToDate(post.createdAt)}</p>
    </div>
    {post.body}
    <div className="card--footer">
      <span>{post.userLikes.length} <i className="fas fa-thumbs-up"></i></span>
      <span className="float-right">{post.comments.length} Comments</span>
    </div>
    <div className="card--footer-buttons">
      <div onClick={(event) => handleClick(event, post.id)} id="like-button"><i className="far fa-thumbs-up" />&nbsp;Like</div>
      <div id="comment-button" className="float-right"><i className="far fa-comment-alt" />&nbsp;Comment</div>
    </div>
  </div>
);

export default Card;

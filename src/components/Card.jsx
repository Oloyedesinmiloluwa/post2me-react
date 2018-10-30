import React from 'react'
import Button from './Button';

const convertToDate = (value) => {
  const date = new Date(value);
  return date.toDateString();
  // return value.toString();
}
const Card = ({ post, onClick }) => {
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

export default Card

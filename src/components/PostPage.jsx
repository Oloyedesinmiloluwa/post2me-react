import React from 'react'
import Card from './Card';

  const PostPage = ({ posts, newPost, handleChange, handlePost, handleClick }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
          </div>
          <div className="col-sm">
            <h3 className="text-center text-primary">Post2me </h3>
            <div className="input-group mb-3">
              <input type="text" name="body" onChange={handleChange} value={newPost} className="form-control" placeholder="Share with your friends here" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button onClick={handlePost} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
              </div>
            </div>
            {
              posts.map((post, index) => {
                return <Card key={index} post={post} onClick={handleClick} />
              })
            }
          </div>
          <div className="col-sm">
          </div>
        </div>
      </div>
  )
  };
export default PostPage;

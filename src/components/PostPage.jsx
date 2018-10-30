import React, { Component } from 'react'
import Card from './Card';
class PostPage extends Component {
  state = {
    loading: false,
    posts: [],
    newPost: {
      body: '',
      like: 5,
      tag: 'hello',
      userId: window.location.search.substr(8,1),
      image: 'do.jpg'
    }
  };
  componentDidMount(){
    const { posts } = this.state;
    fetch('http://localhost:8000/api/v1/posts')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({ posts: [...posts, ...res] })
    });
  }
  handleClick = (id) => {
    const { posts } = this.state
    fetch(`http://localhost:8000/api/v1/posts/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(res => {
      this.setState({ posts: posts.filter(post => post.id !== id)});
     });
  }
  handlePost = (event) => {
    const { newPost, posts } = this.state
    fetch(`http://localhost:8000/api/v1/posts/`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(newPost)
  })
    .then(res => res.json())
    .then(res => {
      this.setState({ posts: [ res.data, ...posts] });
    });
  }
  handleChange = (event) => {
    const { newPost } = this.state;
    this.setState({ newPost: {...newPost, [event.target.name]: event.target.value }});
  }
  render(){
    const { posts, newPost } = this.state
    return (
  //     <div className="center-div container">
  //     <div className="row">
  //           <div className="col-3">
  // </div>
  //     <div className="col-6">
  //     Welcome to our world!
  //     <Card/>
  //     </div>
  //     <div className="col-3">
  // </div>
  // </div>
  //       </div>
        <div className="container">
        <div className="row">
          <div className="col-sm">
          </div>
          <div className="col-sm">
          <h3 className="text-center text-primary">Post2me </h3>
            <div className="input-group mb-3">
              <input type="text" name="body" onChange={this.handleChange} value={newPost.body} className="form-control" placeholder="Share with your friends here" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button onClick={this.handlePost} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
              </div>
            </div>
      {
      posts.map((post,index) => {
        return <Card key={index} post={post}  onClick={this.handleClick} />
      })
      }
          </div>
          <div className="col-sm">
          </div>
        </div>
      </div>
    )
  }
}
export default PostPage;

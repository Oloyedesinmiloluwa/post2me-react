import React, { Component } from 'react';
import { connect } from 'react-redux';
import process from './process';
import PostPage from './PostPage';
import { likePost, getAllPosts, newPost } from '../actions/postAction';

class PostPageContainer extends Component {
  state = {
    loading: false,
    newPost: {
      body: '',
      like: 5,
      tags: 'hello',
      userId: window.location.search.substr(8,1),
      image: 'do.jpg'
    }
  };
  setToken = {
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Content-Type': 'application/json', 'Accept': 'application/json',
    }
  }
  componentDidMount(){
    const { posts } = this.state;    
    const { likeAction, getAllPostsAction } = this.props;
    getAllPostsAction();
  }
  handleClick = (event,id) => {
    // debugger;
    const { posts } = this.state;
    const { likePostAction } = this.props
    if(event.target.id === 'like-button') likePostAction(id);
    // fetch(`http://localhost:8000/api/v1/posts/${id}`, {method: 'DELETE'})
    // .then(res => res.json())
    // .then(res => {
    //   this.setState({ posts: posts.filter(post => post.id !== id)});
    //  });
  }
  handlePost = (event) => {
    const { newPostAction } = this.props;
    const { newPost } = this.state
    newPostAction(newPost);
    // const { newPost, posts } = this.state
  //   fetch(`http://localhost:8000/api/v1/posts/`,
  //   {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${process.env.TOKEN}` },
  //     body: JSON.stringify(newPost)
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({ posts: [ res.data, ...posts] });
  //   });
  }
  handleChange = (event) => {
    const { newPost } = this.state;
    // debugger;
    this.setState({ newPost: {...newPost, [event.target.name]: event.target.value }});
  }
  render(){
    const { posts, newPost } = this.state;
    return (
        <div className="container">
        <PostPage  {...this.props} handlePost={this.handlePost} handleChange={this.handleChange} handleClick={this.handleClick} />
      </div>
    )
  }
}
const mapStateToProps = (state) => (
{
  posts: state.posts
}
);
export default connect(
  mapStateToProps, {
  likePostAction: likePost,
  getAllPostsAction: getAllPosts,
  newPostAction: newPost})(PostPageContainer);

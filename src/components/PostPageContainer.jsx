import React, { Component } from 'react';
import { connect } from 'react-redux';
import process from './process';
import PostPage from './PostPage';
import { likePost, getAllPosts } from '../actions/postAction';

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
    // console.log(this.setToken);
    
    const { likeAction, getAllPostsAction } = this.props;
    getAllPostsAction()
      // .then(res => console.log(res));
    // fetch('http://localhost:8000/api/v1/posts', this.setToken)
    // .then(res => res.json())
    // .then(res => {
    //   console.log(res);
    //   this.setState({ posts: [...posts, ...res] })
    // });
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
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${process.env.TOKEN}` },
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
    const { posts, newPost } = this.state;
    return (
        <div className="container">
        <PostPage  {...this.props} />
      </div>
    )
  }
}
const mapStateToProps = (state) => (
{
  posts: state.posts
}
);
export default connect(mapStateToProps, { likePostAction: likePost, getAllPostsAction: getAllPosts})(PostPageContainer);

import React from 'react'
import blogService from '../services/blogs'


class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleClick = (event) => {
    if (this.state.visible) {
      this.setState({
      visible: false
    })
  } else {
    this.setState({
      visible: true
    })
  }

  }

  handleDelete = (event) => {
    event.preventDefault()
    console.log('painettu delete')
    if (window.confirm("Do you really want to delete blog?")) { 
      blogService
      .deleteOne(this.props.blog.id)
      .then(
        this.props.handleDelete(this.props.blog.id)  
      )
    }
    
  }

  handleClickLike = (event) => {
    event.preventDefault()

    const blogObject = {
      user: this.props.blog.user._id,
      author: this.props.blog.author,
      title: this.props.blog.title,
      url: this.props.blog.url,
      likes: this.props.blog.likes +1,

    }

    blogService
    .update(this.props.blog.id, blogObject)
    .then(likedBlog => {
      console.log(likedBlog)
      this.props.handleLike(this.props.blog.id, likedBlog)
    }
    )
  }

  render() {
  

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    if (this.state.visible) {
      
      return (
        <div style={blogStyle} className="content">
        <div onClick={this.handleClick}> {this.props.blog.title} {this.props.blog.author} </div>
        <ul>
        <li> <a href={this.props.blog.url}> {this.props.blog.url} </a></li>
        <li> likes: {this.props.blog.likes} <button onClick={this.handleClickLike}>like</button></li>
        {this.props.blog.user !== undefined && <li>added by {this.props.blog.user.name} </li>}
        {this.props.blog.user === undefined || this.props.blog.user.username === this.props.user.username && <p><button onClick={this.handleDelete}>delete</button></p>}
        </ul>
        </div>

      )
    }


    return (
      <div style={blogStyle}>
        <div onClick={this.handleClick} className="name"> {this.props.blog.title} {this.props.blog.author} </div>
      </div>
    )
  }
}
export default Blog














import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      error: null,
      loginVisible: true
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  }

  handleNewBlog = (blog) => {
    console.log(blog)
    this.setState({
      blogs: this.state.blogs.concat(blog),
      error: `Blog ${blog.title} has been added`
    })
    setTimeout(() => {
      this.setState({ error: null })
    }, 5000)

    this.blogForm.toggleVisibility()
  }

  handleDelete = (id) => {
    const newBlogs = this.state.blogs.filter(function(blog) {
        return blog.id !== id
    })

    this.setState({
      blogs: newBlogs,
      error: `Blog deleted`
    })
    setTimeout(() => {
      this.setState({ error: null })  
    }, 5000)


  }

  handleLikeToBlog = (id, likedBlog) => {
    console.log(likedBlog)
    this.setState({
      blogs: this.state.blogs.map(blog => blog.id !== id ? blog : likedBlog),
      error: `Like to ${likedBlog.title} has been registered`
    })

    setTimeout(() => {
      this.setState({ error: null })
    }, 5000)

  }


  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogoutClick = (event) => {
    console.log('nappia painettu')
    window.localStorage.removeItem('loggedBlogappUser')
    this.setState({ user: null })
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      blogService.setToken(user.token)
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <h2>Kirjaudu sovellukseen</h2>

          <Notification message={this.state.error} />

          <LoginForm
            loginVisible={this.state.loginVisible}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleLoginFieldChange}
            handleSubmit={this.login} />
        </div>
      )
    }

    this.state.blogs.sort(function (a, b) {
      return b.likes - a.likes;
    })

    return (
      <div>
        <Notification message={this.state.error} />
        <h2>blogs</h2>
        <p>{this.state.user.name} logged in <button onClick={this.handleLogoutClick}>logout</button></p>

        <Togglable buttonLabel="add new blog" ref={component => this.blogForm = component}>
          <BlogForm
            newBlog={this.handleNewBlog}
          >
          </BlogForm>
        </Togglable>




        {this.state.blogs.map(blog =>
          <Blog
            handleLike={this.handleLikeToBlog}
            handleDelete={this.handleDelete}
            user={this.state.user}
            key={blog._id} blog={blog} />
        )}
      </div>
    )
  }

}

export default App;

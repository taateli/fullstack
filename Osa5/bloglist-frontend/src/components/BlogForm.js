import React from 'react'
import blogService from '../services/blogs'

class BlogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            url: '',
            newBlog: null
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addBlog = (event) => {
        event.preventDefault()
        const blogObject = {
            title: this.state.title,
            author: this.state.author,
            url: this.state.url
        }

        blogService
            .create(blogObject)
            .then(newBlog => {
                this.setState({
                    title: '',
                    author: '',
                    url: '',
                    newBlog: newBlog
                })

                this.props.newBlog(this.state.newBlog)
            })
        
    }

    render() {

        return (
            <div>
                <h2>Luo uusi blogi</h2>

                <form onSubmit={this.addBlog}>
                    <div>    title:
            <input
                            value={this.title}
                            onChange={this.handleChange}
                            type="text"
                            name="title"
                        />
                    </div>
                    <div>
                        author:
            <input
                            value={this.author}
                            onChange={this.handleChange}
                            type="text"
                            name="author"
                        />
                    </div>
                    <div>
                        url:
            <input
                            value={this.url}
                            onChange={this.handleChange}
                            type="text"
                            name="url"
                        />
                    </div>
                    <button type="submit">tallenna</button>
                </form>
            </div>
        )

    }
}

export default BlogForm


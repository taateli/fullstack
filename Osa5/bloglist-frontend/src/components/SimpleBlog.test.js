import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Testi 12',
      author: 'Taateli',
      likes: 4
    }
    const onClick = (event) => {
        console.log('painettu')
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} onClick={onClick} />)
    const titleDiv = blogComponent.find('.title')
    const likesDiv = blogComponent.find('.likes')

    expect(likesDiv.text()).toContain(blog.likes)
    expect(titleDiv.text()).toContain(blog.author)
    expect(titleDiv.text()).toContain(blog.title)
  })

  it('clicking the button calls event handler once', () => {
    const blog = {
        title: 'Testi 12',
        author: 'Taateli',
        likes: 4
    }
  
    const mockHandler = jest.fn()
  
    const blogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler} />)
  
    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')
  
    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'


describe.only('<Blog />', () => {
    it('blog renders', () => {
        const blog = {
            id: "5a79758e68c3e64b1c53d026",
            title: "Kärsimys pt 1",
            author: "Tatu",
            url: "tasajsasa",
            likes: 10,
        }

        const user = {
            username: "pertto",
            name: "Testaaja",
            adult: true,
            password: "testikeppi"
        }

        const mockHandler = jest.fn()
        const mockHandler3 = jest.fn()
        const mockHandler2 = jest.fn()

        const blogComponent = shallow(<Blog
            handleLike={mockHandler}
            handleDelete={mockHandler2}
            user={user}
            key={blog.id} blog={blog} />)

        const nameDiv = blogComponent.find('.name')

        nameDiv.simulate('click')
        

        const contentDiv = blogComponent.find('.content')

        expect(contentDiv.text()).toContain(blog.url)

    })


})

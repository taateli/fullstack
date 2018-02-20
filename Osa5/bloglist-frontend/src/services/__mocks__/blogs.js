let token = null

const blogs = [
    {
        id: "5a7c03edd4ff825e8655e351",
        title: "Kärsimys pt 56",
        author: "Tatu",
        url: "tasajsasa",
        likes: 15,
        user: {
            _id: "5a7b2cf02d738142078b60a5",
            username: "taateli",
            name: "Tatu"
        }
    },

    {
        id: "5a7c03edd4ff825e8655e332",
        title: "Kärsimys pt 123",
        author: "Heikki",
        url: "agagsa",
        likes: 11,
        user: {
            _id: "5a7b2cf02d738142078b60a7",
            username: "mandariini",
            name: "Heikki"
        }
    },
    {
        id: "5a7c03edd4ff825e8655e456",
        title: "Loisto 5",
        author: "Kalle",
        url: "google.com",
        likes: 1,
        user: {
        _id: "5a7b2cf02d738142078b60b7",
        username: "omena",
        name: "Jussi"
        }
        }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, blogs }
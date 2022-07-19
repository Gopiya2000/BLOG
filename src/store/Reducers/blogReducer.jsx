const reducer = (blogs = [], action) => {
    console.log("BLOG REDUCER");
    switch (action.type) {
        case "VIEW_BLOGS":
            console.log("BLOG REDUCER INSIDE", action.blogs)
            return action.blogs
        case "VIEW_USER_BLOGS":
            console.log("view user blog reducer ", action.payload)
            return action.payload
        case "ADD_BLOG":
            return [action.blogs.data, ...blogs]
        default:
            return blogs
    }
}
const SingleBlogreducer = (blog = [], action) => {
    console.log("SINGLE BLOG REDUCER");
    switch (action.type) {
        case "VIEW_SINGLE_BLOG":
            console.log("BLOG REDUCER INSIDE", action.blog)
            return [action.blog]
        case "UPDATE_BLOGS":
            console.log("BLOG REDUCER INSIDE", action.blog)
            return [action.blog]
        case "DELETE_BLOG":
            return blog.filter((blog) =>
                blog._id !== action.id)
        default:
            return blog
    }
}

export {
    SingleBlogreducer,
    reducer
}


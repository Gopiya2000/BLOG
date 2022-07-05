const reducer = (blogs = [], action) => {
    console.log("BLOG REDUCER");
    switch (action.type) {
        case "VIEW_BLOGS":
            console.log("BLOG REDUCER INSIDE",action.blogs)
            return action.blogs
        case "ADD_BLOG":
            return [action.blogs.data, ...blogs]
        case "UPDATE_BLOGS":
            return blogs.map((blog) =>
                blog._id === action.blogs.data._id ? action.blogs.data : blogs)
        case "DELETE_BLOGS":
            return blogs.filter((blog) =>
                blog._id !== action.id)
        default:
            return blogs
    }
}

export default reducer; 
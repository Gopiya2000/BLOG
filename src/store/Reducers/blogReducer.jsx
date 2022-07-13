const reducer = (blogs = [], action) => {
    console.log("BLOG REDUCER");
    switch (action.type) {
        case "VIEW_BLOGS":
            console.log("BLOG REDUCER INSIDE", action.blogs)
            return action.blogs
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





























// const initialState = {
//     blogs: [],
//     blog: {}
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "VIEW_BLOGS": return {
//                 ...state,
//                 blogs: action.payload
//         }
//         case "VIEW_SINGLE_BLOG":
//             return {
//                 ...state,
//                 blog: action.payload
//             };
//         case "ADD_BLOG":
//             return {
//                 ...state,
//                 blog: action.payload
//             }
//         case "UPDATE_BLOGS":
//             return {
//                 blog:blogs.map((blog) =>
//                 blog._id === action.blogs.data._id ? action.blogs.data : blog
//                 )}
//                 case "DELETE_BLOGS":
//                     return {
//                         blog : blogs.filter((blog) =>
//                         blog._id !== action.id)
//                     } 
//                     default : return state 
//     }
// }


   
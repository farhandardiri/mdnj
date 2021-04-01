import showBlogs from './components/showBlog'
import addBlog from './components/addBlog'

export default [
    {path:'/', component:showBlogs},
    {path:'/add', component:addBlog},
]
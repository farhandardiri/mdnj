import showBlogs from './components/showBlog'
import addBlog from './components/addBlog'
import sigleBlog from './components/sigleBlog'

export default [
    {path:'/', component:showBlogs},
    {path:'/add', component:addBlog},
    {path:'blog/:id', component:sigleBlog}
]
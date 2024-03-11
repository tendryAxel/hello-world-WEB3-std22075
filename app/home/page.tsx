"use client"

import { BlogModel } from "@/utils/data"
import { useState } from "react"
import { getAllBlog } from "@/utils/fetch"
import Blog from "@/components/Blog"

export default () => {
    const [blogs, SetBlogs] = useState<BlogModel[]>(getAllBlog())

    return <div className="container">
        {blogs.map(blog => <Blog blog={blog} />)}
    </div>
}
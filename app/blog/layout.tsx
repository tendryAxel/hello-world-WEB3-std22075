"use client"

import BlogMin from "@/components/BlogMin";
import { BlogModel } from "@/utils/data";
import { getAllBlog } from "@/utils/fetch";
import { useState } from "react";

export default ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=> {
    const [blogs, SetBlogs] = useState<BlogModel[]>(getAllBlog())

    return <div className="about">
        <div className="side">
            {blogs.map(blog => <BlogMin blog={blog} />)}
        </div>
        <div>{children}</div>
    </div>
}
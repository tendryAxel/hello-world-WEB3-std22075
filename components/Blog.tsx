import { BlogModel } from "@/utils/data";

export default ({ blog } : { blog: BlogModel }) => {
    const blogURL = `/blog/${blog.id}`;

    return <div className="todo">
        <h2><a href={blogURL}>{blog.name}</a></h2>
        <a href={`${blogURL}/image`} title={`View blog ${blog.name}`}>Image</a>
    </div>
};
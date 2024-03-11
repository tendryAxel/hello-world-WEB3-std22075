import { BlogModel } from "@/utils/data";

export default ({ blog } : { blog: BlogModel }) => {
    const blogURL = `/blog/${blog.id}`;

    return <div className="todo">
        <p><a href={blogURL}>{blog.name}</a></p>
    </div>
};
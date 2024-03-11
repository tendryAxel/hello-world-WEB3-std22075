import Blog from "@/components/Blog";
import { getById } from "@/utils/fetch";

type params = { params: {id: Number} }

export default ({ params } : params) => {
    return <div className="aboutBlog">
        <Blog blog={getById(Number(params.id))} />
    </div>
};
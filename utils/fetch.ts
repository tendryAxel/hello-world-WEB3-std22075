import { allBlog } from "./data";

export const getAllBlog = () => {
    return allBlog.slice();
};

export const getById = (id: Number) => {
    return allBlog.filter(e => e.id === id)[0]
};
export class BlogModel {
    id: Number;
    name: string;
    image: string;
    constructor (id: Number = 0, name: string = "", image: string = ""){
        this.id = id;
        this.name = name;
        this.image = image;
    }
}

export const allBlog = [
    new BlogModel(1, "Blog1", ""),
    new BlogModel(2, "Blog2", ""),
    new BlogModel(3, "Blog3", ""),
    new BlogModel(4, "Blog4", ""),
    new BlogModel(5, "Blog5", ""),
    new BlogModel(6, "Blog6", ""),
];
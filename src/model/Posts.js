import Post from "./Post";

class Posts {
    constructor() {
        if(!Posts.instance) {
            this._data = [
                new Post('Title One', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 0),
                new Post('Title Two', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 1),
                new Post('Title Three', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 2),
                new Post('Title Four', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 3),
                new Post('Title Five', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 4),
                new Post('Title Six', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 5),
                new Post('Title Seven', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 6),
                new Post('Title Eight', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 7),
                new Post('Title Nine', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 8),
                new Post('Title Ten', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 9),
                new Post('Title Eleven', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim voluptas delectus eius sunt esse eum nisi natus, tempore repudiandae.', new Date().getFullYear(), 'tags', 10)
            ];
            Posts.instance = this;
        }

        return Posts.instance;
    }

    add(item) {
        this._data.push(item);
    }

    // get(item) {
    //     return this._data.find(d => d.id === id);
    // }

}

const instance = new Posts();
Object.freeze(instance);

export default instance;
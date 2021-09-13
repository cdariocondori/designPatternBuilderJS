console.log("Hello darioDev");

class Post {
    setTitle(title) {
        this.title = title;
    }
    setBody(body) {
        this.body = body;

    }
    setUserId(userId) {
        this.userId = userId;

    }
}
// in node export default Post
class PostBuilder {
    constructor() {
        this.post = new Post();
    }
    withTitle(title) {
        this.post.setTitle(title);
        return this;
    }
    withBody(body) {
        this.post.setBody(body);
        return this;
    }
    withUserId(userId) {
        this.post.setUserId(userId);
        return this;
    }

    build() {
        return this.post;
    }
}


document.addEventListener("DOMContentLoaded", function (evt) {
    console.log("create page...");

})


document.getElementById("button-create-post").onclick = function () {
    console.log("create post...");
    //Forma tradicional 
    // let post = new Post();
    // post.setTitle("article");
    // post.setBody("this is my first article");
    // post.setUserId(1);
    // console.log(post);

    let post = new PostBuilder()
        .withBody("builder body")
        .withTitle("builder title")
        .withUserId(2)
        .build();
    console.log(post);


}
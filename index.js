// Posts Array & Objects Provided By Scrimba

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// My code

const posterAvatar = document.getElementById("posters-avatar");
const posterName = document.getElementById("posters-name");
const posterLocation = document.getElementById("posters-location");
const post = document.getElementById("post");
const like = document.getElementById("like");
const comment = document.getElementById("comment");
const message = document.getElementById("message");
const likesCounter = document.getElementById("likes-counter");
const userName = document.getElementById("user-name");
const paraComment = document.getElementById("para-comment");
const postsContainer = document.querySelector("body");

for (let i=0; i < posts.length; i++) {
    const postElement = document.createElement("section");
    postElement.innerHTML = `
        <div class="poster">
            <img src="${posts[i].avatar}" id="posters-avatar" alt="Poster's profile picture">
            <div class="posters-information">
                <h1 id="posters-name">${posts[i].name}</h1>
                <p id="posters-location">${posts[i].location}</p>                
            </div>
        </div>
        <img id="post" alt="Portrait of Poster" src="${posts[i].post}">
        <div class="below-post">
            <div class="icons">
                <img id="like" alt="Heart Icon" src="images/icon-heart.png">
                <img id="comment" alt="Speech Bubble" src="images/icon-comment.png">
                <img id="message" alt="Paper Airplane" src="images/icon-dm.png">
            </div>
            <h2 id="likes-counter">${posts[i].likes} likes</h2>
            <div class="likes-and-comments">
                <h2 id="user-name">${posts[i].username}</h2>
                <p id="para-comment">${posts[i].comment}</p>
            </div>
        </div>
    `;

    postsContainer.appendChild(postElement);
}
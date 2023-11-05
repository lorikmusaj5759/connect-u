/* 
   Filename: ComplexCode.js

   Description: 
   This JavaScript code represents a complex and elaborate example of a social media application
   that allows users to create profiles, make posts, follow other users, and interact with posts
   through comments, likes, and shares.

   Author: John Doe
   Date: October 1, 2022
*/

// User Class Definition
class User {
   constructor(name, username, email, password) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
      this.posts = [];
      this.following = [];
      this.followers = [];
   }

   addPost(newPost) {
      this.posts.push(newPost);
   }

   removePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId);
   }

   follow(user) {
      if (!this.following.includes(user)) {
         this.following.push(user);
         user.followers.push(this);
      }
   }

   unfollow(user) {
      this.following = this.following.filter(u => u !== user);
      user.followers = user.followers.filter(follower => follower !== this);
   }
}

// Post Class Definition
class Post {
   static postCount = 0;

   constructor(user, text) {
      this.id = Post.postCount++;
      this.user = user;
      this.text = text;
      this.comments = [];
      this.likes = 0;
      this.shares = 0;
   }

   addComment(comment) {
      this.comments.push(comment);
   }

   removeComment(commentId) {
      this.comments = this.comments.filter(comment => comment.id !== commentId);
   }

   like() {
      this.likes++;
   }

   share() {
      this.shares++;
   }
}

// Comment Class Definition
class Comment {
   static commentCount = 0;

   constructor(user, text) {
      this.id = Comment.commentCount++;
      this.user = user;
      this.text = text;
   }
}

// Creating Users
const user1 = new User("John Doe", "johndoe", "john@example.com", "password");
const user2 = new User("Jane Smith", "janesmith", "jane@example.com", "password");

// Creating Posts
const post1 = new Post(user1, "Hello, world!");
const post2 = new Post(user2, "This is a complex code example.");

// Creating Comments
const comment1 = new Comment(user1, "Great post!");
const comment2 = new Comment(user2, "Thanks for sharing!");

// Connecting Objects
user1.addPost(post1);
user2.addPost(post2);

post1.addComment(comment1);
post2.addComment(comment2);

user1.follow(user2);

// Outputting Data
console.log(user1);
console.log(user2);

console.log(post1);
console.log(post2);

console.log(comment1);
console.log(comment2);

// Additional functionality and logic can be added below...
// ...
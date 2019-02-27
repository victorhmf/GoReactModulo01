import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Victor Fernandes',
        avatar: 'https://i.imgur.com/5G0kr67.jpg',
        time: 'Há 3 min',
        body:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 2,
        name: 'José Fernandes',
        avatar: 'https://i.imgur.com/5G0kr67.jpg',
        time: 'Há 5 min',
        body:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 3,
        name: 'João Fernandes',
        avatar: 'https://i.imgur.com/5G0kr67.jpg',
        time: 'Há 2 min',
        body:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header>RocketBook</Header>
        <div className="post-container">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    );
  }
}

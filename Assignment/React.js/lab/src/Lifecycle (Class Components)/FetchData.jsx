import React, { Component } from "react";

export class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          posts: data,
          loading: false,
        })
      );
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div>
        <h2>Fetched Posts</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default FetchData;

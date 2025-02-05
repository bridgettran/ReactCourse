import { useState, useEffect } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // this useEffect() method prevents the infinity loop by making sure this effect function not always execute
  // because of the array [] at the end
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    // fetch/send HTTP request
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body:JSON.stringify(postData),
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    // here is the way to update the state if it depend on the previous statesnapshot
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      
       {!isFetching && posts.length > 0 && (
      <ul className={classes.posts}>
      {/*Transform every post in the post array to post JSX element*/}
      {/*We should add the special key prop to JSX element, to make an unique ID, no warming*/}
      {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
      </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
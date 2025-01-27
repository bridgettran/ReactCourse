import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    /*This empty list symbol is a fragment because in jxs code, it allows only ONE root element*/
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </ul>
    </>
  );
}

export default PostsList;
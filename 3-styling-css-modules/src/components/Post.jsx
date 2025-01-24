/* Between creating a big CSS file, we can create a smaller CSS file for each of our files.
 * Name convention is that abc.module.css
 * object: classes has class such as post/ author/ body in it */
import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Post;
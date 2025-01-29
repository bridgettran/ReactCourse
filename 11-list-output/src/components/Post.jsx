/* Between creating a big CSS file, we can create a smaller CSS file for each of our files.
 * Name convention is that abc.module.css
 * object: classes has class such as post/ author/ body in it */
 import classes from './Post.module.css';

 function Post({ author, body }) {
   return (
     <li className={classes.post}>
       <p className={classes.author}>{author}</p>
       <p className={classes.text}>{body}</p>
     </li>
   );
 }
 
 export default Post;
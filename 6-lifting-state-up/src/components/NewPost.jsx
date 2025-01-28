import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>

        {/* prop name can be what we want */}
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
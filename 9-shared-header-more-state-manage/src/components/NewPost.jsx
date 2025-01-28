import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    // prevent sending http request to the server
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    console.log(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        {/*The type of this button is button*/}
        <button type="button" onClick={onCancel}>
          Cancel
        {/*The button default is submit type*/}
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
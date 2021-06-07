import React from "react";

function CreateNewPost ({...props}) {
  return (
    <>
    <section className="create-post">
      <form onSubmit={props.savePost}>
        <h1>Create Blog Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <input type="file" name="filename" accept="image/gif, 
        image/jpeg, image/png"/>
        <br />
        <br />

        <textarea
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="button">Save Post</button></section>
      </form>
      </section>
    </>
  );
};
export default CreateNewPost;


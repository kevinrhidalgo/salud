import React, { useState, useRef } from "react";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost";
import Post from "../../components/AllPost/Post";
import ModifyPost from "../../components/EditPost/ModifyPost"
import bgImg from "./bgimg.jpg"
import "./routeTwo.css"


const routeHead={
fontSize:130,
fontFamily: "Limelight, cursive",
color:"#bab86c",
lineHeight: 0.7,
}

const paragraphOne={
  display:"flex",
  justifyContent:"center",
  color:"beige",
  fontWeight:350,
  fontSize:20,
}


function PublicRouteTwo () {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };
  const savePostContentToState = event => {
    setContent(event.target.value);
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }
  const editPost = id => {
    setEditPostId(id);
    console.log(id)
    toggleModifyPostComponent();
  };
  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId] )
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }
      console.log(eachPost)
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  const savePost = event => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    console.log(allPosts);
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };
  if (isCreateNewPost) {
    return (
      <>
      
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}
        />
        
      </>
    );
  }
  else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      
      <ModifyPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />

    );
  }


  return (
    <div className="voices">
      <div className="bgColor">
      <h1 style={routeHead}>Voices <br/> <div className="middleName">from the</div>People
      </h1>
      <p style={paragraphOne}>Real stories from real life changing experiences</p>
      </div>
      
        <img
          
          src={bgImg}
        />
      
      {!allPosts.length ? (
        <section className="no-post">
          <h1>No Post Found!</h1>
          <br />
          <br />
          <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button">Create New</button>
      </section>
        </section>
      ) : (
      <div><h1>All Posts</h1>
        <section className="all-post">
        {allPosts.map(eachPost => {
          return (
            <div className="blogPost">
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
            </div>
          );
        })}
      <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button">Create New</button>
      </section>
        </section>
        
        </div>
      )}

      
    </div>
  );
};
export default PublicRouteTwo;
import React, { useState, useRef } from "react";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost";
import Post from "../../components/AllPost/Post";
import ModifyPost from "../../components/EditPost/ModifyPost"
import "./routeTwo.css"
import image1 from "./person1.jpeg"

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

const profileOne={
  width:100,
  height:100,
  borderRadius: "50%",
  padding:10
}

const personName={
  fontSize:"20px",
  paddingTop:30,
  paddingRight:20

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
      <div className="postSection">
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}
        />
        </div>
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
      
       
      
      {!allPosts.length ? (
        <section className="no-post">
         <div className="profileOne">
    <div className="partOne"> 
     <img style={profileOne} src={image1}/>
     <h3 >How going vegan changed my life.</h3>
    </div>
    <div className="partOne"><h3 style={personName}>John Stewart</h3>
    <h6>February, 26 2021</h6>
    </div>

    <div class="hlRoute"></div>
  
<div className="partTwo">
<p>Vegan. When I first heard the word and understood the meaning I was baffled. Why would anyone willingly limit their dietary choices? How on earth can that be healthy? I understood why people may go vegetarian, but vegan? Not so much. After all, cows don’t die in order to produce milk.
“What made you go vegan?” that’s probably the most common question I get. “I like animals.” people don’t usually like that answer.
After eating meat for 19 years of my life and with steak being my favourite food, I never could have imagined myself making such a drastic lifestyle change. I used to believe that killing animals for food was OK, because we need food to survive. I firmly drew the line at wearing animals however, which I can now see is extremely hypocritical.
I have now been vegan for 2 and a half years and honestly believe it’s the best decision I’ve ever made. Before this change I was anaemic for a couple of years, not badly, but enough for me to feel tired and drained most of the time. Although going vegetarian didn’t change that, going vegan did. My eyes were opened to things I had never eaten before, making me care about my food and where it came from. I no longer felt guilty about what I was eating.</p>
</div>
         </div>
            
          <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button">Create New </button>
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
      <button onClick={toggleCreateNewPost} className="button">Create New </button>
      </section>
        </section>
        
        </div>
      )}

      
    </div>
  );
};
export default PublicRouteTwo;
import { createContext, useContext, useState } from 'react';

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  const getPosts = userId => {
    return posts ? posts.filter(post => post.userId === userId) : null;
  };
  const addPost = post => {
    setPosts([...posts, post]);
  };

  return (
    <PostsContext.Provider value={{ setPosts, getPosts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

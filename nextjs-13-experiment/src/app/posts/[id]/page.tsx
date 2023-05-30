import React from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async ({ params: { id } }: any) => {
  console.log(id);
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result: Post = await data.json();
  return (
    <>
      <p>{result.id}</p>
      <p>{result.title}</p>
      <p>{result.body}</p>
    </>
  );
};

export default Post;

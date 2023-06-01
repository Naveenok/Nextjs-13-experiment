import React from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  params: {
    id: string;
  }
}

const Post = async ({ params }: PostProps) => {

  /** { id: '3' } - dynamic value will be sent as params */
  console.log(params);
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
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

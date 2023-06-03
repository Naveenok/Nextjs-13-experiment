import Link from "next/link";
import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/** used to add meta data to the posts route */
export const metadata = {
  title: "Posts",
  description: "Lists of posts",
};
const Posts = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { cache: 'no-store' }
  );
  const result: Post[] = await data.json();

  console.log(result);

  return (
    <>
      {result.map((data: Post) => (
        <Link href = {`/posts/${data.id}`} key={data.id}>
          <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>
            <br />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;

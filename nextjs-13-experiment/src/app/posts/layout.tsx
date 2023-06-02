import React from "react";

const PostLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      {/* this nav section will be shown for all the routes under /posts/** */}
      <nav>Inside the postLayout</nav>
      <br />
      {children}
    </section>
  );
};

export default PostLayout;

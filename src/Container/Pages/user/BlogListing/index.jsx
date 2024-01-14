import React from "react";
import "./index.css";
import { useGlobalContext } from "../../../context";
import BlogingCard from "../../../Components/blogingcard";
const BlogListing = () => {
  const { user } = useGlobalContext();
  return (
    <section className="bloglistinfo">
      <div className="bloglisting">
        <div className="innerdata">
          <div className="text-center">
            <h2 className="text-white text-capitalize">
              Let's go <span className="usernamecolor"> {user?.name}</span>{" "}
              Looking farward with You
            </h2>
            <p className="text-white">
              Content Writing 101: A Guide to Creating High-Quality Content
              Content writing is the process of planning, writing, and
              publishing written material, such as articles, blog posts, product
              descriptions, and marketing copy, that is intended for online
              consumption. Thinking your Ideas.Go head and set your goal with
              Firenze.
            </p>
          </div>
        </div>
      </div>
      <section className="bloginglistdata">
        <BlogingCard />
      </section>
    </section>
  );
};

export default BlogListing;

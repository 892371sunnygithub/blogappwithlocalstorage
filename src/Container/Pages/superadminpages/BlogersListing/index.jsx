import React, { useEffect } from "react";
import "./index.css";
import { useGlobalContext } from "../../../context";
import { Badge } from "react-bootstrap";
const BlogersListing = () => {
  const { blogs, setBlogs, getBlogsDataFromLocalStorage } = useGlobalContext();
  const TableHead = ["Sno", "User Name", "Category", "Status"];
  const uniquebloger = Array.from(
    new Set(blogs.map((item) => item.userid))
  ).map((userid) => {
    const blog = blogs.find((item) => item.userid === userid);
    return {
      userid: blog.userid,
      username: blog.username,
      category: blog.blogtitle,
    };
  });
  useEffect(() => {
    setBlogs(getBlogsDataFromLocalStorage());
  }, []);

  return (
    <div className="userlisting">
      <h4 className="mb-0">BLOGERS LISTING </h4>
      <div className="tabledata">
        <table className="table table-responsive">
          <thead>
            <tr>
              {TableHead.map((curElm, index) => (
                <th key={index}>{curElm} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {uniquebloger && uniquebloger.length > 0 ? (
              uniquebloger.map((curElm, index) => (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>{curElm.username} </td>
                  <td>{curElm.category} </td>
                  <td>
                    <Badge bg={"success"}>Active</Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={TableHead.length}>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogersListing;

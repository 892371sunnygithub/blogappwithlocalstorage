import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useGlobalContext } from "../../../context";
import { toast } from "react-toastify";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.css";
const UpdateBlog = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { blogs, setBlogs, getBlogsDataFromLocalStorage } = useGlobalContext();
  const [formData, setFormData] = useState({
    userid: "",
    username: "",
    blogid: "",
    blogtitle: "",
    blogpara: "",
    blogimage: "",
  });
  const { id } = useParams();
  const { userid, blogtitle, blogpara, blogimage } = formData;
  const singleBlog = blogs.find((curElm) => curElm.blogid === id);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, blogimage: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const updateBlogDataToLocalStorage = (formData) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.blogid === id) {
        return { ...blog, ...formData };
      }
      return blog;
    });
    localStorage.setItem("blogDataArray", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blogtitle && !blogpara && !blogimage) {
      toast.error("All fields are required");
    } else if (!blogtitle) {
      toast.error("blog title is required");
    } else if (!blogpara) {
      toast.error("blog paragraph is required");
    } else if (!blogimage) {
      toast.error("blog image is required");
    } else {
      updateBlogDataToLocalStorage(formData);
      navigate(`/user/blogs/${userid}`);
      toast.success("blog updated");
    }
  };

  useEffect(() => {
    setBlogs(getBlogsDataFromLocalStorage());
  }, []);

  useEffect(() => {
    if (singleBlog) {
      setFormData({
        ...formData,
        userid: singleBlog?.userid,
        username: singleBlog?.username,
        blogid: singleBlog?.blogid,
        blogtitle: singleBlog?.blogtitle,
        blogpara: singleBlog?.blogpara,
        blogimage: singleBlog?.blogimage,
      });
    }
  }, [singleBlog]);

  return (
    <div className="updateblog pt-4">
      <div className="container">
        <h4 className="text-center">Blog Update</h4>
        <div className="row">
          <div className="col-md-8 mx-auto text-white">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label className="text-black">Blog Title</Form.Label>
                <Form.Control
                  name="blogtitle"
                  value={blogtitle}
                  onChange={handleInput}
                  type="text"
                  placeholder="Enter blog title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPara">
                <Form.Label className="text-black">About Blog</Form.Label>
                <Form.Control
                  name="blogpara"
                  value={blogpara}
                  onChange={handleInput}
                  as="textarea"
                  placeholder="Leave a blog para"
                  style={{ height: "150px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-none" controlId="formBasicPicture">
                <Form.Label>Blog Image</Form.Label>
                <Form.Control
                  name="blogimage"
                  ref={fileInputRef}
                  onChange={handleImage}
                  type="file"
                  placeholder="Enter blog picture"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicImages">
                <Form.Label className="text-black">Blog Image</Form.Label>
                <img
                  src={blogimage}
                  className="updateimage"
                  alt="update blog image"
                  onClick={() => fileInputRef.current.click()} // Trigger file input click
                />
              </Form.Group>

              <Button variant="secondary" type="submit">
                Update Blog
              </Button>
              <NavLink
                className={"btn btn-danger ms-2"}
                to={`/user/blogs/${userid}`}
              >
                Cancel
              </NavLink>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;

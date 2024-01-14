import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import uniqid from "uniqid";
import { useGlobalContext } from "../../../context";
import "./index.css";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const navigate = useNavigate();
  const { user, setBlogs } = useGlobalContext();
  const [formData, setFormData] = useState({
    userid: "",
    username: "",
    blogid: uniqid(),
    blogtitle: "",
    blogpara: "",
    blogimage: "",
  });

  const { userid, blogtitle, blogpara, blogimage } = formData;
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

  const saveBlogDataToLocalStorage = (formData) => {
    const existingData =
      JSON.parse(localStorage.getItem("blogDataArray")) || [];
    const updatedData = [...existingData, formData];
    setBlogs(updatedData);
    localStorage.setItem("blogDataArray", JSON.stringify(updatedData));
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
      saveBlogDataToLocalStorage(formData);
      navigate(`/user/blogs/${userid}`);
      toast.success("blog created");
    }
  };

  useEffect(() => {
    if (user) {
      setFormData({ ...formData, userid: user?.id, username: user?.name });
    }
  }, [user]);
  return (
    <div className="createblog pt-4">
      <div className="container">
        <h4 className="text-center text-white">CREATE BLOG</h4>
        <div className="row">
          <div className="col-md-8 mx-auto text-white">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                  name="blogtitle"
                  value={blogtitle}
                  onChange={handleInput}
                  type="text"
                  placeholder="Enter blog title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPara">
                <Form.Label>About Blog</Form.Label>
                <Form.Control
                  name="blogpara"
                  value={blogpara}
                  onChange={handleInput}
                  as="textarea"
                  placeholder="Leave a blog para"
                  style={{ height: "150px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPicture">
                <Form.Label>Blog Image</Form.Label>
                <Form.Control
                  name="blogimage"
                  onChange={handleImage}
                  type="file"
                  placeholder="Enter blog picture"
                />
              </Form.Group>
              {blogimage && (
                <img src={blogimage} alt="blogimage" className="blogimage" />
              )}
              <Button variant="secondary" type="submit">
                Add Blog
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

export default CreateBlog;

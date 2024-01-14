import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGlobalContext } from "../../context";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { ImageProvider } from "../../Services/ImageProvider";
import { toast } from "react-toastify";
const BlogingCard = () => {
  const { getBlogsDataFromLocalStorage, user, blogs, setBlogs } =
    useGlobalContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const userblog = blogs.filter((curElm) => curElm.userid === id);
  const trashHandler = (id) => {
    if (window.confirm("Are You sure want to delete this blog")) {
      const updatedBlogs = blogs.filter((curElm) => curElm.blogid !== id);
      localStorage.setItem("blogDataArray", JSON.stringify(updatedBlogs));
      setBlogs(updatedBlogs);
      toast.success("Blog deleted successfully");
    }
  };
  const updateBlogHandler = (id) => {
    navigate(`/user/edit/blog/${id}`);
  };
  useEffect(() => {
    setBlogs(getBlogsDataFromLocalStorage());
  }, []);
  return (
    <section className="bloginglisthead">
      <div className="container">
        <div className="topbloginginfo pt-4 pb-4">
          <div className="infodata">
            <span>
              <img src={ImageProvider.ArtImage} alt="goalimage" />
            </span>
            <h4>Lets Drive and Achieve Your Goal </h4>
          </div>
        </div>
        <div className="blogheader">
          <h3 className="blogheading">
            <span> {user?.name}</span>'s blogs...{" "}
          </h3>
          <NavLink className="btn btn-secondary" to={"/user/create/blog"}>
            Create Blog
          </NavLink>
        </div>
        <div className="overflow">
          {userblog && userblog.length > 0 ? (
            userblog.map((curElm) => (
              <div className="row mt-2" key={curElm.blogid}>
                <div className="col-md-12">
                  <Card>
                    <Card.Img
                      variant="top"
                      className="blogingcardimage"
                      src={curElm.blogimage}
                    />
                    <Card.Body>
                      <Card.Title className="text-uppercase">
                        {curElm.blogtitle}{" "}
                      </Card.Title>
                      <Card.Text className="cardpara customscroll">
                        {curElm.blogpara}
                      </Card.Text>
                      <div className="">
                        <Button
                          variant="secondary"
                          onClick={() => updateBlogHandler(curElm.blogid)}
                        >
                          Update Blog
                        </Button>
                        <Button
                          variant="danger ms-2"
                          onClick={() => trashHandler(curElm.blogid)}
                        >
                          Delete Blog{" "}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">you have not any blog yet </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogingCard;

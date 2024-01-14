import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { Card } from "react-bootstrap";
import "./index.css";
import ReadMoreBlogPara from "../../Components/ReadMoreBlogPara";
import SimpleRating from "../../Components/SimpleRating";
const Blogs = () => {
  const { blogs, setBlogs, getBlogsDataFromLocalStorage } = useGlobalContext();
  const [show, setShow] = useState(false);
  const [para, setPara] = useState("");
  const readmorehandler = (para) => {
    setShow(true);
    setPara(para);
  };

  useEffect(() => {
    setBlogs(getBlogsDataFromLocalStorage());
  }, []);

  return (
    <div className="blogsWrapper">
      <div className="container">
        <h2 className="text-center mt-2">BLOGS LISTING</h2>
        <div className="cardWrapper">
          <div className="row">
            {blogs && blogs.length > 0 ? (
              blogs.map((curElm) => (
                <div className="col-md-4 mb-3" key={curElm.blogid}>
                  <Card>
                    <Card.Img variant="top" src={curElm.blogimage} />
                    <Card.Body>
                      <Card.Title className="text-uppercase">
                        {curElm.blogtitle}s
                      </Card.Title>
                      <Card.Text className="line_clamp">
                        {curElm.blogpara}
                      </Card.Text>
                    </Card.Body>
                    <div className="userifo d-flex justify-content-between p-3 align-items-center">
                      <button
                        className="btn btn-secondary btn-sm text-white"
                        onClick={() => readmorehandler(curElm.blogpara)}
                      >
                        Read More
                      </button>
                      <h6 className="text-capitalize ps-2 mb-0">
                        Blogger {curElm.username}
                      </h6>
                    </div>
                    <div className="ownreview mt-2">
                      <SimpleRating />
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-center mt-4">blogs not found</p>
            )}
          </div>
        </div>
      </div>
      {show && (
        <ReadMoreBlogPara
          show={show}
          paragraph={para}
          hide={() => setShow(false)}
        />
      )}
    </div>
  );
};

export default Blogs;

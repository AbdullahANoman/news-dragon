import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, author, total_view, rating,category_id } = news;
  const location = useLocation();

  console.log(location)
  const { id } = useParams();
  console.log(id);
  return (
    <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/categories/${category_id}`}><Button variant="primary" className="bg-danger"> <FaArrowLeft></FaArrowLeft> All News In This Category</Button></Link>
        
      </Card.Body>
    </Card>
  );
};

export default News;

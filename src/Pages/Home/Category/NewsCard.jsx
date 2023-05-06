import React from "react";
import { Card } from "react-bootstrap";
import "./NewsCard.css";
import moment from "moment";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
//   console.log(news);
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4  ">
        <Card.Header className="d-flex gap-2 align-content-center ">
          <div className="d-flex gap-2 align-items-center flex-grow-1">
            <div>
              <Card.Img
                src={author.img}
                className="img-fluid rounded rounded-circle img-width"
              />
            </div>
            <div>
              <p className="m-0">{author.name}</p>
              <p className="m-0">
                {moment(author.published_date).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? details : details.slice(0, 250)}...<Link to={`/news/${_id}`}>see more</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={
                <FaRegStar></FaRegStar>
              }
              placeholderSymbol={
                <FaStar className="text-danger"></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
            /> <small>{rating.number}</small>
          </div>
          <div>
            <FaEye className="me-2"></FaEye>
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;

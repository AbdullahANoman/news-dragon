import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Categories from "./Categories";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
        <h4><p>All Categories</p></h4>
        <div>
            {
                categories.map(data=>(
                    <Link to={`categories/${data.id}`} className="text-decoration-none text-black" key={data.id}>< p className="border p-2 border-2 ">{data.name}</p></Link>
                ))
            }
        </div>
    </>
  );
};

export default LeftNav;

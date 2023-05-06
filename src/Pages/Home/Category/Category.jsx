import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import NavigationBar from "../NavigatioBar/NavigationBar";

const Category = () => {
  const categoryNews = useLoaderData();

  const { id } = useParams();

  return (
    <>
      
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </>
  );
};

export default Category;

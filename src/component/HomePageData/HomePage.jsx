import axios, { all } from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

const HomePage = () => {
  const [allArticle, setAllArticle] = useState([]);
  useEffect(() => {
    const getAllarticle = async () => {
      try {
        const response = await axios.get(
          "https://practice-backend-server.vercel.app/create-post/articles"
        );
        setAllArticle(response.data);
      } catch (err) {
        console.log(`internal server error ${err.message}`);
      }
    };
    getAllarticle();
  }, []);
  console.log(allArticle);
  return (
    <div className="w-[98%] m-auto mt-[2rem] mb-[2rem] grid md:grid-cols-4 gap-y-[2rem] grid-rows-auto grid-cols-1">
      {allArticle.map((article) => (
        <ArticleCard
          title={article.title}
          description={article.description}
          category={article.category}
        />
      ))}
    </div>
  );
};

export default HomePage;

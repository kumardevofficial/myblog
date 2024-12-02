import axios, { all } from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "../HomePageData/ArticleCard";
import Loading from "../HomePageData/Loading";

const GeneralNews = () => {
  const [AllGeneralArticle, setAllGeneralArticle] = useState([]);
  useEffect(() => {
    const getAllarticle = async () => {
      try {
        const response = await axios.get(
          "https://practice-backend-server.vercel.app/create-post/general"
        );
        setAllGeneralArticle(response.data);
      } catch (err) {
        console.log(`internal server error ${err.message}`);
      }
    };
    getAllarticle();
  }, []);
  // console.log(AllGeneralArticle);
  return (
    <>
      {AllGeneralArticle.length ? (
        <div className="w-[98%] m-auto mt-[2rem] mb-[2rem] grid md:grid-cols-4 gap-y-[2rem] grid-rows-auto grid-cols-1">
          {AllGeneralArticle.map((article) => (
            <ArticleCard
              title={article.title}
              description={article.description}
              category={article.category}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default GeneralNews;

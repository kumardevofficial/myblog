const ArticleCard = ({ title, description, category }) => {
  return (
    <div className="w-[15rem] h-[15rem] bg-yellow-300 m-auto rounded-xl">
      <div className="w-full h-[50%] bg-gray-300 rounded-tl-lg rounded-tr-xl">
        IMAGE
      </div>
      <div className="w-full h-[14%] bg-red-300">{title}</div>
      <div className="w-full h-[24%] bg-green-300">{description}</div>
      <div className="w-full h-[12%] bg-gray-500 rounded-bl-lg rounded-br-lg">
        {category}
      </div>
    </div>
  );
};

export default ArticleCard;

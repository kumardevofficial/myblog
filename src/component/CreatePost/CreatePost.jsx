import { useEffect, useState } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    discription: "",
    category: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setFormData({
      title: "",
      discription: "",
      category: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // useEffect(() => {
  //   const submitForm = () => {
  //     try{

  //     } catch {

  //     }
  //   }
  //   submitForm()
  // }, [])

  return (
    <div className="w-[30rem] m-auto mt-[2rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <div>
          <div>
            <label htmlFor="title" className="text-xl ">
              Title <span className="text-red-700 ">*</span>:
            </label>
          </div>
          <div className="border border-black rounded-lg  w-[30rem] box-border px-2">
            <input
              type="text"
              required
              className=" rounded-md w-[28rem] h-[3rem] outline-none"
              value={formData.name}
              onChange={handleChange}
              name="title"
            />
          </div>
        </div>
        <div>
          <div>
            <label className="text-xl " htmlFor="discription">
              Discription <span className="text-red-700 ">*</span>:
            </label>
          </div>
          <div className="border border-black rounded-lg w-[30rem] box-border p-2 ">
            <textarea
              required
              className=" rounded-md w-[28rem] h-[15rem] outline-none"
              rows={15}
              cols={60}
              value={formData.discription}
              onChange={handleChange}
              name="discription"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>
            <label className="text-xl" htmlFor="category">
              Category <span className="text-red-700 ">*</span> :
            </label>
          </div>
          <div className="border-2 border-black rounded-lg ">
            <select
              value={formData.category}
              onChange={handleChange}
              className=" rounded-md w-[21rem] h-[3rem]"
              name="category"
            >
              <option value="politics">Politics</option>
              <option value="technology">Technolgy</option>
              <option value="general">General</option>
              <option value="food">Food</option>
            </select>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>
            <label className="text-xl" htmlFor="postImage">
              {" "}
              Post Image :
            </label>
          </div>
          <div>
            <input type="file" />
          </div>
        </div>
        <div className="flex justify-center gap-x-[3rem] w-[100%]">
          <button
            type="reset"
            className="bg-blue-500 text-2xl h-[2.5rem] w-[50%] rounded-lg flex justify-center items-center"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-2xl h-[2.5rem] w-[50%] rounded-lg flex justify-center items-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

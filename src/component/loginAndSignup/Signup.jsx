const Signup = ({ chooseStatus }) => {
  const changeStatus = (switchToLogin) => {
    chooseStatus(switchToLogin);
  };
  return (
    <>
      <form action="#" className=" mt-4 rounded-xl">
        <div className="w-full  box-border flex flex-col gap-y-2">
          <div className="w-[90%] m-auto">
            <label htmlFor="name" className="text-2xl ">
              {" "}
              Name :{" "}
            </label>
          </div>
          <div className="w-[90%] m-auto myShadow rounded-xl">
            <input
              type="text"
              className="shadow-md w-[100%] h-[3rem] rounded-xl "
            />
          </div>
        </div>
        <div className="w-full  box-border flex flex-col gap-y-2">
          <div className="w-[90%] m-auto">
            <label htmlFor="email" className="text-2xl ">
              {" "}
              Email :{" "}
            </label>
          </div>
          <div className="w-[90%] m-auto myShadow rounded-xl">
            <input
              type="email"
              className="shadow-md w-[100%] h-[3rem] rounded-xl "
            />
          </div>
        </div>
        <div className="w-full  box-border flex flex-col gap-y-2">
          <div className="w-[90%] m-auto">
            <label htmlFor="password" className="text-2xl ">
              Password :
            </label>
          </div>
          <div className="w-[90%] m-auto  myShadow rounded-xl">
            <input
              type="password"
              className=" w-[100%] h-[3rem] rounded-xl m-auto"
            />
          </div>
        </div>
        <div className="w-full  box-border flex flex-col gap-y-2">
          <div className="w-[90%] m-auto">
            <label htmlFor="confirm-password" className="text-2xl ">
              Confirm Password :
            </label>
          </div>
          <div className="w-[90%] m-auto  myShadow rounded-xl">
            <input
              type="password"
              className=" w-[100%] h-[3rem] rounded-xl m-auto"
            />
          </div>
        </div>
        <div className="w-[90%] bg-green-400 h-[3rem] rounded-xl m-auto mt-6 flex justify-center items-center font-bold text-2xl text-green-900">
          Button
        </div>
        <div className="w-[90%] m-auto text-center font-bold">
          Already have an acccount |{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              changeStatus(true);
            }}
          >
            Signin here
          </span>
        </div>
      </form>
    </>
  );
};

export default Signup;

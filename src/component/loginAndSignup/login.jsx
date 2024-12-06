import "../../App.css";
const Login = ({ chooseStatus }) => {
  const changeStatus = (switchToSignup) => {
    chooseStatus(switchToSignup);
  };
  return (
    <>
      <form action="#" className=" mt-4 rounded-xl">
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
        <div className="w-[90%] bg-green-400 h-[3rem] rounded-xl m-auto mt-6 flex justify-center items-center font-bold text-2xl text-green-900">
          Button
        </div>
        <div className="w-[90%] m-auto text-center font-bold">
          dont have acount |{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              changeStatus(false);
            }}
          >
            Signup
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;

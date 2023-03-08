export default function LoginPageForm() {
  return (
    <div className="container bg-white w-[25rem] p-[25px] h-[35rem] flex-0 justify-start my-[7rem] rounded-tr rounded-br">
      <div className="container flex flex-col mx-2 my-10">
        <p className="text-[32px] font-bold my-4">Login</p>
        <form>
          <input
            type="text"
            name="loginUsername"
            placeholder="Username"
            className="appearance-none border-b py-2 mb-4 leading-tight focus:outline-none my-10 w-[15rem]"
          />
          <br></br>
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            className="appearance-none border-b py-2 mb-4 leading-tight focus:outline-none my-10 w-[15rem]"
          />
        </form>
        <button className="bg-violet-300 py-2 w-[12rem] my-5 rounded-lg">Login</button>
      </div>
    </div>
  );
}

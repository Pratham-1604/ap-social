import Link from "next/link";


export default function LoginPageForm() {
  return (
    <div className="container bg-white w-[25rem] px-[25px] py-[10px] h-[35rem] flex-0 justify-start my-[7rem] rounded-tl rounded-bl">
      <div className="container flex flex-col mx-2 mt-4 mb-3">
        <p className="text-[32px] font-bold mt-4">Register</p>
        <form>
          <input
            type="text"
            name="registerName"
            placeholder="Name"
            className="appearance-none border-b py-2 mb-2 leading-tight focus:outline-none my-10 w-[15rem]"
          />
          <br></br>
          <input
            type="text"
            name="registerUsername"
            placeholder="Username"
            className="appearance-none border-b py-2 mb-2 leading-tight focus:outline-none my-10 w-[15rem]"
          />
          <br></br>
          <input
            type="email"
            name="registerEmail"
            placeholder="Email"
            className="appearance-none border-b py-2 mb-2 leading-tight focus:outline-none my-10 w-[15rem]"
          />
          <br></br>
          <input
            type="password"
            name="registerPassword"
            placeholder="Password"
            className="appearance-none border-b py-2 mb-4 leading-tight focus:outline-none my-10 w-[15rem]"
          />
        </form>
        <Link href="/home">
          <button className="bg-violet-300 py-2 w-[12rem] my-5 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

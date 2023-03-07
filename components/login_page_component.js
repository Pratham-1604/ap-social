export default function LeftSideComponent() {
  return (
    <>
      <div className="container bg-purple-800 p-[25px] w-[25rem] h-[35rem] rounded-tl rounded-bl flex-0 flex-row my-[7rem]">
        <div className="container px-2 py-2 text-white">
          <ul>
            <li>
              <h1 className="font-bold text-[48px]">Hello World.</h1>
            </li>
            <li>
              <div className="container  w-[20rem] py-2 px-2 my-2">
                <p>Welcome to our social media platform!</p>
                <p>
                  Connect with friends and family, and stay up-to-date with the
                  latest news and trends.
                </p>
                <p>So what are you waiting for? </p>
                <p>Log in now and start sharing your world with us!</p>
              </div>
            </li>
            <li className="my-8">
              <h3>Don't have an account?</h3>
            </li>
          </ul>
          <button className="bg-white text-purple-600  w-[12rem] rounded-lg py-2">
            Register
          </button>
        </div>
      </div>
    </>
  );
}

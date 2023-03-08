import Link from "next/link";

export default function LeftSideComponent() {
  return (
    <>
      <div className="container bg-purple-800 px-[25px] py-[10px] w-[25rem] h-[35rem] rounded-tl rounded-bl flex-0 flex-row my-[7rem]">
        <div className="container px-2 py-2 text-white">
          <ul>
            <li>
              <h1 className="font-bold text-[48px]">Hello World.</h1>
            </li>
            <li>
              <div className="container  w-[20rem] py-2 px-2 my-2">
                <p>Welcome to our social media platform!</p>
                <p>
                Here, you can create an account to connect with friends, family, and other like-minded individuals from around the world.
                </p>
                <p>By joining our community, you'll have access to a wealth of features that will help you stay connected and engaged with the people and things you love.  </p>
                <p>Thank you for choosing our social media platform, and we look forward to seeing you online!</p>
              </div>
            </li>
            <li className="my-4">
              <h3>Don't have an account?</h3>
            </li>
          </ul>
          <Link href="/register">
            <button className="bg-white text-purple-600  w-[12rem] rounded-lg py-2">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

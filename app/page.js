// import "./global.css";
import LoginPageForm from "@/components/login_page_form";
import LoginPageComponent from "../components/login_page_component";

export default function Home() {
  return (
    <>
      <body className="bg-violet-300">
        <div className="flex justify-center">
          <LoginPageComponent />
          <LoginPageForm />
        </div>
      </body>
    </>
  );
}

// import "./global.css";
import LoginPageComponent from '../components/login_page_component'

export default function Home() {
  return (
    <>
      <body className="bg-purple-900">
        <div className="flex justify-center">
          <LoginPageComponent/>
        </div>
      </body>
    </>
  );
}

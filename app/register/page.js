import RegisterPageForm from "@/components/register page/register_page_form";
import RegisterPageComponent from "@/components/register page/register_page_component";

export default function Home() {
  return (
    <>
      <body className="bg-violet-300">
        <div className="flex justify-center">
          <RegisterPageForm />
          <RegisterPageComponent />
        </div>
      </body>
    </>
  );
}

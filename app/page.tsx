import Feed from "@component/Feed";
import Nav from "@component/Nav";
import "@styles/globals.css";
export default function Home() {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <Nav />
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="text-center mt-5">
            Prompting is an open-source AI Prompting tool for modern world to
            discorver, create and share creative prompts
          </p>
        <Feed />
      </section>
    </>
  );
}

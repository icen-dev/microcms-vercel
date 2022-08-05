import type { NextPage } from "next";
import { useContext } from "react";
import { AppContext } from "pages/_app";
import Link from "next/link";

const Home: NextPage = () => {
  const { count, setCount } = useContext(AppContext);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>{count}</p>
      <button
        className="bg-slate-500 px-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        test
      </button>
      <Link href="blog">to Bloglist</Link>
    </div>
  );
};

export default Home;

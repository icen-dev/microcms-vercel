// pages/blog/[id].js
import { useContext } from "react";
import { client } from "libs/microcms/client";
import { AppContext } from "pages/_app";
import Link from "next/link";

export default function BlogId({ blog }: any) {
  const { count, setCount } = useContext(AppContext);

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>Context Count:{count}</p>
      <button
        className="bg-slate-500 px-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        test
      </button>
      <Link href="/">to Index</Link>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

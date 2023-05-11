import React from "react";
import { Metadata } from "next";

// for optimized performance with static pages
export function generateStaticParams() {
  //normally I would fetch the posts here and the map through them like here https://nextjs.org/docs/app/api-reference/functions/generate-static-params
  return [{ postId: "1" }, { postId: "2" }, { postId: "3" }];
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  return {
    title: data.title,
  };
}

interface Post {
  userId: 1;
  id: number;
  title: string;
  bodu: string;
}

interface PostProps {
  params: {
    postId: string;
  };
}

// export const dynamic = "force-dynamic";
// export const revalidate = 10;
const Post = async ({ params }: PostProps) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    {
      next: {
        // res is cached for 10 seconds, then if the user enters the page again after at least 10 secs, the request is run again
        //an alternative to this is using the export const revalidate = 10; -> that way I don't have to use the native fetch api if I don't want ot (I can use axios for example)
        revalidate: 10,
      },
    }
  );
  const { postId } = params;
  console.log({ postId });
  const data = await res.json();
  return <div>post {data?.title}</div>;
};

export default Post;

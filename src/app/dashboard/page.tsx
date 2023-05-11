import React from "react";
import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Page = async () => {
  await wait(2000);
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return <div>{data?.title}</div>;
};

export default Page;

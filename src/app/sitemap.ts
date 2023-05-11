interface Post {
  userId: 1;
  id: number;
  title: string;
  bodu: string;
}
export default async function sitemap() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const allPosts = (await res.json()) as Post[];
  // dynamic routes
  const posts = allPosts.map((post) => ({
    url: `http://localhost:3000/post/${post.id}`,
    lastModified: new Date().toISOString(),
  }));
  //static routes
  const routes = ["", "/about", "/post"].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}

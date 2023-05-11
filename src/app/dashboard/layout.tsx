export const metadata = {
  title: "Dashboard of blog",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={"bg-zinc-900 text-white"}>{children}</div>;
}
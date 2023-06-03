import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

/** used to add meta data to whole app */
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  parallelroute1,
  parallelroute2,
}: {
  children: React.ReactNode;
  parallelroute1?: any;
  parallelroute2?: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* This nav section will be shown for the whole app and this is rendered only once no new instances */}
        <nav>
          <Link href="/">Home </Link>
          <Link href="/posts">Posts </Link>
          <Link href="/client">Client </Link>
          <Link href="/navigation">Navigation </Link>
          <Link href="/navigation/client-navigation">Client-Navigation </Link>
          <Link href="/post-feed-suspense">post-feed-suspense </Link>
        </nav>
        <br />
        <>
          {children}
          {/** these slots will be rendered paralelly on common route but if route is
           * missed in any slot then default.tsx file will be rendered and if that file
           * is not there then 404 page will be rendered
           */}
          {parallelroute1}
          {parallelroute2}
        </>
      </body>
    </html>
  );
}

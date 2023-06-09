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
}: {
  children: React.ReactNode;
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
          <Link href="/route-parallel">route-parallel </Link>
          <Link href="/route-interception/login">Log in </Link>
          <Link href="/route-interception/login-interception">
            login-interception
          </Link>
          <Link href="/parallel-data-fetching">Parallel-data-fetching </Link>
          <Link href="/parallel-data-fetching/parallel-data-fetching-suspense">Parallel-data-fetching-suspense </Link>
          <Link href="/sequential-data-fetching">sequential-data-fetching</Link>
        </nav>
        <br />
        <>{children}</>
      </body>
    </html>
  );
}

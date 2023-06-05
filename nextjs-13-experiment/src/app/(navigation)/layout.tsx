import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/** used to add meta data to whole app */
export const metadata = {
  title: "Navigation",
  description: "layout for navigation group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        {/* this nav section will be shown for all the routes under (navigation) group */ }
      <nav>Layout for the navigation group</nav>
      <br />
      {children}
    </section>
  );
}

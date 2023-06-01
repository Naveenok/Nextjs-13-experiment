'use client';
 
import { usePathname } from 'next/navigation';
import Link  from 'next/link';
 
const navLinks = ["/posts","/client","/navigation"];
export default function Navigation() {
  const pathname = usePathname();

  /** /navigation will be printed */
  console.log(pathname)
 
  return (
    <>
      {navLinks.map((link:string) => {
        const isActive = pathname.startsWith(link);
 
        return (
          <Link
            href={link}
            key={link}
          >
            {isActive ? <b>{link}</b> : link}
          </Link>
        );
      })}
    </>
  );
}
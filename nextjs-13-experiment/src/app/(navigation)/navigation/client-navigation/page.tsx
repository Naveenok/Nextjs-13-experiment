'use client';
 
import { useRouter } from 'next/navigation';
 
export default function ClientNavigation() {
    /** similar to Link but this will be used in the client side */
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/')}>
      Go HomeHome
    </button>
  );
}
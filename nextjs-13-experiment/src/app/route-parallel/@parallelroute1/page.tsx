import { Suspense } from "react";
import Loading from "./loading";

const serviceCall1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 5000);
  });

const ServiceCallComponent1 = async () => {
  const result = await serviceCall1();
  console.log(result);
  return <>{result}</>;
};

export default function PostSuspense() {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <ServiceCallComponent1 />
      <br />
    </section>
  );
}

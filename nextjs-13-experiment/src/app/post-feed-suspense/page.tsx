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

const serviceCall2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 10000);
  });

const ServiceCallComponent2 = async () => {
  const result = await serviceCall2();
  console.log(result);
  return <>{result}</>;
};

const serviceCall3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("service call 3 failed");
    }, 10000);
  });

const ServiceCallComponent3 = async () => {
  const result = await serviceCall3();
  console.log(result);
  return <>{result}</>;
};

export default function PostSuspense() {
  return (
    <section>
      {/** since we have the suspense for 2 different async component the one won't wait for the other
       * if the first one is done it will render the first one and then the second one
       * If we don't have the suspense both will be rendered at same time(after 10 seconds)
       */}
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <ServiceCallComponent1 />
      </Suspense>
      <br />
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <ServiceCallComponent2 />
      </Suspense>
      <br />
      {/** This is used to check the error boundary */}
      {/* <ServiceCallComponent3 /> */}
    </section>
  );
}

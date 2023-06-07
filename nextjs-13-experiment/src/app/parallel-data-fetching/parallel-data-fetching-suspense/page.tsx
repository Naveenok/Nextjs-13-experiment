import { Suspense } from "react";

const serviceCall1 = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 5000);
  });

const serviceCall2 = (): Promise<string> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 10000);
  });

const ParallelDataFetching2 = async ({ promise }: any) => {
  const data2 = await promise;

  return <>{data2}</>;
};

export default async function ParallelDataFetching1() {
  const data1: Promise<string> = serviceCall1();
  const data2: Promise<string> = serviceCall2();

  const response1 = await data1;
  return (
    <section>
      {response1}
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <ParallelDataFetching2 promise={data2} />
      </Suspense>
    </section>
  );
}

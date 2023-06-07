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

const SequentialDataFetching2 = async () => {
  const data2 = await serviceCall2();

  return <>{data2}</>;
};

export default async function SequentialDataFetching1() {
  const response1 = await serviceCall1();
  return (
    <section>
      {response1}
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <SequentialDataFetching2 />
      </Suspense>
    </section>
  );
}

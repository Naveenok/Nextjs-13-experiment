const serviceCall1 = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 10000);
  });

const serviceCall2 = (): Promise<string> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 5000);
  });

export default async function ParallelDataFetching() {
  const data1: Promise<string> = serviceCall1();
  const data2: Promise<string> = serviceCall2();

  // if any promise is rejected then the whole promise will be rejected
  // and error thrown immediately
  const [response1, response2] = await Promise.all([data1, data2]);
  return (
    <section>
      {response1}
      <br />
      {response2}
    </section>
  );
}

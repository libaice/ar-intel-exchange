import BaseLayout from "components/layout/BaseLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <BaseLayout>
        <h1 className="text-3xl font-bold underline">Hello world</h1>
      </BaseLayout>
    </>
  );
};

export default Home;

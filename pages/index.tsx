import type { NextPage } from "next";
import Head from "next/head";
import WelcomePrint from "../components/WelcomePrint";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CYPHERHAUS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header className="pt-8 pb-4 flex justify-center mb-6">
        {/* <Logo /> */}
      </header>
      <main className="flex items-center flex-col gap-10">
        <WelcomePrint />
        <div className="flex w-full justify-center pt-8">Coming Soon.</div>
      </main>
    </div>
  );
};

export default Home;

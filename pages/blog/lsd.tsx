import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Logo } from "../../components/Logo";
import { Code } from "../../components/common/Code";
import Link from "next/link";
import { Button } from "../../components/common/Button";
import { Heading } from "../../components/common/Heading";
import { CopyBlock } from "react-code-blocks";
import {
  BALANCE_AFTER_PAYMENT,
  BALANCE_AFTER_SETTLEMENT,
  CREATE_CREDIT_ON_DEBIT_PAYMENT,
  CREATE_TX_ON_CHARGE,
  CREATE_TX_ON_WITHDRAWAL,
  CREATE_USER_ON_AUTH,
  LSD_ENV,
} from "../../constants/code";
import { cyhperhausStyle } from "../../constants/codeStyle";

const Blog: NextPage = () => {
  const router = useRouter();

  const handleDemoClick = () => router.push("https://lsd-demo.netlify.app");
  const handleCodeClick = () =>
    router.push("https://github.com/cypherhaus/lsd");

  return (
    <div>
      <Head>
        <title>CYPHERHAUS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header className="pt-8 pb-4 flex justify-center mb-6">
        <Link href="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>
      </header>
      <main className="pt-8 max-w-3xl m-auto">
        <Heading size="large">LSD (Lightning and Supabase Demo)</Heading>
        <p className="text-left leading-7">
          A serverless template app for frontend developers wanting to build
          Lightning Applications, using NextJS Supabase and ZEBEDEE.
        </p>
        <div className="flex flex-row gap-4 justify-center mt-6 mb-6">
          <Button onClick={handleCodeClick}>Source Code</Button>
        </div>
        <Heading size="medium">Introduction</Heading>
        <strong>Motivation</strong>
        <p className="text-left leading-7 mb-6 mt-2">
          Creating a lightning app can be complicated, thankfully ZEBEDEE make
          this much easier with their API for sending and receiving lightning
          payments. But still, to achieve a lightning app like Stacker News, you
          still need to think about the notion of account balances. I built this
          for myself to use as a starting point for lightning apps, but I hope
          others find it useful too.
        </p>
        <strong>Current Features</strong>
        <ul className="mt-4">
          <li>Sign up / login</li>
          <li>Pay another user</li>
          <li>Top up account</li>
          <li>Withdrawal to lightning address</li>
        </ul>
        <strong>Architecture</strong>
        <p className="text-left leading-7 mb-6 mt-2">
          The app was initiated with <a href="https://nextjs.org/">NextJS</a>.
        </p>

        <p className="text-left leading-7 mb-6 mt-2">
          <a href="https://supabase.com">Supabase</a> is used to handle account
          balances, store transaction and profile information, as well as for
          authentication. When transaction data records are inserted / updated,
          Supabase{" "}
          <a href="https://supabase.com/docs/guides/database/functions">
            Postgres Database Functions
          </a>{" "}
          enable the automatic update of account balances.{" "}
          <a href="https://supabase.com/docs/guides/realtime">
            Supabase Realtime
          </a>{" "}
          sends events to the client to enable interactivity in the app.
        </p>

        <p className="text-left leading-7 mb-6 mt-2">
          <a href="https://www.netlify.com/products/functions/">
            NextJS API routes
          </a>{" "}
          are used as a gateway to ZEBEDEE, an easy to use API that handles all
          of the Bitcoin/Lightning payments
        </p>
      </main>
    </div>
  );
};

export default Blog;

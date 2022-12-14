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
        <Heading size="large">Lightning and Supabase Demo (LSD)</Heading>
        <p className="text-left leading-7">
          A serverless template app for frontend developers wanting to build
          Lightning Applications, using Supabase, Netlify and ZEBEDEE.
        </p>
        <div className="flex flex-row gap-4 justify-center mt-6 mb-6">
          <Button onClick={handleDemoClick}>Demo</Button>
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
          The app was initiated with{" "}
          <a href="https://reactjs.org/docs/create-a-new-react-app.html">
            Create React App
          </a>
          .
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
            Netlify Serverless Functions
          </a>{" "}
          are used as a gateway to ZEBEDEE, an easy to use API that handles all
          of the Bitcoin/Lightning payments
        </p>

        <Heading size="medium">Initiate LSD</Heading>
        <strong>Create Accounts</strong>
        <p className="text-left leading-7 mb-6 mt-2">
          Create accounts for <a href="https://supabase.co">Supabase</a> and{" "}
          <a href="https://dashboard.zebedee.io">ZEBEDEE</a>. Create a new
          project on Supabase.
        </p>

        <strong>Setup Supabase Tables</strong>
        <p className="mt-2 mb-6">
          In the Supabase Dashboard, head to the Database section and create the
          following tables, with the following columns, and their relation to
          other table columns (if any) below. Make sure Realtime is enabled on
          every table you create.
        </p>

        <p className="mb-10 mt-10 text-center">
          <strong>profiles</strong>
        </p>
        <table className="mb-6">
          <tbody>
            <tr>
              <th>Column</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>
                id <br />
                (auth.users.id)
              </td>
              <td>uuid</td>
              <td>uuid_generate_v4()</td>
            </tr>
            <tr>
              <td>created_at</td>
              <td>timestamptz</td>
              <td>now()</td>
            </tr>
            <tr>
              <td>balance</td>
              <td>int8</td>
            </tr>
            <tr>
              <td>username</td>
              <td>text</td>
            </tr>
            <tr>
              <td>ln_address</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-8 mb-4">
          RLS: <Code>true</Code> Realtime: <Code>true</Code>
        </p>
        <hr />

        <p className="mb-10 mt-10 text-center">
          <strong>payments</strong>
        </p>
        <table className="mb-6">
          <tbody>
            <tr>
              <th>Column</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>id</td>
              <td>uuid</td>
              <td>uuid_generate_v4()</td>
            </tr>
            <tr>
              <td>created_at</td>
              <td>timestamptz</td>
              <td>now()</td>
            </tr>
            <tr>
              <td>
                user_id <br />
                (profiles.id)
              </td>
              <td>uuid</td>
            </tr>
            <tr>
              <td>debit</td>
              <td>int8</td>
              <td>0</td>
            </tr>
            <tr>
              <td>credit</td>
              <td>int8</td>
              <td>0</td>
            </tr>
            <tr>
              <td>debit_id</td>
              <td>uuid</td>
            </tr>
            <tr>
              <td>
                participant_id <br />
                (profiles.id)
              </td>
              <td>uuid</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-8 mb-4">
          RLS: <Code>false</Code> Realtime: <Code>false</Code>
        </p>
        <hr />

        <p className="mb-10 mt-10 text-center">
          <strong>charges</strong>
        </p>
        <table className="mb-6">
          <tbody>
            <tr>
              <th>Column</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>id</td>
              <td>uuid</td>
              <td>uuid_generate_v4()</td>
            </tr>
            <tr>
              <td>created_at</td>
              <td>timestamptz</td>
              <td>now()</td>
            </tr>
            <tr>
              <td>settled</td>
              <td>bool</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>int4</td>
            </tr>
            <tr>
              <td>
                user_id <br />
                (profiles.id)
              </td>
              <td>uuid</td>
            </tr>
            <tr>
              <td>expired</td>
              <td>bool</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-8 mb-4">
          RLS: <Code>false</Code> Realtime: <Code>true</Code>
        </p>
        <hr />

        <p className="mb-10 mt-10 text-center">
          <strong>settlements</strong>
        </p>
        <table className="mb-6">
          <tbody>
            <tr>
              <th>Column</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>id</td>
              <td>uuid</td>
              <td>uuid_generate_v4()</td>
            </tr>
            <tr>
              <td>created_at</td>
              <td>timestamptz</td>
              <td>now()</td>
            </tr>
            <tr>
              <td>settled</td>
              <td>bool</td>
              <td>false</td>
            </tr>
            <tr>
              <td>type</td>
              <td>text</td>
            </tr>
            <tr>
              <td>debit</td>
              <td>int8</td>
              <td>0</td>
            </tr>
            <tr>
              <td>credit</td>
              <td>int8</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                user_id <br />
                (profiles.id)
              </td>
              <td>uuid</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-8 mb-4">
          RLS: <Code>false</Code> Realtime: <Code>false</Code>
        </p>
        <hr />
        <p className="mb-10 mt-10 text-center">
          <strong>withdrawals</strong>
        </p>
        <table className="mb-6">
          <tbody>
            <tr>
              <th>Column</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
            <tr>
              <td>id</td>
              <td>uuid</td>
              <td>uuid_generate_v4()</td>
            </tr>
            <tr>
              <td>created_at</td>
              <td>timestamptz</td>
              <td>now()</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>int8</td>
            </tr>
            <tr>
              <td>ln_address</td>
              <td>text</td>
            </tr>
            <tr>
              <td>
                user_id <br />
                (profiles.id)
              </td>
              <td>uuid</td>
            </tr>
            <tr>
              <td>settled</td>
              <td>bool</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-8 mb-4">
          RLS: <Code>false</Code> Realtime: <Code>false</Code>
        </p>
        <hr />
        <strong>Setup DB Functions</strong>
        <p className="mt-2 mb-6">
          Head to the Functions section in the Database Dashboard of Supabase
          and add the following functions:
        </p>
        <p className="mb-6">
          A function to automatically create a new profile record when a user
          signs up:
        </p>
        <ul>
          <li>Name: create_user_on_auth</li>
          <li>Schema: public</li>
          <li>Return Type: Trigger</li>
          <li>Advanced Settings Security Type: SECURITY DEFINER</li>
          <li>Definition:</li>
          <CopyBlock
            text={CREATE_USER_ON_AUTH}
            language="sql"
            showLineNumbers={false}
            codeBlock
            theme={cyhperhausStyle}
            customStyle={{
              margin: "1.5rem 0",
            }}
          />
        </ul>

        <hr />

        <p className="mb-6">
          A function to a create transaction record whenever a withdrawal is
          initiated:
        </p>
        <ul>
          <li>Name: create_tx_on_withdrawal</li>
          <li>Schema: public</li>
          <li>Return Type: Trigger</li>
          <li>Advanced Settings Security Type: SECURITY DEFINER</li>
          <li>Definition:</li>
          <CopyBlock
            text={CREATE_TX_ON_WITHDRAWAL}
            language="sql"
            showLineNumbers={false}
            codeBlock
            theme={cyhperhausStyle}
            customStyle={{
              margin: "1.5rem 0",
            }}
          />
        </ul>
        <hr />
        <p className="mb-6">
          A function to automatically create a transaction record when a
          lightning charge is created:
        </p>
        <ul>
          <li>Name: create_tx_on_charge</li>
          <li>Schema: public</li>
          <li>Return Type: Trigger</li>
          <li>Advanced Settings Security Type: SECURITY DEFINER</li>
          <li>Definition:</li>
          <CopyBlock
            text={CREATE_TX_ON_CHARGE}
            language="sql"
            showLineNumbers={false}
            codeBlock
            theme={cyhperhausStyle}
            customStyle={{
              margin: "1.5rem 0",
            }}
          />
        </ul>
        <hr />
        <p className="mb-6">
          A function to create a credit record whenever a debit payment is made:
        </p>
        <ul>
          <li>Name: create_credit_on_debit_payment</li>
          <li>Schema: public</li>
          <li>Return Type: Trigger</li>
          <li>Advanced Settings Security Type: SECURITY DEFINER</li>
          <li>Definition:</li>
          <CopyBlock
            text={CREATE_CREDIT_ON_DEBIT_PAYMENT}
            language="sql"
            showLineNumbers={false}
            codeBlock
            theme={cyhperhausStyle}
            customStyle={{
              margin: "1.5rem 0",
            }}
          />
        </ul>
        <hr />
        <p className="mb-6">
          A function to calculate the balance after a withdrawal is completed:
        </p>
        <ul>
          <li>Name: balance_after_settlement</li>
          <li>Schema: public</li>
          <li>Return Type: Trigger</li>
          <li>Advanced Settings Security Type: SECURITY DEFINER</li>
          <li>Definition:</li>
          <CopyBlock
            text={BALANCE_AFTER_SETTLEMENT}
            language="sql"
            showLineNumbers={false}
            codeBlock
            theme={cyhperhausStyle}
            customStyle={{
              margin: "1.5rem 0",
            }}
          />
        </ul>
        <hr />
        <p className="mb-6">
          A function to calculate the balance after a payment is made:
        </p>
        <ul>
          <li>Name: balance_after_payment</li>
          <li>Schema: public</li>
          <li>Return Type: Trigger</li>
          <li>Advanced Settings Security Type: SECURITY DEFINER</li>
          <li>Definition:</li>
          <CopyBlock
            text={BALANCE_AFTER_PAYMENT}
            language="sql"
            showLineNumbers={false}
            codeBlock
            theme={cyhperhausStyle}
            customStyle={{
              margin: "1.5rem 0",
            }}
          />
        </ul>
        <hr />
        <strong>Setup DB Triggers</strong>
        <p className="mt-2 mb-6">
          Once the DB Functions have been made, Triggers have to be setup to
          trigger these functions on specific events
        </p>
        <ul>
          <li>Name: create_user_on_auth</li>
          <li>Function: create_user_on_auth</li>
          <li>Event: INSERT</li>
          <li>Type: After the event</li>
          <li>Orientation: Row</li>
          <li>Table: users</li>
        </ul>
        <hr />
        <ul>
          <li>Name: balance_after_payment</li>
          <li>Function: balance_after_payment</li>
          <li>Event: INSERT</li>
          <li>Type: After the event</li>
          <li>Orientation: Row</li>
          <li>Table: payments</li>
        </ul>
        <hr />
        <ul>
          <li>Name: balance_after_settlement</li>
          <li>Function: balance_after_settlement</li>
          <li>Event: INSERT</li>
          <li>Type: After the event</li>
          <li>Orientation: Row</li>
          <li>Table: settlements</li>
        </ul>
        <hr />
        <ul>
          <li>Name: create_credit_on_debit_payments</li>
          <li>Function: create_credit_on_debit_payments</li>
          <li>Event: INSERT</li>
          <li>Type: After the event</li>
          <li>Orientation: Row</li>
          <li>Table: payments</li>
        </ul>
        <hr />
        <ul>
          <li>Name: create_tx_on_charge</li>
          <li>Function: create_tx_on_charge</li>
          <li>Event: UPDATE</li>
          <li>Type: After the event</li>
          <li>Orientation: Row</li>
          <li>Table: charges</li>
        </ul>
        <hr />
        <ul>
          <li>Name: create_tx_on_withdrawal</li>
          <li>Function: create_tx_on_withdrawal</li>
          <li>Event: UPDATE</li>
          <li>Type: After the event</li>
          <li>Orientation: Row</li>
          <li>Table: withdrawals</li>
        </ul>
        <hr />
        <Heading size="medium">Run LSD</Heading>
        <p className="text-left leading-7 mb-6 mt-2">
          Clone <a href="https://github.com/cypherhaus/lsd">the LSD repo</a> and
          run <Code>npm i</Code> / <Code>yarn</Code> to initiate the project.
        </p>

        <p className="mt-2">
          Create a <Code>.env</Code> and add the following variables (found in
          the Supabase Dashboard)
        </p>
        <CopyBlock
          text={LSD_ENV}
          language="shell"
          showLineNumbers={false}
          codeBlock
          theme={cyhperhausStyle}
          customStyle={{
            margin: "1.5rem 0",
          }}
        />

        <p className="text-left leading-7 mb-6 mt-2">
          Deploy the app to Netlify, and add the same environment variables
          above to the Netlify Deployment Environment Variables, with the
          addition of another: <Code>JWT_SECRET</Code>, the value of which can
          be found in the Supabase dashboard under Settings, API, JWT Settings.
          Note: If you add the variables after deploying the app, be sure to
          trigger another deployment
        </p>

        <p className="text-left leading-7 mb-6 mt-2">
          Be sure to also add these environment variables to your Netlify
          Deployment in Site Settings Environment Variables section.
        </p>

        <p className="text-left leading-7 mb-6 mt-2">
          run <Code>npm start</Code> / <Code>yarn start</Code> to run the
          project.
        </p>
        <p>Happy building!</p>
      </main>
    </div>
  );
};

export default Blog;

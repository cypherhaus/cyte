import React from "react";
import { Separator } from "./common/Separator";
import { Card } from "./common/Card";

export const Foss = () => (
  <div className="overflow-hidden">
    <Separator text="open source software" />
    {/* <span className="tracking-wide cursor-default absolute top-4 -left-16 text-9xl overflow-hidden whitespace-nowrap font-display opacity-5">
      CYPHERPUNKS WRITE CODE
    </span> */}

    <div className="relative">
      <div className="z-10 pl-10 pb-8 flex overflow-x-scroll">
        <Card
          title="JuiceBox"
          description="bootstrap a bitcoin/ln web app with ZBD x supabase"
          link="https://github.com/cypherhaus/juicebox"
        />
        <Card
          title="cyte"
          description="the cyperhaus site you're now visiting"
          link="https://github.com/cypherhaus/cyte"
        />
      </div>
    </div>
  </div>
);

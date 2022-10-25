import React from "react";
import { Separator } from "./common/Separator";
import { Card } from "./common/Card";

export const Foss = () => (
  <div>
    <Separator text="open source software" />
    <div className="flex">
      <Card
        title="supa-zbd"
        description="bootstrap a bitcoin/ln web app with ZBD x supabase"
        link="https://github.com/cypherhaus/supa-zbd"
      />
      <Card
        title="cyte"
        description="The cyperhaus site you're now visiting"
        link="https://github.com/cypherhaus/cyte"
      />
    </div>
  </div>
);

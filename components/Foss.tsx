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
      />
      <Card title="cyte" description="the site you are now using" />
    </div>
  </div>
);

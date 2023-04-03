import { SourceLink } from "../game/Source";
import WSJ_Bankruptcy from "../sources/WSJ_Bankruptcy.json";

export function DnaInfo() {
  return (
    <div>
      <p>
        User-generated data is owned by companies as an asset. Just like any
        other asset, if the company goes bankrupt, the data is sold to pay back
        debts. Health information has certain regulations, but information like
        username, age, and address can be freely sold. Even privacy policies
        don't hold much weight. For example, when RadioShack filed for
        bankruptcy in 2015, they proposed to sell the account information of 117
        million customers, even though their privacy policy promised to never
        sell customer information. In the end, regulators limited them to only
        access customer information from the past two years. But two years is
        still a lot of data!
      </p>
      <SourceLink {...WSJ_Bankruptcy} />
    </div>
  );
}

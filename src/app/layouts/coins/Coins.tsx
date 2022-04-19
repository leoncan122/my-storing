import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CoinsView from "./CoinsView";
export interface Coin {
  id: "string";
  name: "string";
  symbol: "string";
}
const Coins = () => {
  // const [coins, setCoins] = useState<[] | null>(null);

  const dataCoins: any = useFetch(
    // "https://api.coingecko.com/api/v3/coins/list"
    "https://api.coingecko.com/api/v3/search/trending"
  );
  console.log(dataCoins);
  const trendCoins = dataCoins.data ? dataCoins.data.coins : null;

  return (
    <>{trendCoins ? <CoinsView data={trendCoins} /> : <div>loading</div>}</>
  );
};
export default Coins;

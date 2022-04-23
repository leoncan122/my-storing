import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CoinsView from "./CoinsView";
export interface Coin {
  id: "string";
  name: "string";
  symbol: "string";
}
const Coins = () => {
  const dataCoins: any = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=solana%2Cbitcoin%2Cripple%2Ccardano%2Cpolygon%2Cethereum%2Cdogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1%2C24%2C"
  );
  console.log(dataCoins);
  const trendCoins = dataCoins ? dataCoins.data : null;

  return (
    <>{trendCoins ? <CoinsView data={trendCoins} /> : <div>loading</div>}</>
  );
};
export default Coins;

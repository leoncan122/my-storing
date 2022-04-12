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
    "https://api.coingecko.com/api/v3/coins/list"
  );
  const selectedCoins = dataCoins.data ? dataCoins.data.slice(0, 9) : null;

  // const coinsInfo = useFetch(
  //   "https://api.coingecko.com/api/v3/simple/price?ids=0-5x-long-bitcoin-cash-token&vs_currencies=btc&include_market_cap=true&include_24hr_change=true"
  // );

  // useEffect(() => {
  //   const asyncFetch = async () => {
  //     try {
  //       const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
  //       const data = await res.json();
  //       const selectedCoins = data.slice(0, 9);
  //       console.log(selectedCoins);
  //       setCoins(selectedCoins);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const fetchPrice = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://api.coingecko.com/api/v3/simple/price?ids=0-5x-long-bitcoin-cash-token&vs_currencies=btc&include_market_cap=true&include_24hr_change=true`
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   asyncFetch();
  //   console.log(coinsInfo);
  //   // fetchPrice();
  // }, []);
  return (
    <>
      {selectedCoins ? <CoinsView data={selectedCoins} /> : <div>loading</div>}
    </>
  );
};
export default Coins;

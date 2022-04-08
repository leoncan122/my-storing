import React, { useEffect, useState } from "react";
export interface Coin {
  id: "string";
  name: "string";
  symbol: "string";
}
const Coins = () => {
  const [coins, setCoins] = useState<[] | null>(null);
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
        const data = await res.json();
        const selectedCoins = data.slice(0, 9);
        setCoins(selectedCoins);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFetch();
  }, []);
  return (
    <>
      <table className="stripe hover">
        <thead>
          <tr>
            <th data-priority="1">Position</th>
            <th data-priority="2">Name</th>
            <th data-priority="3">price</th>
            <th data-priority="4">Market Cap</th>
            <th data-priority="5">Graphic</th>
            <th>Add favorite</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((c: any) => (
            <tr key={c.id}>
              <td>1</td>
              <td>{c.name}</td>
              <td>$213.31</td>
              <td>$321.375.656,43</td>
              <td>Graphic</td>
              <td>
                <input type="radio"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Coins;

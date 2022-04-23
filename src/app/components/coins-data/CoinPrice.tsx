import { useCallback } from "react";
import useFetch from "../../hooks/useFetch";

const CoinPrice = ({ id }: any) => {
  const coinsInfo = useFetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=eur&include_market_cap=true&include_24hr_change=true`
  );

  const data = coinsInfo.data ?? Object.values(coinsInfo.data ?? {});
  const priceInfo: any = Object.values(data)[0];
  const eurPrice = priceInfo?.eur;
  const eurMarketCap = priceInfo?.eur_market_cap;

  const memoFunction = useCallback((num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }, []);
  // function mathRound(num: number): number {
  //   return Math.round((num + Number.EPSILON) * 100) / 100;
  // }

  return (
    <>
      <td className="p-3 text-sm text-left">${eurPrice}</td>
      <td className="p-3 text-sm">${memoFunction(eurMarketCap)}</td>
    </>
  );
};

export default CoinPrice;

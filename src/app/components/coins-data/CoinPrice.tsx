import useFetch from "../../hooks/useFetch";

const CoinPrice = ({ id }: any) => {
  const coinsInfo = useFetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=eur&include_market_cap=true&include_24hr_change=true`
  );

  const data = coinsInfo.data ?? Object.values(coinsInfo.data ?? {});
  const priceInfo: any = Object.values(data)[0];
  const eurPrice = priceInfo?.eur;

  return <>${eurPrice}</>;
};

export default CoinPrice;

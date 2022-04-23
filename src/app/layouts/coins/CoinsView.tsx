// import CoinGraphic from "../../components/coins-data/CoinGraphic";
import CoinPrice from "../../components/coins-data/CoinPrice";
import CoinGraphic from "../../components/coins-data/CoinGraphic";
import { memo } from "react";

const CoinsView = memo((props: any) => {
  const { data } = props;
  return (
    <>
      <table className="table_container  overflow-auto rounded-lg hidden sm:block filter drop-shadow min-w-full min-h-max">
        <thead className="border-b-2 border-grey-600">
          <tr className="">
            <th className="thumb p-3 text-center w-5"> </th>
            <th
              className="p-3 font-semibold tracking-wide text-center "
              data-priority="1"
            >
              Coin
            </th>
            <th className="p-3 font-semibold tracking-wide text-center">
              Symbol
            </th>
            <th
              className="p-3 font-semibold tracking-wide text-center"
              data-priority="2"
            >
              Market Position
            </th>
            <th
              className="p-3 font-semibold tracking-wide text-center"
              data-priority="3"
            >
              Price
            </th>
            <th
              className="p-3 font-semibold tracking-wide text-center"
              data-priority="4"
            >
              Market Cap
            </th>
            <th
              className="p-3 font-semibold tracking-wide  text-center"
              data-priority="5"
            >
              Graphic
            </th>
            <th className="p-3 font-semibold tracking-wide text-center">
              Add favorite
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((coin: any) => (
            <tr
              key={coin.id}
              className="odd:bg-white even:bg-gray-600 even:text-white hover:ring"
            >
              <td className="p-1">
                <img src={coin.image} alt="crypto-logo"></img>
              </td>

              <td className="p-3 max-w-10 text-sm font-medium capitalize tracking-wide font-sans truncate text-left">
                {coin.name}
              </td>
              <td className="p-3 text-sm uppercase font-light">
                {coin.symbol}
              </td>
              <td className="p-3 text-sm italic font-medium">
                {coin.market_cap_rank}
              </td>
              <CoinPrice id={coin.id} />
              <CoinGraphic coin={coin} />

              <td className="p-3 text-sm">
                <input type="radio"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data?.map((c: any) => (
        <div
          key={c.id}
          className="grid grid-cols-1 gap-4 hover:grey-400 sm:hidden"
        >
          <div className="bg-grey p-4 rounded-lg shadows">
            <div className="flex items-center text-sm space-x-2">
              <div className="text-blue-400 font-bold hover:underline">
                {c.market_cap_rank}
              </div>
              <div className="text-sm font-semibold uppercase">{c.symbol}</div>
              <div className="bg-green-300 text-xs uppercase text-green-900 rounded-sm p-0.5 track-wider">
                {c.current_price}
              </div>
            </div>

            <div className="text-xs tranckin-wide">
              {c.price_change_percentage_24h}
            </div>
            <div className="col-start-2">graphic</div>
          </div>
        </div>
      ))}
    </>
  );
});
export default CoinsView;

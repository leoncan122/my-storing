import CoinPrice from "../../components/coins-data/CoinPrice";

const CoinsView = (props: any) => {
  const { data } = props;
  return (
    <>
      <div className="table_container  overflow-auto rounded-lg hidden sm:block filter drop-shadow w-full">
        <table className="">
          <thead className="border-b-2 border-grey-600">
            <tr className="">
              <th
                className="p-3 font-semibold tracking-wide text-center"
                data-priority="1"
              >
                Name
              </th>
              <th className="p-3 font-semibold tracking-wide text-center">
                Symbol
              </th>
              <th
                className="p-3 font-semibold tracking-wide text-center"
                data-priority="2"
              >
                Position Market
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
                className="p-3 font-semibold tracking-wide text-center"
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
            {data?.map((c: any) => (
              <tr
                key={c.item.id}
                className="odd:bg-white even:bg-gray-600 even:text-white hover:ring"
              >
                <td className="p-3 text-sm font-medium capitalize tracking-wide font-sans truncate text-left">
                  {c.item.name}
                </td>
                <td className="p-3 text-sm  font-light">{c.item.symbol}</td>
                <td className="p-3 text-sm italic font-medium">
                  {c.item.market_cap_rank}
                </td>
                <td className="p-3 text-sm text-left">
                  <CoinPrice id={c.item.id} />
                </td>
                <td className="p-3 text-sm">$321.375.656,43</td>
                <td className="p-3 text-sm">Graphic</td>
                <td className="p-3 text-sm">
                  <input type="radio"></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {props.data?.map((c: any) => (
        <div className="grid grid-cols-1 gap-4 hover:grey-400 sm:hidden">
          <div className="bg-grey p-4 rounded-lg shadows">
            <div className="flex items-center text-sm space-x-2">
              <div className="text-blue-400 font-bold hover:underline">23</div>
              <div className="text-sm font-semibold uppercase">{c.symbol}</div>
              <div className="bg-green-300 text-xs uppercase text-green-900 rounded-sm p-0.5 track-wider">
                price
              </div>
            </div>

            <div className="text-xs tranckin-wide">nose</div>
            <div className="col-start-2">graphic</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default CoinsView;

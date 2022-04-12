const CoinsView = (props: any) => {
  return (
    <>
      <div className="overflow-auto rounded-lg max-w-md hidden sm:block">
        <table className="w-full">
          <thead className="border-b-2 border-grey-600">
            <tr className="">
              <th
                className="p-3 font-semibold tracking-wide text-left"
                data-priority="1"
              >
                Name
              </th>
              <th
                className="p-3 font-semibold tracking-wide text-left"
                data-priority="2"
              >
                Position
              </th>
              <th
                className="p-3 font-semibold tracking-wide text-left"
                data-priority="3"
              >
                price
              </th>
              <th
                className="p-3 font-semibold tracking-wide text-left"
                data-priority="4"
              >
                Market Cap
              </th>
              <th
                className="p-3 font-semibold tracking-wide text-left"
                data-priority="5"
              >
                Graphic
              </th>
              <th>Add favorite</th>
            </tr>
          </thead>
          <tbody>
            {props.data?.map((c: any) => (
              <tr
                key={c.id}
                className="odd:bg-white even:bg-gray-600 even:text-white hover:ring"
              >
                <td className="p-3 text-sm">{c.symbol}</td>
                <td className="p-3 text-sm">1</td>
                <td className="p-3 text-sm">$213.31</td>
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

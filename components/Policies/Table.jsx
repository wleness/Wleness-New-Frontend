export default function Table({ ths, trs }) {
  return (
    <table className="mb-6 mt-5 text-left bg-slate-900">
      <thead>
        <tr>
          {ths.map((value, i) => {
            return (
              <th
                key={i}
                className="border-2 text-white border-slate-500 px-4 py-2 font-quicksand"
              >
                {value}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {trs.map((value, i) => {
          return (
            <tr key={i}>
              {value.map((data, index) => {
                return (
                  <td
                    className="border-2 border-slate-500 text-slate-200 px-4 py-3 font-normal"
                    key={index}
                  >
                    {data}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

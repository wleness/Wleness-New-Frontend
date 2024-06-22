export default function List({ items }) {
  return (
    <ul className="mb-6 list-disc pl-8 bg-slate-800 py-4">
      {items.map((value, i) => {
        return (
          <li className="my-2 text-slate-400" key={i}>
            <p> {value}</p>
          </li>
        );
      })}
    </ul>
  );
}

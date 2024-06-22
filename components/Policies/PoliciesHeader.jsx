export default function PoliciesHeader({ heading, desc }) {
  return (
    <header className="relative overflow-x-clip bg-slate-900 py-24">
      <div className="container mx-auto text-center">
        <h1 className="subheading heading-primary">{heading}</h1>
        <p className="text-lg font-semibold text-white">{desc}</p>
      </div>
    </header>
  );
}

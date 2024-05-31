export default function PoliciesHeader({ heading, desc }) {
  return (
    <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent py-24">
      <div className="container mx-auto text-center">
        <h1 className="subheading heading-primary">{heading}</h1>
        <p className="text-lg font-semibold text-primary-400">{desc}</p>
      </div>
    </header>
  );
}

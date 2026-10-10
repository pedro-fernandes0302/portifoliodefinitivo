import "./Navbar.css";

const links = [
  { href: "#wwa", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#Projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
];

export default function Navbar() {
  return (
    <section className="navbar" id="home">
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

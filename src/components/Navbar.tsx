import "./Navbar.css";

const links = [
  { href: "#inicio", label: "Eu" },
  { href: "#Projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#wwa", label: "Sobre" },
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

import "./Hero.css";

const NOME = "Pedro";

// cada letra do nome em binário (8 bits)
const BINARIO = [...NOME].map((letra) =>
  letra.charCodeAt(0).toString(2).padStart(8, "0")
);

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="contem hero-grid">
        <div className="hero-texto">
          <p className="hero-rotulo">// desenvolvedor júnior</p>

          <h1 className="hero-titulo">
            Meu nome é <span className="hero-destaque">Pedro Fernandes</span>
          </h1>

          <p className="hero-desc">
            Sou um dev que gosta de pensar além e sou apaixonado por tecnologia,
            ao ponto de chegar no binário. Construo sistemas de ponta a ponta,
            do front-end ao back-end, e automatizo processos com dados.
          </p>

          <div className="hero-botoes">
            <a href="#Projetos" className="hero-btn hero-btn-principal">
              Ver projetos
            </a>
            <a
              href="https://github.com/pedro-fernandes0302"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-vazio"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-terminal" aria-hidden="true">
          <div className="hero-terminal-topo">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hero-terminal-corpo">
            <p className="hero-linha-cmd">$ echo "{NOME}" | binario</p>
            {BINARIO.map((byte, i) => (
              <p
                key={i}
                className="hero-byte"
                style={{ animationDelay: `${0.4 + i * 0.25}s` }}
              >
                {byte}
              </p>
            ))}
            <p className="hero-cursor">_</p>
          </div>
        </div>
      </div>
    </section>
  );
}
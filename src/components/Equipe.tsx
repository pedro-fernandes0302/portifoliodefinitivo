import "./Equipe.css";

const membros = [
  { foto: "calebe.jpeg", nome: "Calebe Menezes de Oliveira", alt: "Calebe Menezes de Oliveira", cargo: "Analista de Documentação e Compliance", area: "BackEnd" },
  { foto: "carolina.png", nome: "Carolina Pedrosa Linsmeyer", alt: "Carolina Pedrosa Linsmeyer", cargo: "Gerente de Projetos / Scrum Master", area: "FrontEnd" },
  { foto: "pedro.png", nome: "Pedro Fernandes de Jesus", alt: "Pedro Fernandes de Jesus", cargo: "Líder Técnico / Especialista de Execução", area: "FullStack" },
  { foto: "kaue.jpeg", nome: "Kauê Yuki Kozima", alt: "Kauê Yuki Kozima", cargo: "Analista de Qualidade (QA) e Normas", area: "BackEnd" },
  { foto: "sophiasemfundo.png", nome: "Sophia Galvão Vieira", alt: "Sophia Galvão Vieira", cargo: "Desenvolvedora / Designer", area: "FrontEnd" },
  { foto: "evelyn.png", nome: "Evelyn Leandro Falcioni", alt: "Evelyn Leandro Falcioni", cargo: "Desenvolvedora / Designer", area: "FrontEnd" },
  { foto: "vitin.jpeg", nome: "Vítor Ferreira Ramos", alt: "Vítor Ferreira Ramos", cargo: "Desenvolvedor / Designer", area: "FrontEnd" },
];

export default function Equipe() {
  return (
    <section className="esquipe" id="equipe">
      <div className="contem">
        <h2 className="equipe">
          Quem são os <span className="destaque">desenvolvedores</span> do seu
          projeto
        </h2>

        <div className="fotos">
          {membros.map((m) => (
            <figure className="membro" key={m.nome}>
              <img src={`/${m.foto}`} alt={m.alt} />
              <figcaption>
                <strong>{m.nome}</strong>
                <span>{m.cargo}</span>
                <em>{m.area}</em>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

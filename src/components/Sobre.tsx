import "./Sobre.css";

export default function Sobre() {
  return (
    <section className="wwa" id="wwa">
      <div className="contem">
        <p className="rotulo">// sobre mim</p>
        <h2 className="sobre-titulo">
          Um pouquinho sobre <span className="destaque">mim</span>
        </h2>

        <div className="duas-colunas">
          <p className="sobre-lead">
            Código é o meio. O que me move é resolver o problema de verdade.
          </p>

          <div className="sobre-textos">
            <p className="p3">
              Desde novo eu sou chegado em tecnologia. Sempre achei que tarefa
              manual e repetitiva não tinha motivo pra ser demorada, e fuçar no
              back-end de sites virou meu passatempo favorito.
            </p>

            <p className="p3">
              Hoje eu já trabalho na área, e o que mais aprendi é que o trabalho
              não começa no código. Antes de escrever uma linha, eu quero
              entender o processo, quem usa, onde o time perde tempo e o que o
              negócio precisa de verdade. Isso vem da minha passagem pela parte
              administrativa, que me mostrou o outro lado do balcão, e do dia a
              dia automatizando processos e tratando dados, onde a pergunta
              nunca é se funciona, e sim se resolve.
            </p>

            <p className="p3">
              Uso a IA como ferramenta, não como muleta. Ela acelera o que eu já
              entendo, mas quem decide o que construir e por quê sou eu. Não
              pretendo entrar na estatística de dev substituído por quem só
              aprendeu a pedir pra IA fazer.
            </p>

            <p className="p3">
              Se você leu até aqui, espero ter te convencido a vir trabalhar
              comigo na solução dos seus problemas.
            </p>

            <a href="#contato" className="sobre-cta">
              Vamos conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
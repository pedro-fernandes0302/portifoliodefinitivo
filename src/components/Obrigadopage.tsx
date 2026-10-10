import "./Obrigado.css";

type Props = { onVoltar: () => void };

export default function Obrigado({ onVoltar }: Props) {
  return (
    <div className="thank-you-card" role="status" aria-live="polite">
      <div className="ty-icone" aria-hidden="true">
        <span>✓</span>
      </div>

      <div className="ty-logo">
        <span>Pedro Fernandes</span>
        <small> Desenvolvedor · Dados · Automação</small>
      </div>

      <h3 className="ty-titulo">Obrigado pelo contato!</h3>

      <p className="ty-destaque">Sua mensagem chegou até mim.</p>

      <p className="ty-texto">
        Vou ler com atenção, entender o que você precisa e te respondo em breve
        por e-mail. Se for urgente, é só me chamar direto no WhatsApp.
      </p>

      <div className="ty-divisor"></div>

      <p className="ty-lema">
        <span>Entender.</span>
        <span>Resolver.</span>
        <span>Automatizar.</span>
      </p>

      <button
        type="button"
        className="wth-btn wth-btn-vazio"
        onClick={onVoltar}
      >
        Enviar outra mensagem <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
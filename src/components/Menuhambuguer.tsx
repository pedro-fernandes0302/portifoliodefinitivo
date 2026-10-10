import "./m_hamburguer.css"
import { useState } from "react"

export default function Menuhambuguer() {
    const [aberto, setAberto] = useState(false)
    const fechar = () => {
        setAberto(false)
    }


    return (
    <div className={`menu-hamburguer ${aberto ? "aberto" : ""}`}>
              <button
        type="button"
        className="botao-hamburguer"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls="menu-principal"
        onClick={() => setAberto(!aberto)}
      >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <menu className="menu">
            <ul>
                <li><a href="#wwa" onClick={fechar}>Sobre</a></li>
                <li><a href="#servicos" onClick={fechar}>Serviços</a></li>
                <li><a href="#Projetos" onClick={fechar}>Projetos</a></li>
                <li><a href="#processo" onClick={fechar}>Processo</a></li>
                <li><a href="#stack" onClick={fechar}>Stack</a></li>
                <li><a href="#equipe" onClick={fechar}>Equipe</a></li>
            </ul>
        </menu>
    </div>
  )
}
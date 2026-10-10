import type { IconType } from "react-icons";
import { FaDatabase, FaFileExcel } from "react-icons/fa";
import {
  SiReact,
  SiVite,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiGooglebigquery,
  SiGooglesheets,
  SiWhatsapp,
  SiGooglecloud,
  SiGit,
  SiGithub,
} from "react-icons/si";
import "./Stack.css";

type Tecnologia = {
  nome: string;
  Icone: IconType;
  cor: string;
};

type Grupo = {
  titulo: string;
  itens: Tecnologia[];
};

const GRUPOS: Grupo[] = [
  {
    titulo: "// front-end",
    itens: [
      { nome: "React", Icone: SiReact, cor: "#61DAFB" },
      { nome: "Vite", Icone: SiVite, cor: "#646CFF" },
      { nome: "TypeScript", Icone: SiTypescript, cor: "#3178C6" },
      { nome: "JavaScript", Icone: SiJavascript, cor: "#F7DF1E" },
      { nome: "HTML", Icone: SiHtml5, cor: "#E34F26" },
      { nome: "CSS", Icone: SiCss, cor: "#1572B6" },
    ],
  },
  {
    titulo: "// back-end",
    itens: [
      { nome: "Node.js", Icone: SiNodedotjs, cor: "#5FA04E" },
      { nome: "Express", Icone: SiExpress, cor: "#FFFFFF" },
      { nome: "PostgreSQL", Icone: SiPostgresql, cor: "#4169E1" },
      { nome: "Supabase", Icone: SiSupabase, cor: "#3FCF8E" },
    ],
  },
  {
    titulo: "// dados e automação",
    itens: [
      { nome: "Python", Icone: SiPython, cor: "#FFD43B" },
      { nome: "SQL", Icone: FaDatabase, cor: "#00758F" },
      { nome: "BigQuery", Icone: SiGooglebigquery, cor: "#669DF6" },
      { nome: "Excel", Icone: FaFileExcel, cor: "#217346" },
      { nome: "Google Sheets", Icone: SiGooglesheets, cor: "#34A853" },
      { nome: "Automação de WhatsApp", Icone: SiWhatsapp, cor: "#25D366" },
    ],
  },
  {
    titulo: "// cloud e versionamento",
    itens: [
      { nome: "Google Cloud", Icone: SiGooglecloud, cor: "#4285F4" },
      { nome: "Git", Icone: SiGit, cor: "#F05032" },
      { nome: "GitHub", Icone: SiGithub, cor: "#FFFFFF" },
    ],
  },
];

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="contem">
        <h2 className="ferra">
          Ferramentas que eu <span className="destaque">uso</span> no dia a dia.
        </h2>

        {GRUPOS.map((grupo) => (
          <div className="stack-grupo" key={grupo.titulo}>
            <p className="rotulo">{grupo.titulo}</p>
            <div className="stack">
              {grupo.itens.map(({ nome, Icone, cor }) => (
                <span className="chip" key={nome}>
                  <Icone aria-hidden="true" style={{ color: cor }} />
                  <span>{nome}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
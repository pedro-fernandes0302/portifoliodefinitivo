import "./Services.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = "https://wa.me/5562998197704";

const servicos = [
  {
    num: "01",
    titulo: "Sites",
    texto:
      "Criamos sites modernos e personalizados, pensados para fortalecer a presença digital da sua empresa com praticidade, desempenho e bons resultados.",
    tags: ["React", "Vite"],
  },
  {
    num: "02",
    titulo: "Sistemas",
    texto:
      "Desenvolvemos sistemas sob medida e ajudamos sua empresa a encontrar as melhores soluções tecnológicas para otimizar processos, organização e produtividade.",
    tags: ["Python", "SQL", "Painel próprio"],
  },
  {
    num: "03",
    titulo: "Suporte técnico",
    texto:
      "Oferecemos suporte para resolver problemas e garantir que seus sistemas e ferramentas funcionem de forma adequada.",
    tags: ["Google", "Automações", "Manutenção"],
  },
];

export default function Services() {
  const  listaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".servico",
        { opacity: 0,x:-80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listaRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, listaRef);

    return () => ctx.revert();
  }, []);
  
  
  
  return (
    <section className="services" id="servicos">
      <div className="contem">
        <h2 className="sobre-titulo">
          Tecnologia inteligente. Soluções feitas{" "}
          <span className="destaque">para você.</span>
        </h2>
        <p className="sub">
          Cada projeto é único, criado do zero para atender às suas
          necessidades. Cuidamos de cada etapa, da primeira ideia até a entrega
          final, com tecnologia, qualidade e atenção a cada detalhe.
        </p>
        <div className="servicos_aba" ref={listaRef}>
          {servicos.map((s) => (
            <a
              key={s.num}
              className="servico"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <hr className="linha1" />
              <span className="num">{s.num}</span>
              <div className="servico-corpo">
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tags">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

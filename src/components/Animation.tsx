import "./Animation.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textoBulbo = `          <div class="luz">
       <span>color:#ff0;</span>
     <p id="x7">display:flex;</p>
  <section>margin:0 auto;</section>
<main>box-shadow:0 0 9px #ff0;</main>
<div id="a9">border-radius:50%;</div>
   <label>padding:4px 8px;</label>
     <nav>filter:blur(2px);</nav>
        <em>left:0;top:0;</em>`;

const textoBase = `         <b>/* ideia */</b>
           <td>rosca;</td>
           <td>rosca;</td>
           <th>rosca;</th>
               </div>`;

export default function Animation() {
  const pistaRef = useRef<HTMLDivElement>(null);
  const palcoRef = useRef<HTMLDivElement>(null);
  const take1Ref = useRef<HTMLDivElement>(null);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const take2Ref = useRef<HTMLDivElement>(null);
  const lampadaRef = useRef<HTMLPreElement>(null);
  const baseRef = useRef<HTMLPreElement>(null);
  const take3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // o título aparece ao carregar a página
      gsap.fromTo(
        tituloRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
      );

      // progresso da escrita, controlado pela timeline
      const escrita = { bulbo: 0, base: 0 };

      function desenhar() {
        const lampada = lampadaRef.current;
        const base = baseRef.current;
        if (!lampada || !base) return;

        const qtdBulbo = Math.floor(escrita.bulbo * textoBulbo.length);
        const qtdBase = Math.floor(escrita.base * textoBase.length);

        lampada.textContent = textoBulbo.slice(0, qtdBulbo);
        base.textContent = textoBase.slice(0, qtdBase);
      }

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: pistaRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // take 1: "Problema?" fica parado e depois sai
      tl.to({}, { duration: 1 });
      tl.to(take1Ref.current, { opacity: 0, y: -80, duration: 1 });

      // take 2: a lâmpada entra e é escrita
      tl.fromTo(
        take2Ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "<0.5",
      );
      tl.addLabel("escrita", 2);
      tl.to(escrita, { bulbo: 1, duration: 2, onUpdate: desenhar }, "escrita");
      tl.to(escrita, { base: 1, duration: 1, onUpdate: desenhar }, ">");

      // a lâmpada fica acesa um tempo e depois sai
      tl.to({}, { duration: 1 });
      tl.to(take2Ref.current, { opacity: 0, duration: 1 });

      // take 3: os textos entram
      tl.fromTo(
        take3Ref.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 },
        "<0.5",
      );
      tl.to({}, { duration: 1 });
    }, pistaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="animation-section">
        <div className="pista" ref={pistaRef}>
      <div className="palco" ref={palcoRef}>
        <div className="take" ref={take1Ref}>
          <h1 className="Problema" ref={tituloRef}>
            Problema?
          </h1>
        </div>

        <div className="take" ref={take2Ref}>
          <div className="lampada-conjunto">
            <pre className="lampada" ref={lampadaRef}></pre>
            <pre className="base" ref={baseRef}></pre>
          </div>
        </div>

        <div className="take take3" ref={take3Ref}>
          <h2>A ELOONS ENCONTRA SOLUÇÃO</h2>
          <p>Texto provisório explicando a solução.</p>
        </div>
      </div>
    </div>
    </section>
  );
}
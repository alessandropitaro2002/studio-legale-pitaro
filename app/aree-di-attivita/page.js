import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Briefcase,
  Building2,
  CalendarCheck,
  FileText,
  Gavel,
  Handshake,
  Home,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Aree di attività | Studio Legale Giuseppe Pitaro Catanzaro",
  description:
    "Lo Studio Legale Giuseppe Pitaro a Catanzaro offre assistenza in diritto amministrativo, ricorsi al TAR, appalti pubblici, diritto del lavoro, diritto civile, famiglia, successioni, penale, immobiliare, risarcimento danni, Corte dei conti e Cassazione.",
  alternates: {
    canonical: "/aree-di-attivita",
  },
  openGraph: {
    title: "Aree di attività | Studio Legale Giuseppe Pitaro Catanzaro",
    description:
      "Assistenza giudiziale e stragiudiziale in diversi ambiti del diritto, con particolare esperienza in diritto amministrativo, TAR, appalti pubblici, lavoro, civile e Cassazione.",
    url: "https://www.studiolegalepitaro.it/aree-di-attivita",
    siteName: "Studio Legale Giuseppe Pitaro",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://www.studiolegalepitaro.it/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aree di attività Studio Legale Giuseppe Pitaro Catanzaro",
      },
    ],
  },
};

const mainAreas = [
  {
    title: "Diritto amministrativo",
    icon: Landmark,
    text:
      "Assistenza a privati, imprese ed enti in procedimenti e controversie che coinvolgono pubbliche amministrazioni, enti locali, servizi pubblici, autorizzazioni, concessioni e provvedimenti amministrativi.",
    items: [
      "Pubblica amministrazione",
      "Enti locali",
      "Provvedimenti amministrativi",
      "Autorizzazioni e concessioni",
      "Servizi pubblici",
      "Procedimenti complessi",
    ],
  },
  {
    title: "Ricorsi al TAR e Consiglio di Stato",
    icon: Gavel,
    text:
      "Assistenza nella proposizione e nella difesa in giudizi davanti al TAR e al Consiglio di Stato, con attenzione ai termini, alla fase cautelare, al merito e alla strategia processuale.",
    items: [
      "Ricorsi al TAR",
      "Appelli al Consiglio di Stato",
      "Misure cautelari",
      "Impugnazione di atti",
      "Giustizia amministrativa",
      "Difesa contro la PA",
    ],
  },
  {
    title: "Appalti pubblici, gare e contratti",
    icon: Building2,
    text:
      "Assistenza in materia di appalti pubblici, procedure di gara, affidamenti, esclusioni, aggiudicazioni, contratti pubblici e contenzioso relativo a servizi, forniture e lavori.",
    items: [
      "Gare pubbliche",
      "Affidamenti",
      "Esclusioni",
      "Aggiudicazioni",
      "Contratti pubblici",
      "Servizi e forniture",
    ],
  },
  {
    title: "Diritto del lavoro e pubblico impiego",
    icon: Briefcase,
    text:
      "Assistenza in controversie di lavoro privato e pubblico impiego, licenziamenti, reintegrazioni, procedure disciplinari, mansioni, previdenza, infortuni e tutela dei diritti del lavoratore.",
    items: [
      "Licenziamenti",
      "Reintegrazione",
      "Pubblico impiego",
      "Procedure disciplinari",
      "Previdenza",
      "Infortuni sul lavoro",
    ],
  },
  {
    title: "Diritto civile, contratti e responsabilità",
    icon: Scale,
    text:
      "Assistenza in materia civile, contrattuale e risarcitoria, con riferimento a rapporti tra privati, responsabilità civile, recupero crediti, risarcimento danni e tutela patrimoniale.",
    items: [
      "Contratti",
      "Responsabilità civile",
      "Risarcimento danni",
      "Recupero crediti",
      "Tutela patrimoniale",
      "Obbligazioni",
    ],
  },
  {
    title: "Cassazione e giurisdizioni superiori",
    icon: ScrollText,
    text:
      "L’Avv. Giuseppe Pitaro è patrocinante in Cassazione e assiste i clienti anche nei giudizi dinanzi alle giurisdizioni superiori, curando analisi degli atti, impugnazioni e strategia difensiva.",
    items: [
      "Corte di Cassazione",
      "Consiglio di Stato",
      "Giudizi di appello",
      "Impugnazioni",
      "Analisi degli atti",
      "Strategia processuale",
    ],
  },
];

const highlightedAreas = [
  {
    title: "Diritto elettorale",
    icon: BadgeCheck,
    text:
      "Assistenza in controversie elettorali, ricorsi relativi alla validità delle operazioni di voto, proclamazioni, elezioni comunali, provinciali e regionali.",
  },
  {
    title: "Enti locali e pubblica amministrazione",
    icon: Landmark,
    text:
      "Assistenza a favore e nei confronti di enti locali, amministrazioni pubbliche, società partecipate e soggetti coinvolti in procedimenti amministrativi.",
  },
  {
    title: "Responsabilità amministrativo-contabile",
    icon: Scale,
    text:
      "Difesa in giudizi dinanzi alla Corte dei conti, responsabilità erariale, danno pubblico e controversie amministrativo-contabili.",
  },
  {
    title: "Interdittive antimafia e misure amministrative",
    icon: ShieldCheck,
    text:
      "Assistenza in materia di interdittive antimafia, misure amministrative, effetti sui rapporti con la pubblica amministrazione e strumenti di tutela.",
  },
];

const additionalGroups = [
  {
    title: "Persone, famiglia e patrimonio",
    icon: Users,
    areas: [
      "Diritto di famiglia",
      "Separazioni e divorzi",
      "Affidamento dei figli",
      "Tutela dei minori",
      "Amministrazione di sostegno",
      "Successioni ed eredità",
      "Donazioni",
      "Proprietà e diritti reali",
      "Usucapione",
      "Tutela degli anziani",
    ],
  },
  {
    title: "Immobili, contratti e responsabilità",
    icon: Home,
    areas: [
      "Diritto immobiliare",
      "Condominio",
      "Locazioni",
      "Sfratti",
      "Recupero crediti",
      "Esecuzioni civili",
      "Pignoramenti",
      "Opposizioni a decreto ingiuntivo",
      "Sinistri stradali",
      "Responsabilità medica",
    ],
  },
  {
    title: "Impresa, lavoro e attività economiche",
    icon: Banknote,
    areas: [
      "Diritto commerciale",
      "Contratti commerciali",
      "Diritto societario",
      "Crisi d’impresa",
      "Procedure concorsuali",
      "Diritto bancario",
      "Diritto assicurativo",
      "Tutela del consumatore",
      "Diritto sindacale",
      "Previdenza",
    ],
  },
  {
    title: "Pubblica amministrazione e settori speciali",
    icon: FileText,
    areas: [
      "Concorsi pubblici",
      "Diritto scolastico",
      "Diritto universitario",
      "Diritto sanitario",
      "Urbanistica",
      "Edilizia",
      "Demanio",
      "Espropriazioni",
      "Diritto ambientale",
      "Diritto agrario",
    ],
  },
  {
    title: "Penale, tributario e strumenti alternativi",
    icon: Gavel,
    areas: [
      "Diritto penale",
      "Reati contro la persona",
      "Reati contro il patrimonio",
      "Reati economici",
      "Diritto tributario",
      "Cartelle esattoriali",
      "Contenzioso fiscale",
      "Mediazione civile",
      "Negoziazione assistita",
      "Arbitrato",
    ],
  },
  {
    title: "Altri ambiti",
    icon: Handshake,
    areas: [
      "Diritto sportivo",
      "Aste giudiziarie",
      "Responsabilità professionale",
      "Tutela risarcitoria",
      "Rapporti con enti pubblici",
      "Procedimenti autorizzativi",
      "Servizi pubblici",
      "Controversie patrimoniali",
      "Consulenza stragiudiziale",
      "Assistenza giudiziale",
    ],
  },
];

const rotatingAreasOne = [
  "Famiglia",
  "Successioni",
  "Immobiliare",
  "Condominio",
  "Locazioni",
  "Sfratti",
  "Recupero crediti",
  "Risarcimento danni",
  "Responsabilità medica",
  "Diritto sanitario",
  "Diritto scolastico",
  "Concorsi pubblici",
];

const rotatingAreasTwo = [
  "Diritto elettorale",
  "Corte dei conti",
  "Interdittive antimafia",
  "Urbanistica",
  "Edilizia",
  "Demanio",
  "Espropriazioni",
  "Diritto tributario",
  "Diritto bancario",
  "Diritto assicurativo",
  "Mediazione",
  "Arbitrato",
];

const faqs = [
  {
    question: "Lo Studio Legale Pitaro si occupa solo di diritto amministrativo?",
    answer:
      "No. Il diritto amministrativo rappresenta una delle aree principali, ma lo studio offre assistenza anche in diritto civile, diritto del lavoro, appalti pubblici, famiglia, successioni, immobiliare, penale, risarcimento danni, Corte dei conti e altre materie.",
  },
  {
    question: "È possibile richiedere assistenza per un ricorso al TAR?",
    answer:
      "Sì. Lo studio assiste nella valutazione e nella proposizione di ricorsi al TAR, nonché nei giudizi dinanzi al Consiglio di Stato, verificando termini, atti impugnabili e profili di tutela.",
  },
  {
    question: "Lo studio segue controversie di lavoro?",
    answer:
      "Sì. Lo studio assiste in materia di diritto del lavoro e pubblico impiego, incluse controversie relative a licenziamenti, reintegrazione, procedure disciplinari, previdenza, infortuni e tutela dei diritti del lavoratore.",
  },
  {
    question: "Lo studio assiste anche imprese ed enti pubblici?",
    answer:
      "Sì. Lo studio presta assistenza a privati, imprese ed enti, con esperienza in controversie amministrative, appalti pubblici, servizi pubblici, rapporti con la pubblica amministrazione e contrattualistica.",
  },
  {
    question: "Cosa fare se la mia materia non è indicata nella pagina?",
    answer:
      "Le aree indicate non esauriscono l’attività dello studio. È possibile contattare lo Studio Legale Giuseppe Pitaro per una prima valutazione della questione, indicando oggetto della richiesta, documenti disponibili ed eventuali termini.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function AnimatedContactButton({ href = "/contatti#recapiti", children }) {
  return (
    <a
      href={href}
      className="group relative isolate inline-flex w-full overflow-hidden rounded-full p-[1px] shadow-lg shadow-[#1f1a17]/15 transition hover:-translate-y-0.5 sm:w-auto"
    >
      <span className="absolute left-1/2 top-1/2 -z-10 h-[260%] w-[260%] -translate-x-1/2 -translate-y-1/2 animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg,#b89567,#ead9c6,#ffffff,#7b5a36,#b89567)] opacity-80 transition group-hover:opacity-100" />

      <span className="relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1f1a17] px-7 py-3 text-center text-sm font-medium text-white sm:w-auto">
        {children}
      </span>
    </a>
  );
}

function AreaMarquee({ items, reverse = false }) {
  const repeated = [...items, ...items];

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fcfaf7] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fcfaf7] to-transparent" />

      <div
        className={`flex w-max max-w-none gap-3 py-1 ${
          reverse
            ? "animate-[areaMarqueeReverse_34s_linear_infinite]"
            : "animate-[areaMarquee_34s_linear_infinite]"
        }`}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 rounded-full border border-[#ddd1c2] bg-white px-4 py-2 text-sm font-medium text-[#5f5449] shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9cec0]/70 bg-[#f7f4ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="Studio Legale Pitaro"
        >
          <img
            src="/icon.png"
            alt="Logo Studio Legale Pitaro"
            className="h-8 w-8 rounded-md object-contain sm:h-9 sm:w-9"
          />
          <span className="block truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a221d] sm:text-sm md:text-base">
            STUDIO LEGALE PITARO
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/" className="transition hover:text-[#7b5a36]">
            Home
          </Link>
          <Link
            href="/avvocato-giuseppe-pitaro"
            className="transition hover:text-[#7b5a36]"
          >
            L&apos;Avv. Giuseppe Pitaro
          </Link>
          <Link
            href="/attivita-professionale"
            className="transition hover:text-[#7b5a36]"
          >
            Attività professionale
          </Link>
          <Link
            href="/aree-di-attivita"
            className="text-[#7b5a36] transition hover:text-[#7b5a36]"
          >
            Aree di attività
          </Link>
          <Link href="/contatti" className="transition hover:text-[#7b5a36]">
            Contatti
          </Link>
        </nav>

        <div className="hidden md:block">
          <AnimatedContactButton>
            <Phone size={16} strokeWidth={1.8} />
            Richiedi un contatto
          </AnimatedContactButton>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#d7c6b2] bg-white/80 text-[#1f1a17]">
            <span className="block h-[2px] w-5 bg-[#1f1a17] transition group-open:translate-y-[2px] group-open:rotate-45" />
            <span className="absolute block h-[2px] w-5 translate-y-2 bg-[#1f1a17] transition group-open:translate-y-[2px] group-open:-rotate-45" />
          </summary>

          <div className="absolute right-0 mt-3 w-72 rounded-[1.4rem] border border-[#e3d7c8] bg-[#f7f4ee] p-3 shadow-xl">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#2a221d]">
              <Link
                href="/"
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                Home
              </Link>
              <Link
                href="/avvocato-giuseppe-pitaro"
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                L&apos;Avv. Giuseppe Pitaro
              </Link>
              <Link
                href="/attivita-professionale"
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                Attività professionale
              </Link>
              <Link
                href="/aree-di-attivita"
                className="rounded-xl bg-white/70 px-3 py-3 text-[#7b5a36]"
              >
                Aree di attività
              </Link>
              <Link
                href="/contatti"
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                Contatti
              </Link>
              <Link
                href="/contatti#recapiti"
                className="mt-2 rounded-full border border-[#1f1a17] px-4 py-3 text-center transition hover:bg-[#1f1a17] hover:text-white"
              >
                Richiedi un contatto
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1f1915] bg-[linear-gradient(180deg,#15110e_0%,#100d0b_100%)] text-[#e9dfd2]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Studio Legale Giuseppe Pitaro
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#b9aa98]">
            Assistenza e consulenza legale a Catanzaro, con oltre 35 anni di
            esperienza e attività in diversi ambiti del diritto.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b89567]">
            Navigazione
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#ddd1c2]">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link
              href="/avvocato-giuseppe-pitaro"
              className="transition hover:text-white"
            >
              L&apos;Avv. Giuseppe Pitaro
            </Link>
            <Link
              href="/attivita-professionale"
              className="transition hover:text-white"
            >
              Attività professionale
            </Link>
            <Link
              href="/aree-di-attivita"
              className="transition hover:text-white"
            >
              Aree di attività
            </Link>
            <Link href="/contatti" className="transition hover:text-white">
              Contatti
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b89567]">
            Contatti
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#ddd1c2]">
            <a
              href="mailto:segreteria@studiolegalepitaro.it"
              className="break-all transition hover:text-white"
            >
              segreteria@studiolegalepitaro.it
            </a>
            <a href="tel:+39335286550" className="transition hover:text-white">
              335 286550
            </a>
            <a
              href="https://wa.me/39335286550"
              className="transition hover:text-white"
            >
              WhatsApp
            </a>
            <span>Via Francesco Acri, 88</span>
            <span>88100 Catanzaro</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b89567]">
            Legale
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#ddd1c2]">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[#8f8376] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © 2026 Studio Legale Giuseppe Pitaro. Tutti i diritti riservati.
          </p>
          <p>Catanzaro, Calabria</p>
        </div>
      </div>
    </footer>
  );
}

export default function AreeDiAttivitaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ee] text-[#1f1a17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <style>
        {`
          @keyframes areaMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes areaMarqueeReverse {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>

      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#ddd1c2]">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ead9c6]/55 blur-3xl" />
            <div className="absolute right-[-80px] top-20 h-80 w-80 rounded-full bg-[#d8b894]/30 blur-3xl" />
            <div className="absolute bottom-[-40px] left-1/3 h-64 w-64 rounded-full bg-white/45 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(252,249,245,0.78),rgba(247,244,238,0.98)_100%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div className="min-w-0">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Aree di attività
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Assistenza legale in diversi ambiti del diritto
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#564b41] md:text-xl md:leading-9">
                Lo Studio Legale Giuseppe Pitaro offre assistenza giudiziale e
                stragiudiziale in diversi ambiti del diritto, con particolare
                esperienza nel diritto amministrativo, nei ricorsi al TAR, negli
                appalti pubblici, nel diritto del lavoro e nelle controversie
                che coinvolgono pubbliche amministrazioni, imprese e privati.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AnimatedContactButton>
                  <Phone size={16} strokeWidth={1.8} />
                  Richiedi un contatto
                </AnimatedContactButton>

                <a
                  href="#aree-principali"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f1a17] bg-white/80 px-7 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Consulta le aree
                  <ArrowRight size={16} strokeWidth={1.8} />
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:justify-self-end">
              <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-4 shadow-[0_24px_80px_rgba(40,27,16,0.10)] sm:p-5 lg:mx-0">
                <div className="min-w-0 overflow-hidden rounded-[1.6rem] bg-[#fcfaf7] p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                    Ambiti di assistenza
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    Aree principali
                  </h2>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Diritto amministrativo",
                      "Ricorsi al TAR",
                      "Appalti pubblici",
                      "Diritto del lavoro",
                      "Diritto civile",
                      "Cassazione",
                    ].map((area) => (
                      <div
                        key={area}
                        className="rounded-2xl border border-[#e2d7ca] bg-white px-4 py-3 text-sm font-semibold text-[#3d332c] shadow-sm"
                      >
                        {area}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-[#e8ded2] pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                      Ulteriori ambiti trattati
                    </p>

                    <div className="max-w-full space-y-3 overflow-hidden">
                      <AreaMarquee items={rotatingAreasOne} />
                      <AreaMarquee items={rotatingAreasTwo} reverse />
                    </div>

                    <p className="mt-5 text-sm leading-6 text-[#6d6053]">
                      Le aree indicate non esauriscono l’attività dello studio:
                      ogni richiesta viene valutata in relazione al caso
                      concreto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="aree-principali"
          className="mx-auto max-w-7xl scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mb-9 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              Aree principali
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              I principali ambiti di assistenza dello studio
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f5449]">
              Le aree principali rappresentano i settori nei quali lo studio ha
              maturato una particolare esperienza, ferma restando la possibilità
              di valutare richieste relative anche ad altri ambiti del diritto.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {mainAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b89567]/60 hover:shadow-xl hover:shadow-[#4f3a24]/5 md:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#5f5449]">{area.text}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#eadfd3] bg-[#fcfaf7] px-3 py-2 text-xs font-medium text-[#6d6053]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#ddd1c2] bg-white/45">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-9 max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Focus
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Pubblica amministrazione, enti locali e contenzioso pubblico
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f5449]">
                Una parte rilevante dell’attività dello studio riguarda il
                rapporto tra cittadini, imprese, enti e pubbliche
                amministrazioni. Lo studio assiste nella valutazione di atti e
                provvedimenti, nella proposizione di ricorsi e nella difesa
                davanti agli organi di giustizia amministrativa e contabile.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-4">
              {highlightedAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-[1.7rem] border border-[#ddd1c2] bg-[#fcfaf7] p-6 shadow-sm"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5f5449]">
                      {area.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-9 max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              Ulteriori ambiti
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Altre aree di assistenza e valutazione
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f5449]">
              Oltre alle aree principali, lo studio può offrire assistenza o una
              prima valutazione in numerosi ambiti del diritto, direttamente o
              attraverso un approccio multidisciplinare.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {additionalGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-[#eadfd3] bg-[#fcfaf7] px-3 py-2 text-xs font-medium text-[#6d6053]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#ddd1c2] bg-white/45">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                  Metodo
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Come lavora lo studio
                </h2>

                <p className="mt-5 text-lg leading-8 text-[#5f5449]">
                  Ogni questione viene valutata con attenzione alla
                  documentazione disponibile, ai termini applicabili e agli
                  obiettivi concreti del cliente. Lo studio cura sia la fase
                  stragiudiziale sia l’eventuale fase giudiziale.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Analisi preliminare della documentazione",
                  "Valutazione dei termini e dei profili di rischio",
                  "Strategia giudiziale o stragiudiziale",
                  "Assistenza nei diversi gradi di giudizio",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-[#ddd1c2] bg-[#fcfaf7] p-5 shadow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                      <BadgeCheck size={18} strokeWidth={1.8} />
                    </span>
                    <p className="mt-4 font-semibold text-[#1f1a17]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] bg-[#1f1a17] p-8 text-white shadow-[0_25px_80px_rgba(31,26,23,0.18)] md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
              Prima valutazione
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Non hai trovato la tua area di interesse?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#e6ddd3]">
              Le aree indicate non esauriscono l’attività dello studio. Se la
              tua esigenza riguarda una materia non espressamente menzionata,
              puoi contattare lo Studio Legale Giuseppe Pitaro per una prima
              valutazione della questione e dell’eventuale percorso di
              assistenza.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+39335286550"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1a17] transition hover:opacity-90"
              >
                <Phone size={16} strokeWidth={1.8} />
                Chiama
              </a>

              <a
                href="mailto:segreteria@studiolegalepitaro.it"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#1f1a17]"
              >
                <Mail size={16} strokeWidth={1.8} />
                Email
              </a>

              <a
                href="https://wa.me/39335286550"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#1f1a17]"
              >
                <MessageCircle size={16} strokeWidth={1.8} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Domande frequenti sulle aree di attività
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-[#ddd1c2] bg-white/75 p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-lg font-semibold tracking-tight">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cebfae] text-[#7b5a36] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-[#5f5449]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

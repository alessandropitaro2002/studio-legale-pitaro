import Link from "next/link";

export const metadata = {
  title: "Avv. Giuseppe Pitaro | Avvocato a Catanzaro",
  description:
    "Profilo dell'Avv. Giuseppe Pitaro, titolare dello Studio Legale Pitaro a Catanzaro dal 1993, patrocinante in Cassazione e attivo in diritto amministrativo, civile, lavoro, appalti pubblici e ricorsi al TAR.",
  alternates: {
    canonical: "/avvocato-giuseppe-pitaro",
  },
  openGraph: {
    title: "Avv. Giuseppe Pitaro | Avvocato a Catanzaro",
    description:
      "Profilo dell'Avv. Giuseppe Pitaro, titolare dello Studio Legale Pitaro a Catanzaro dal 1993.",
    url: "https://www.studiolegalepitaro.it/avvocato-giuseppe-pitaro",
    siteName: "Studio Legale Giuseppe Pitaro",
    locale: "it_IT",
    type: "profile",
    images: [
      {
        url: "https://www.studiolegalepitaro.it/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avvocato Giuseppe Pitaro - Studio Legale Pitaro Catanzaro",
      },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.studiolegalepitaro.it/avvocato-giuseppe-pitaro#giuseppe-pitaro",
  name: "Giuseppe Pitaro",
  honorificPrefix: "Avv.",
  jobTitle: "Avvocato",
  url: "https://www.studiolegalepitaro.it/avvocato-giuseppe-pitaro",
  image: "https://www.studiolegalepitaro.it/avv-giuseppe-pitaro.jpg",
  worksFor: {
    "@type": "LegalService",
    name: "Studio Legale Giuseppe Pitaro",
    url: "https://www.studiolegalepitaro.it/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Francesco Acri, 88",
      postalCode: "88100",
      addressLocality: "Catanzaro",
      addressRegion: "Calabria",
      addressCountry: "IT",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Francesco Acri, 88",
    postalCode: "88100",
    addressLocality: "Catanzaro",
    addressRegion: "Calabria",
    addressCountry: "IT",
  },
  knowsAbout: [
    "Diritto amministrativo",
    "Ricorsi al TAR",
    "Consiglio di Stato",
    "Appalti pubblici",
    "Diritto civile",
    "Diritto del lavoro",
    "Patrocinio in Cassazione",
  ],
};

export default function AvvocatoGiuseppePitaroPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-[#ddd1c2]">
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ead9c6]/55 blur-3xl" />
          <div className="absolute right-[-60px] top-20 h-80 w-80 rounded-full bg-[#d8b894]/30 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-white/35 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(252,249,245,0.78),rgba(247,244,238,0.98)_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-full border border-[#cdbfaa] bg-white/80 px-5 py-2 text-sm font-medium text-[#1f1a17] transition hover:bg-white"
            >
              Torna alla home
            </Link>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              L&apos;Avv. Giuseppe Pitaro
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Avvocato Giuseppe Pitaro
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#564b41] md:text-xl md:leading-9">
              Titolare dello Studio Legale Pitaro a Catanzaro dal 1993,
              l&apos;Avv. Giuseppe Pitaro offre assistenza e consulenza legale
              a privati, imprese ed enti pubblici, con un profilo professionale
              costruito su oltre 30 anni di esperienza.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+39335286550"
                className="rounded-full bg-[#1f1a17] px-7 py-3 text-center text-sm font-medium text-white shadow-lg shadow-[#1f1a17]/15 transition hover:-translate-y-0.5"
              >
                Chiama lo studio
              </a>
              <a
                href="mailto:segreteria@studiolegalepitaro.it"
                className="rounded-full border border-[#1f1a17] bg-white/80 px-7 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
              >
                Invia una email
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-4 shadow-[0_24px_80px_rgba(40,27,16,0.12)]">
            <div className="overflow-hidden rounded-[1.6rem] border border-[#ece3d8] bg-[#fcfaf7]">
              <img
                src="/avv-giuseppe-pitaro.jpg"
                alt="Avvocato Giuseppe Pitaro a Catanzaro"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                Studio
              </p>

              <div className="mt-5 space-y-5 text-sm leading-7 text-[#564b41]">
                <div>
                  <p className="font-semibold text-[#1f1a17]">
                    Studio Legale Giuseppe Pitaro
                  </p>
                  <p>Via Francesco Acri, 88</p>
                  <p>88100 Catanzaro</p>
                </div>

                <div>
                  <p className="font-semibold text-[#1f1a17]">Telefono</p>
                  <a href="tel:+39335286550" className="hover:text-[#7b5a36]">
                    335 286550
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-[#1f1a17]">Email</p>
                  <a
                    href="mailto:segreteria@studiolegalepitaro.it"
                    className="break-all hover:text-[#7b5a36]"
                  >
                    segreteria@studiolegalepitaro.it
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/39335286550"
                  className="rounded-full border border-[#1f1a17] px-5 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Contatta su WhatsApp
                </a>
                <Link
                  href="/#contatti"
                  className="rounded-full bg-[#1f1a17] px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-95"
                >
                  Vai ai contatti
                </Link>
              </div>
            </div>
          </aside>

          <article className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-8 shadow-sm md:p-12">
            <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-[-0.03em] prose-headings:text-[#1f1a17] prose-p:text-[#564b41] prose-li:text-[#564b41]">
              <h2>Profilo professionale</h2>

              <p>
                L&apos;Avv. Giuseppe Pitaro è titolare dello Studio Legale
                Pitaro a Catanzaro dal 1993. Nel corso della propria attività
                professionale ha maturato una significativa esperienza in
                diversi ambiti del diritto, assistendo privati, imprese ed enti
                pubblici con un approccio fondato su rigore, attenzione al caso
                concreto e tutela effettiva degli interessi del cliente.
              </p>

              <p>
                Lo Studio Legale Giuseppe Pitaro opera a Catanzaro e offre
                assistenza giudiziale e stragiudiziale in materia di diritto
                amministrativo, diritto civile, diritto del lavoro, appalti
                pubblici, controversie dinanzi al TAR e patrocinio dinanzi alla
                Corte di Cassazione.
              </p>

              <h2>Esperienza in diritto amministrativo</h2>

              <p>
                Una parte rilevante dell&apos;attività professionale
                dell&apos;Avv. Giuseppe Pitaro riguarda il diritto
                amministrativo, con esperienza in procedimenti e controversie che
                coinvolgono pubbliche amministrazioni, enti locali, imprese e
                privati.
              </p>

              <p>
                L&apos;attività comprende l&apos;assistenza in materia di ricorsi
                al TAR, appalti pubblici, urbanistica, edilizia, diritto
                sanitario, diritto elettorale e procedimenti amministrativi
                complessi, anche dinanzi al Consiglio di Stato.
              </p>

              <h2>Patrocinio in Cassazione</h2>

              <p>
                L&apos;Avv. Giuseppe Pitaro è patrocinante in Cassazione e presta
                assistenza anche nelle fasi di giudizio dinanzi alle
                giurisdizioni superiori. Tale profilo consente allo studio di
                seguire controversie articolate, nelle quali è richiesta
                un&apos;analisi tecnica approfondita e una strategia difensiva
                coerente con l&apos;intero percorso giudiziale.
              </p>

              <h2>Aree di attività</h2>

              <p>
                Lo Studio Legale Pitaro offre assistenza in diversi settori,
                mantenendo un metodo di lavoro orientato alla chiarezza, alla
                valutazione preventiva dei profili di rischio e alla scelta della
                soluzione più adeguata rispetto alla posizione del cliente.
              </p>

              <ul>
                <li>Diritto amministrativo e rapporti con la pubblica amministrazione</li>
                <li>Ricorsi al TAR e giudizi dinanzi al Consiglio di Stato</li>
                <li>Appalti pubblici, urbanistica, edilizia e diritto sanitario</li>
                <li>Diritto civile, famiglia, successioni e responsabilità</li>
                <li>Diritto del lavoro, previdenza e controversie lavorative</li>
                <li>Patrocinio in Cassazione</li>
              </ul>

              <h2>Studio legale a Catanzaro</h2>

              <p>
                Lo Studio Legale Giuseppe Pitaro ha sede in Via Francesco Acri,
                88, a Catanzaro. La presenza sul territorio e l&apos;esperienza
                maturata nel contesto locale e regionale consentono allo studio
                di offrire assistenza legale a clienti di Catanzaro, della
                provincia e della Calabria.
              </p>

              <p>
                Per richiedere informazioni, fissare un primo contatto o
                sottoporre una questione allo studio, è possibile utilizzare i
                recapiti telefonici, email o WhatsApp indicati nella pagina.
              </p>
            </div>

            <div className="mt-10 rounded-[1.8rem] bg-[#1f1a17] p-6 text-white md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
                Contatti
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Richiedi informazioni allo Studio Legale Pitaro
              </h2>
              <p className="mt-4 leading-8 text-[#e6ddd3]">
                Per un primo contatto con l&apos;Avv. Giuseppe Pitaro è
                possibile telefonare allo studio, inviare una email o utilizzare
                WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+39335286550"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:opacity-90"
                >
                  Chiama
                </a>
                <a
                  href="mailto:segreteria@studiolegalepitaro.it"
                  className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white hover:text-[#1f1a17]"
                >
                  Invia una email
                </a>
                <a
                  href="https://wa.me/39335286550"
                  className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white hover:text-[#1f1a17]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
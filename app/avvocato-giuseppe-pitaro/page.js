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
  "@id":
    "https://www.studiolegalepitaro.it/avvocato-giuseppe-pitaro#giuseppe-pitaro",
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
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

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
              className="text-[#7b5a36] transition hover:text-[#7b5a36]"
            >
              L&apos;Avv. Giuseppe Pitaro
            </Link>
            <Link
              href="/attivita-professionale"
              className="transition hover:text-[#7b5a36]"
            >
              Attività professionale
            </Link>
            <Link href="/#aree" className="transition hover:text-[#7b5a36]">
              Le aree
            </Link>
            <Link href="/#contatti" className="transition hover:text-[#7b5a36]">
              Contatti
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contatti"
              className="rounded-full border border-[#1f1a17] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1a17] hover:text-white"
            >
              Richiedi un contatto
            </Link>
          </div>

          <details className="group relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#d7c6b2] bg-white/80 text-[#1f1a17]">
              <span className="block h-[2px] w-5 bg-[#1f1a17] transition group-open:rotate-45 group-open:translate-y-[2px]" />
              <span className="absolute block h-[2px] w-5 translate-y-2 bg-[#1f1a17] transition group-open:-rotate-45 group-open:translate-y-[2px]" />
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
                  className="rounded-xl bg-white/70 px-3 py-3 text-[#7b5a36]"
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
                  href="/#aree"
                  className="rounded-xl px-3 py-3 transition hover:bg-white/70"
                >
                  Le aree
                </Link>
                <Link
                  href="/#contatti"
                  className="rounded-xl px-3 py-3 transition hover:bg-white/70"
                >
                  Contatti
                </Link>
                <Link
                  href="/#contatti"
                  className="mt-2 rounded-full border border-[#1f1a17] px-4 py-3 text-center transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Richiedi un contatto
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#ddd1c2]">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ead9c6]/55 blur-3xl" />
            <div className="absolute right-[-80px] top-20 h-80 w-80 rounded-full bg-[#d8b894]/30 blur-3xl" />
            <div className="absolute bottom-[-40px] left-1/3 h-64 w-64 rounded-full bg-white/45 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(252,249,245,0.78),rgba(247,244,238,0.98)_100%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                L&apos;Avv. Giuseppe Pitaro
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Avvocato Giuseppe Pitaro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#564b41] md:text-xl md:leading-9">
                Titolare dello Studio Legale Pitaro a Catanzaro dal 1993,
                l&apos;Avv. Giuseppe Pitaro offre assistenza e consulenza legale
                a privati, imprese ed enti pubblici, con un profilo
                professionale costruito su oltre 35 anni di esperienza.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#e2d7ca] bg-white/75 p-5 shadow-sm">
                  <p className="text-2xl font-semibold tracking-tight">35+</p>
                  <p className="mt-1 text-sm leading-6 text-[#6d6053]">
                    anni di esperienza
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e2d7ca] bg-white/75 p-5 shadow-sm">
                  <p className="text-2xl font-semibold tracking-tight">1993</p>
                  <p className="mt-1 text-sm leading-6 text-[#6d6053]">
                    titolare dello studio
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e2d7ca] bg-white/75 p-5 shadow-sm">
                  <p className="text-2xl font-semibold tracking-tight">
                    Cassazione
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6d6053]">
                    patrocinio superiore
                  </p>
                </div>
              </div>

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
                  className="h-[360px] w-full object-cover object-center sm:h-[460px] lg:h-[560px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
            <article className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm md:p-10 lg:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                  Profilo professionale
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Esperienza legale a Catanzaro al servizio di privati, imprese
                  ed enti pubblici.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#564b41]">
                  L&apos;Avv. Giuseppe Pitaro è titolare dello Studio Legale
                  Pitaro a Catanzaro dal 1993. Nel corso della propria attività
                  professionale ha maturato una significativa esperienza in
                  diversi ambiti del diritto, assistendo privati, imprese ed
                  enti pubblici con un approccio fondato su rigore, attenzione
                  al caso concreto e tutela effettiva degli interessi del
                  cliente.
                </p>

                <p className="mt-5 text-lg leading-8 text-[#564b41]">
                  Lo Studio Legale Giuseppe Pitaro opera a Catanzaro e offre
                  assistenza giudiziale e stragiudiziale in materia di diritto
                  amministrativo, diritto civile, diritto del lavoro, appalti
                  pubblici, controversie dinanzi al TAR e patrocinio dinanzi alla
                  Corte di Cassazione.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <section className="rounded-[1.6rem] border border-[#eee4d8] bg-[#fcfaf7] p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Diritto amministrativo
                  </h3>
                  <p className="mt-4 leading-8 text-[#5f5449]">
                    Una parte rilevante dell&apos;attività professionale
                    dell&apos;Avv. Giuseppe Pitaro riguarda il diritto
                    amministrativo, con esperienza in procedimenti e
                    controversie che coinvolgono pubbliche amministrazioni, enti
                    locali, imprese e privati.
                  </p>
                </section>

                <section className="rounded-[1.6rem] border border-[#eee4d8] bg-[#fcfaf7] p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Ricorsi al TAR e Consiglio di Stato
                  </h3>
                  <p className="mt-4 leading-8 text-[#5f5449]">
                    L&apos;attività comprende l&apos;assistenza in materia di
                    ricorsi al TAR, appalti pubblici, urbanistica, edilizia,
                    diritto sanitario, diritto elettorale e procedimenti
                    amministrativi complessi, anche dinanzi al Consiglio di
                    Stato.
                  </p>
                </section>

                <section className="rounded-[1.6rem] border border-[#eee4d8] bg-[#fcfaf7] p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Patrocinio in Cassazione
                  </h3>
                  <p className="mt-4 leading-8 text-[#5f5449]">
                    L&apos;Avv. Giuseppe Pitaro è patrocinante in Cassazione e
                    presta assistenza anche nelle fasi di giudizio dinanzi alle
                    giurisdizioni superiori, seguendo controversie articolate
                    che richiedono analisi tecnica e strategia difensiva.
                  </p>
                </section>

                <section className="rounded-[1.6rem] border border-[#eee4d8] bg-[#fcfaf7] p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Assistenza multidisciplinare
                  </h3>
                  <p className="mt-4 leading-8 text-[#5f5449]">
                    Lo studio offre assistenza in diversi settori del diritto,
                    mantenendo un metodo di lavoro orientato alla chiarezza, alla
                    valutazione preventiva dei profili di rischio e alla tutela
                    concreta della posizione del cliente.
                  </p>
                </section>
              </div>

              <div className="mt-10 rounded-[1.8rem] bg-[#1f1a17] p-7 text-white md:p-9">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
                  Aree di attività
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Principali ambiti di assistenza legale
                </h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Diritto amministrativo",
                    "Ricorsi al TAR",
                    "Consiglio di Stato",
                    "Appalti pubblici",
                    "Diritto civile",
                    "Diritto del lavoro",
                    "Urbanistica ed edilizia",
                    "Patrocinio in Cassazione",
                  ].map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-[#f3ede6]"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                  Studio
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Studio Legale Giuseppe Pitaro
                </h2>

                <div className="mt-6 space-y-5 text-sm leading-7 text-[#564b41]">
                  <div>
                    <p className="font-semibold text-[#1f1a17]">Indirizzo</p>
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

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href="tel:+39335286550"
                    className="rounded-full bg-[#1f1a17] px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-95"
                  >
                    Chiama
                  </a>

                  <a
                    href="mailto:segreteria@studiolegalepitaro.it"
                    className="rounded-full border border-[#1f1a17] px-5 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                  >
                    Invia una email
                  </a>

                  <a
                    href="https://wa.me/39335286550"
                    className="rounded-full border border-[#1f1a17] px-5 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-3 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5940077166874!2d16.588876077191703!3d38.910398545935045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13400657afc14ba3%3A0x8cdb558eff6af5fd!2sAvv.%20Giuseppe%20Pitaro%20detto%20Pino!5e0!3m2!1sit!2sit!4v1776531339489!5m2!1sit!2sit"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Studio Legale Giuseppe Pitaro"
                  className="rounded-[1.5rem]"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>

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
              <Link href="/#aree" className="transition hover:text-white">
                Le aree
              </Link>
              <Link href="/#contatti" className="transition hover:text-white">
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
              <Link
                href="/privacy-policy"
                className="transition hover:text-white"
              >
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
    </div>
  );
}

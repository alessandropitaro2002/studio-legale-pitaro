import Link from "next/link";
import {
  Briefcase,
  Building2,
  CalendarCheck,
  Clock,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Scale,
} from "lucide-react";

export const metadata = {
  title: "Contatti | Studio Legale Giuseppe Pitaro Catanzaro",
  description:
    "Contatta lo Studio Legale Giuseppe Pitaro a Catanzaro. Telefono, email, WhatsApp, indirizzo e mappa dello studio in Via Francesco Acri, 88.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Contatti | Studio Legale Giuseppe Pitaro Catanzaro",
    description:
      "Telefono, email, WhatsApp, indirizzo e mappa dello Studio Legale Giuseppe Pitaro a Catanzaro.",
    url: "https://www.studiolegalepitaro.it/contatti",
    siteName: "Studio Legale Giuseppe Pitaro",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://www.studiolegalepitaro.it/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contatti Studio Legale Giuseppe Pitaro Catanzaro",
      },
    ],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.studiolegalepitaro.it/#studio-legale",
  name: "Studio Legale Giuseppe Pitaro",
  alternateName: "Studio Legale Pitaro",
  url: "https://www.studiolegalepitaro.it/",
  image: "https://www.studiolegalepitaro.it/og-image.jpg",
  telephone: "+39335286550",
  email: "segreteria@studiolegalepitaro.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Francesco Acri, 88",
    postalCode: "88100",
    addressLocality: "Catanzaro",
    addressRegion: "Calabria",
    addressCountry: "IT",
  },
  areaServed: ["Catanzaro", "Provincia di Catanzaro", "Calabria"],
};

const contactCards = [
  {
    title: "Telefono",
    value: "335 286550",
    description: "Per fissare un appuntamento o richiedere un primo contatto.",
    href: "tel:+39335286550",
    cta: "Chiama lo studio",
    icon: Phone,
  },
  {
    title: "Email",
    value: "segreteria@studiolegalepitaro.it",
    description: "Per inviare una richiesta scritta o trasmettere informazioni.",
    href: "mailto:segreteria@studiolegalepitaro.it",
    cta: "Invia una email",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: "335 286550",
    description: "Per un primo contatto diretto con lo studio.",
    href: "https://wa.me/39335286550",
    cta: "Scrivi su WhatsApp",
    icon: MessageCircle,
  },
];

const practiceAreas = [
  {
    title: "Diritto amministrativo",
    icon: Landmark,
  },
  {
    title: "Ricorsi al TAR e Consiglio di Stato",
    icon: CalendarCheck,
  },
  {
    title: "Appalti pubblici",
    icon: Building2,
  },
  {
    title: "Diritto civile",
    icon: Scale,
  },
  {
    title: "Diritto del lavoro",
    icon: Briefcase,
  },
  {
    title: "Patrocinio in Cassazione",
    icon: Scale,
  },
];

function AnimatedContactButton({ href = "#recapiti", children }) {
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

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
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
            <Link href="/aree-di-attivita" className="transition hover:text-[#7b5a36]">
              Aree di attività
            </Link>
            <Link
              href="/contatti"
              className="text-[#7b5a36] transition hover:text-[#7b5a36]"
            >
              Contatti
            </Link>
          </nav>

          <div className="hidden md:block">
            <AnimatedContactButton href="#recapiti">
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
                  className="rounded-xl px-3 py-3 transition hover:bg-white/70"
                >
                  Aree di attività
                </Link>
                <Link
                  href="/contatti"
                  className="rounded-xl bg-white/70 px-3 py-3 text-[#7b5a36]"
                >
                  Contatti
                </Link>
                <a
                  href="#recapiti"
                  className="mt-2 rounded-full border border-[#1f1a17] px-4 py-3 text-center transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Richiedi un contatto
                </a>
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

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Contatti
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Contatta lo Studio Legale Giuseppe Pitaro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#564b41] md:text-xl md:leading-9">
                Per richiedere informazioni, fissare un primo contatto o
                concordare una consulenza con lo Studio Legale Giuseppe Pitaro a
                Catanzaro.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AnimatedContactButton href="#recapiti">
                  <Phone size={16} strokeWidth={1.8} />
                  Richiedi un contatto
                </AnimatedContactButton>

                <a
                  href="tel:+39335286550"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f1a17] bg-white/80 px-7 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                >
                  <Phone size={16} strokeWidth={1.8} />
                  Chiama
                </a>

                <a
                  href="https://wa.me/39335286550"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cdbfaa] bg-white/80 px-7 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-white"
                >
                  <MessageCircle size={16} strokeWidth={1.8} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-5 shadow-[0_24px_80px_rgba(40,27,16,0.10)]">
              <div className="rounded-[1.6rem] bg-[#1f1a17] p-7 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d1c1ae]">
                  Ricevimento
                </p>

                <div className="mt-5 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#ead9c6]">
                    <Clock size={20} strokeWidth={1.8} />
                  </span>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Su appuntamento
                    </h2>
                    <p className="mt-3 leading-8 text-[#e6ddd3]">
                      Lo studio riceve dal lunedì al venerdì, mattina e
                      pomeriggio, previo appuntamento.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  <a
                    href="tel:+39335286550"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1a17] transition hover:opacity-90"
                  >
                    <Phone size={16} strokeWidth={1.8} />
                    Chiama lo studio
                  </a>

                  <a
                    href="mailto:segreteria@studiolegalepitaro.it"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#1f1a17]"
                  >
                    <Mail size={16} strokeWidth={1.8} />
                    Invia una email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="recapiti"
          className="mx-auto max-w-7xl scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              Recapiti
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Scegli come contattare lo studio
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f5449]">
              Puoi contattare lo Studio Legale Giuseppe Pitaro telefonicamente,
              via email o tramite WhatsApp.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="group rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b89567]/60 hover:shadow-xl hover:shadow-[#4f3a24]/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36] transition group-hover:-translate-y-0.5">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mt-3 break-words text-lg font-medium text-[#3d332c]">
                    {card.value}
                  </p>

                  <p className="mt-4 leading-7 text-[#5f5449]">
                    {card.description}
                  </p>

                  <span className="mt-6 inline-flex rounded-full border border-[#1f1a17] px-5 py-3 text-sm font-medium text-[#1f1a17] transition group-hover:bg-[#1f1a17] group-hover:text-white">
                    {card.cta}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm md:p-9">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Dove siamo
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Studio Legale Giuseppe Pitaro
              </h2>

              <div className="mt-8 space-y-6 text-[#564b41]">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                    <MapPin size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-semibold text-[#1f1a17]">Indirizzo</p>
                    <p className="mt-1 leading-7">Via Francesco Acri, 88</p>
                    <p className="leading-7">88100 Catanzaro</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                    <Clock size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-semibold text-[#1f1a17]">
                      Ricevimento
                    </p>
                    <p className="mt-1 leading-7">
                      Dal lunedì al venerdì, mattina e pomeriggio, previo
                      appuntamento.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Via%20Francesco%20Acri%2088%2088100%20Catanzaro"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                <Navigation size={16} strokeWidth={1.8} />
                Apri su Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-3 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5940077166874!2d16.588876077191703!3d38.910398545935045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13400657afc14ba3%3A0x8cdb558eff6af5fd!2sAvv.%20Giuseppe%20Pitaro%20detto%20Pino!5e0!3m2!1sit!2sit!4v1776531339489!5m2!1sit!2sit"
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Studio Legale Giuseppe Pitaro"
                className="rounded-[1.6rem]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddd1c2] bg-white/45">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                  Richieste
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Per quali richieste contattare lo studio
                </h2>

                <p className="mt-5 text-lg leading-8 text-[#5f5449]">
                  È possibile contattare lo studio per richieste di assistenza
                  giudiziale e stragiudiziale in diversi ambiti del diritto, con
                  attenzione al caso concreto e alla tutela degli interessi del
                  cliente.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {practiceAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className="rounded-[1.5rem] border border-[#ddd1c2] bg-[#fcfaf7] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4f3a24]/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <p className="mt-4 font-semibold text-[#1f1a17]">
                        {area.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/75 p-7 shadow-sm md:p-9">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Prima del contatto
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Informazioni utili da indicare
              </h2>

              <p className="mt-5 leading-8 text-[#5f5449]">
                Per rendere più agevole il primo contatto, può essere utile
                indicare l’oggetto della richiesta, eventuali scadenze o termini
                imminenti e un recapito telefonico per essere ricontattati.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#1f1a17] p-8 text-white shadow-[0_25px_80px_rgba(31,26,23,0.18)] md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
                Contatto diretto
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                Richiedi un primo contatto con lo studio
              </h2>

              <p className="mt-5 leading-8 text-[#e6ddd3]">
                Per informazioni o per concordare una consulenza, puoi
                contattare lo Studio Legale Giuseppe Pitaro tramite telefono,
                email o WhatsApp.
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
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 sm:pb-12 lg:px-8">
          <div className="rounded-[1.4rem] border border-[#ddd1c2] bg-white/55 px-5 py-4 text-sm leading-6 text-[#6d6053] shadow-sm md:px-6">
            <p>
              <span className="font-semibold text-[#1f1a17]">
                Nota privacy.
              </span>{" "}
              L’invio di email, messaggi o comunicazioni tramite WhatsApp
              comporta il trattamento dei dati personali comunicati dall’utente
              al fine di rispondere alla richiesta. Per maggiori informazioni è
              possibile consultare la{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-[#7b5a36] underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ddd1c2] bg-[#f7f4ee]/95 px-3 py-3 shadow-[0_-12px_35px_rgba(31,26,23,0.10)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a
            href="tel:+39335286550"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-[#1f1a17] px-3 py-3 text-xs font-medium text-white"
          >
            <Phone size={15} strokeWidth={1.8} />
            Chiama
          </a>

          <a
            href="mailto:segreteria@studiolegalepitaro.it"
            className="inline-flex items-center justify-center gap-1 rounded-full border border-[#1f1a17] bg-white px-3 py-3 text-xs font-medium text-[#1f1a17]"
          >
            <Mail size={15} strokeWidth={1.8} />
            Email
          </a>

          <a
            href="https://wa.me/39335286550"
            className="inline-flex items-center justify-center gap-1 rounded-full border border-[#1f1a17] bg-white px-3 py-3 text-xs font-medium text-[#1f1a17]"
          >
            <MessageCircle size={15} strokeWidth={1.8} />
            WhatsApp
          </a>
        </div>
      </div>

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
              <Link href="/aree-di-attivita" className="transition hover:text-white">
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

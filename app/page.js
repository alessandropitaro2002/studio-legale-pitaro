"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  Building2,
  Scale,
  Shield,
  Users,
  Landmark,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function LandingPage() {
  const rotatingWords = [
    "serietà",
    "chiarezza",
    "rigore",
    "competenza",
    "determinazione",
    "visione strategica",
  ];

  const profileHighlights = [
    "Oltre 30 anni di esperienza legale maturata in molteplici settori del diritto.",
    "Patrocinante in Cassazione, con attività anche dinanzi al Consiglio di Stato.",
    "Approccio fondato su rigore, dedizione e difesa concreta del cliente.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);

  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);
  const [isHighlightVisible, setIsHighlightVisible] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWordVisible(false);

      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsWordVisible(true);
      }, 220);
    }, 2400);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHighlightVisible(false);

      setTimeout(() => {
        setCurrentHighlightIndex(
          (prev) => (prev + 1) % profileHighlights.length
        );
        setIsHighlightVisible(true);
      }, 220);
    }, 3200);

    return () => clearInterval(interval);
  }, [profileHighlights.length]);

  const practiceAreas = [
    {
      title: "Diritto amministrativo",
      icon: Landmark,
      description:
        "Oltre 30 anni di esperienza in controversie amministrative, con consolidata attività anche dinanzi al Consiglio di Stato. Particolare competenza in materia elettorale, scioglimento di comuni per infiltrazioni mafiose e interdittive antimafia.",
    },
    {
      title: "Ricorsi al TAR e appalti pubblici",
      icon: Building2,
      description:
        "Assistenza qualificata nei procedimenti avanti al TAR, con esperienza significativa in appalti pubblici, urbanistica, diritto sanitario ed elettorale, sia a tutela delle pubbliche amministrazioni sia nei giudizi contro le medesime.",
    },
    {
      title: "Diritto del lavoro",
      icon: Briefcase,
      description:
        "Assistenza in controversie tra lavoratori e aziende, con consulenza su contratti, licenziamenti, infortuni sul lavoro, procedure disciplinari, mobbing, previdenza e diritto sindacale.",
    },
    {
      title: "Diritto civile e di famiglia",
      icon: Users,
      description:
        "Tutela legale in materia di diritto civile, famiglia, eredità e successioni, divorzio, affidamento, adozione, tutela dei minori e incapacità giuridica, con attenzione alla persona e alla concretezza delle soluzioni.",
    },
    {
      title: "Impresa, contratti e patrimonio",
      icon: Scale,
      description:
        "Attività in ambito commerciale e societario, contrattuale, fallimentare e concorsuale, immobiliare, locazioni, sfratti, aste giudiziarie, edilizia e urbanistica, con approccio rigoroso e orientato alla prevenzione del contenzioso.",
    },
    {
      title: "Difesa, risarcimento e patrocinio in Cassazione",
      icon: Shield,
      description:
        "Assistenza in materia penale, risarcimento danni, incidenti stradali, malasanità, diritto ambientale, agrario, sportivo, arbitrato, mediazione, negoziazione assistita e patrocinio dinanzi alla Corte di Cassazione.",
    },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f4ee] text-[#1f1a17]">
      <header className="sticky top-0 z-50 border-b border-[#d9cec0]/70 bg-[#f7f4ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="min-w-0 text-[13px] font-semibold tracking-[0.01em] text-[#2a221d] sm:text-base md:text-lg">
            <span className="block truncate">Studio Legale Giuseppe Pitaro</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-[#7b5a36]">
              Home
            </a>
            <a href="#avvocato" className="transition hover:text-[#7b5a36]">
              L&apos;Avv. Giuseppe Pitaro
            </a>
            <a href="#aree" className="transition hover:text-[#7b5a36]">
              Le aree
            </a>
            <a href="#contatti" className="transition hover:text-[#7b5a36]">
              Contatti
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contatti"
              className="hidden rounded-full border border-[#1f1a17] px-3 py-2 text-[11px] font-medium transition hover:bg-[#1f1a17] hover:text-white sm:px-4 sm:text-sm md:inline-flex"
            >
              Richiedi un contatto
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c6b2] bg-white/80 text-[#1f1a17] md:hidden"
              aria-label="Apri menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#e3d7c8] bg-[#f7f4ee]/95 px-4 py-4 shadow-sm md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-[#2a221d]">
              <a
                href="#home"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                Home
              </a>
              <a
                href="#avvocato"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                L&apos;Avv. Giuseppe Pitaro
              </a>
              <a
                href="#aree"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                Le aree
              </a>
              <a
                href="#contatti"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 transition hover:bg-white/70"
              >
                Contatti
              </a>
              <a
                href="#contatti"
                onClick={closeMobileMenu}
                className="mt-2 rounded-full border border-[#1f1a17] px-4 py-3 text-center transition hover:bg-[#1f1a17] hover:text-white"
              >
                Richiedi un contatto
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden scroll-mt-24 min-h-[calc(100svh-72px)]"
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/sfondo-home.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,12,9,0.55),rgba(33,24,18,0.48)_20%,rgba(247,244,238,0.78)_58%,rgba(247,244,238,0.95)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(123,90,54,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(66,52,39,0.10),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,13,11,0.14),transparent_18%,transparent_82%,rgba(15,13,11,0.08))]" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid w-full items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
              <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
                <h1 className="max-w-[12ch] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#1f1a17] sm:max-w-none sm:text-4xl md:text-6xl lg:text-7xl">
                  Studio Legale
                  <br />
                  Giuseppe Pitaro
                </h1>

                <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-[1.4rem] border border-[#d7c6b2] bg-white/78 px-4 py-3 shadow-[0_10px_30px_rgba(33,24,18,0.10)] backdrop-blur-sm sm:px-5">
                  <span className="text-[15px] font-medium tracking-[0.01em] text-[#5f5449] sm:text-lg">
                    Assistenza legale con
                  </span>
                  <span className="relative inline-flex min-w-[170px] items-center justify-center overflow-hidden rounded-full bg-[#f8f4ee] px-4 py-2 shadow-inner">
                    <span
                      className={`text-[15px] font-semibold tracking-[0.01em] text-[#7b5a36] transition-all duration-300 sm:text-lg ${
                        isWordVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </span>
                </div>

                <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#4f453d] sm:text-lg sm:leading-8 md:max-w-2xl md:text-xl">
                  Dal 1993 titolare dello Studio Legale Pitaro a Catanzaro,
                  l&apos;Avv. Giuseppe Pitaro offre assistenza e consulenza legale
                  con un profilo costruito su oltre 30 anni di esperienza,
                  competenza multidisciplinare e attenzione rigorosa alla tutela
                  degli interessi del cliente.
                </p>

                <div className="mt-7 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
                  <a
                    href="#contatti"
                    className="w-full rounded-full bg-[#1f1a17] px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-[#1f1a17]/15 transition hover:-translate-y-0.5 sm:w-auto sm:px-7"
                  >
                    Prenota un contatto
                  </a>
                  <a
                    href="#aree"
                    className="w-full rounded-full border border-[#cdbfaa] bg-white/80 px-6 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-white sm:w-auto sm:px-7"
                  >
                    Scopri le aree di attività
                  </a>
                </div>

                <div className="mt-8 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#ccbba8] to-transparent lg:hidden" />

                <div className="relative z-10 mt-8 w-full max-w-2xl">
                  <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/78 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                    <div className="min-h-[84px] sm:min-h-[72px]">
                      <p
                        className={`text-sm leading-7 text-[#5f5449] transition-all duration-300 sm:text-base ${
                          isHighlightVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                      >
                        {profileHighlights[currentHighlightIndex]}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        {profileHighlights.map((_, index) => (
                          <span
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentHighlightIndex
                                ? "w-6 bg-[#7b5a36]"
                                : "w-2 bg-[#d7c6b2]"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8b7a68]">
                        Profilo
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="#avvocato"
                  className="mt-8 flex flex-col items-center gap-1 text-[#6f6256] transition hover:text-[#7b5a36] lg:hidden"
                  aria-label="Scorri verso il basso"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em]">
                    Scorri
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7c6b2] bg-white/78 backdrop-blur-sm">
                    <ChevronDown size={18} strokeWidth={1.8} />
                  </span>
                </a>
              </div>

              <div className="hidden w-full items-center lg:flex lg:max-w-none lg:pl-8">
                <div className="w-full">
                  <div className="overflow-hidden rounded-[2rem] border border-[#d8ccbc] bg-white/82 p-3 shadow-[0_20px_80px_rgba(40,27,16,0.12)] backdrop-blur-sm sm:p-4">
                    <div className="overflow-hidden rounded-[1.6rem] border border-[#ece3d8] bg-[#fcfaf7]">
                      <img
                        src="/avv-giuseppe-pitaro-home.jpg"
                        alt="Avvocato Giuseppe Pitaro"
                        className="h-[300px] w-full object-cover object-center sm:h-[420px] lg:h-[540px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#avvocato"
              className="mx-auto mt-10 hidden flex-col items-center gap-1 text-[#6f6256] transition hover:text-[#7b5a36] lg:flex"
              aria-label="Scorri verso il basso"
            >
              <span className="text-[10px] uppercase tracking-[0.22em]">
                Scorri
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7c6b2] bg-white/78 backdrop-blur-sm animate-bounce">
                <ChevronDown size={18} strokeWidth={1.8} />
              </span>
            </a>
          </div>
        </section>

        <section
          id="avvocato"
          className="mx-auto flex min-h-screen max-w-7xl items-center scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="w-full">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                L&apos;Avv. Giuseppe Pitaro
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-5xl">
                Oltre 30 anni di esperienza al servizio di privati, imprese ed
                enti pubblici.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch lg:gap-8">
              <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-4 shadow-[0_20px_80px_rgba(40,27,16,0.08)]">
                <div className="overflow-hidden rounded-[1.6rem] border border-[#ece3d8] bg-[#fcfaf7]">
                  <img
                    src="/avv-giuseppe-pitaro.jpg"
                    alt="Avvocato Giuseppe Pitaro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-8 shadow-sm md:p-10">
                <p className="text-lg leading-8 text-[#564b41]">
                  Titolare dal 1993 dello Studio Legale Pitaro a Catanzaro,
                  l&apos;Avv. Giuseppe Pitaro si è distinto nel tempo per
                  competenza, dedizione e capacità di affrontare controversie
                  complesse in diversi ambiti del diritto. La sua esperienza
                  professionale comprende attività a tutela delle pubbliche
                  amministrazioni e procedimenti promossi contro le medesime, con
                  risultati di particolare rilievo in materia amministrativa,
                  elettorale, urbanistica, sanitaria e negli appalti pubblici.
                </p>
                <p className="mt-6 text-lg leading-8 text-[#564b41]">
                  Tra i successi professionali più significativi si segnala il
                  ricorso contro lo scioglimento del Comune di Guardavalle, uno
                  dei pochissimi casi vinti in Italia, oltre all&apos;intervento
                  sugli espropri della S.S. 182 a tutela dei proprietari
                  coinvolti. Patrocinante in Cassazione, garantisce assistenza e
                  consulenza legale di alto livello con un metodo improntato a
                  serietà, determinazione e precisione.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    "Oltre 30 anni di esperienza",
                    "Ricorsi al TAR e Consiglio di Stato",
                    "Patrocinante in Cassazione",
                    "Tutela di privati e pubbliche amministrazioni",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#eee4d8] bg-[#fcfaf7] px-5 py-4 text-sm font-medium text-[#3d332c]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="aree"
          className="scroll-mt-24 border-y border-[#ddd1c2] bg-white/50"
        >
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Le aree
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-5xl">
                Principali aree di assistenza e consulenza legale.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5f5449]">
                Lo studio offre assistenza giudiziale e stragiudiziale in diversi
                ambiti del diritto, con un approccio fondato su competenza,
                attenzione al caso concreto e tutela effettiva degli interessi
                del cliente.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {practiceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="group rounded-[1.8rem] border border-[#ddd1c2] bg-[#fcfaf7] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4f3a24]/5"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#cebfae] bg-white text-[#7b5a36]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {area.title}
                    </h3>
                    <p className="mt-4 leading-8 text-[#5f5449]">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contatti"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="grid w-full gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
            <div className="rounded-[2rem] bg-[#1f1a17] p-8 text-white shadow-[0_25px_80px_rgba(31,26,23,0.18)] md:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
                Contatti
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-5xl">
                Contatta lo studio per una consulenza o per richiedere
                informazioni.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e6ddd3]">
                Per richiedere una consulenza o un primo contatto con lo studio,
                è possibile utilizzare i recapiti qui indicati. Qui trovi i
                principali recapiti dello studio per richiedere informazioni,
                fissare un primo contatto o concordare una consulenza.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cdbca8]">
                    Email
                  </p>
                  <p className="mt-2 text-base font-medium">
                    studiolegalepitaro@libero.it
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cdbca8]">
                    Telefono e WhatsApp
                  </p>
                  <p className="mt-2 text-base font-medium">335 286550</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cdbca8]">
                    Studio
                  </p>
                  <p className="mt-2 text-base font-medium">
                    Via Francesco Acri, 88, 88100 Catanzaro
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5940077166874!2d16.588876077191703!3d38.910398545935045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13400657afc14ba3%3A0x8cdb558eff6af5fd!2sAvv.%20Giuseppe%20Pitaro%20detto%20Pino!5e0!3m2!1sit!2sit!4v1776531339489!5m2!1sit!2sit"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Studio Legale Giuseppe Pitaro"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-8 shadow-sm md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Richiedi informazioni
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Richiedi informazioni
              </h3>
              <p className="mt-4 leading-8 text-[#5f5449]">
                Lo Studio Legale Giuseppe Pitaro offre assistenza e consulenza
                con serietà, competenza e attenzione al caso concreto. Per
                richiedere informazioni o fissare un primo contatto, è possibile
                utilizzare i recapiti indicati di seguito.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+39335286550"
                  className="block rounded-full bg-[#1f1a17] px-6 py-3 text-center text-sm font-medium text-white transition hover:opacity-95"
                >
                  Chiama
                </a>
                <a
                  href="mailto:studiolegalepitaro@libero.it"
                  className="block rounded-full border border-[#1f1a17] px-6 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Invia una email
                </a>
                <a
                  href="https://wa.me/39335286550"
                  className="block rounded-full border border-[#1f1a17] px-6 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Contatta su WhatsApp
                </a>
              </div>
            </div>
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
              Assistenza e consulenza legale a Catanzaro, con oltre 30 anni di
              esperienza e attività in diversi ambiti del diritto.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b89567]">
              Navigazione
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#ddd1c2]">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>
              <a href="#avvocato" className="transition hover:text-white">
                L&apos;Avv. Giuseppe Pitaro
              </a>
              <a href="#aree" className="transition hover:text-white">
                Le aree
              </a>
              <a href="#contatti" className="transition hover:text-white">
                Contatti
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b89567]">
              Contatti
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#ddd1c2]">
              <a
                href="mailto:studiolegalepitaro@libero.it"
                className="transition hover:text-white"
              >
                studiolegalepitaro@libero.it
              </a>
              <a
                href="tel:+39335286550"
                className="transition hover:text-white"
              >
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
              <a
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[#8f8376] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© 2026 Studio Legale Giuseppe Pitaro. Tutti i diritti riservati.</p>
            <p>Catanzaro, Calabria</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

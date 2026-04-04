export default function LandingPage() {
  const practiceAreas = [
    {
      title: 'Diritto amministrativo',
      description:
        'Oltre 30 anni di esperienza in controversie amministrative, con consolidata attivita anche dinanzi al Consiglio di Stato. Particolare competenza in materia elettorale, scioglimento di comuni per infiltrazioni mafiose e interdittive antimafia.',
    },
    {
      title: 'Ricorsi al TAR e appalti pubblici',
      description:
        'Assistenza qualificata nei procedimenti avanti al TAR, con esperienza significativa in appalti pubblici, urbanistica, diritto sanitario ed elettorale, sia a tutela delle pubbliche amministrazioni sia nei giudizi contro le medesime.',
    },
    {
      title: 'Diritto del lavoro',
      description:
        'Assistenza in controversie tra lavoratori e aziende, con consulenza su contratti, licenziamenti, infortuni sul lavoro, procedure disciplinari, mobbing, previdenza e diritto sindacale.',
    },
    {
      title: 'Diritto civile e di famiglia',
      description:
        'Tutela legale in materia di diritto civile, famiglia, eredita e successioni, divorzio, affidamento, adozione, tutela dei minori e incapacita giuridica, con attenzione alla persona e alla concretezza delle soluzioni.',
    },
    {
      title: 'Impresa, contratti e patrimonio',
      description:
        'Attivita in ambito commerciale e societario, contrattuale, fallimentare e concorsuale, immobiliare, locazioni, sfratti, aste giudiziarie, edilizia e urbanistica, con approccio rigoroso e orientato alla prevenzione del contenzioso.',
    },
    {
      title: 'Difesa, risarcimento e patrocinio in Cassazione',
      description:
        'Assistenza in materia penale, risarcimento danni, incidenti stradali, malasanita, diritto ambientale, agrario, sportivo, arbitrato, mediazione, negoziazione assistita e patrocinio dinanzi alla Corte di Cassazione.',
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f4ee] text-[#1f1a17]">
      <header className="sticky top-0 z-50 border-b border-[#d9cec0]/70 bg-[#f7f4ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo-pitaro.png"
              alt="Logo Studio Legale Giuseppe Pitaro"
              className="h-16 w-auto object-contain"
            />
            <div className="text-base font-semibold tracking-[0.03em] md:text-lg">
              Studio Legale Giuseppe Pitaro
            </div>
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

          <a
            href="#contatti"
            className="rounded-full border border-[#1f1a17] px-4 py-2 text-sm font-medium transition hover:bg-[#1f1a17] hover:text-white"
          >
            Richiedi un contatto
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,90,54,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(66,52,39,0.08),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex rounded-full border border-[#d9cec0] bg-white/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7d6d5b] shadow-sm">
                Assistenza legale con serieta, chiarezza e visione strategica
              </div>

              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
                Studio Legale
                <br />
                Giuseppe Pitaro
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5f5449] md:text-xl">
                Dal 1993 titolare dello Studio Legale Pitaro a Catanzaro, l&apos;Avv. Giuseppe Pitaro offre assistenza e consulenza legale con un profilo costruito su oltre 30 anni di esperienza, competenza multidisciplinare e attenzione rigorosa alla tutela degli interessi del cliente.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contatti"
                  className="rounded-full bg-[#1f1a17] px-7 py-3 text-center text-sm font-medium text-white shadow-lg shadow-[#1f1a17]/10 transition hover:-translate-y-0.5"
                >
                  Prenota un contatto
                </a>
                <a
                  href="#aree"
                  className="rounded-full border border-[#cdbfaa] bg-white/70 px-7 py-3 text-center text-sm font-medium text-[#1f1a17] transition hover:bg-white"
                >
                  Scopri le aree di attivita
                </a>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[2rem] border border-[#d8ccbc] bg-white/70 p-4 shadow-[0_20px_80px_rgba(40,27,16,0.08)] backdrop-blur">
                <div className="rounded-[1.6rem] border border-[#ece3d8] bg-[#fcfaf7] p-8">
                  <div className="flex items-center justify-between border-b border-[#eee4d8] pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#8b7a68]">
                        Profilo professionale
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        Eleganza, metodo, tutela.
                      </h2>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-[#7b5a36]" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      'Oltre 30 anni di esperienza legale maturata in molteplici settori del diritto.',
                      'Patrocinante in Cassazione, con attivita anche dinanzi al Consiglio di Stato.',
                      'Approccio fondato su rigore, dedizione e difesa concreta del cliente.',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#eee4d8] bg-white px-4 py-4 text-sm leading-7 text-[#5f5449]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="avvocato" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              L&apos;Avv. Giuseppe Pitaro
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Un profilo professionale autorevole, presentato con eleganza.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
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
                Titolare dal 1993 dello Studio Legale Pitaro a Catanzaro, l&apos;Avv. Giuseppe Pitaro si e distinto nel tempo per competenza, dedizione e capacita di affrontare controversie complesse in diversi ambiti del diritto. La sua esperienza professionale comprende attivita a tutela delle pubbliche amministrazioni e procedimenti promossi contro le medesime, con risultati di particolare rilievo in materia amministrativa, elettorale, urbanistica, sanitaria e negli appalti pubblici.
              </p>
              <p className="mt-6 text-lg leading-8 text-[#564b41]">
                Tra i successi professionali piu significativi si segnala il ricorso contro lo scioglimento del Comune di Guardavalle, uno dei pochissimi casi vinti in Italia, oltre all&apos;intervento sugli espropri della S.S. 182 a tutela dei proprietari coinvolti. Patrocinante in Cassazione, garantisce assistenza e consulenza legale di alto livello con un metodo improntato a serieta, determinazione e precisione.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  'Oltre 30 anni di esperienza',
                  'Ricorsi al TAR e Consiglio di Stato',
                  'Patrocinante in Cassazione',
                  'Tutela di privati e pubbliche amministrazioni',
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
        </section>

        <section id="aree" className="border-y border-[#ddd1c2] bg-white/50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Le aree
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                Ambiti di attivita presentati con ordine, chiarezza e prestigio.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5f5449]">
                Lo studio opera in numerosi ambiti del diritto, offrendo assistenza giudiziale e stragiudiziale a privati, professionisti, imprese ed enti pubblici. Le competenze qui presentate sintetizzano le principali aree di attivita in modo chiaro e ordinato.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className="group rounded-[1.8rem] border border-[#ddd1c2] bg-[#fcfaf7] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4f3a24]/5"
                >
                  <div className="mb-5 h-10 w-10 rounded-full border border-[#cebfae] bg-white" />
                  <h3 className="text-2xl font-semibold tracking-tight">{area.title}</h3>
                  <p className="mt-4 leading-8 text-[#5f5449]">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contatti" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] bg-[#1f1a17] p-8 text-white shadow-[0_25px_80px_rgba(31,26,23,0.18)] md:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
                Contatti
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                Un contatto diretto, chiaro e professionale.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e6ddd3]">
                Per richiedere una consulenza o un primo contatto con lo studio, e possibile utilizzare i recapiti qui indicati. La sezione e progettata per offrire accesso rapido alle informazioni essenziali, con una presentazione chiara, sobria e professionale.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cdbca8]">Email</p>
                  <p className="mt-2 text-base font-medium">studiolegalepitaro@libero.it</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cdbca8]">Telefono e WhatsApp</p>
                  <p className="mt-2 text-base font-medium">335 286550</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cdbca8]">Studio</p>
                  <p className="mt-2 text-base font-medium">Via Francesco Acri, 88, 88100 Catanzaro</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/70 p-8 shadow-sm md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Richiedi informazioni
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Una sezione contatti semplice e ordinata.
              </h3>
              <p className="mt-4 leading-8 text-[#5f5449]">
                Ho impostato questa area in modo essenziale ed elegante, con accesso diretto all&apos;email dello studio e a WhatsApp. Nella versione finale possiamo anche aggiungere un modulo contatti e una mappa integrata.
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

      <footer className="border-t border-[#ddd1c2] bg-[#f3eee6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#6d6053] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Studio Legale Giuseppe Pitaro. Tutti i diritti riservati.</p>
          
        </div>
      </footer>
    </div>
  );
}

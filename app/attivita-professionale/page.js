import Link from "next/link";

export const metadata = {
  title:
    "Attività professionale Avv. Giuseppe Pitaro | Studio Legale Catanzaro",
  description:
    "Principali notizie e casi pubblicamente documentati relativi all'attività professionale dell'Avv. Giuseppe Pitaro a Catanzaro, in materia di diritto amministrativo, appalti pubblici, lavoro, contenzioso elettorale, TAR e Consiglio di Stato.",
  alternates: {
    canonical: "/attivita-professionale",
  },
  openGraph: {
    title:
      "Attività professionale Avv. Giuseppe Pitaro | Studio Legale Catanzaro",
    description:
      "Una selezione di casi, procedimenti e notizie pubbliche collegate all'attività professionale dell'Avv. Giuseppe Pitaro.",
    url: "https://www.studiolegalepitaro.it/attivita-professionale",
    siteName: "Studio Legale Giuseppe Pitaro",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://www.studiolegalepitaro.it/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Attività professionale Avvocato Giuseppe Pitaro",
      },
    ],
  },
};

const featuredNews = [
  {
    title: "Guardavalle, annullato lo scioglimento del Comune",
    source: "LaC News24",
    sourceUrl:
      "https://www.lacnews24.it/cronaca/a-guardavalle-scioglimento-per-mafia-illegittimo-tornano-in-carica-sindaco-giunta-e-consiglio-dhadq19q",
    date: "30/06/2022",
    category: "Diritto amministrativo / Enti locali",
    status: "Consiglio di Stato favorevole",
    description:
      "Il Consiglio di Stato ha annullato lo scioglimento degli organi elettivi del Comune di Guardavalle, con conseguente rientro in carica di sindaco, giunta e consiglio comunale.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Pol.Service / Dulbecco, affidamento annullato",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2024/06/17/non-quantifico-il-costo-del-personale-illegittimo-laffidamento-diretto-della-dulbecco-alla-sicurtransport/331347/",
    date: "17/06/2024",
    category: "Appalti pubblici / Sanità",
    status: "Ricorso accolto",
    description:
      "Il TAR ha accolto il ricorso di Pol.Service, annullando l'affidamento del servizio e riconoscendo anche profili risarcitori.",
    imageUrl: null,
    logoUrl: "/loghi/catanzaroinforma.jpg",
  },
  {
    title: "Simbario, confermata la regolarità delle elezioni",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/simbario-regolari-le-elezioni-comunali-accolte-le-tesi-difensive-del-comune",
    date: "13/01/2026",
    category: "Contenzioso elettorale",
    status: "Consiglio di Stato favorevole",
    description:
      "Il Consiglio di Stato ha rigettato il ricorso per revocazione, chiudendo definitivamente il contenzioso elettorale a favore del Comune difeso.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Green pass, reintegra e risarcimento",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/niente-green-pass-licenziato-ora-il-comune-di-catanzaro-dovra-riassumerlo-e-risarcirlo",
    date: "02/10/2024",
    category: "Diritto del lavoro / Pubblico impiego",
    status: "Corte d'Appello favorevole",
    description:
      "La Corte d'Appello di Catanzaro ha disposto la reintegra del lavoratore e il riconoscimento dell'indennità risarcitoria.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Scuole in presenza, confermata la decisione del TAR",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/scuola-e-universita/2021/01/11/scuole-il-consiglio-di-stato-conferma-la-sentenza-del-tar-si-continua-in-presenza/182509/",
    date: "11/01/2021",
    category: "Amministrativo scolastico",
    status: "Consiglio di Stato favorevole",
    description:
      "Il Consiglio di Stato ha confermato la decisione del TAR sulla prosecuzione della didattica in presenza per elementari e medie.",
    imageUrl: null,
    logoUrl: null,
  },
];

const newsItems = [
  {
    title: "Catanzaro, ricorso sulle provinciali: contestata l'elezione di Vescio",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/politica/2026/04/09/catanzaro-ricorso-sulle-provinciali-contestata-lelezione-di-vescio/409193/",
    date: "09/04/2026",
    category: "Contenzioso elettorale provinciale",
    role: "Co-difesa",
    status: "Ricorso proposto",
    description:
      "La notizia segnala il deposito di un ricorso elettorale da parte degli avvocati Giuseppe Pitaro e Gaetano Liperoti. Trattandosi di un giudizio introdotto di recente, viene riportato come attività professionale in corso.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Simbario, regolari le elezioni comunali",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/simbario-regolari-le-elezioni-comunali-accolte-le-tesi-difensive-del-comune",
    date: "13/01/2026",
    category: "Contenzioso elettorale comunale",
    role: "Difesa",
    status: "Consiglio di Stato favorevole",
    description:
      "La notizia riferisce il rigetto del ricorso per revocazione e la chiusura definitiva del contenzioso elettorale a favore del Comune.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Il Consiglio di Stato attribuisce il servizio di vigilanza del Consiglio regionale della Calabria alla Pol Service",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2025/01/10/il-consiglio-di-stato-attribuisce-il-servizio-di-vigilanza-del-consiglio-regionale-alla-pol-service/357225/",
    date: "10/01/2025",
    category: "Appalti pubblici / Vigilanza",
    role: "Difesa",
    status: "Esito favorevole",
    description:
      "Il servizio di vigilanza presso il Consiglio regionale della Calabria viene attribuito a Pol Service, assistita dall'Avv. Giuseppe Pitaro.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Elezioni comunali valide a Simbario, il TAR respinge il ricorso",
    source: "Corriere della Calabria",
    sourceUrl:
      "https://www.corrieredellacalabria.it/2024/11/07/elezioni-comunali-valide-a-simbario-il-tar-respinge-ricorso-della-lista-versace/",
    date: "07/11/2024",
    category: "Contenzioso elettorale comunale",
    role: "Difesa",
    status: "TAR favorevole",
    description:
      "Il TAR Calabria ha accolto le tesi dell'amministrazione comunale rappresentata dall'Avv. Giuseppe Pitaro, confermando la validità delle elezioni comunali.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Niente green pass? Licenziato. Il Comune di Catanzaro dovrà riassumerlo e risarcirlo",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/niente-green-pass-licenziato-ora-il-comune-di-catanzaro-dovra-riassumerlo-e-risarcirlo",
    date: "02/10/2024",
    category: "Diritto del lavoro / Pubblico impiego",
    role: "Co-difesa",
    status: "Reintegra e risarcimento",
    description:
      "La Corte d'Appello di Catanzaro ha riformato la decisione di primo grado, disponendo la reintegra del lavoratore e il riconoscimento dell'indennità risarcitoria.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Assolti quattro dipendenti dell'Ufficio ticket dell'Azienda Ospedaliera Pugliese-Ciaccio",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2024/09/27/assolti-quattro-dipendenti-dellufficio-ticket-dellazienda-ospedaliera-pugliese-ciaccio/343792/",
    date: "27/09/2024",
    category: "Difesa penale",
    role: "Co-difesa",
    status: "Assoluzione",
    description:
      "L'articolo riferisce l'assoluzione di quattro dipendenti dopo un lungo dibattimento. L'Avv. Giuseppe Pitaro compare nel collegio difensivo.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Non quantificò il costo del personale, illegittimo l'affidamento diretto della Dulbecco alla Sicurtransport",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2024/06/17/non-quantifico-il-costo-del-personale-illegittimo-laffidamento-diretto-della-dulbecco-alla-sicurtransport/331347/",
    date: "17/06/2024",
    category: "Appalti pubblici / Sanità",
    role: "Difesa",
    status: "Ricorso accolto",
    description:
      "Il TAR ha accolto il ricorso di Pol.Service, assistita dagli avvocati Giuseppe Pitaro e Gaetano Liperoti, annullando l'affidamento e riconoscendo profili risarcitori.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Pitaro: prova selettiva illegittima all'Università Magna Graecia",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2024/05/07/pitaro-prova-selettiva-illeggittima-alluniversita-magna-graecia/326730/",
    date: "07/05/2024",
    category: "Università / Concorsi / Precontenzioso",
    role: "Difesa",
    status: "Diffida e messa in mora",
    description:
      "La notizia segnala una seconda diffida e messa in mora nei confronti dell'ateneo. Viene riportata come attività professionale precontenziosa, non come esito giudiziale.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Pende un profilo di incompatibilità su un concorso bandito dall'UMG",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/scuola-e-universita/2024/04/12/pende-un-profilo-di-incompatibilita-su-un-concorso-bandito-dallumg/324170/",
    date: "12/04/2024",
    category: "Università / Concorsi / Precontenzioso",
    role: "Difesa",
    status: "Diffida",
    description:
      "La notizia riguarda una diffida indirizzata all'Università Magna Graecia su incarico di sigle sindacali, in relazione a un profilo di incompatibilità.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Interdittiva antimafia: ricorso alla Corte Europea di Strasburgo di un'impresa calabrese",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2024/01/02/interdittiva-antimafia-ricorso-alla-corte-europea-di-strasburgo-di-unimpresa-calabrese/312498/",
    date: "02/01/2024",
    category: "Interdittiva antimafia / CEDU",
    role: "Difesa",
    status: "Ricorso presentato",
    description:
      "La notizia documenta la proposizione di un ricorso alla Corte Europea dei Diritti dell'Uomo. Viene riportata come ricorso presentato, senza indicare un esito definitivo.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Nomina AMC a Catanzaro, cessata la materia del contendere",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/nomina-amc-a-catanzaro-cessata-la-materia-del-contendere-per-il-ricorso-presentato-dallavv-bruno",
    date: "21/12/2023",
    category: "Accesso agli atti / Amministrativo",
    role: "Difesa",
    status: "Cessata materia del contendere",
    description:
      "La vicenda riguarda l'accesso agli atti relativo alla procedura comparativa per la nomina dell'amministratore unico di AMC.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Assolto l'ex direttore dell'Agenzia delle Entrate di Catanzaro",
    source: "Corriere della Calabria",
    sourceUrl:
      "https://www.corrieredellacalabria.it/2023/10/04/assolto-lex-direttore-dellagenzia-delle-entrate-di-catanzaro/",
    date: "04/10/2023",
    category: "Responsabilità amministrativo-contabile",
    role: "Co-difesa",
    status: "Assoluzione in appello",
    description:
      "La notizia riferisce l'assoluzione in appello contabile dell'ex direttore dell'Agenzia delle Entrate di Catanzaro.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Cronoprogramma Sorical, il Consiglio di Stato accoglie il ricorso del Comune di Pianopoli",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/cronoprogramma-sorical-il-consiglio-di-stato-accoglie-il-ricorso-del-comune-di-pianopoli",
    date: "07/07/2023",
    category: "Servizio idrico integrato / Amministrativo",
    role: "Difesa",
    status: "Appello cautelare accolto",
    description:
      "Il Consiglio di Stato ha riformato il rigetto della sospensiva pronunciato in primo grado, disponendo una rapida fissazione del merito.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Vince il concorso all'INPS ma non può lavorare in Calabria: il TAR le dà ragione",
    source: "Corriere della Calabria",
    sourceUrl:
      "https://www.corrieredellacalabria.it/2023/04/07/vince-il-concorso-allinps-ma-non-puo-lavorare-in-calabria-il-tar-le-da-ragione/",
    date: "07/04/2023",
    category: "Pubblico impiego / Legge 104",
    role: "Difesa",
    status: "Decreto cautelare favorevole",
    description:
      "La vicenda riguarda il diritto di precedenza nella scelta della sede di lavoro per l'assistenza a un familiare disabile.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Soverato, legittimo il Piano spiaggia comunale",
    source: "Corriere della Calabria",
    sourceUrl:
      "https://www.corrieredellacalabria.it/2022/11/17/soverato-legittimo-il-piano-spiaggia-comunale/",
    date: "17/11/2022",
    category: "Demanio / Urbanistica / Amministrativo",
    role: "Difesa",
    status: "Esito favorevole",
    description:
      "Il TAR ha dichiarato inammissibile il ricorso e respinto i motivi aggiunti, confermando la legittimità del piano spiaggia comunale.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Licenziamento illegittimo, reintegrata dipendente del Consorzio di Bonifica",
    source: "Corriere della Calabria",
    sourceUrl:
      "https://www.corrieredellacalabria.it/2022/07/04/licenziamento-illegittimo-reintegrata-dipendente-del-consorzio-di-bonifica/",
    date: "04/07/2022",
    category: "Diritto del lavoro",
    role: "Difesa",
    status: "Reintegro e risarcimento",
    description:
      "La Corte d'Appello di Catanzaro ha accolto il reclamo della lavoratrice contro il licenziamento collettivo.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Docenti calabresi inoltrano ricorso al TAR del Lazio contro il Ministero",
    source: "Corriere della Calabria",
    sourceUrl:
      "https://www.corrieredellacalabria.it/2022/06/28/docenti-calabresi-inoltrano-ricorso-al-tar-del-lazio-contro-il-ministero/",
    date: "28/06/2022",
    category: "Scuola / Pubblico impiego",
    role: "Difesa",
    status: "Ricorso proposto",
    description:
      "La notizia documenta l'attività professionale in favore di docenti abilitati all'estero, con ricorso proposto al TAR Lazio.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "A Guardavalle scioglimento per mafia illegittimo: tornano in carica sindaco, giunta e Consiglio",
    source: "LaC News24",
    sourceUrl:
      "https://www.lacnews24.it/cronaca/a-guardavalle-scioglimento-per-mafia-illegittimo-tornano-in-carica-sindaco-giunta-e-consiglio-dhadq19q",
    date: "30/06/2022",
    category: "Diritto amministrativo / Enti locali",
    role: "Difesa",
    status: "Consiglio di Stato favorevole",
    description:
      "Il Consiglio di Stato ha accolto il ricorso degli amministratori, annullando il decreto di scioglimento del Comune.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Scuole, il Consiglio di Stato conferma la decisione del TAR: si continua in presenza",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/scuola-e-universita/2021/01/11/scuole-il-consiglio-di-stato-conferma-la-sentenza-del-tar-si-continua-in-presenza/182509/",
    date: "11/01/2021",
    category: "Amministrativo scolastico",
    role: "Difesa",
    status: "Conferma in appello",
    description:
      "Il Consiglio di Stato ha confermato la decisione del TAR sulla prosecuzione della didattica in presenza.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "TAR su ordinanza scuole, la soddisfazione degli avvocati Pitaro e Liperoti",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2021/01/08/tar-su-ordinanza-scuole-la-soddisfazione-degli-avvocati-pitaro-e-liperoti/182120/",
    date: "08/01/2021",
    category: "Amministrativo scolastico",
    role: "Difesa",
    status: "Sospensione ordinanza regionale",
    description:
      "Il TAR Calabria ha accolto il ricorso presentato nell'interesse di genitori contro l'ordinanza regionale di chiusura delle scuole.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title: "Cropani, elezioni in regola e nessuna scheda ballerina",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/post/cropani-elezioni-in-regola-e-nessuna-scheda-ballerina-la-maggioranza-rilancia-lazione-di-governo-dopo-la-sentenza-del-tar-video",
    date: "16/07/2020",
    category: "Contenzioso elettorale comunale",
    role: "Difesa",
    status: "Ricorso respinto",
    description:
      "La sentenza descritta conferma la legittimità delle elezioni comunali di Cropani.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "L'elezione di Francesco Pitaro è legittima, il TAR dichiara improcedibile il ricorso",
    source: "La Nuova Calabria",
    sourceUrl:
      "https://lanuovacalabria.it/post/lelezione-di-francesco-pitaro-e-legittima-il-tar-dichiara-improcedibile-il-ricorso-di-consoli",
    date: "25/06/2020",
    category: "Contenzioso elettorale regionale",
    role: "Co-difesa",
    status: "Ricorso improcedibile",
    description:
      "La notizia riguarda un contenzioso elettorale regionale in cui l'Avv. Giuseppe Pitaro compare tra i difensori.",
    imageUrl: null,
    logoUrl: null,
  },
  {
    title:
      "Non vi fu danno nei confronti dell'ASP, la Corte dei conti assolve Mauro Notarangelo",
    source: "CatanzaroInforma",
    sourceUrl:
      "https://www.catanzaroinforma.it/cronaca/2017/10/20/non-vi-fu-danno-nei-confronti-dellasp-la-corte-dei-conti-assolve-mauro-notarangelo/105159/",
    date: "20/10/2017",
    category: "Responsabilità amministrativo-contabile",
    role: "Difesa",
    status: "Assoluzione in appello contabile",
    description:
      "La notizia riferisce l'assoluzione dell'assistito in sede contabile dinanzi alla Corte dei conti.",
    imageUrl: null,
    logoUrl: null,
  },
];

function SourceLogo({ logoUrl, source }) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`Logo ${source}`}
        className="h-5 max-w-[130px] object-contain"
      />
    );
  }

  return (
    <span className="inline-flex h-8 items-center rounded-full border border-[#e4d8cb] bg-white/80 px-3 text-[11px] font-semibold tracking-[0.12em] text-[#7b5a36]">
      {source}
    </span>
  );
}

function NewsImage({ imageUrl, title, large = false, compact = false }) {
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={title}
        className={`w-full object-cover ${
          compact ? "h-40" : large ? "h-[260px] lg:h-[430px]" : "h-48"
        }`}
      />
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(216,184,148,0.45),transparent_34%),linear-gradient(135deg,#fcfaf7_0%,#eadfd3_45%,#d8c5af_100%)] ${
        compact ? "h-40" : large ? "h-[260px] lg:h-[430px]" : "h-48"
      }`}
    >
      <div className="mx-auto max-w-xs px-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
          Studio Legale
        </p>
        <p className="mt-2 text-lg font-semibold leading-tight tracking-[-0.03em] text-[#1f1a17]">
          Giuseppe Pitaro
        </p>
      </div>
    </div>
  );
}

function HeroCarousel() {
  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-[#ddd1c2] bg-white/75 p-3 shadow-[0_18px_50px_rgba(40,27,16,0.10)]">
      <style>
        {`
          @keyframes heroCarousel {
            0%, 16% {
              transform: translateX(0%);
            }
            20%, 36% {
              transform: translateX(-100%);
            }
            40%, 56% {
              transform: translateX(-200%);
            }
            60%, 76% {
              transform: translateX(-300%);
            }
            80%, 96% {
              transform: translateX(-400%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .hero-carousel-track {
            animation: heroCarousel 28s ease-in-out infinite;
          }

          .hero-carousel-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="overflow-hidden rounded-[1.35rem]">
        <div className="hero-carousel-track flex">
          {featuredNews.map((item) => (
            <article key={item.title} className="min-w-full bg-[#fcfaf7]">
              <NewsImage imageUrl={item.imageUrl} title={item.title} compact />

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <SourceLogo logoUrl={item.logoUrl} source={item.source} />
                  <span className="text-xs font-medium text-[#8b7a68]">
                    {item.date}
                  </span>
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b7a68]">
                  {item.category}
                </p>

                <h2 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.03em]">
                  {item.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#564b41]">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#f1e7dc] px-3 py-1.5 text-[11px] font-semibold text-[#6d5540]">
                    {item.status}
                  </span>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#7b5a36] transition hover:text-[#1f1a17]"
                  >
                    Leggi
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AttivitaProfessionalePage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
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
              className="text-[#7b5a36] transition hover:text-[#7b5a36]"
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
                  className="rounded-xl bg-white/70 px-3 py-3 text-[#7b5a36]"
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

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.72fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                Attività professionale
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Attività professionale e principali notizie
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#564b41] md:text-xl md:leading-9">
                Una selezione di casi, procedimenti e notizie pubbliche
                collegate all&apos;attività dell&apos;Avv. Giuseppe Pitaro, con
                particolare riferimento a diritto amministrativo, contenzioso
                elettorale, appalti pubblici, diritto del lavoro, enti locali e
                giudizi dinanzi a TAR, Consiglio di Stato, Corte d&apos;Appello
                e Corte dei conti.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Diritto amministrativo",
                  "Contenzioso elettorale",
                  "Appalti pubblici",
                  "Diritto del lavoro",
                  "Enti locali",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d7c6b2] bg-white/75 px-4 py-2 text-sm font-medium text-[#5f5449]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                  In evidenza
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  Notizie principali
                </h2>
              </div>

              <HeroCarousel />
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
                In evidenza
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Casi e notizie principali
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#6d6053]">
              Scorri lateralmente per consultare le notizie selezionate in
              evidenza.
            </p>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto pb-4">
            {featuredNews.map((item) => (
              <article
                key={item.title}
                className="grid min-w-[88%] snap-start overflow-hidden rounded-[2rem] border border-[#ddd1c2] bg-white/75 shadow-sm md:min-w-[760px] lg:min-w-[980px] lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="overflow-hidden">
                  <NewsImage imageUrl={item.imageUrl} title={item.title} large />
                </div>

                <div className="flex flex-col justify-center p-7 md:p-9 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <SourceLogo logoUrl={item.logoUrl} source={item.source} />
                    <span className="text-sm font-medium text-[#8b7a68]">
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#564b41]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-[#f1e7dc] px-4 py-2 text-xs font-semibold text-[#6d5540]">
                      {item.status}
                    </span>
                  </div>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    Leggi la fonte
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
              Rassegna
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Casi e notizie selezionate
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {newsItems.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="overflow-hidden rounded-[2rem] border border-[#ddd1c2] bg-white/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4f3a24]/5"
              >
                <NewsImage imageUrl={item.imageUrl} title={item.title} />

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <SourceLogo logoUrl={item.logoUrl} source={item.source} />
                    <span className="text-sm font-medium text-[#8b7a68]">
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7a68]">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#564b41]">
                    {item.description}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#eee4d8] bg-[#fcfaf7] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7a68]">
                        Ruolo
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#1f1a17]">
                        {item.role}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#eee4d8] bg-[#fcfaf7] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7a68]">
                        Stato / esito
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#1f1a17]">
                        {item.status}
                      </p>
                    </div>
                  </div>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                  >
                    Leggi la fonte
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] bg-[#1f1a17] p-8 text-white shadow-[0_25px_80px_rgba(31,26,23,0.18)] md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#d1c1ae]">
              Contatti
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Per informazioni o per richiedere un contatto con lo studio
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e6ddd3]">
              È possibile contattare lo Studio Legale Giuseppe Pitaro tramite
              telefono, email o WhatsApp per richiedere informazioni o fissare un
              primo contatto.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
          <div className="rounded-[1.4rem] border border-[#ddd1c2] bg-white/55 px-5 py-4 text-sm leading-6 text-[#6d6053] shadow-sm md:px-6">
            <p>
              <span className="font-semibold text-[#1f1a17]">
                Nota editoriale.
              </span>{" "}
              Le notizie raccolte in questa pagina riguardano contenuti
              pubblicamente disponibili e sono riportate con finalità
              informativa, distinguendo tra risultati giudiziali, attività
              professionali, ricorsi proposti, fasi cautelari e procedimenti
              ancora privi di esito definitivo.
            </p>
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

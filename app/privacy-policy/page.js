import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Studio Legale Giuseppe Pitaro",
  description:
    "Privacy Policy del sito dello Studio Legale Giuseppe Pitaro.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-[#ddd1c2] bg-white/80 p-8 shadow-sm md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8b7a68]">
            Studio Legale Giuseppe Pitaro
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-[#6d6053]">
            Ultimo aggiornamento: 18/04/2026
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-[#1f1a17] px-5 py-2 text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
            >
              Torna al sito
            </Link>
          </div>

          <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-semibold prose-headings:text-[#1f1a17] prose-p:text-[#564b41] prose-li:text-[#564b41]">
            <p>
              La presente informativa è resa ai sensi dell’art. 13 del
              Regolamento (UE) 2016/679 (“GDPR”) agli utenti che visitano il
              sito web dello <strong>Studio Legale Giuseppe Pitaro</strong>.
            </p>

            <h2>1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong>Giuseppe Pitaro</strong>, con
              studio in{" "}
              <strong>
                Via Francesco Acri, 88, Catanzaro (CZ), Italia
              </strong>
              , contattabile ai seguenti recapiti:
            </p>
            <ul>
              <li>
                Email: <strong>studiolegalepitaro@libero.it</strong>
              </li>
              <li>
                Telefono: <strong>335 286550</strong>
              </li>
            </ul>

            <h2>2. Tipologie di dati trattati</h2>

            <h3>a) Dati di navigazione</h3>
            <p>
              I sistemi informatici e le procedure software preposte al
              funzionamento del sito acquisiscono, nel corso del loro normale
              esercizio, alcuni dati personali la cui trasmissione è implicita
              nell’uso dei protocolli di comunicazione di Internet.
            </p>
            <p>Rientrano in questa categoria, a titolo esemplificativo:</p>
            <ul>
              <li>
                indirizzi IP o nomi a dominio dei dispositivi utilizzati dagli
                utenti;
              </li>
              <li>
                informazioni relative al browser, al dispositivo e al sistema
                operativo;
              </li>
              <li>orario della richiesta;</li>
              <li>pagine visitate;</li>
              <li>eventuali codici di stato della risposta del server;</li>
              <li>
                altri parametri tecnici relativi all’ambiente informatico
                dell’utente.
              </li>
            </ul>

            <h3>b) Dati forniti volontariamente dall’utente</h3>
            <p>
              L’invio facoltativo, esplicito e volontario di messaggi agli
              indirizzi di contatto indicati sul sito, nonché i contatti
              telefonici o tramite WhatsApp, comporta l’acquisizione dei dati
              personali comunicati dall’utente, quali, a titolo esemplificativo:
            </p>
            <ul>
              <li>nome e cognome;</li>
              <li>numero di telefono;</li>
              <li>indirizzo email;</li>
              <li>contenuto del messaggio;</li>
              <li>
                eventuali ulteriori dati personali contenuti nella richiesta
                inviata spontaneamente dall’utente.
              </li>
            </ul>

            <h2>3. Finalità del trattamento e base giuridica</h2>

            <h3>
              a) Consentire la navigazione e il corretto funzionamento del sito
            </h3>
            <p>
              La base giuridica del trattamento è il{" "}
              <strong>legittimo interesse</strong> del Titolare a garantire la
              sicurezza, la stabilità e il corretto funzionamento del sito web.
            </p>

            <h3>b) Rispondere a richieste di informazioni o di contatto</h3>
            <p>
              I dati inviati tramite email, telefono o WhatsApp sono trattati al
              fine di riscontrare richieste dell’utente, fornire informazioni,
              gestire un primo contatto o valutare l’eventuale instaurazione di
              un rapporto professionale.
            </p>
            <p>La base giuridica del trattamento è:</p>
            <ul>
              <li>
                l’adozione di <strong>misure precontrattuali</strong> richieste
                dall’interessato;
              </li>
              <li>
                il <strong>legittimo interesse</strong> del Titolare a
                rispondere alle richieste ricevute.
              </li>
            </ul>

            <h3>c) Adempiere a obblighi di legge</h3>
            <p>
              I dati possono essere trattati per l’adempimento di obblighi
              previsti dalla legge, da regolamenti o dalla normativa europea.
            </p>
            <p>
              La base giuridica del trattamento è l’
              <strong>adempimento di obblighi legali</strong> cui è soggetto il
              Titolare.
            </p>

            <h2>4. Natura del conferimento dei dati</h2>
            <p>
              Il conferimento dei dati di navigazione è necessario per
              consentire la fruizione del sito.
            </p>
            <p>
              Il conferimento dei dati personali eventualmente comunicati tramite
              email, telefono o WhatsApp è facoltativo; tuttavia, il mancato
              conferimento può rendere impossibile rispondere alla richiesta
              dell’utente o fornire le informazioni richieste.
            </p>

            <h2>5. Modalità del trattamento</h2>
            <p>
              I dati personali sono trattati con strumenti informatici e, se
              necessario, anche cartacei, nel rispetto dei principi di liceità,
              correttezza, trasparenza, minimizzazione, integrità e riservatezza
              previsti dal GDPR.
            </p>
            <p>
              Sono adottate adeguate misure tecniche e organizzative per
              proteggere i dati da accessi non autorizzati, perdita, diffusione,
              alterazione o distruzione.
            </p>

            <h2>6. Destinatari dei dati</h2>
            <p>
              I dati personali possono essere trattati da soggetti autorizzati
              dal Titolare e, ove necessario, da fornitori di servizi tecnici e
              informatici connessi alla gestione e manutenzione del sito,
              nominati, se del caso,{" "}
              <strong>responsabili del trattamento</strong> ai sensi dell’art. 28
              GDPR.
            </p>
            <p>I dati non sono diffusi.</p>

            <h2>7. Trasferimento dei dati verso Paesi extra UE</h2>
            <p>
              Il sito può avvalersi di fornitori tecnici i cui servizi
              potrebbero comportare, in alcuni casi, il trasferimento di dati
              verso Paesi non appartenenti allo Spazio Economico Europeo. In
              tali casi, il trattamento avverrà nel rispetto delle garanzie
              previste dalla normativa applicabile.
            </p>

            <h2>8. Periodo di conservazione dei dati</h2>
            <p>
              I dati di navigazione sono conservati per il tempo strettamente
              necessario al perseguimento delle finalità per cui sono raccolti,
              salvo eventuale necessità di accertamento di reati o difesa di
              diritti.
            </p>
            <p>
              I dati comunicati volontariamente dall’utente tramite email,
              telefono o WhatsApp sono conservati per il tempo necessario a
              gestire la richiesta e, successivamente, per il tempo
              eventualmente necessario ad adempiere a obblighi di legge o a
              tutelare i diritti del Titolare.
            </p>

            <h2>9. Link a servizi esterni</h2>
            <p>
              Il sito può contenere collegamenti a servizi esterni, quali email,
              telefono o WhatsApp. L’utilizzo di tali servizi avviene su
              iniziativa dell’utente ed è regolato dalle rispettive condizioni
              d’uso e informative privacy dei relativi fornitori.
            </p>
            <p>
              Il Titolare non risponde dei trattamenti effettuati da siti o
              servizi di terzi accessibili tramite link esterni.
            </p>

            <h2>10. Diritti dell’interessato</h2>
            <p>
              L’utente, in qualità di interessato, ha il diritto di ottenere,
              nei casi previsti dal GDPR:
            </p>
            <ul>
              <li>l’accesso ai dati personali;</li>
              <li>la rettifica dei dati inesatti;</li>
              <li>la cancellazione dei dati;</li>
              <li>la limitazione del trattamento;</li>
              <li>l’opposizione al trattamento;</li>
              <li>la portabilità dei dati, ove applicabile.</li>
            </ul>
            <p>
              L’interessato ha inoltre il diritto di proporre reclamo
              all’Autorità Garante per la protezione dei dati personali, qualora
              ritenga che il trattamento dei dati avvenga in violazione della
              normativa vigente.
            </p>

            <h2>11. Modalità di esercizio dei diritti</h2>
            <p>
              Per esercitare i propri diritti, l’interessato può contattare il
              Titolare ai seguenti recapiti:
            </p>
            <ul>
              <li>
                Email: <strong>studiolegalepitaro@libero.it</strong>
              </li>
              <li>
                Indirizzo:{" "}
                <strong>
                  Via Francesco Acri, 88, Catanzaro (CZ), Italia
                </strong>
              </li>
            </ul>

            <h2>12. Modifiche alla presente informativa</h2>
            <p>
              Il Titolare si riserva il diritto di modificare o aggiornare la
              presente Privacy Policy in qualsiasi momento. Le modifiche saranno
              pubblicate su questa pagina con indicazione della data di ultimo
              aggiornamento.
            </p>

            <p>
              Per qualsiasi richiesta relativa al trattamento dei dati
              personali, è possibile contattare lo Studio ai recapiti indicati
              nella presente informativa.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

# Ændringer

## 1.8.0 (2026-11-13)

- Ny sektion "Lønperiode" under Overblik til at tjekke lønsedlen. Standard er den 21. til den 20. måneden efter, og startdagen kan ændres under Indstillinger.
  - Nøgletal: arbejdede timer netto, normtid, flex i perioden, flexsaldo ved start og slut, arbejdsdage, ferie, syg, flexfri, fri/helligdag, timer på weekender og helligdage samt dage, der mangler.
  - Dagsliste for perioden med tider, netto, flex og type, farvemarkeret. På telefonen vises kun netto, flex og type.
  - Bladr mellem perioder med ‹ ›, og hent perioden som Excel.

## 1.7.1 (2026-11-11)

- Store bededag: regeringen planlægger at genindføre den fra 2030 (lovforslag ventes i 2027). Det er en indstilling, "Store bededag fra 2030", som er slået til. 2024–2029 er den ikke helligdag.

## 1.7.0 (2026-11-11)

- Danske helligdage er indbygget (nytår, påske, Kristi himmelfart, pinse, jul, og Store bededag før 2024). De giver normtid 0 og tæller aldrig som "mangler". Navnet vises under datoen i ugen.
- 1. maj, Grundlovsdag, Juleaftensdag og Nytårsaftensdag kan slås til og fra under Indstillinger → Arbejdstid.
- Synkronisering flettes nu dag for dag: hver dag beholder sin seneste ændring, også sletninger. Ændringer på telefon og computer går ikke længere tabt, hvis den ene var offline.
- "Absence without Leave" fra InterFlex vises som "mangler stempling" og ikke som en fridag. Markeringen forsvinder, når du selv udfylder dagen.

## 1.6.3 (2026-11-11)

Resultater fra en test af InterFlex:
- Journalen kan kun hentes fra maj 2026. InterFlex viser maj, hvis man beder om tidligere måneder. Det er en grænse i InterFlex.
- Rettelse: InterFlex husker det sidst viste år i fraværskalenderen, så bogmærket kunne hente det forkerte år. Nu vælger det selv årene.
- Bogmærket henter fravær for både sidste år og i år (2025 og 2026) og slutter på indeværende år.
- Appen lægger flere års fravær sammen. Antal feriedage beregnes kun for indeværende år.

## 1.6.2 (2026-11-11)

- Udløbet Google-login vises øverst på alle sider. Er der ændringer, som ikke er gemt i Google Drev, siger beskeden det.
- Appen tjekker hvert minut, om Google-adgangen er udløbet, også når appen bare står åben, og giver en kort besked.
- "Hent fra InterFlex" er foldet sammen til én linje under Data.

## 1.6.1 (2026-11-11)

- Rettelse: bogmærket hentede kun fraværsdage. Nu skifter det måned i en skjult ramme med InterFlex' egen formular, præcis som når man klikker, i stedet for baggrundsforespørgsler.
- Den skjulte ramme må ikke køre InterFlex' scripts, så den ikke kan flytte eller lukke siden.
- Virker, uanset om InterFlex svarer med journalen, en omdirigering eller en rammeside.
- Panelet har en Detaljer-knap, der viser InterFlex' svar, hvis en måned ikke kan hentes.

## 1.6.0 (2026-11-11)

- Rettelse: månedsjournalen genkendes nu også i InterFlex' almindelige visning. Før virkede kun udskriftsvisningen.
- Bogmærket virker fra enhver side i InterFlex WebClient, også forsiden. Det finder selv journalen gennem rammerne.
- Efter hvert månedsskift læser bogmærket journalsiden direkte og tjekker, at det er den rigtige måned. InterFlex svarer med en rammeside, hvor første ramme er tom.
- Bogmærket henter også fraværskalenderen for året, så journal og fravær kommer i én import.

## 1.5.3 (2026-11-11)

- Tydeligere fejlbesked, når Google blokerer login, fordi appen stadig er i testtilstand.

## 1.5.2 (2026-11-11)

- Google-klient-ID er lagt ind i config.js, så "Log ind med Google" virker direkte på alle enheder.

## 1.5.1 (2026-11-11)

- Knappen "Log ind med Google" vises altid under Indstillinger. Er Google-login ikke sat op endnu, åbner den opsætningen med feltet til klient-ID.

## 1.5.0 (2026-11-11)

Mobilvisningen er gennemgået:
- Fast bundlinje med ikoner (Uge, Overblik, Indstillinger), som kan nås med tommelfingeren.
- Ugen fylder cirka halvdelen: én fælles overskrift, dag og tal på én linje, felterne på én linje under.
- Tomme weekenddage foldes sammen til én linje med "+ Registrér". Fraværsdage viser kun årsagen.
- Tidsfelter med 16 px tekst, så iPhone ikke zoomer ind, og uden ur-ikon, så klokkeslættet kan ses.
- Ugenavigation på én linje. Store knapper til at møde ind og gå hjem.
- Overblik: månedsforkortelser med ét bogstav under grafen, smallere månedstabel uden tomme måneder.
- Indstillinger: OneDrive-datafil og InterFlex-bogmærke skjules på telefonen, hvor de ikke virker. Lange adresser brydes pænt.
- Rettelse: "1 dag mangler" i stedet for "1 dage mangler".

## 1.4.1 (2026-11-11)

- Google Drev: knappen hedder nu "Log ind med Google".
- Når Googles adgang er udløbet, henter appen selv en ny ved opstart uden at spørge. Knappen "Forbind" vises kun, hvis det ikke lykkes. Højst ét forsøg hvert 10. minut, og aldrig når data fra bogmærket er på vej.
- Efter en automatisk fornyelse kommer man tilbage til den visning, man var i.

## 1.4.0 (2026-11-11)

- Bogmærket henter alle måneder, InterFlex viser, på én gang fra Month Journal. Et panel viser fremskridtet, og InterFlex stilles tilbage bagefter.
- Ligger appen på en webadresse, åbner bogmærket appen og sender data direkte uden Ctrl+V. Ellers er der en Kopiér-knap i panelet.
- Flere måneder vises som én samlet import.
- Bogmærket er skrevet, så det også virker i Edges Internet Explorer-tilstand.
- Træk bogmærket op i favoritlinjen igen for at få den nye udgave.

## 1.3.1 (2026-11-11)

- Google Drev vises altid under Indstillinger → Konto og lagring, også før det er sat op.
- Klient-ID kan indsættes direkte i appen. Appen viser den adresse, der skal registreres hos Google.

## 1.3.0 (2026-11-11)

- Synkronisering med personligt Google Drev (filen `Flexregnskab.json`), så appen også kan bruges på mobilen.
  - Login med redirect, så det også virker i appen installeret på hjemmeskærmen.
  - Appen får kun adgang til egne filer (`drive.file`).
  - Henter ved åbning og når appen kommer i forgrunden, og gemmer 1,5 sek. efter hver ændring.
  - Når Googles adgang (1 time) er udløbet, viser forsiden en "Forbind"-knap. Ændringer gemmes lokalt imens.
- Slås til med `googleClientId` i `config.js` (se README).

## 1.2.0 (2026-11-10)

- Import af "Month Journal" fra tidssystemet: tider, delte skift, fravær en del af dagen og systemets saldo pr. dag.
- Systemets saldo bruges direkte på de dage, hvor den findes. Appen regner videre derfra.
- Netto pr. dag bliver lig systemets "Actual", fordi systemets pause gemmes, når den afviger fra appens regel.
- Pausereglen kan indstilles: frokost (min), fra hvor mange timer, og pause i alt over 9 timer. Ved import foreslås tidssystemets regel (30 min ved over 5 timer).
- Bogmærke "Til Flexregnskab": kopierer siden fra tidssystemet med ét klik, og i appen trykker man Ctrl+V.
- Rettelse: "Pres." fra fraværskalenderen bruges ikke længere som startsaldo, for det er ikke flexsaldoen.
- CSV-datafilen gemmer også systemsaldo og systemets faktiske tid.

## 1.1.0 (2026-11-10)

- Import af fraværskalenderen fra tidssystemet: gem siden "Abs. Calendar" som HTML og vælg den under Indstillinger → Importer fil.
  - Ferie, feriefridage, sygdom, flexfri og helligdage lægges ind på de rigtige dage. Helligdage får danske navne.
  - Kan sætte startsaldo ud fra systemets "Pres."-tal og antal feriedage ud fra "Vac.".
  - Dine egne mødt/gået-tider bliver bevaret.
- `.gitignore` udelukker gemte sider fra tidssystemet.

## 1.0.0 (2026-11-10)

Første selvstændige udgave af Flexregnskab (mappen `app`).

- Ugevisning: mødt, gået, pause og fravær pr. dag med netto og flex.
- Knapper til at møde ind og gå hjem.
- Overblik med graf over flexsaldoen og en tabel pr. måned.
- Indstillinger: startsaldo, feriedage, normtid pr. ugedag og pausegrænser.
- Data gemmes i en CSV-datafil i OneDrive-mappen (Chrome/Edge) eller i browseren.
- Valgfrit Microsoft-login med synkronisering til egen OneDrive.
- Import fra Excel, eksport til Excel, backup og gendannelse.
- Installerbar og virker offline.


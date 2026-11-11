# Ændringer

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


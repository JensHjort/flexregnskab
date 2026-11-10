# Ændringer

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


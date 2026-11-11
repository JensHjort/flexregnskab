# Flexregnskab

En lille web-app til at registrere arbejdstid og følge sin flexsaldo, ferie og sygdom. Den kører i browseren på computer og telefon, kan installeres på hjemmeskærmen og virker offline.

## Filer

| Fil | Indhold |
|---|---|
| `index.html` | Hele appen |
| `config.js` | Indstillinger, fx Microsoft-login |
| `manifest.webmanifest`, `icon-*.png`, `icon.svg` | Gør appen installerbar |
| `sw.js` | Gør at appen virker offline |

## Den nemme måde: kun OneDrive, ingen Azure

Kræver Chrome eller Edge på en computer med OneDrive installeret.

1. Kopiér mappen `app` ind i din OneDrive-mappe, fx `OneDrive\Flexregnskab`.
2. Dobbeltklik på `index.html`. Hvis den åbner i en anden browser, så højreklik → Åbn med → Edge eller Chrome. Tip: læg et bogmærke.
3. Gå til **Indstillinger → Datafil i OneDrive** og vælg **Opret datafil**. Gem `flexregnskab.csv` i samme mappe.

Derefter gemmes hver ændring i `flexregnskab.csv`, og OneDrive synkroniserer filen til skyen og til dine andre computere. Appen henter filen, når den åbnes, og hver gang du vender tilbage til vinduet.

- Første gang på en ny computer vælger du **Vælg eksisterende fil** og peger på `flexregnskab.csv`.
- Browseren spørger ved hver ny opstart, om appen må bruge filen. Klik **Forbind** på forsiden. Edge og Chrome tilbyder ofte "Tillad ved hvert besøg", så du slipper.
- `flexregnskab.csv` kan åbnes i Excel. Gem den som CSV (semikolon-separeret) igen, hvis du retter i den.
- Virker ikke på telefon. Telefonens browser kan ikke skrive til en fil i OneDrive. Til telefon skal appen på en webadresse med Microsoft-login (se nedenfor).

## Google Drev og mobil-app (personlig Google-konto)

Med Google Drev gemmes dine data i filen `Flexregnskab.json` i dit eget Google Drev, og appen kan bruges på telefon og computer. Appen kan kun se filer, den selv har oprettet.

Det kræver to ting:

**A. Appen skal ligge på en HTTPS-adresse**, fx GitHub Pages: `https://<dit-brugernavn>.github.io/flexregnskab/`.

**B. Et gratis OAuth-klient-ID fra Google** (ca. 10 minutter):
1. Gå til https://console.cloud.google.com og opret et projekt, fx "Flexregnskab".
2. **APIs & Services → Library**: søg efter **Google Drive API**, og klik **Enable**.
3. **Google Auth Platform → Branding** (eller "OAuth consent screen"): User type **External**, appnavn "Flexregnskab", din e-mail som kontakt.
4. **Data Access → Add or remove scopes**: tilføj `.../auth/drive.file`.
5. **Audience**: tryk **Publish app** (In production). Ellers skal du godkende appen igen hver 7. dag. Med kun `drive.file` kræver det ingen godkendelse fra Google. Ser du "Google har ikke bekræftet denne app" første gang, så vælg Avanceret → Fortsæt, for appen er din egen.
6. **Clients → Create client**: type **Web application**.
   - Authorized JavaScript origins: `https://<dit-brugernavn>.github.io`
   - Authorized redirect URIs: appens fulde adresse, fx `https://<dit-brugernavn>.github.io/flexregnskab/` (præcis som du åbner den, med `/` til sidst). Til test kan du tilføje `http://localhost:8000/`.
7. Kopiér **Client ID** ind i `googleClientId` i `config.js`.

**På telefonen:** åbn adressen, gå til Indstillinger → **Forbind Google Drev**, og læg appen på hjemmeskærmen (iPhone: Safari → Del → Føj til hjemmeskærm; Android: Chrome → Installer app).

Google giver adgang i én time ad gangen. Åbner du appen senere, viser forsiden **Forbind**. Ét tryk, og du er tilbage, oftest uden at skulle logge ind igen. Ændringer, du laver i mellemtiden, gemmes på telefonen og sendes, når du har trykket Forbind.

Tænk over, om din arbejdsgiver har regler for at gemme arbejdsrelaterede data (navn, tider, fravær) på en privat Google-konto.

## Hent data fra tidssystemet

Appen kan læse to sider fra tidssystemet:
- **Month Journal:** tider og saldo pr. dag. Systemets saldo bruges direkte.
- **Abs. Calendar:** ferie, sygdom, flexfri og helligdage for hele året.

Hurtigst er bogmærket: gå til Indstillinger → Hent fra InterFlex, og træk knappen **Til Flexregnskab** op i favoritlinjen. Åbn Month Journal i InterFlex, og klik på bogmærket. Det henter alle tilgængelige måneder på én gang. Ligger appen på en webadresse, åbner den af sig selv med data klar. Ellers klikker du Kopiér i panelet og trykker Ctrl+V i appen.

Appen kan ikke selv læse andre faner, for browseren tillader det ikke af sikkerhedshensyn. Bogmærket kører inde i tidssystemets fane og kopierer siden. Virker bogmærket ikke, fordi IT har blokeret det, så gem siden med Ctrl+S og brug **Importer fil**.

## Hvor gemmes data?

- **Datafil i OneDrive (se ovenfor):** i `flexregnskab.csv` i din OneDrive-mappe.
- **Uden noget af det:** i browseren på den enkelte enhed. Brugeren kan tage backup og hente Excel under Indstillinger → Data.
- **Med Microsoft-login:** hver medarbejder logger ind med sin arbejdskonto. Data gemmes som én fil i medarbejderens egen OneDrive (`Apps/Flexregnskab/flexregnskab.json`) og følger personen mellem telefon og computer. Ingen andre, heller ikke den der driver appen, kan se andres data. Der er ingen server eller database at vedligeholde.

## 1. Læg appen på en webadresse

Appen er statiske filer og skal ligge på en HTTPS-adresse. Ellers kan den ikke installeres, og login virker ikke. SharePoint-dokumentbiblioteker kan ikke bruges, fordi de henter `.html`-filer ned i stedet for at vise dem.

Muligheder:
- **Azure Static Web Apps** (gratis niveau). Passer godt, hvis IT allerede bruger Azure.
- **GitHub Pages.** Opret et repository, læg indholdet af mappen `app` i det, og slå Pages til.
- **En intern webserver** (IIS eller lignende), der serverer mappen over HTTPS.

Test lokalt: kør `python -m http.server 8000` i mappen `app`, og åbn http://localhost:8000.

## 2. (Valgfrit) Slå Microsoft-login og OneDrive til

Appen henter data fra OneDrive, når den åbnes, og hver gang man vender tilbage til den. Den gemmer ca. 1,5 sekund efter hver ændring. Det virker både med arbejds-OneDrive og med personlig OneDrive.

Registreringen kræver adgang til Microsoft Entra ID. Til en arbejdskonto er det typisk IT. Til personlig OneDrive kan du selv oprette en gratis Azure-konto på https://portal.azure.com med din personlige Microsoft-konto.

1. Gå til Entra ID → **App registrations** → **New registration**.
   - Navn: `Flexregnskab`
   - Supported account types:
     - kun personlig OneDrive: *Personal Microsoft accounts only* → sæt `msTenant: 'consumers'`
     - både arbejde og personlig: *Accounts in any organizational directory and personal Microsoft accounts* → `msTenant: 'common'`
     - kun jeres egen organisation: *Accounts in this organizational directory only* → `msTenant: '<tenant-id>'`
   - Redirect URI: platform **Single-page application (SPA)**, adresse = appens fulde URL, fx `https://flex.firma.dk/` (husk `/` til sidst, præcis som brugerne åbner den). Tilføj gerne `http://localhost:8000/` til test.
2. Under **API permissions**: tilføj Microsoft Graph → *Delegated* → `User.Read` og `Files.ReadWrite`. På arbejdskonti skal en administrator måske give **admin consent**. Med en personlig konto godkender du selv, første gang du logger ind.
3. Kopiér **Application (client) ID** ind i `config.js`, og sæt `msTenant` som beskrevet ovenfor:

```js
window.FLEX_CONFIG = {
  msClientId: '00000000-0000-0000-0000-000000000000',
  msTenant: '11111111-1111-1111-1111-111111111111', // jeres Directory (tenant) ID
  cloudFile: 'Apps/Flexregnskab/flexregnskab.json'
};
```

Herefter viser Indstillinger knappen **Log ind med Microsoft**.

## Installer på telefonen

- **iPhone:** åbn adressen i Safari → Del → **Føj til hjemmeskærm**.
- **Android:** åbn adressen i Chrome → menu → **Installer app**.

## Godt at vide

- **Synkronisering:** det seneste ændrede datasæt vinder. Hvis man retter på to enheder, mens den ene er offline, overskriver den sidste ændring den første. Normal brug giver ingen problemer.
- **Opdateringer:** hæv `APP_VERSION` i `index.html` (vises nederst under Indstillinger) og `CACHE` i `sw.js`, skriv en linje i `CHANGELOG.md`, og lav et commit med et git-tag, fx `git tag v1.1.0`.
- **Gamle data:** data fra Claude-udgaven ligger på Claude og flytter ikke med af sig selv. Brug **Hent backup** dér og **Gendan backup** i den nye app.

// Indstillinger for Flexregnskab.
// Lad msClientId være tom, så gemmer appen kun på den enkelte enhed.
// Udfyld den med "Application (client) ID" fra jeres app-registrering i Microsoft Entra ID,
// så kan hver medarbejder logge ind med sin arbejdskonto og få data gemt i sin egen OneDrive.
window.FLEX_CONFIG = {
  // Google Drev (personlig Google-konto). Indsæt "Client ID" fra Google Cloud Console,
  // fx '1234567890-abc123.apps.googleusercontent.com'. Se README.
  googleClientId: '',

  msClientId: '',
  // Hvilke konti der kan logge ind:
  //   'common'        = både arbejdskonti og personlige Microsoft-konti (personlig OneDrive)
  //   'consumers'     = kun personlige Microsoft-konti (outlook.com, hotmail, live)
  //   'organizations' = kun arbejdskonti
  //   eller jeres tenant-id = kun jeres egen organisation
  // Skal passe med "Supported account types" i app-registreringen.
  msTenant: 'organizations',
  // Placering i brugerens egen OneDrive.
  cloudFile: 'Apps/Flexregnskab/flexregnskab.json'
};

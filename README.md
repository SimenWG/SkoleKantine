## Prosjektoversikt
Dette prosjektet er en webbasert applikasjon utviklet for kantinen ved Røyken videregående skole. Applikasjonen gir elever og ansatte enkel tilgang til menyer, ukens utvalg, og innloggingsfunksjoner, samt et adminpanel for administrasjon av varer.

---

## Filstruktur og Beskrivelse

### HTML-filer
1. **index.html**
   - Hjemmesiden som introduserer kantinen ved Røyken VGS.
   - Inneholder lenker til meny, ukens utvalg, og innloggingsside.
   - Presenterer en slider og informasjon om kantinens funksjoner.

2. **about.html**
   - Viser ukens meny med utvalgte retter og drikkevarer.
   - Beskriver ukens spesialiteter.

3. **login.html**
   - Innloggingsside for elever, ansatte og admin med felter for e-post og passord.
   - Støtter Firebase-autentisering.

4. **menu.html**
   - Presenterer menyen med mat- og drikkevarer tilgjengelig i kantinen.
   - Viser priser og kategorier.

5. **profil.html**
   - Adminpanel som viser informasjon til admin-brukere, inkludert muligheten til å redigere varer.
   - Gir sikkerhetsadvarsler og logg-ut-knapp.

6. **redigervarer2.html**
   - Skjemaer for administratorer for å legge til, redigere og fjerne varer fra menyen.
   - Inkluderer felter for varenavn, pris, beskrivelse og type (mat eller drikke).

---

### JavaScript-filer
1. **firebaseauth.js**
   - Konfigurerer Firebase for autentisering og datalagring.
   - Håndterer admin-innlogging ved å sammenligne legitimasjon fra Firestore.

2. **scriptlogin.js**
   - Styrer synligheten mellom innloggings- og registreringsskjemaer.
   - Forbedrer brukeropplevelsen ved navigasjon mellom skjemaer.

---

### CSS-filer
1. **style.css**
   - Tilpasset stilark for design og layout.
   - Definerer typografi, farger, og responsivt design.

2. **bootstrap.css**
   - Bootstrap-stilark for rutesystem og standardiserte komponenter.

---

## Funksjoner og Funksjonalitet
- **Brukerinnlogging:** Lar elever, ansatte og administratorer logge inn for å få tilpasset tilgang.
- **Menyvisning:** Viser oppdaterte menyer med kategorier og priser.
- **Adminpanel:** Gir administratorer muligheten til å legge til, redigere og slette varer.

---

## Bruksanvisning
1. Host filene på en webserver (lokalt eller online).
2. Konfigurer Firebase med opplysningene i `firebaseauth.js`.
3. Åpne `index.html` for å få tilgang til hjemmesiden.
4. For å administrere varer, logg inn som admin og naviger til adminpanelet.

---

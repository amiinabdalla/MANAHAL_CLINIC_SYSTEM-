# Manahal Clinic & Pharmacy: Website

**Luqadaha / Languages:** [🇸🇴 Soomaali](#-soomaali) · [🇬🇧 English](#-english)

---

# 🇸🇴 Soomaali

## 1. Hordhac
Boggan waa bog-hordhac (home page) casri ah oo loogu talagalay **Manahal Clinic & Pharmacy**. Waa bog **static** ah (HTML + CSS + JavaScript), sidaa darteed uma baahna server, database ama koodh backend ah. Wuxuu leeyahay laba luqadood: **Soomaali** (`index.html`) iyo **English** (`en.html`).

## 2. Waxa bogga ku jira
1. **Navbar:** logo, isku-xirayaal, badhan luqadda lagu beddelo, iyo badhanka **Wac Hadda**.
2. **Hero:** ciwaan weyn, sharaxaad, badhanka **Ballan Qabso** iyo **WhatsApp**.
3. **Xariiqda degdegga:** lambarka loo wacayo xaaladaha degdegga ah.
4. **Naga Ogow:** kalsooni iyo tayo.
5. **Adeegyada:** Dhakhtarka Guud, Carruurta, Farmasi, Shaybaadh.
6. **Jadwalka Dhakhaatiirta:** miis leh maalmo iyo saacado.
7. **Farmasi:** doorashada sawirka warqadda dawada oo lagu diro WhatsApp.
8. **Falcelinta bukaanka (Testimonials):** saddex kaar.
9. **Footer:** xiriirka, cinwaanka, saacadaha shaqada, Google Maps iyo isku-xirka Privacy Policy.
10. **Foomka ballanta (modal):** wuxuu fariin diyaarsan ku furaa WhatsApp.
11. **Bogagga kale:** `privacy.html`, `privacy-en.html` iyo `404.html`.
12. **Animation:** soo-muuqasho marka la scroll gareeyo, hero entrance, logo ku dul sabaynaya, kaararka oo kor u kaca, badhanka WhatsApp oo pulse leh, xariiq muujinaysa inta la akhriyay, iyo hoos-yeelka navbar-ka.

## 3. Qaab-dhismeedka faylasha
```
manahal-site/
├── index.html        Bogga Soomaaliga
├── en.html           Bogga English
├── privacy.html      Siyaasadda Sirta (Soomaali)
├── privacy-en.html   Privacy Policy (English)
├── 404.html          Bogga "lama helin"
├── script.js         CONFIG + modal + WhatsApp + animation JS
├── styles.css        Animation-ka iyo midabada gaarka ah
├── tailwind.css      Qaabka Tailwind ee la dhisay (production)
├── logo.svg          Logo-ga (vector)
├── og.png            Sawirka share-ka (WhatsApp/Facebook)
├── robots.txt        Tilmaamaha Google
├── sitemap.xml       Liiska bogagga Google
├── render.yaml       Habaynta Render
└── README.md         Faylkan
```
**Muhiim:** faylasha oo dhan waa inay isla folder-ka ku wada jiraan. `index.html` wuxuu u baahan yahay `tailwind.css`, `styles.css`, `script.js` iyo `logo.svg`. Haddii mid maqnaado, bogga wuu jajabi karaa.

## 4. Waxa TAGAN la buuxinayo (waajib)

### 4.1 `script.js`: qaybta `CONFIG` ee sare
```js
const CONFIG = {
  whatsapp: "252000000000",       // tiro kaliya, lambarka dalka la socdo, ha ku darin +
  phone: "+252000000000",         // taleefanka wicitaanka
  phoneText: "+252 00 000 0000",  // sida bogga loogu muujiyo
  address: { so: "...", en: "..." },
  mapEmbed: ""                    // Google Maps embed URL
};
```
Halkan oo kaliya ku beddel; badhamada WhatsApp, wicitaanka, xariiqda degdegga ah iyo footer-ka labada luqadood way is-cusboonaysiiyaan.

**Google Maps embed:** Google Maps → raadi goobtaada → **Share** → **Embed a map** → koobi URL-ka ku jira `src="..."` → ku dhex qor `mapEmbed`.

### 4.2 `index.html` iyo `en.html` (labadaba)
- **Dhakhaatiirta:** `Dr. [Magac]` / `Dr. [Name]`, takhasus, maalmo, saacado (qaybta `#doctors`).
- **Falcelinta bukaanka:** beddel `[...]` falcelin dhab ah oo oggolaansho leh, ama tirtir qaybta. Ha daabicin falcelin been ah.
- **Taleefanka schema-ka SEO:** raadi `"telephone":"+252000000000"` `<head>` oo ku beddel lambarkaaga.
- **Saacadaha shaqada:** footer (`8:00 – 8:00` waa tusaale).

### 4.3 URL-ka bogga
Marka Render ku siiso link-gaaga (ama aad domain xirto), raadi oo beddel `https://manahal.onrender.com` faylashan:
`sitemap.xml`, `robots.txt`, iyo `<head>` ee `index.html`, `en.html`, `privacy.html`, `privacy-en.html`, `404.html`.

## 5. Sida loo furo gudaha kombuyuutarka
Laba jeer taabo `index.html`. Tailwind waa la dhisay, sidaa darteed internet looma baahna qaabka. Si aad u tijaabiso sida server:
```bash
cd manahal-site
python3 -m http.server 8000     # kadib fur http://localhost:8000
```

## 6. Sida loo geliyo Render (Static Site)
1. Ku rar **dhammaan** faylasha folder-ka `manahal-site` GitHub repository cusub (faylashu waa inay ku jiraan xididka repository-ga).
2. Gal **render.com** → **New +** → **Static Site** → dooro repository-ga.
3. **Build Command:** ka daa madhan.
4. **Publish Directory:** `.` (dhibic).
5. Taabo **Create Static Site**. Daqiiqado gudahood link-ga ayaad heleysaa.
6. **Domain gaar ah:** Render → Settings → **Custom Domains** → raac tilmaamaha DNS.
7. **Cusboonaysiin:** marka aad GitHub ku beddesho fayl, Render si toos ah ayuu dib u daabacaa.

Xaddidaadaha iyo qorshayaasha bilaashka ah ee Render way isbeddeli karaan; hubi bogga rasmiga ah.

## 7. Sida wax loo beddelo

### Midabada
Buluug `#0066CC` · Cagaar/Teal `#00B894` · Madow-buluug `#0f2742`. Raadi oo beddel hex-ka faylasha HTML iyo `styles.css`. Kadib **dib u dhis Tailwind** (eeg qaybta 8).

### Adeeg cusub
Koobi mid ka mid ah kaararka `<div class="reveal card-hover ...">` ee `#services` labada HTML, kadibna beddel emoji-ga, ciwaanka iyo sharaxaadda. Haddii aad leedahay 5 ama 6 kaar, beddel `lg:grid-cols-4` una beddel `lg:grid-cols-3`.

### Sawiro dhab ah
Samee folder `images/`. Halkii emoji ama logo-ga hero-ga, ku dar `<img src="images/rugta.jpg" alt="Manahal Clinic" class="rounded-xl">`. Isticmaal sawiro yaryar (ka yar 300 KB) si bogga u dhaqso badnaado.

### Luqad cusub (tusaale Carabi)
Koobi `en.html` → `ar.html`, beddel `lang="ar"` (ku dar `dir="rtl"` luqadda midig-ilaa-bidix), turjun qoraalka, ku dar badhanka luqadda, oo ku dar `sitemap.xml`.

### Animation
Dhammaan waxay ku qoran yihiin hoose `styles.css` iyo `script.js`.
| Effect | Class / meel |
|---|---|
| Soo-muuqasho scroll | `.reveal` |
| Hero entrance | `.hero-in` |
| Logo sabaynaya | `.float-y` |
| Kaar kor u kaca | `.card-hover` |
| WhatsApp pulse | `.pulse` |
| Safka miiska | `.row` |
| Xariiqda scroll-ka | `#progress` (JS ayaa abuura) |
| Modal-ka | `#modal` |

Si aad u dhakhso/gaabis yeelato, beddel waqtiga (`.7s`, `5s`, `2s`) ee `styles.css`. Si aad meel uga saarto, ka tir class-ka element-ka. Animation-ka waa la joojiyaa marka qalabka laga dhigo "Reduce motion", waxyaabaha oo dhanna way muuqdaan haddii JavaScript uu fashilmo.

## 8. Dib u dhisidda Tailwind
`tailwind.css` waxaa laga dhisay classes-ka HTML-yada iyo `script.js`. Haddii aad classes Tailwind cusub ku darto (tusaale `bg-red-500`), waa in dib loo dhiso:
```bash
npm install tailwindcss@3.4.17
echo '@tailwind base;@tailwind components;@tailwind utilities;' > in.css
# samee tailwind.config.js:  module.exports={content:["./*.html","./script.js"]}
npx tailwindcss -i in.css -o tailwind.css --minify
```
Haddii aadan classes cusub isticmaalin, taas looma baahna.

## 9. Sida shaqada foomamka u shaqeeyaan
- **Ballan Qabso:** macmiilku wuxuu buuxiyaa magac, taleefan, adeeg iyo taariikh; badhanka "Ku Dir WhatsApp" wuxuu furaa WhatsApp oo fariin diyaarsan ku jirta lambarka `CONFIG.whatsapp`.
- **Warqadda dawada:** macmiilku wuxuu doortaa sawirka, kadibna wuxuu furaa WhatsApp oo **uu naftiisa ku lifaaqaa sawirka** wada-hadalka. Faylka server uma gudbo, sidaa darteed waa sir.
- Bogga **database kuma haysto** xog. Haddii aad rabto kaydin ballamaha ama email toos ah, waxaad u baahan tahay backend ama adeeg sida Formspree/Firebase.

## 10. SEO iyo Google
- **Waa jiraan:** ciwaan, description, canonical, hreflang, Open Graph, schema `MedicalClinic`, `robots.txt`, `sitemap.xml`.
- **Talaabada xigta:** gal **Google Search Console** → ku dar bogga → gudbi `sitemap.xml`. Samee **Google Business Profile** si aad ugu soo muuqato Google Maps ("Manahal Clinic Bosaso").
- Ku dar sawiro dhab ah oo leh `alt` qoraal.

## 11. Dhibaatooyin caadi ah
| Dhibaato | Xal |
|---|---|
| Bogga qaab la'aan ah | `tailwind.css` ma ku jiro folder-ka ama magaciisa waa khalad |
| Badhamada WhatsApp ma shaqeeyaan | Hubi `CONFIG.whatsapp` (tiro kaliya, lambarka dalka la socdo) |
| Waxyaabaha ma muuqdaan | Hubi `script.js` iyo `styles.css` inay isla folder la jiraan HTML-ka |
| Map ma muuqdo | `mapEmbed` waa madhan yahay ama URL-ku waa khalad |
| Render waxay tusaysaa bog madhan | Hubi `Publish Directory` = `.` iyo in `index.html` uu ku jiro xididka |
| Animation ma shaqeeyo | Hubi "Reduce motion" ee qalabkaaga |

## 12. Teknoolajiyada
HTML5 · Tailwind CSS 3.4 (production build) · CSS animations · Vanilla JavaScript (IntersectionObserver) · SVG · Render Static Site

---

# 🇬🇧 English

## 1. Overview
A modern, static home page for **Manahal Clinic & Pharmacy**: HTML + CSS + JavaScript only, with no server, database or backend. Two languages: **Somali** (`index.html`) and **English** (`en.html`).

## 2. What's included
Navbar with language switch and call button · Hero with Book Appointment and WhatsApp · Emergency strip · About · 4 service cards · Doctor schedule table · Pharmacy section with prescription photo flow via WhatsApp · Testimonials · Footer with contact, hours, Google Maps and privacy link · Booking modal · Privacy Policy pages (both languages) · 404 page · Scroll, hero, hover and pulse animations · SEO files (sitemap, robots, Open Graph, schema).

## 3. File structure
`index.html`, `en.html`, `privacy.html`, `privacy-en.html`, `404.html`, `script.js`, `styles.css`, `tailwind.css`, `logo.svg`, `og.png`, `robots.txt`, `sitemap.xml`, `render.yaml`, `README.md`. Keep every file in the **same folder**; pages need `tailwind.css`, `styles.css`, `script.js` and `logo.svg`.

## 4. What you must fill in
1. **`script.js` → `CONFIG`:** WhatsApp number (digits only, with country code, no `+`), phone, address (Somali and English) and `mapEmbed` (Google Maps → Share → Embed a map → copy the `src` URL). Buttons, emergency strip and footer update automatically in both languages.
2. **`index.html` and `en.html`:** doctor names and schedule, patient testimonials (`[...]`, use real reviews or delete the section), schema `"telephone"` in `<head>`, opening hours.
3. **Site URL:** replace `https://manahal.onrender.com` in `sitemap.xml`, `robots.txt` and the `<head>` of `index.html`, `en.html`, `privacy.html`, `privacy-en.html`, `404.html` once Render gives you your link or you connect a domain.

## 5. Running locally
Double-click `index.html`, or run `python3 -m http.server 8000` in the folder and open `http://localhost:8000`.

## 6. Deploying on Render (Static Site)
1. Push **all** files to a new GitHub repository (files at the repository root).
2. render.com → **New +** → **Static Site** → select the repository.
3. **Build Command:** empty · **Publish Directory:** `.`
4. **Create Static Site**; you get a link within minutes.
5. Custom domain: Settings → **Custom Domains** and follow the DNS instructions.
6. Every change you push to GitHub redeploys automatically.
Render's free-plan limits may change; check their site.

## 7. Customizing
- **Colors:** blue `#0066CC`, teal `#00B894`, navy `#0f2742`; search and replace across HTML and `styles.css`, then rebuild Tailwind.
- **New service:** duplicate a card in `#services` in both HTML files and edit. For 5–6 cards, switch `lg:grid-cols-4` to `lg:grid-cols-3`.
- **Real photos:** create an `images/` folder and use `<img src="images/clinic.jpg" alt="...">` in place of emojis or the hero logo; keep images under about 300 KB.
- **New language:** copy `en.html` (e.g. `ar.html`), change `lang` (add `dir="rtl"` for Arabic), translate, add a language link, and list it in `sitemap.xml`.
- **Animations:** see the table in the Somali section; durations live in `styles.css`. They switch off automatically for users with "Reduce motion", and content stays visible if JavaScript fails.

## 8. Rebuilding Tailwind
Only needed if you add new Tailwind classes:
```bash
npm install tailwindcss@3.4.17
echo '@tailwind base;@tailwind components;@tailwind utilities;' > in.css
# tailwind.config.js:  module.exports={content:["./*.html","./script.js"]}
npx tailwindcss -i in.css -o tailwind.css --minify
```

## 9. How the forms work
The booking form opens WhatsApp with a prefilled message to `CONFIG.whatsapp`. For prescriptions, the patient picks a photo and then attaches it manually in the WhatsApp chat; the file is never uploaded to a server. The site stores no data. For stored appointments or email delivery you need a backend or a service such as Formspree or Firebase.

## 10. SEO and Google
Included: title, description, canonical, hreflang, Open Graph, `MedicalClinic` schema, robots, sitemap. Next: add the site to **Google Search Console** and submit `sitemap.xml`; create a **Google Business Profile** so the clinic appears on Google Maps; add real photos with `alt` text.

## 11. Troubleshooting
Unstyled page → `tailwind.css` missing or misnamed · WhatsApp not opening → check `CONFIG.whatsapp` format · missing map → `mapEmbed` empty or wrong URL · blank page on Render → Publish Directory must be `.` and `index.html` at the repository root · no animations → check your device's "Reduce motion" setting.

## 12. Tech
HTML5 · Tailwind CSS 3.4 (production build) · CSS animations · Vanilla JavaScript (IntersectionObserver) · SVG · Render Static Site

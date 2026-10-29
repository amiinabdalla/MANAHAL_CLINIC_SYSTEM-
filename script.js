// ============ CONFIG: BEDDEL HALKAN KALIYA / EDIT ONLY HERE ============
const CONFIG = {
  whatsapp: "252905909447",          // tiro kaliya, lambarka dalka la socdo / digits only with country code
  phone: "+252905909447",            // wicitaanka / for tel: links
  phoneText: "+252 905909447",     // sida loo muujiyo / how it is displayed
  address: { so: "Bosaso, Soomaaliya, Suuqa Caanaha", en: "Bosaso, Somalia, Suuqa Caanaha" },
  mapEmbed: ""                       // Google Maps embed URL (src="..."); madhan = placeholder
};
// ======================================================================
const LANG = document.documentElement.lang === "en" ? "en" : "so";
document.querySelectorAll("[data-wa]").forEach(a => { a.href = "https://wa.me/" + CONFIG.whatsapp; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-tel]").forEach(a => a.href = "tel:" + CONFIG.phone);
document.querySelectorAll("[data-phone]").forEach(e => e.textContent = CONFIG.phoneText);
document.querySelectorAll("[data-addr]").forEach(e => e.textContent = CONFIG.address[LANG]);
if (CONFIG.mapEmbed) document.getElementById("map").innerHTML = '<iframe src="' + CONFIG.mapEmbed + '" class="w-full h-full min-h-[220px]" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>';

const modal = document.getElementById("modal");
function openModal(){ modal.classList.remove("hidden"); modal.classList.add("flex"); }
function closeModal(){ modal.classList.add("hidden"); modal.classList.remove("flex"); }
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
function wa(text){ window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener"); }
function sendBooking(){
  const v = id => document.getElementById(id).value;
  wa(modal.dataset.msg + " " + v("f-name") + " | " + v("f-phone") + " | " + v("f-service") + " | " + v("f-date"));
}
// Warqadda dawada: fayl lama diro server; macmiilku wuxuu ku lifaaqayaa WhatsApp / user attaches the photo inside WhatsApp
const rx = document.getElementById("rx"), fname = document.getElementById("fname");
if (rx) rx.addEventListener("change", () => { fname.textContent = rx.files[0] ? rx.files[0].name : fname.dataset.none; });
function sendRx(){ wa(document.getElementById("rxbtn").dataset.msg); }

// ================= ANIMATIONS =================
// Scroll reveal: elements with .reveal fade in when they enter the screen
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Scroll progress bar + header shadow
const bar = document.createElement("div");
bar.id = "progress";
document.body.appendChild(bar);
const hdr = document.getElementById("hdr");
function onScroll() {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
  hdr.classList.toggle("scrolled", h.scrollTop > 10);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

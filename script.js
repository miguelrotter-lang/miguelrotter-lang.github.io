/* ============================================================
   Multiservicios Cleaning S.G.
   i18n (ES / EN / NL) + UI interactions
   ============================================================ */

/* ------------------------------------------------------------
   CONFIGURACIÓN DEL FORMULARIO
   1) Entra en https://web3forms.com  (gratis, sin registro de cuenta)
   2) Escribe el correo donde quieres recibir las solicitudes y copia tu "Access Key"
   3) Pega esa clave abajo, entre las comillas.
   El correo de destino se guarda en Web3Forms (NO aparece en este código).
   Hasta que pegues la clave, al enviar el formulario se abre WhatsApp
   con los datos ya escritos (fallback automático).
   ------------------------------------------------------------ */
const WEB3FORMS_ACCESS_KEY = "YOUR-ACCESS-KEY-HERE";
const WHATSAPP_NUMBER = "34611598556"; // sin "+" ni espacios

const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.turnaround": "Cambios 4h",
    "nav.why": "Por qué nosotros",
    "nav.areas": "Zonas",
    "nav.contact": "Contacto",
    "nav.cta": "Pedir presupuesto",

    "hero.eyebrow": "Servicio premium de limpieza · Desde 2020",
    "hero.title": "El brillo que sus villas merecen, en la Costa del Sol",
    "hero.text": "Limpieza profesional de villas y propiedades vacacionales con estándares de hotel de lujo. Discreción, puntualidad y resultados impecables en cada estancia.",
    "hero.cta1": "Solicitar presupuesto gratuito",
    "hero.cta2": "Cambios en 4 horas",
    "hero.badge1num": "2020",
    "hero.badge1": "Cuidando villas",
    "hero.badge2num": "4 h",
    "hero.badge2": "Salida + entrada",
    "hero.badge3num": "3",
    "hero.badge3": "Idiomas de atención",

    "trust.t1": "Equipo de confianza y verificado",
    "trust.t2": "Puntualidad garantizada",
    "trust.t3": "Productos profesionales y eco",
    "trust.t4": "Aseguramos cada propiedad",

    "services.eyebrow": "Lo que hacemos",
    "services.title": "Servicios pensados para propiedades de alto nivel",
    "services.lead": "Cada villa es única. Adaptamos nuestro servicio a propietarios, gestores de alquiler vacacional y agencias que no aceptan menos que la perfección.",
    "services.s1.title": "Limpieza de villas vacacionales",
    "services.s1.text": "Preparación completa entre huéspedes: dormitorios, baños, cocina, zonas comunes y exteriores listos para una llegada impecable.",
    "services.s2.tag": "Especialidad",
    "services.s2.title": "Cambios entrada/salida en 4 h",
    "services.s2.text": "Misma jornada, sin estrés: dejamos la villa lista entre la salida y la nueva entrada en tan solo 4 horas, sin sacrificar el detalle.",
    "services.s3.title": "Limpieza profunda y de obra",
    "services.s3.text": "Limpiezas a fondo de temporada, post-reforma o pre-temporada para que la propiedad luzca como nueva.",
    "services.s4.title": "Lavandería y lencería",
    "services.s4.text": "Gestión de ropa de cama y toallas con presentación tipo hotel: dobladas, planchadas y colocadas con esmero.",
    "services.s5.title": "Mantenimiento y multiservicios",
    "services.s5.text": "Pequeñas reparaciones, control de consumibles y coordinación de jardín y piscina para que todo funcione.",
    "services.s6.title": "Inspecciones y reportes",
    "services.s6.text": "Revisión con checklist y reporte fotográfico tras cada servicio. Total transparencia para propietarios a distancia.",

    "turn.eyebrow": "Nuestro sello",
    "turn.title": "Salida y entrada el mismo día, en 4 horas",
    "turn.lead": "El reto del alquiler vacacional es el cambio rápido. Nuestro equipo coordinado deja su villa perfecta entre que se va un huésped y llega el siguiente — sin retrasos en el check-in.",
    "turn.l1": "Coordinación con su calendario de reservas",
    "turn.l2": "Equipo dimensionado al tamaño de la villa",
    "turn.l3": "Lencería de hotel lista y repuesta",
    "turn.l4": "Confirmación con fotos antes del check-in",
    "turn.cta": "Reservar un cambio rápido",
    "turn.hours": "horas",
    "turn.step1": "Salida del huésped",
    "turn.step2": "Limpieza integral",
    "turn.step3": "Lencería y detalles",
    "turn.step4": "Lista para entrar",

    "why.eyebrow": "Por qué confían en nosotros",
    "why.title": "Más de 5 años cuidando villas de la Costa del Sol",
    "why.lead": "Desde 2020 ayudamos a propietarios y gestores a ofrecer estancias de cinco estrellas. La limpieza es la primera impresión de cada huésped — la cuidamos como si fuera nuestra.",
    "why.w1.title": "Experiencia desde 2020",
    "why.w1.text": "Años de temporadas altas nos han enseñado a anticipar cada detalle del alquiler vacacional.",
    "why.w2.title": "Atención en 3 idiomas",
    "why.w2.text": "Hablamos español, inglés y holandés. Comunicación fluida con propietarios internacionales.",
    "why.w3.title": "Discreción y confianza",
    "why.w3.text": "Personal de confianza, respeto absoluto por su propiedad y sus huéspedes.",
    "why.w4.title": "Estándar premium constante",
    "why.w4.text": "Mismos protocolos en cada visita. La calidad no depende de la suerte, sino del método.",

    "process.eyebrow": "Cómo trabajamos",
    "process.title": "Sencillo para usted, impecable para sus huéspedes",
    "process.p1.title": "1. Cuéntenos su villa",
    "process.p1.text": "Tamaño, ubicación y calendario. Le enviamos un presupuesto claro y sin sorpresas.",
    "process.p2.title": "2. Planificamos el cambio",
    "process.p2.text": "Nos sincronizamos con sus reservas y asignamos el equipo adecuado.",
    "process.p3.title": "3. Limpiamos y revisamos",
    "process.p3.text": "Servicio premium con checklist y control de calidad en cada estancia.",
    "process.p4.title": "4. Reporte y listo",
    "process.p4.text": "Recibe confirmación con fotos. Su villa lista para el siguiente huésped.",

    "areas.eyebrow": "Dónde trabajamos",
    "areas.title": "Toda la Costa del Sol",
    "areas.lead": "Cubrimos las principales zonas de villas vacacionales de la costa. ¿No ve su localidad? Escríbanos, probablemente llegamos.",


    "cta.title": "¿Listo para que su villa brille?",
    "cta.text": "Cuéntenos sus fechas y le enviamos un presupuesto sin compromiso hoy mismo.",
    "cta.btn1": "Pedir presupuesto",
    "cta.btn2": "WhatsApp directo",

    "contact.eyebrow": "Hablemos",
    "contact.title": "Solicite su presupuesto",
    "contact.lead": "Respondemos en español, inglés y holandés. Le contestamos lo antes posible con una propuesta a medida.",
    "contact.phone": "+34 611 598 556",
    "contact.area": "Costa del Sol, Málaga · España",
    "contact.whatsapp": "Escríbanos por WhatsApp",

    "form.name": "Nombre",
    "form.email": "Email",
    "form.phone": "Teléfono",
    "form.town": "Localidad de la villa",
    "form.bedrooms": "Nº de dormitorios",
    "form.service": "Servicio que necesita",
    "form.opt1": "Cambio entrada/salida (4 h)",
    "form.opt2": "Limpieza de villa vacacional",
    "form.opt3": "Limpieza profunda",
    "form.opt4": "Lavandería y lencería",
    "form.opt5": "Mantenimiento / multiservicios",
    "form.opt6": "Otro",
    "form.message": "Mensaje",
    "form.submit": "Enviar solicitud",
    "form.note": "Sus datos se usan únicamente para responder a su solicitud.",
    "form.ok": "¡Gracias! Hemos recibido su solicitud y le responderemos muy pronto.",
    "form.err": "Por favor, complete su nombre y un email válido.",
    "form.sending": "Enviando su solicitud…",
    "form.err_send": "No se ha podido enviar. Inténtelo de nuevo o escríbanos por WhatsApp.",

    "footer.tag": "Limpieza premium de villas en la Costa del Sol desde 2020.",
    "footer.links": "Navegación",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados."
  },

  en: {
    "nav.services": "Services",
    "nav.turnaround": "4h Turnaround",
    "nav.why": "Why us",
    "nav.areas": "Areas",
    "nav.contact": "Contact",
    "nav.cta": "Get a quote",

    "hero.eyebrow": "Premium cleaning service · Since 2020",
    "hero.title": "The sparkle your villas deserve, on the Costa del Sol",
    "hero.text": "Professional cleaning of villas and holiday properties to luxury-hotel standards. Discretion, punctuality and flawless results for every stay.",
    "hero.cta1": "Request a free quote",
    "hero.cta2": "4-hour turnarounds",
    "hero.badge1num": "2020",
    "hero.badge1": "Caring for villas",
    "hero.badge2num": "4 h",
    "hero.badge2": "Check-out + check-in",
    "hero.badge3num": "3",
    "hero.badge3": "Languages we speak",

    "trust.t1": "Trusted, vetted team",
    "trust.t2": "Guaranteed punctuality",
    "trust.t3": "Professional & eco products",
    "trust.t4": "Every property insured",

    "services.eyebrow": "What we do",
    "services.title": "Services built for high-end properties",
    "services.lead": "Every villa is unique. We tailor our service to owners, holiday-rental managers and agencies who accept nothing short of perfection.",
    "services.s1.title": "Holiday villa cleaning",
    "services.s1.text": "Complete preparation between guests: bedrooms, bathrooms, kitchen, living areas and outdoor spaces ready for a flawless arrival.",
    "services.s2.tag": "Specialty",
    "services.s2.title": "Check-out/check-in in 4 h",
    "services.s2.text": "Same day, stress-free: we get the villa ready between departure and the next arrival in just 4 hours — without cutting corners.",
    "services.s3.title": "Deep & post-works cleaning",
    "services.s3.text": "Thorough seasonal, post-renovation or pre-season cleans so the property looks brand new.",
    "services.s4.title": "Laundry & linen",
    "services.s4.text": "Hotel-style management of bed linen and towels: folded, pressed and arranged with care.",
    "services.s5.title": "Maintenance & multiservices",
    "services.s5.text": "Minor repairs, consumables restocking and pool & garden coordination so everything just works.",
    "services.s6.title": "Inspections & reports",
    "services.s6.text": "Checklist review and photo report after every service. Full transparency for remote owners.",

    "turn.eyebrow": "Our signature",
    "turn.title": "Check-out and check-in same day, in 4 hours",
    "turn.lead": "The challenge of holiday rentals is the fast turnaround. Our coordinated team makes your villa perfect between one guest leaving and the next arriving — with no check-in delays.",
    "turn.l1": "Synced with your booking calendar",
    "turn.l2": "Team sized to your villa",
    "turn.l3": "Hotel linen ready and replaced",
    "turn.l4": "Photo confirmation before check-in",
    "turn.cta": "Book a fast turnaround",
    "turn.hours": "hours",
    "turn.step1": "Guest checks out",
    "turn.step2": "Full clean",
    "turn.step3": "Linen & details",
    "turn.step4": "Ready to check in",

    "why.eyebrow": "Why owners trust us",
    "why.title": "Over 5 years caring for Costa del Sol villas",
    "why.lead": "Since 2020 we have helped owners and managers deliver five-star stays. Cleaning is every guest's first impression — we treat it as if it were our own.",
    "why.w1.title": "Experience since 2020",
    "why.w1.text": "Years of peak seasons have taught us to anticipate every detail of holiday rentals.",
    "why.w2.title": "Service in 3 languages",
    "why.w2.text": "We speak Spanish, English and Dutch. Smooth communication with international owners.",
    "why.w3.title": "Discretion & trust",
    "why.w3.text": "A reliable team with absolute respect for your property and your guests.",
    "why.w4.title": "Consistent premium standard",
    "why.w4.text": "The same protocols on every visit. Quality isn't luck — it's method.",

    "process.eyebrow": "How we work",
    "process.title": "Simple for you, flawless for your guests",
    "process.p1.title": "1. Tell us about your villa",
    "process.p1.text": "Size, location and calendar. We send you a clear quote with no surprises.",
    "process.p2.title": "2. We plan the turnaround",
    "process.p2.text": "We sync with your bookings and assign the right team.",
    "process.p3.title": "3. We clean & inspect",
    "process.p3.text": "Premium service with a checklist and quality control for every stay.",
    "process.p4.title": "4. Report & done",
    "process.p4.text": "You get a photo confirmation. Your villa ready for the next guest.",

    "areas.eyebrow": "Where we work",
    "areas.title": "All across the Costa del Sol",
    "areas.lead": "We cover the main holiday-villa areas along the coast. Don't see your town? Get in touch — we probably reach it.",


    "cta.title": "Ready to make your villa shine?",
    "cta.text": "Tell us your dates and we'll send you a no-obligation quote today.",
    "cta.btn1": "Get a quote",
    "cta.btn2": "WhatsApp us",

    "contact.eyebrow": "Let's talk",
    "contact.title": "Request your quote",
    "contact.lead": "We reply in Spanish, English and Dutch, as soon as possible, with a tailored proposal.",
    "contact.phone": "+34 611 598 556",
    "contact.area": "Costa del Sol, Málaga · Spain",
    "contact.whatsapp": "Message us on WhatsApp",

    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.town": "Villa location",
    "form.bedrooms": "Number of bedrooms",
    "form.service": "Service you need",
    "form.opt1": "Check-out/check-in (4 h)",
    "form.opt2": "Holiday villa cleaning",
    "form.opt3": "Deep cleaning",
    "form.opt4": "Laundry & linen",
    "form.opt5": "Maintenance / multiservices",
    "form.opt6": "Other",
    "form.message": "Message",
    "form.submit": "Send request",
    "form.note": "Your details are used only to respond to your request.",
    "form.ok": "Thank you! We've received your request and will reply very soon.",
    "form.err": "Please enter your name and a valid email.",
    "form.sending": "Sending your request…",
    "form.err_send": "Couldn't send. Please try again or message us on WhatsApp.",

    "footer.tag": "Premium villa cleaning on the Costa del Sol since 2020.",
    "footer.links": "Navigation",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved."
  },

  nl: {
    "nav.services": "Diensten",
    "nav.turnaround": "Wissel in 4u",
    "nav.why": "Waarom wij",
    "nav.areas": "Gebieden",
    "nav.contact": "Contact",
    "nav.cta": "Offerte aanvragen",

    "hero.eyebrow": "Premium schoonmaakservice · Sinds 2020",
    "hero.title": "De glans die uw villa's verdienen, aan de Costa del Sol",
    "hero.text": "Professionele schoonmaak van villa's en vakantiewoningen volgens de normen van een luxehotel. Discretie, stiptheid en een onberispelijk resultaat bij elk verblijf.",
    "hero.cta1": "Vraag een gratis offerte",
    "hero.cta2": "Wissel in 4 uur",
    "hero.badge1num": "2020",
    "hero.badge1": "Zorgen voor villa's",
    "hero.badge2num": "4 u",
    "hero.badge2": "Check-out + check-in",
    "hero.badge3num": "3",
    "hero.badge3": "Talen die wij spreken",

    "trust.t1": "Betrouwbaar, gescreend team",
    "trust.t2": "Gegarandeerde stiptheid",
    "trust.t3": "Professionele & eco producten",
    "trust.t4": "Elke woning verzekerd",

    "services.eyebrow": "Wat wij doen",
    "services.title": "Diensten voor woningen van hoog niveau",
    "services.lead": "Elke villa is uniek. Wij stemmen onze service af op eigenaren, vakantieverhuurbeheerders en agentschappen die niets minder dan perfectie accepteren.",
    "services.s1.title": "Schoonmaak vakantievilla's",
    "services.s1.text": "Volledige voorbereiding tussen gasten: slaapkamers, badkamers, keuken, woonruimtes en buitenruimtes klaar voor een onberispelijke aankomst.",
    "services.s2.tag": "Specialiteit",
    "services.s2.title": "Check-out/check-in in 4 u",
    "services.s2.text": "Dezelfde dag, zonder stress: wij maken de villa klaar tussen het vertrek en de volgende aankomst in slechts 4 uur — zonder in te boeten op detail.",
    "services.s3.title": "Dieptereiniging & na verbouwing",
    "services.s3.text": "Grondige seizoens-, na-renovatie- of voorseizoensschoonmaak zodat de woning er als nieuw uitziet.",
    "services.s4.title": "Was & linnengoed",
    "services.s4.text": "Beheer van beddengoed en handdoeken in hotelstijl: gevouwen, gestreken en met zorg klaargelegd.",
    "services.s5.title": "Onderhoud & multiservices",
    "services.s5.text": "Kleine reparaties, beheer van verbruiksartikelen en coördinatie van tuin en zwembad zodat alles werkt.",
    "services.s6.title": "Inspecties & rapporten",
    "services.s6.text": "Controle met checklist en fotorapport na elke service. Volledige transparantie voor eigenaren op afstand.",

    "turn.eyebrow": "Ons handelsmerk",
    "turn.title": "Check-out en check-in op dezelfde dag, in 4 uur",
    "turn.lead": "De uitdaging van vakantieverhuur is de snelle wissel. Ons gecoördineerde team maakt uw villa perfect tussen het vertrek van de ene gast en de aankomst van de volgende — zonder vertraging bij de check-in.",
    "turn.l1": "Afgestemd op uw boekingskalender",
    "turn.l2": "Team op maat van uw villa",
    "turn.l3": "Hotellinnengoed klaar en vervangen",
    "turn.l4": "Fotobevestiging vóór de check-in",
    "turn.cta": "Boek een snelle wissel",
    "turn.hours": "uur",
    "turn.step1": "Gast checkt uit",
    "turn.step2": "Volledige schoonmaak",
    "turn.step3": "Linnengoed & details",
    "turn.step4": "Klaar voor check-in",

    "why.eyebrow": "Waarom eigenaren ons vertrouwen",
    "why.title": "Meer dan 5 jaar zorg voor villa's aan de Costa del Sol",
    "why.lead": "Sinds 2020 helpen wij eigenaren en beheerders om vijfsterrenverblijven te bieden. Schoonmaak is de eerste indruk van elke gast — wij behandelen het alsof het van onszelf is.",
    "why.w1.title": "Ervaring sinds 2020",
    "why.w1.text": "Jaren van hoogseizoenen hebben ons geleerd elk detail van vakantieverhuur te voorzien.",
    "why.w2.title": "Service in 3 talen",
    "why.w2.text": "Wij spreken Spaans, Engels en Nederlands. Vlotte communicatie met internationale eigenaren.",
    "why.w3.title": "Discretie & vertrouwen",
    "why.w3.text": "Een betrouwbaar team met absoluut respect voor uw woning en uw gasten.",
    "why.w4.title": "Constante premiumstandaard",
    "why.w4.text": "Dezelfde protocollen bij elk bezoek. Kwaliteit is geen geluk — het is methode.",

    "process.eyebrow": "Hoe wij werken",
    "process.title": "Eenvoudig voor u, onberispelijk voor uw gasten",
    "process.p1.title": "1. Vertel ons over uw villa",
    "process.p1.text": "Grootte, locatie en kalender. Wij sturen u een duidelijke offerte zonder verrassingen.",
    "process.p2.title": "2. Wij plannen de wissel",
    "process.p2.text": "Wij synchroniseren met uw boekingen en wijzen het juiste team toe.",
    "process.p3.title": "3. Wij maken schoon & controleren",
    "process.p3.text": "Premium service met checklist en kwaliteitscontrole bij elk verblijf.",
    "process.p4.title": "4. Rapport & klaar",
    "process.p4.text": "U ontvangt een fotobevestiging. Uw villa klaar voor de volgende gast.",

    "areas.eyebrow": "Waar wij werken",
    "areas.title": "Overal aan de Costa del Sol",
    "areas.lead": "Wij dekken de belangrijkste vakantievilla-gebieden aan de kust. Ziet u uw plaats niet? Neem contact op — waarschijnlijk komen wij er.",


    "cta.title": "Klaar om uw villa te laten stralen?",
    "cta.text": "Vertel ons uw data en wij sturen u vandaag nog een vrijblijvende offerte.",
    "cta.btn1": "Offerte aanvragen",
    "cta.btn2": "WhatsApp ons",

    "contact.eyebrow": "Laten we praten",
    "contact.title": "Vraag uw offerte aan",
    "contact.lead": "Wij antwoorden in het Spaans, Engels en Nederlands, zo snel mogelijk, met een voorstel op maat.",
    "contact.phone": "+34 611 598 556",
    "contact.area": "Costa del Sol, Málaga · Spanje",
    "contact.whatsapp": "Stuur ons een WhatsApp",

    "form.name": "Naam",
    "form.email": "E-mail",
    "form.phone": "Telefoon",
    "form.town": "Locatie van de villa",
    "form.bedrooms": "Aantal slaapkamers",
    "form.service": "Gewenste dienst",
    "form.opt1": "Check-out/check-in (4 u)",
    "form.opt2": "Schoonmaak vakantievilla",
    "form.opt3": "Dieptereiniging",
    "form.opt4": "Was & linnengoed",
    "form.opt5": "Onderhoud / multiservices",
    "form.opt6": "Anders",
    "form.message": "Bericht",
    "form.submit": "Aanvraag versturen",
    "form.note": "Uw gegevens worden uitsluitend gebruikt om op uw aanvraag te reageren.",
    "form.ok": "Bedankt! Wij hebben uw aanvraag ontvangen en reageren zeer binnenkort.",
    "form.err": "Vul uw naam en een geldig e-mailadres in.",
    "form.sending": "Uw aanvraag wordt verzonden…",
    "form.err_send": "Verzenden mislukt. Probeer het opnieuw of stuur ons een WhatsApp.",

    "footer.tag": "Premium villaschoonmaak aan de Costa del Sol sinds 2020.",
    "footer.links": "Navigatie",
    "footer.contact": "Contact",
    "footer.rights": "Alle rechten voorbehouden."
  }
};

const htmlLangMap = { es: "es", en: "en", nl: "nl" };
let currentLang = "es";

function applyLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.documentElement.lang = htmlLangMap[lang] || "es";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  try { localStorage.setItem("msg_lang", lang); } catch (e) {}
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("msg_lang"); } catch (e) {}
  const browser = (navigator.language || "es").slice(0, 2).toLowerCase();
  const initial = saved || (translations[browser] ? browser : "es");
  applyLang(initial);
}

/* ---------- DOM ready ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLang();

  // Language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  // Sticky header style on scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Current year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll reveal
  const revealEls = document.querySelectorAll(
    ".card, .why-item, .process-step, .turn-visual, .section-head, .areas-list, .contact-info, .contact-form"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Contact form -> Web3Forms (with mailto fallback if not configured)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = translations[currentLang];
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !validEmail) {
        status.textContent = dict["form.err"];
        status.className = "form-status err";
        return;
      }

      // Fallback: no Web3Forms key yet -> open WhatsApp with the details prefilled
      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR-ACCESS-KEY-HERE") {
        const text = encodeURIComponent(
          "Hola, quiero solicitar un presupuesto.\n\n" +
          "Nombre: " + name + "\n" +
          "Email: " + email + "\n" +
          "Teléfono: " + form.phone.value + "\n" +
          "Localidad: " + form.town.value + "\n" +
          "Dormitorios: " + form.bedrooms.value + "\n" +
          "Servicio: " + form.service.value +
          (form.message.value ? "\nMensaje: " + form.message.value : "")
        );
        window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank");
        status.textContent = dict["form.ok"];
        status.className = "form-status ok";
        return;
      }

      // Real submission via Web3Forms
      status.textContent = dict["form.sending"];
      status.className = "form-status";
      if (submitBtn) submitBtn.disabled = true;

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Nueva solicitud de presupuesto — Multiservicios Cleaning S.G.",
        from_name: name,
        name: name,
        email: email,
        phone: form.phone.value,
        town: form.town.value,
        bedrooms: form.bedrooms.value,
        service: form.service.value,
        message: form.message.value,
        botcheck: form.botcheck ? form.botcheck.checked : false
      };

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          status.textContent = dict["form.ok"];
          status.className = "form-status ok";
          form.reset();
        } else {
          status.textContent = dict["form.err_send"];
          status.className = "form-status err";
        }
      } catch (err) {
        status.textContent = dict["form.err_send"];
        status.className = "form-status err";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
});

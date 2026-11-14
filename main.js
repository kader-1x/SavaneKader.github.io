(() => {
  "use strict";
  const P = window.PORTFOLIO, KEY = "portfolio-extra-v1";
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const write = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch {} };
  let extra = read(), filter = "Tous";
  const projects = () => [...extra.filter(e => !P.projects.some(p => p.id === e.id)), ...P.projects];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Rendu ---------- */
  const { profile: pf } = P;
  document.title = `${pf.first} ${pf.last} · ${pf.role}`;
  $("#logo").textContent = pf.first[0] + "." + pf.last[0] + ".";
  $("#name").innerHTML = `<span><i>${esc(pf.first)}</i></span><span><i>${esc(pf.last)}.</i></span>`;
  $("#intro").textContent = `${pf.role}. ${pf.intro}`;
  const A = P.about;
  $("#pn").textContent = pf.first + " " + pf.last;
  $("#avail").textContent = A.availability;
  $("#stmt").innerHTML = A.statement.split(" ").map(w => `<span>${esc(w)}</span>`).join(" ");
  $("#abtxt").innerHTML = A.paragraphs.map(t => `<p>${esc(t)}</p>`).join("");
  $("#vals").innerHTML = A.values.map(v => `<li><b>${esc(v.title)}</b><span>${esc(v.text)}</span></li>`).join("");
  $("#ph").innerHTML = A.photo ? `<img src="${esc(A.photo)}" alt="Portrait de ${esc(pf.first)} ${esc(pf.last)}">` : `<span>${esc(pf.first[0] + pf.last[0])}</span>`;
  const done = () => { $("#pre")?.remove(); document.querySelectorAll("#stmt span").forEach(s => s.style.opacity = 1); };
  const hue = s => 200 + ([...s].reduce((a, c) => a + c.charCodeAt(0), 0) * 37 % 140);
  $("#mail").textContent = pf.email; $("#mail").href = "mailto:" + pf.email;
  $("#links").innerHTML = pf.links.map((l, i) => `<a class="btn ${i === pf.links.length - 1 ? "p" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
  $("#foot").textContent = `© ${new Date().getFullYear()} ${pf.first} ${pf.last}, ${pf.role}`;
  $("#tl").innerHTML = P.parcours.map(p => `<li>${p.logo ? `<img class="lg" src="${esc(p.logo)}" alt="Logo ${esc(p.title)}">` : ""}<time>${esc(p.date)}</time><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`).join("");
  $("#sk").innerHTML = P.skills.map(s => `<div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("");
  $("#vtext").textContent = P.veille.text;
  $("#vlist").innerHTML = P.veille.sources.map(s => `<li>${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>` : `<span>${esc(s.title)}</span>`}<small>${esc(s.source)}</small></li>`).join("");
  const words = [...new Set(projects().flatMap(p => p.tags).concat(P.skills.flatMap(s => s.text.split(", "))))].slice(0, 16);
  $("#marq").innerHTML = [...words, ...words].map(w => `<span>${esc(w)}</span>`).join("");

  function renderProjects() {
    const list = projects(), cats = ["Tous", ...new Set(list.map(p => p.category))];
    $("#filters").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === filter}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    $("#cats").innerHTML = cats.slice(1).map(c => `<option value="${esc(c)}">`).join("");
    $("#grid").innerHTML = list.filter(p => filter === "Tous" || p.category === filter).map(p => `
      <button class="card" data-id="${esc(p.id)}"><div class="th${p.contain ? " fit" : ""}" style="--h:${hue(p.category)}">${p.image ? `<img src="${esc(p.image)}" alt="">` : ""}<b>${esc(p.category)}</b></div><div class="top"><span>${esc(p.year)}</span><span>Voir le projet</span></div>
      <h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      <div class="tags">${p.tags.slice(0, 3).map(t => `<span>${esc(t)}</span>`).join("")}</div></button>`).join("");
    if (window.gsap && !reduce) gsap.from(".card", { opacity: 0, y: 28, duration: .6, stagger: .08, ease: "power3.out" });
    renderExtras();
  }

  function openProject(id) {
    const p = projects().find(x => x.id === id); if (!p) return;
    const pic = p.schema;
    const table = t => `<h4>${esc(t.title)}</h4><div class="tw"><table><thead><tr>${t.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    const step = (s, i) => `<div class="stp"><span>${i + 1}</span><div><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p>${s.code ? `<pre><code>${esc(s.code)}</code></pre>` : ""}${(s.shots || []).map(h => `<figure data-zoom="${esc(h.src)}" data-cap="${esc(h.caption)}"><img src="${esc(h.src)}" alt="${esc(h.caption)}" loading="lazy"><figcaption>${esc(h.caption)}</figcaption></figure>`).join("")}</div></div>`;
    const btns = [...(p.files || []).map(f => `<a class="btn p" href="${esc(f.url)}" download>${esc(f.label)}</a>`), ...(p.link ? [`<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">Voir la documentation</a>`] : [])];
    $("#pjbody").innerHTML = `${p.image ? `<img class="cv${p.contain ? " fit" : ""}" src="${esc(p.image)}" alt="">` : ""}<h3>${esc(p.title)}</h3><p>${esc(p.category)}, ${esc(p.year)}</p><p style="margin-top:14px">${esc(p.summary)}</p>
      ${pic ? `<img class="sch" src="${esc(pic)}" alt="Schéma ou capture du projet ${esc(p.title)}">` : ""}
      ${p.context ? `<h4>Contexte</h4><p>${esc(p.context)}</p>` : ""}${p.work ? `<h4>Ce que j’ai fait</h4><p>${esc(p.work)}</p>` : ""}
      ${(p.tables || []).map(table).join("")}
      ${p.steps ? `<h4 style="margin-top:34px">Étapes de réalisation</h4>${p.steps.map(step).join("")}` : ""}
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${btns.length ? `<div class="dls">${btns.join("")}</div>` : ""}`;
    $("#pj").showModal();
  }

  /* ---------- Mode admin (#admin) ---------- */
  function renderExtras() {
    $("#extras").innerHTML = extra.map(e => `<li><span>${esc(e.title)}</span><button data-del="${esc(e.id)}">Retirer</button></li>`).join("");
  }
  const slug = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  $("#form").addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    extra.unshift({ id: slug(f.title) + "-" + Date.now().toString(36), title: f.title.trim(), year: f.year.trim(), category: f.category.trim(),
      summary: f.summary.trim(), context: f.context.trim(), work: f.work.trim(), image: f.image.trim(), link: f.link.trim(),
      tags: f.tags.split(",").map(t => t.trim()).filter(Boolean) });
    write(extra); e.target.reset(); filter = "Tous"; renderProjects();
    $("#admin").close(); $("#realisations").scrollIntoView();
  });
  $("#export").addEventListener("click", () => {
    const out = "window.PORTFOLIO = " + JSON.stringify({ ...P, projects: projects() }, null, 2) + ";\n";
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob([out], { type: "text/javascript" })), download: "content.js" });
    a.click(); URL.revokeObjectURL(a.href);
  });
  const syncAdmin = () => { if (location.hash === "#admin") { $("#admin").showModal(); } };
  addEventListener("hashchange", syncAdmin); syncAdmin();
  $("#admin").addEventListener("close", () => { if (location.hash === "#admin") history.replaceState(null, "", location.pathname); });

  /* ---------- Événements ---------- */
  document.addEventListener("click", e => {
    const t = e.target;
    if (t.closest("[data-close]")) t.closest("dialog").close();
    else if (t.matches("dialog")) t.close();
    const chip = t.closest(".chip"); if (chip) { filter = chip.dataset.cat; renderProjects(); }
    const fig = t.closest("[data-zoom]"); if (fig) { $("#lbimg").src = fig.dataset.zoom; $("#lbimg").alt = fig.dataset.cap; $("#lb").showModal(); }
    const card = t.closest(".card"); if (card) openProject(card.dataset.id);
    const del = t.closest("[data-del]"); if (del) { extra = extra.filter(x => x.id !== del.dataset.del); write(extra); renderProjects(); }
  });
  $("#theme").addEventListener("click", () => {
    const r = document.documentElement, dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme = dark ? "light" : "dark";
  });

  /* ---------- Schéma réseau ---------- */
  const NS = "http://www.w3.org/2000/svg", svg = $("#net");
  const N = { net: [240, 34, "Internet"], fw: [240, 128, "Pare-feu pfSense"], sw: [240, 224, "Switch VLAN"], ad: [80, 340, "Active Directory"], px: [240, 340, "Proxmox"], zb: [400, 340, "Zabbix"] };
  const L = [["net", "fw"], ["fw", "sw"], ["sw", "ad"], ["sw", "px"], ["sw", "zb"]];
  const el = (t, a, p = svg) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); p.appendChild(e); return e; };
  const lines = L.map(([a, b]) => el("line", { class: "ln", x1: N[a][0], y1: N[a][1] + 18, x2: N[b][0], y2: N[b][1] - 18 }));
  const nodes = Object.values(N).map(([x, y, label]) => { const g = el("g", { class: "nd" }); el("rect", { x: x - 70, y: y - 18, width: 140, height: 36, rx: 10 }, g); el("text", { x, y: y + 5 }, g).textContent = label; return g; });
  const packets = L.map(() => el("circle", { class: "pk", r: 5, opacity: 0 }));

  /* ---------- Animations GSAP ---------- */
  renderProjects();
  if (!window.gsap) { done(); return; }
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#bar", { scaleX: 1, ease: "none", scrollTrigger: { scrub: .3, start: 0, end: "max" } });
  if (reduce) { done(); return; }
  if (window.Lenis) {
    const lenis = new Lenis({ lerp: .09 });
    lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", e => { const a = e.target.closest('a[href^="#"]'); if (a && a.hash.length > 1 && a.hash !== "#admin") { const t = $(a.hash); if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -60 }); } } });
  }
  const D = 1.5, cnt = { v: 0 };
  gsap.timeline().to(cnt, { v: 100, duration: 1.2, ease: "power2.inOut", onUpdate: () => { $("#pc").textContent = Math.round(cnt.v); } })
    .to("#pre", { yPercent: -100, duration: .8, ease: "power4.inOut", onComplete: () => $("#pre")?.remove() });
  gsap.timeline({ delay: D, defaults: { ease: "power3.out" } })
    .from("h1 i", { yPercent: 110, duration: 1, stagger: .12 })
    .from(".pill,.lead,.hero .btns", { opacity: 0, y: 16, duration: .7, stagger: .1 }, "-=.5")
    .from(nodes, { opacity: 0, scale: .85, transformOrigin: "50% 50%", duration: .5, stagger: .12 }, .2);
  lines.forEach((ln, i) => { const len = ln.getTotalLength(); gsap.fromTo(ln, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: .6, delay: D + .5 + i * .15, ease: "power2.inOut" }); });
  packets.forEach((p, i) => {
    const [a, b] = L[i].map(k => N[k]);
    gsap.set(p, { attr: { cx: a[0], cy: a[1] + 18 } });
    gsap.timeline({ repeat: -1, delay: D + 1.6 + i * .5, repeatDelay: 1.2 + i * .3 }).set(p, { opacity: 1 }).to(p, { attr: { cx: b[0], cy: b[1] - 18 }, duration: 1, ease: "none" }).set(p, { opacity: 0 });
  });
  gsap.utils.toArray(".tl li").forEach(li => gsap.from(li, { opacity: 0, x: -24, duration: .7, ease: "power3.out", scrollTrigger: { trigger: li, start: "top 85%" } }));
  gsap.from(".sk div", { opacity: 0, y: 30, duration: .7, stagger: .1, scrollTrigger: { trigger: ".sk", start: "top 85%" } });
  gsap.from(".ct", { clipPath: "inset(0 100% 0 0)", duration: 1.1, ease: "power3.inOut", scrollTrigger: { trigger: ".ct", start: "top 85%" } });
  gsap.to("#marq", { skewX: 0, scrollTrigger: { trigger: ".marq", scrub: true } });
  gsap.utils.toArray("h2").forEach(h => gsap.from(h, { clipPath: "inset(0 0 100% 0)", yPercent: 30, duration: .9, ease: "power3.out", scrollTrigger: { trigger: h, start: "top 88%" } }));
  gsap.to("#stmt span", { opacity: 1, stagger: .1, ease: "none", scrollTrigger: { trigger: "#stmt", start: "top 80%", end: "bottom 45%", scrub: true } });
  gsap.from(".ph", { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".ph", start: "top 85%" } });
  gsap.from(".vals li", { opacity: 0, x: 30, stagger: .12, duration: .6, scrollTrigger: { trigger: ".vals", start: "top 88%" } });
  if (matchMedia("(hover:hover)").matches) {
    const c = $("#cur"); gsap.set(c, { xPercent: -50, yPercent: -50 });
    const x = gsap.quickTo(c, "x", { duration: .25, ease: "power3" }), y = gsap.quickTo(c, "y", { duration: .25, ease: "power3" });
    addEventListener("mousemove", e => { c.classList.add("on"); x(e.clientX); y(e.clientY); });
    document.addEventListener("mouseover", e => { c.className = "on" + (e.target.closest(".card") ? " card" : e.target.closest("a,button") ? " link" : ""); });
    document.querySelectorAll(".btn").forEach(b => {
      const mx = gsap.quickTo(b, "x", { duration: .4, ease: "power3" }), my = gsap.quickTo(b, "y", { duration: .4, ease: "power3" });
      b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * .25); my((e.clientY - r.top - r.height / 2) * .35); });
      b.addEventListener("pointerleave", () => { mx(0); my(0); });
    });
    const sx = gsap.quickTo("#net", "x", { duration: .8, ease: "power3" }), sy = gsap.quickTo("#net", "y", { duration: .8, ease: "power3" });
    addEventListener("mousemove", e => { sx((e.clientX / innerWidth - .5) * 24); sy((e.clientY / innerHeight - .5) * 24); });
  }
})();

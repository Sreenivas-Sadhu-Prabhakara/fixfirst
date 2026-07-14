/* ============================================================
   fixfirst — client-side repair guide.
   No network. No dependencies. State in localStorage only.
   Corpus lives in data.js (window.FIXFIRST_DATA).
   ============================================================ */
(function () {
  "use strict";

  var DATA = (typeof window !== "undefined" && window.FIXFIRST_DATA) || [];

  /* ---------- tiny helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function svg(inner, cls, box) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", box || "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    if (cls) s.setAttribute("class", cls);
    s.innerHTML = inner;
    return s;
  }

  /* ---------- category icons (stroke = currentColor via CSS) ---------- */
  var ICONS = {
    stitch: '<path d="M4 12c4-5 6-5 8 0s4 5 8 0"/><path d="M4 17h16" stroke-dasharray="2 3"/>',
    pan:    '<circle cx="10" cy="13" r="6"/><path d="M16 13h6"/>',
    plug:   '<path d="M9 2v6m6-6v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5"/>',
    chair:  '<path d="M6 3v9m12-9v9M5 12h14M7 12l-1 9m12-9 1 9"/>',
    tap:    '<path d="M3 9h6v3H3zM9 10h6a3 3 0 0 1 3 3v1M15 14v3m-3 0h6"/>',
    shoe:   '<path d="M3 16v-6h3l3 3 6 1 5 2v2H3z"/><path d="M3 13h3"/>',
    umbrella:'<path d="M12 3v18M3 12a9 9 0 0 1 18 0zM12 21a2.5 2.5 0 0 1-2.5-2.5"/>'
  };

  var STAR = '<path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z"/>';
  var TICK = '<path d="M4 12l5 5L20 6"/>';

  /* ============================================================
     STATE — localStorage only
     ============================================================ */
  var LS = { fixed: "fixfirst:fixed", favs: "fixfirst:favs" };
  var storageOk = true;

  function loadSet(key) {
    var out = {};
    if (!storageOk) return out;
    try {
      var raw = localStorage.getItem(key);
      if (raw) out = JSON.parse(raw) || {};
    } catch (e) { out = {}; }
    return out;
  }
  function saveSet(key, obj) {
    if (!storageOk) return;
    try { localStorage.setItem(key, JSON.stringify(obj)); }
    catch (e) { storageOk = false; }
  }

  var fixed = loadSet(LS.fixed);   // key -> true
  var favs = loadSet(LS.favs);     // key -> true

  function keyFor(cat, item, prob) { return cat.id + "/" + item.id + "/" + prob.id; }

  function fixedCount() {
    return Object.keys(fixed).filter(function (k) { return fixed[k]; }).length;
  }

  /* ============================================================
     INDEX — flatten corpus for search
     ============================================================ */
  var INDEX = [];   // { cat, item, prob, key, hay }
  DATA.forEach(function (cat) {
    cat.items.forEach(function (item) {
      item.problems.forEach(function (prob) {
        var hay = [
          cat.name, item.name, prob.title,
          (prob.tags || []).join(" "),
          (prob.steps || []).join(" ")
        ].join(" ").toLowerCase();
        INDEX.push({ cat: cat, item: item, prob: prob, key: keyFor(cat, item, prob), hay: hay });
      });
    });
  });

  /* ============================================================
     VIEW STATE
     ============================================================ */
  var state = { query: "", filter: "all" };

  var elSearch, elClear, elFilters, elBoard, elDetail, elTallyNum;

  /* ---------- difficulty class ---------- */
  function diffClass(d) {
    if (d === "Easy") return "diff diff--easy";
    if (d === "Moderate") return "diff diff--moderate";
    return "diff diff--involved";
  }

  /* ============================================================
     RENDER — browse board
     ============================================================ */
  function matches(entry) {
    if (state.filter !== "all" && entry.cat.id !== state.filter) return false;
    if (state.query) {
      var terms = state.query.toLowerCase().split(/\s+/).filter(Boolean);
      for (var i = 0; i < terms.length; i++) {
        if (entry.hay.indexOf(terms[i]) === -1) return false;
      }
    }
    return true;
  }

  function makeCard(entry) {
    var card = el("button", "rcard");
    card.type = "button";
    card.setAttribute("aria-label", entry.prob.title + " — " + entry.item.name);
    if (fixed[entry.key]) card.classList.add("is-fixed");

    // favourite toggle (separate button, stops propagation)
    var fav = el("button", "rcard__fav" + (favs[entry.key] ? " is-fav" : ""));
    fav.type = "button";
    fav.setAttribute("aria-pressed", favs[entry.key] ? "true" : "false");
    fav.setAttribute("aria-label", (favs[entry.key] ? "Remove from" : "Add to") + " favourites: " + entry.prob.title);
    fav.appendChild(svg(STAR, null, "0 0 24 24"));
    fav.addEventListener("click", function (ev) {
      ev.stopPropagation();
      toggleFav(entry.key);
      var on = !!favs[entry.key];
      fav.classList.toggle("is-fav", on);
      fav.setAttribute("aria-pressed", on ? "true" : "false");
      fav.setAttribute("aria-label", (on ? "Remove from" : "Add to") + " favourites: " + entry.prob.title);
      if (state.filter === "favs") render();
    });
    card.appendChild(fav);

    card.appendChild(el("span", "rcard__item", entry.item.name));
    card.appendChild(el("span", "rcard__title", entry.prob.title));

    var meta = el("div", "rcard__meta");
    meta.appendChild(el("span", diffClass(entry.prob.difficulty), entry.prob.difficulty));
    meta.appendChild(el("span", "rcard__time", entry.prob.time));
    var done = el("span", "rcard__fixed");
    done.appendChild(svg(TICK, null, "0 0 24 24"));
    done.appendChild(document.createTextNode("Fixed"));
    meta.appendChild(done);
    card.appendChild(meta);

    card.addEventListener("click", function () { openDetail(entry.key); });
    return card;
  }

  function render() {
    elBoard.innerHTML = "";
    elDetail.hidden = true;
    elBoard.hidden = false;

    var visible = INDEX.filter(matches);

    if (!visible.length) {
      var empty = el("div", "empty");
      empty.appendChild(el("strong", null, "Nothing matches that (yet)"));
      empty.appendChild(el("p", null,
        state.filter === "favs"
          ? "You haven't starred any repairs yet. Tap the star on a card to save it here."
          : "Try a simpler word — like “zip”, “drip”, or “kettle” — or clear the filters."));
      elBoard.appendChild(empty);
      return;
    }

    if (state.query || state.filter !== "all") {
      // flat results grid when searching / filtering
      var sec = el("section", "section");
      var head = el("div", "section__head");
      var g = el("span", "section__glyph");
      g.appendChild(svg(ICONS.stitch));
      head.appendChild(g);
      head.appendChild(el("h2", "section__title",
        state.filter === "favs" ? "Your favourites" : "Results"));
      head.appendChild(el("span", "section__count", visible.length + " " + (visible.length === 1 ? "repair" : "repairs")));
      sec.appendChild(head);
      var grid = el("div", "cards");
      visible.forEach(function (e) { grid.appendChild(makeCard(e)); });
      sec.appendChild(grid);
      elBoard.appendChild(sec);
      return;
    }

    // default: grouped by category
    DATA.forEach(function (cat) {
      var entries = visible.filter(function (e) { return e.cat.id === cat.id; });
      if (!entries.length) return;
      var sec = el("section", "section");
      var head = el("div", "section__head");
      var g = el("span", "section__glyph");
      g.appendChild(svg(ICONS[cat.icon] || ICONS.stitch));
      head.appendChild(g);
      head.appendChild(el("h2", "section__title", cat.name));
      head.appendChild(el("span", "section__count", entries.length + " " + (entries.length === 1 ? "repair" : "repairs")));
      sec.appendChild(head);
      var grid = el("div", "cards");
      entries.forEach(function (e) { grid.appendChild(makeCard(e)); });
      sec.appendChild(grid);
      elBoard.appendChild(sec);
    });
  }

  /* ============================================================
     RENDER — detail sheet
     ============================================================ */
  function specGroup(label, list) {
    var group = el("div", "spec__group");
    group.appendChild(el("div", "spec__label", label));
    var ul = el("ul", "spec__list");
    if (list && list.length) {
      list.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    } else {
      ul.appendChild(el("li", "none", "Nothing needed — just your hands"));
    }
    group.appendChild(ul);
    return group;
  }

  function openDetail(key) {
    var entry = INDEX.filter(function (e) { return e.key === key; })[0];
    if (!entry) return;
    var cat = entry.cat, item = entry.item, prob = entry.prob;

    elDetail.innerHTML = "";

    // back
    var back = el("button", "back");
    back.type = "button";
    back.appendChild(svg('<path d="M15 5l-7 7 7 7"/>', null, "0 0 24 24"));
    back.appendChild(document.createTextNode("All repairs"));
    back.addEventListener("click", function () {
      render();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    elDetail.appendChild(back);

    var sheet = el("article", "sheet");

    /* --- head --- */
    var head = el("div", "sheet__head");
    head.appendChild(el("div", "sheet__crumb", cat.name + "  →  " + item.name));
    var h = el("h1", "sheet__title", prob.title);
    h.id = "detailTitle";
    head.appendChild(h);

    var badges = el("div", "sheet__badges");
    badges.appendChild(el("span", diffClass(prob.difficulty), prob.difficulty));
    var timePill = el("span", "rcard__time");
    timePill.appendChild(svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', "sheet__clock", "0 0 24 24"));
    timePill.appendChild(document.createTextNode(" " + prob.time));
    badges.appendChild(timePill);
    head.appendChild(badges);

    // actions: fix + favourite
    var actions = el("div", "sheet__actions");
    var fixBtn = el("button", "btn btn--fix" + (fixed[key] ? " is-on" : ""));
    fixBtn.type = "button";
    fixBtn.setAttribute("aria-pressed", fixed[key] ? "true" : "false");
    function paintFix() {
      var on = !!fixed[key];
      fixBtn.classList.toggle("is-on", on);
      fixBtn.setAttribute("aria-pressed", on ? "true" : "false");
      fixBtn.innerHTML = "";
      fixBtn.appendChild(svg(TICK, null, "0 0 24 24"));
      fixBtn.appendChild(document.createTextNode(on ? "Marked as fixed" : "I fixed this"));
    }
    paintFix();
    fixBtn.addEventListener("click", function () {
      fixed[key] = !fixed[key];
      if (!fixed[key]) delete fixed[key];
      saveSet(LS.fixed, fixed);
      paintFix();
      updateTally();
    });
    actions.appendChild(fixBtn);

    var favBtn = el("button", "btn btn--ghost" + (favs[key] ? " is-fav" : ""));
    favBtn.type = "button";
    favBtn.setAttribute("aria-pressed", favs[key] ? "true" : "false");
    function paintFav() {
      var on = !!favs[key];
      favBtn.classList.toggle("is-fav", on);
      favBtn.setAttribute("aria-pressed", on ? "true" : "false");
      favBtn.innerHTML = "";
      favBtn.appendChild(svg(STAR, null, "0 0 24 24"));
      favBtn.appendChild(document.createTextNode(on ? "Saved" : "Save"));
    }
    paintFav();
    favBtn.addEventListener("click", function () { toggleFav(key); paintFav(); });
    actions.appendChild(favBtn);

    var printBtn = el("button", "btn btn--ghost");
    printBtn.type = "button";
    printBtn.appendChild(svg('<path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z"/>', null, "0 0 24 24"));
    printBtn.appendChild(document.createTextNode("Print"));
    printBtn.addEventListener("click", function () { window.print(); });
    actions.appendChild(printBtn);

    head.appendChild(actions);
    sheet.appendChild(head);

    /* --- body --- */
    var body = el("div", "sheet__body");

    // spec (tools + materials)
    var spec = el("div", "spec");
    spec.appendChild(specGroup("Tools", prob.tools));
    spec.appendChild(specGroup("Materials", prob.materials));
    body.appendChild(spec);

    // steps
    var stepsBlock = el("div");
    var st = el("h2", "block__title");
    st.appendChild(svg('<path d="M4 6h16M4 12h16M4 18h10"/>', null, "0 0 24 24"));
    st.appendChild(document.createTextNode("Steps"));
    stepsBlock.appendChild(st);
    var ol = el("ol", "steps");
    prob.steps.forEach(function (s) { ol.appendChild(el("li", null, s)); });
    stepsBlock.appendChild(ol);
    body.appendChild(stepsBlock);

    // safety
    if (prob.safety) {
      var safety = el("div", "safety");
      safety.appendChild(svg('<path d="M12 3l9 16H3z"/><path d="M12 9v5M12 17h.01"/>', "safety__icon", "0 0 24 24"));
      var stext = el("div", "safety__text");
      stext.appendChild(el("strong", null, "Safety"));
      stext.appendChild(document.createTextNode(prob.safety));
      safety.appendChild(stext);
      body.appendChild(safety);
    }

    // honesty: replace + recycle
    var honestBlock = el("div");
    var ht = el("h2", "block__title");
    ht.appendChild(svg('<path d="M4 12a8 8 0 0 1 14-5m2-2v4h-4M20 12a8 8 0 0 1-14 5m-2 2v-4h4"/>', null, "0 0 24 24"));
    ht.appendChild(document.createTextNode("If this doesn't work"));
    honestBlock.appendChild(ht);
    var honest = el("div", "honest");
    function honestRow(kind, label, text) {
      var row = el("div", "honest__row");
      row.appendChild(el("span", "honest__key honest__key--" + kind, label));
      row.appendChild(el("span", "honest__val", text));
      honest.appendChild(row);
    }
    honestRow("replace", "Replace", prob.replace);
    honestRow("recycle", "Recycle", prob.recycle);
    honestBlock.appendChild(honest);
    body.appendChild(honestBlock);

    // related problems on the same item
    var siblings = item.problems.filter(function (p) { return p.id !== prob.id; });
    if (siblings.length) {
      var rel = el("div", "related");
      rel.appendChild(el("div", "block__title", "Other " + item.name.toLowerCase() + " fixes"));
      var list = el("div", "related__list");
      siblings.forEach(function (p) {
        var link = el("button", "related__link", p.title);
        link.type = "button";
        var k = keyFor(cat, item, p);
        link.addEventListener("click", function () { openDetail(k); window.scrollTo({ top: 0, behavior: "auto" }); });
        list.appendChild(link);
      });
      rel.appendChild(list);
      body.appendChild(rel);
    }

    sheet.appendChild(body);
    elDetail.appendChild(sheet);

    elBoard.hidden = true;
    elDetail.hidden = false;
    // move focus to the heading for screen readers / keyboard
    h.setAttribute("tabindex", "-1");
    h.focus();
  }

  /* ============================================================
     FAVOURITES + TALLY
     ============================================================ */
  function toggleFav(key) {
    if (favs[key]) delete favs[key];
    else favs[key] = true;
    saveSet(LS.favs, favs);
  }

  function updateTally() {
    var n = fixedCount();
    elTallyNum.textContent = n;
  }

  /* ============================================================
     FILTERS
     ============================================================ */
  function buildFilters() {
    elFilters.innerHTML = "";
    var defs = [{ id: "all", name: "All" }].concat(
      DATA.map(function (c) { return { id: c.id, name: c.name }; })
    );
    defs.push({ id: "favs", name: "★ Saved" });

    defs.forEach(function (d) {
      var b = el("button", "filter" + (state.filter === d.id ? " is-active" : ""), d.name);
      b.type = "button";
      b.setAttribute("aria-pressed", state.filter === d.id ? "true" : "false");
      b.dataset.id = d.id;
      b.addEventListener("click", function () {
        state.filter = d.id;
        if (d.id === "favs") {
          // reuse matches() with a favourites gate
        }
        $$(".filter", elFilters).forEach(function (x) {
          var on = x.dataset.id === d.id;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-pressed", on ? "true" : "false");
        });
        render();
      });
      elFilters.appendChild(b);
    });
  }

  // extend matches for the "favs" pseudo-filter
  var _matches = matches;
  matches = function (entry) {
    if (state.filter === "favs") {
      if (!favs[entry.key]) return false;
      // still honour the search box while on favourites
      if (state.query) {
        var terms = state.query.toLowerCase().split(/\s+/).filter(Boolean);
        for (var i = 0; i < terms.length; i++) {
          if (entry.hay.indexOf(terms[i]) === -1) return false;
        }
      }
      return true;
    }
    return _matches(entry);
  };

  /* ============================================================
     WIRE UP
     ============================================================ */
  function init() {
    // storage feature test
    try { localStorage.setItem("fixfirst:test", "1"); localStorage.removeItem("fixfirst:test"); }
    catch (e) { storageOk = false; }

    elSearch = $("#search");
    elClear = $("#searchClear");
    elFilters = $("#filters");
    elBoard = $("#board");
    elDetail = $("#detail");
    elTallyNum = $("#tallyNum");

    buildFilters();
    updateTally();

    var t;
    elSearch.addEventListener("input", function () {
      state.query = elSearch.value.trim();
      elClear.hidden = !elSearch.value;
      clearTimeout(t);
      t = setTimeout(render, 80);
    });
    elSearch.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { elSearch.value = ""; state.query = ""; elClear.hidden = true; render(); }
    });
    elClear.addEventListener("click", function () {
      elSearch.value = ""; state.query = ""; elClear.hidden = true;
      render(); elSearch.focus();
    });

    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

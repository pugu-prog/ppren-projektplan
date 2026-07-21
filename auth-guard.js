/**
 * PPREN Auth-Guard
 * ----------------
 * Op JIDDER geschützter Säit als éischt Script agebonnen (virun de React-Scripten).
 * Préift ob eng gëlteg Session existéiert; wa net, gëtt direkt op login.html
 * geleet (mat "zréck"-Parameter, fir nom Umellen hei zréckzekommen).
 *
 * Setzt global "PPREN_SESSION" = { token, numm, rolle, klasse } zur Verfügung,
 * deen d'React-Apps benotze kënnen ({window.PPREN_SESSION}).
 *
 * Notzung: <script src="auth-guard.js"></script>  (virun de React-Scripten)
 * Fir Proffen-only Säiten: <script>PPREN_ERFUERDERT_ROLLE = "Prof";</script>
 * virum auth-guard.js Script-Tag setzen.
 */
(function () {
  const token = localStorage.getItem("ppren_token");
  const numm = localStorage.getItem("ppren_numm");
  const rolle = localStorage.getItem("ppren_rolle");
  const klasse = localStorage.getItem("ppren_klasse");

  function laafBassNoLogin() {
    const zréck = encodeURIComponent(window.location.pathname.split("/").pop() + window.location.search);
    window.location.href = "login.html?zréck=" + zréck;
  }

  if (!token || !numm || !rolle) {
    laafBassNoLogin();
    return;
  }

  const erfuerdertRolle = window.PPREN_ERFUERDERT_ROLLE;
  if (erfuerdertRolle && rolle !== erfuerdertRolle) {
    document.write(
      '<div style="padding:60px 20px;text-align:center;font-family:sans-serif;color:#8a2b1f;">' +
      "<h2>Kee Zougrëff</h2><p>Dës Säit ass just fir " + erfuerdertRolle + ".</p>" +
      '<a href="links.html" style="color:#00A94F;font-weight:700;">← Zréck</a></div>'
    );
    throw new Error("PPREN Auth: Roll net erlaabt");
  }

  window.PPREN_SESSION = { token, numm, rolle, klasse };

  // Session am Hannergrond validéieren (ofgelaf Sessioune erausfannen), ouni
  // d'Säit ze blockéieren — bei Ongëltegkeet gëtt sanft op login.html geleet.
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzfyThho8MevoyfSz7NsQ1YxZJO4E-f61GYYzqZyHACIHzxR3bm7SHCwVUkCBJrAEvJ/exec";
  fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ typ: "sessionPruefen", token }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.valid) {
        localStorage.removeItem("ppren_token");
        localStorage.removeItem("ppren_numm");
        localStorage.removeItem("ppren_rolle");
        localStorage.removeItem("ppren_klasse");
        laafBassNoLogin();
      }
    })
    .catch(() => {}); // Bei Netzwerkfehler: Säit bleift nutzbar, näischt blockéieren
})();

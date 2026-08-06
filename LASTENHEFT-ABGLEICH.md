# Ofgläich Code ↔ Lastenheft (Version 0.1, 08.07.2026)

Modul-fir-Modul Vergläich vum tatsächlechen Code (`Code.gs` + alle HTML-Säiten) géint d'offiziell Ufuerderunge vum `Lastenheft_PPREN_Onlineplattform_1.docx`. Nëmmen op Basis vu wierklech gelies-em Code — keng Vermutungen.

**Wichteg**: déi vireg Status-Synchroniséierung (links.html ↔ admin.html) war baséiert op der eegener Selbsteinschätzung, net op dësem Lastenheft. E puer Modulen, déi als ✅ markéiert sinn, hunn ënnerierens Lächer géint déi formell Ufuerderungen.

## M1 · Umeldung & Zougrëff — ⚠️ Deelweis (net ✅)
- **Ofwäichung vum Lastenheft**: F1.1/F1.2 verlaangen SSO iwwer de Schoul-Login. Ëmgesat gouf en eegenen 4-Zuel-PIN-System. Wahrscheinlech eng bewosst, néideg Adaptatioun (SSO an Apps Script ass komplizéiert) — mä eng Ofwäichung, keng Ëmsetzung.
- **F1.4 net erfëllt**: All Prof gesäit ausnahmslos ALL Schülerprojeten — et gëtt keng Aschränkung op "zougeteilte Betreuer/Korrektoren" wéi verlaangt.
- **F1.5 net ëmgesat**: Keng Admin-Uewerfläch fir Klassen/Zoudeelungen ze verwalten — `SCHUELER_LISTE`/`LEHRER_EMAILS` si feste Konstanten am Code, net administrativ änderbar.
- Login/PIN-Flow selwer (F1.3-deelweis) funktionéiert gutt.

## M2 · Projektplang — ⚠️ Deelweis
- F2.2 (Felder), F2.5 (Spär no Ënnerschrëft), F2.6 (Auto-Iwwernam an Suivi) ✓.
- **F2.1 feelt**: Keng "Ideensammlung"-Zwëschenetapp virum eigentlechen Projektplang.
- **"Freigeben & digital ënnerschreiwen"-Knäppchen ass explizit als "(Demo)" markéiert** am UI — keng richteg Signatur (F2.4).
- **F2.7 net respektéiert**: De Schüler selwer kann iwwer "Zréck zur Bearbeitung" säin agereechte Plang nees opmaachen — de Lastenheft verlaangt datt just de Betreuer dat kann.

## M3 · Suivi — ✅ Weitgehend fäerdeg
- F3.1-F3.6 gutt ofgedeckt. F3.7 (PDF/Word-Export) nëmmen iwwer Browser-Drock (`window.print()`), kee richtegen Export-Knäppchen.

## M4 · Projektdokumentatioun — ❌ Grondsätzlech anescht wéi verlaangt
- De Lastenheft verlaangt e richtegt Aarbechtsdokument mam Schüler, mat automatesch generéierter Kapitelstruktur aus de Projektplang-Ziler, plus Inline-Kommentarfunktioun vum Prof (wéi Word-Kommentaren), ouni den Text ze iwwerschreiwen (F4.1-F4.5).
- **Wat wierklech do ass**: `dokumentatioun.html` erlaabt just e SharePoint-Link anzeginn plus generéiert automatesch e Kloertext-Resumé aus dem Journal fir ze kopéieren. Keen Editor, keng Kapitelstruktur, keng Inline-Kommentaren.
- **F4.8/F4.9 net ëmgesat**: Funktiounsmodell/Produkt an Film als eege Ofgab-Elementer mat Status/Termin — net existent.

## M5 · Wochenberichter — ✅ Solid
- Alles do: Abgab, Korrektur, Punktevergab, Erënnerung bei fehlendem Bericht (Sonndes 10:00, `sendeErennerungen()`), automatesch "Verpasst"-Markéierung mat 0P (Sonndes 23:00). Entsprécht F5.1-F5.8 gutt.

## M6 · Bewertung & Notenberechnung — ⚠️ Funktional staark, mä géint Architektur-Ufuerderung net konform
- **Zentral Ufuerderung verletzt**: "Bewertungsraster darf net fest am Code hannerluecht sinn, mä muss administrativ konfigurierbar sinn" (Kapitel 4.6) — d'Rastere (`STRUKTUR_2GSE`/`STRUKTUR_1GSE`) sinn awer haart am JS-Code vun `bewertung.html` hannerluecht, net iwwer eng Admin-Uewerfläch änderbar.
- F6.2/F6.3 (Auto-Iwwernam aus Wochenberichter/Fachgespréich) ✓, F6.5/F6.5a (automatesch Notenberechnung) ✓.
- **F6.7 net ëmgesat**: Keng Historie/Protokoll bei Ännerunge vun Notenbewertungen.

## M7 · Notenexport — ✅ Solid
- `.xlsx` mat Faarwen/Multi-Sheet, CSV, pro Klass oder all Klassen. Entsprécht F7.1-F7.4 gutt.

## M8 · Termine & Erënnerungen — ⚠️ Enker gefaasst wéi de Lastenheft virgesäit
- Rendez-vous-Erënnerungen (`sendeRendezvousErennerungen`, all Dag 7:00) an Zäitplang-Verwaltung ✓.
- **F8.5 net ëmgesat**: Kee `.ics`-Export/Abo-Link fir de perséinlechen Kalenner.
- Erënnerunge sinn op Rendez-vousen a Wochenberichter limitéiert, net op *all* Meilensteng aus dem Projektplang wéi F8.3 et allgemeng formuléiert.

## M9 · Planungstool — ⚠️ Meilensteng-Deel gutt, Budget-Tool feelt gréisstendeels
- Meilensteng + Gantt-Chart (F9.1-F9.5) ✓ gutt ëmgesat.
- **Budget-Tool (F9.6-F9.11) feelt weitgehend**: Am Lastenheft e richtegt eenzel-Ausgaben-Tool mat Datum/Kategorie/Beleg-Foto, lafendem Restbudget, 90%-Warnung, an enger Gate iert d'Budget no der Kostenplang-Genehmegung fräigeschalt gëtt. Aktuell gëtt et am Projektplang-Formulaire just eng flaach Lëscht "Bezeechnung + Betrag" ouni Datum, Kategorie, Beleg, Fräigab-Gate oder lafend Ausgaben-Verfolgung.

## M10 · Fachgespréicher — ✅ Solid
- Rendez-vous-Terminer, Timer, Punktevergab, automatesch Kuerzbemierkung an d'Suivi. Entsprécht F10.1-F10.4 gutt.

## M11 · Automatesch Bemierkung — ⚠️ Halleft-automatesch
- "Kommentar aus Remarquen generéieren"-Knäppchen an `bewertung.html` generéiert Text aus manuell ausgewielte Positiv/Negativ-Buttons — editéierbar virum Iwwerhuelen (F11.3 ✓).
- **F11.2 nëmmen deelweis**: De Lastenheft verlaangt datt de Virschlag sech automatesch un Erreechungsgrad vun de Meilensteng, Pünktlechkeet vun de Wochenberichter, Fachgespréich-Resultat an Gesamtnote orientéiert — de Code leest dës Wäerter net automatesch aus, de Prof wielt d'Remarquen manuell aus.

## Resumé

| Modul | Wierklechen Zoustand |
|---|---|
| M1 Login/Zougrëff | ⚠️ PIN-Flow gutt, awer keng Zougrëffsbeschränkung/Admin-UI, keng SSO |
| M2 Projektplang | ⚠️ Kär-Flow gutt, Signatur ass "(Demo)", Wiedereröffnung net geschützt |
| M3 Suivi | ✅ |
| M4 Dokumentatioun | ❌ Grondsätzlech anescht wéi geduecht (keen Editor/Kommentarsystem) |
| M5 Wochenberichter | ✅ |
| M6 Bewertung | ⚠️ Funktional gutt, awer Raster hart codéiert (géint Architektur-Ufuerderung) |
| M7 Notenexport | ✅ |
| M8 Termine/Erënnerungen | ⚠️ Funktionéiert, mä enker wéi Spezifikatioun (kee .ics) |
| M9 Planungstool | ⚠️ Meilensteng ✅, Budget-Tool feelt gréisstendeels |
| M10 Fachgespréicher | ✅ |
| M11 Auto-Bemierkung | ⚠️ Halleft-automatesch (manuell Auswiel amplaz Live-Berechnung) |

Näischt hei ass e Bug — alles funktionéiert wéi programméiert. Et sinn Ënnerscheeder tëscht deem, wat de formelle Lastenheft (08.07.2026) beschreift, an deem, wat gebaut gouf — normal bei engem Prototyp, deen iwwer d'Zäit gewuess ass, mä gutt ze wëssen ier de Schoulufank (07.09.).

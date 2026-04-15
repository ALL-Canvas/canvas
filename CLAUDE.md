# CANVAS — Claude Instruktionen
### Vollständiger Kontext für Claude Code

> Lies dieses File vollständig bevor du irgendetwas tust.
> Es erklärt nicht nur was zu bauen ist — sondern warum, wie es denkt, und was es sein soll.

---

## 1. Was ist CANVAS

CANVAS ist ein neues SaaS-Tool das eine Lücke schliesst die heute kein Tool schliesst.

Die beste Beschreibung: **Ein lebendiger Workspace auf einer freien Canvas. Die Daten sind geteilt, das Layout ist deins.**

Stell dir vor: Du öffnest CANVAS morgens. Es ist dein einziger Tab. Du siehst genau das was du sehen willst — deine KPIs oben links, deine offenen Aufgaben rechts, die Kunden-Map unten. Dein Kollege öffnet dasselbe Projekt — und sieht eine komplett andere Ansicht. Sein Layout, seine Prioritäten. Aber dieselben Daten. Wenn sich ein Wert in der Datenbank ändert — sehen es beide sofort in ihrer eigenen Ansicht.

Das ist CANVAS. Nicht eine App die jemand für dich gebaut hat. Nicht ein leeres Weiss-Blatt. Ein intelligenter Workspace der sich anpasst.

---

## 2. Das Problem das CANVAS löst

Jedes Tool auf dem Markt zwingt dich in ein Format:

- **Notion / Coda:** Dokument. Von oben nach unten. Du kannst nicht sagen "dieser Chart soll HIER stehen, 200px nach rechts." Du bist gefangen in Blöcken.
- **Monday / Asana:** Board. Alles ist eine Zeile in einer Tabelle. Du kannst die Daten nicht visuell anordnen wie du willst.
- **Figma / Canva:** Design. Volle Freiheit, aber null Daten. Jede Zahl ist statisch, jeder Text ist tot.
- **Retool / Appsmith:** App-Builder. Technisch stark, aber sieht aus wie ein Developer-Tool. Kein normaler Mensch will das bedienen.

**Die Lücke:** Niemand kombiniert freie visuelle Platzierung mit live Daten und persönlichem Layout.

CANVAS schliesst diese Lücke.

---

## 3. Die drei Modi — das Herzstück

CANVAS hat drei Modi. Das ist der fundamentalste Unterschied zu allen anderen Tools.

### Builder Mode
Der Builder ist die Person die das System einrichtet. Meistens der Chef, der IT-Verantwortliche, der Agentur-Mitarbeiter.

Im Builder Mode hat man **volle Power**: Tabellen erstellen, Blocks konfigurieren, Daten verbinden, Formeln schreiben, Automationen bauen, Layouts designen.

**Wichtig:** Tabellen sind keine versteckten Datenbank-Objekte. Sie liegen als **sichtbare Blocks direkt auf der Builder-Canvas** — neben den Charts die ihre Daten visualisieren. Der Builder sieht sofort den Zusammenhang zwischen Rohdaten und Darstellung.

### Workspace Mode
Jeder Mitarbeiter hat seinen **persönlichen Workspace**. Er öffnet CANVAS und richtet ihn ein wie er will — zieht Blocks aus dem Block-Pool (den der Builder definiert hat) auf seine Canvas, platziert sie frei, filtert und sortiert nach seinen Bedürfnissen.

**Daten geteilt, Layout individuell.** Alle Mitarbeiter sehen dieselben Zahlen — jeder in seiner eigenen visuellen Anordnung.

Die Rohdaten-Tabellen des Builders sind für Workspace-User **unsichtbar**. Sie sehen nur die Darstellungen (Charts, Listen, KPI-Cards) — nie die rohen Daten dahinter.

### Portal Mode
Für externe Empfänger — Kunden, Partner, Investoren.

Der Builder baut eine fertige Canvas, aktiviert Portal Mode → die Canvas ist locked. Der Empfänger öffnet einen Link ohne Login. Er sieht genau was der Builder ihm zeigen will. Er kann interagieren (Formulare ausfüllen, Buttons klicken) — aber nichts umbauen.

**Template-Portale:** Ein Kunden-Report-Frame wird einmal gebaut. CANVAS generiert automatisch für jeden Kunden seinen eigenen Frame mit seinen Daten. Virtuell gerendert — nicht physisch auf dem Workspace. 500 Kunden = 500 personalisierte Portale aus einem Template.

---

## 4. Die unveränderlichen Prinzipien

Das sind keine Nice-to-Haves. Das ist die DNA des Produkts. Jede technische Entscheidung muss diese Prinzipien respektieren.

### CANVAS sagt nie nein
Das wichtigste Prinzip. Kein Feld blockiert eine Eingabe. Kein Format wird erzwungen. Kein Conversion-Error. Kein "dieses Feld akzeptiert keine Zahlen."

Wenn jemand Text in ein Zahlenfeld schreibt — CANVAS zeigt es. Wenn eine Formel einen unerwarteten Wert hat — CANVAS zeigt das Ergebnis, kein roter Error-Screen. Nur bei echter Syntax-Fehlern (falsche Klammer in einer Formel) gibt es einen **diskreten, nicht-blockierenden Hinweis**.

Der User ist intelligent. Er sieht selbst wenn etwas nicht stimmt.

### Alles kann alles callen
Animationen, Texte, Styles, Navigation, Formeln — alles kann von allem ausgelöst werden. Eine Zahl die unter einem Zielwert liegt kann eine rote Farbe triggern, eine Shake-Animation starten, und gleichzeitig einen Webhook feuern. Keine künstlichen Grenzen zwischen Element-Typen.

### Die Daten sind geteilt, das Layout ist deins
Jeder Mitarbeiter sieht dieselben Daten — aber in seiner eigenen visuellen Ansicht. Das persönliche Layout wird pro User gespeichert.

### Progressive Disclosure
Simple by default. Mächtig wenn du es brauchst. Ein Text-Element ist einfach ein Text — erst beim Reinklicken erscheinen alle Style-Optionen. Erst beim Data-Tab erscheinen Binding-Optionen. Niemand wird von Optionen überwältigt die er gerade nicht braucht.

### Instant Feedback
Jede Änderung sofort sichtbar. Kein Preview-Button. Kein Publish-Cycle. Farbe ändern → sie ändert sich. Daten binden → sie erscheinen sofort.

---

## 5. Wie CANVAS sich anfühlt

CANVAS ist **hell, clean, viel Whitespace** — wie Notion trifft Figma.

Nicht dunkel und dramatisch. Nicht bunt und überladen. Professionell, ruhig, präzise.

Jede Interaktion muss sich **wertig** anfühlen. Die Bounding Box wenn man ein Element selektiert — kleine, präzise Handles wie in Figma, nicht die grossen blauen Quadrate aus PowerPoint. Die Übergänge — smooth, spring-artig, nie abrupt. Die Sidebars — subtile Border-Linien, keine Schatten, wie Notion/Coda.

**Design-Leitsatz:** Jeder Screen muss so aussehen als käme er von einem 5-Mann-Designteam.

---

## 6. Tech Stack

| Layer | Tool | Warum |
|---|---|---|
| Frontend | React + TypeScript | Ecosystem, Typsicherheit, beste AI-Code-Gen |
| Canvas Engine | tldraw v2 | Zoom/Pan/Undo/Redo/Selection bereits fertig |
| State | Zustand | Leicht, performant für Canvas-State |
| Backend | Supabase | Auth + DB + Realtime + Storage in einem |
| Styling | Tailwind CSS | Utility-first, konsistent |
| Routing | React Router v6 | Standard |
| Charts | Recharts | React-nativ, flexibel |
| PDF | react-pdf | Browser-basiert |
| Formulas | HyperFormula | Open Source, Excel-kompatibel |
| Maps | Leaflet + react-leaflet | Open Source, kein API-Key |
| AI | Anthropic Claude API | Canvas-Generierung, Formeln |
| Animations | Framer Motion | Produktions-ready |
| Rich Text | TipTap | Headless, flexibel |
| Hosting | Vercel + Supabase Cloud | Zero-Config |

---

## 7. Design System — vollständig

### Farben
```css
/* Hintergründe */
--background: #FFFFFF          /* App-Hintergrund */
--surface: #F7F7F5             /* Canvas-Hintergrund, warmes Grau (nicht kalt) */
--surface-hover: #EFEFED       /* Hover-State auf surface */

/* Borders */
--border: #E8E8E5              /* Standard Border — sehr subtil */
--border-strong: #D3D3CE       /* Stärkere Border wenn nötig */

/* Text */
--text-primary: #1A1A1A        /* Haupttext — fast schwarz, nicht komplett */
--text-secondary: #6B6B6B      /* Sekundärtext, Labels */
--text-tertiary: #9B9B9B       /* Placeholder, Hints, deaktiviert */

/* Akzent — Violet */
--accent: #7C5CFC              /* Primary Action, Links, aktive States */
--accent-hover: #6B4EDB        /* Hover auf Accent */
--accent-light: #F0EDFF        /* Sehr heller Violet — aktive Backgrounds */

/* Semantisch */
--destructive: #E5484D         /* Löschen, Fehler */
--success: #30A46C             /* Erfolg, positiv */
--warning: #F76B15             /* Warnung */
--info: #0090FF                /* Info */
```

**Warum Violet:** Nicht das übliche Blau (zu generisch), nicht Grün (zu "fintech"), nicht Orange. Violet ist modern, eigenständig, und funktioniert perfekt auf hellem Hintergrund ohne zu dominieren.

### Typography
```
Font: Inter (Google Fonts) — wie Notion/Linear
Mono: JetBrains Mono — für Code, Formeln, Logs

Skala:
11px — Labels, Badges, sehr kleine Texte
13px — Sekundäre UI-Texte, Beschreibungen
14px — Standard UI-Text (Basis)
15px — Etwas prominenterer Text
17px — Section Headers in Panels
20px — Modal Titles
24px — Page Titles
30px — Hero-Texte
```

### Spacing (8px Base Unit — IMMER)
```
4px  — minimaler Abstand (z.B. Icon zu Text)
8px  — Standard Small
12px — Standard
16px — Standard Medium
20px — Etwas mehr Luft
24px — Section Padding
32px — Grössere Abstände
40px — Section Gaps
48px — TopBar Höhe, grosse Abstände
64px — Hero-Bereiche
```

Alle Abstände sind Vielfache von 4 — vorzugsweise von 8. Niemals 7px, 11px, 15px.

### Border Radius
```
4px  — kleine Elemente (Badges, Tags)
6px  — Standard Buttons, Inputs
8px  — Cards, Panels
12px — Modals, grössere Cards
16px — Grosse Modals, Sheets
9999px — Pills, voller Radius
```

### Schatten
```
sm: 0 1px 2px rgba(0,0,0,0.06)    — sehr subtil
md: 0 2px 8px rgba(0,0,0,0.08)    — Standard Dropdown/Tooltip
lg: 0 4px 16px rgba(0,0,0,0.10)   — Floating Panels
xl: 0 8px 32px rgba(0,0,0,0.12)   — Modals
```

### Motion
```
100ms — Hover States (sehr schnell)
150ms — Micro-Interaktionen (Button Press, Toggle)
300ms — Panel-Übergänge, Modals
Easing: cubic-bezier(0.16, 1, 0.3, 1) — smooth mit leichtem Spring
```

### Layout-Masse
```
TopBar: 48px Höhe
Navigator (links): 240px Breite
Property Panel (rechts): 280px Breite
Canvas (Mitte): flex-1 (alles was übrig bleibt)
Alle Sidebar-Höhen: calc(100vh - 48px)
```

### Sidebar-Stil
Attached (fest, nicht floating). Trennung durch Border-Linie (1px solid #E8E8E5) — **keine Schatten** auf Sidebars. Wie Notion, wie Coda. Ruhig, clean.

---

## 8. Workspace-Architektur

### Der Workspace
Der Workspace ist eine **unendliche Canvas** — der Meta-Raum. Nur für den Builder sichtbar. Alle Frames liegen hier nebeneinander wie Artboards in Figma.

### Frames
Frames sind die Pages der App. Jeder Frame hat:
- **Fixe Breite** (1440px / A4 / 1920px / 390px / custom)
- **Dynamische Höhe** — wächst mit Inhalt, scrollt intern
- **Sticky Header** — fixe Elemente bleiben beim Scrollen oben
- **Type-Label** im Builder sichtbar (oben-links, ausserhalb des Frames)

### Template-Frames
Frames können als "Dynamic Template" markiert werden. CANVAS generiert für jeden Row in einer Tabelle automatisch eine eigene Page.
- Nicht physisch auf dem Workspace — virtuell gerendert bei Navigation
- Im Navigator als eingeklappte Gruppe (z.B. "Report Template × 47")
- Deep Link: `canvas.app/p/[id]/f/[frameId]?row=[rowId]`
- Automatische Ordner-Zuweisung mit Conditions:
  ```
  Wenn [usertyp] = "geschäftlich" → Ordner A
  Wenn [usertyp] = "privat" → Ordner B
  ```

### Navigation
Navigation ist eine **Action** — kein visuelles Pfeile-Ziehen:
```
Bei Klick → Navigiere zu [Frame / Template]
             Mit Row: [aktueller Row / spezifischer / aus Feld]
             Transition: [Slide Left / Slide Right / Fade / None]
```

**Cmd+K Command Palette** — Hauptnavigation. Frames, Rows, Aktionen, Settings — alles per Tastatur erreichbar.

### Navigator (linke Sidebar)
Zwei Tabs:
- **Pages:** Alle Frames. Template-Frames als eingeklappte Gruppe. Für alle Modi sichtbar.
- **Components:** Block-Pool des Builders. Nur im Builder Mode sichtbar.

---

## 9. Element-System

### Das Kernprinzip
Jedes Element ist in sich wieder eine vollständige Canvas. Kinder-Elemente sind vollständig bindbar, stylebar, animierbar, permissions-gesteuert. Die Tiefe ist unbegrenzt.

Ein Frame kann Tabs enthalten. Jeder Tab eine Liste. Jede Listen-Card einen Progress Ring und einen Badge. Jeder dieser Teile reagiert auf eigene Daten.

### Toolbar-Shortcuts (Illustrator-Logik)
```
V — Select (Standard)
T — Text
M — Shapes (Click-Hold → Flyout: Rectangle, Circle, Triangle, Polygon, Stern, Linie, Pfeil)
    Letzte verwendete Form bleibt aktiv beim nächsten M-Druck
P — Pen Tool (Bézierkurven, Ankerpunkte, Handles — exakt wie Illustrator)
B — Brush Tool (Freihand, organisch, Druck-Simulation — exakt wie Illustrator Pinsel)
    WICHTIG: Pen und Brush sind zwei komplett verschiedene Tools
F — Frame / Container
I — Image
```

### Bounding Box — Qualitätsanspruch
Die Bounding Box muss sich anfühlen wie **Figma** — nicht wie PowerPoint.
- Kleine, präzise Handles (8px, nicht 16px)
- Rotation Handle: leicht versetzt oben, Rotation-Cursor
- Proportional mit Shift
- Multi-Select: gestrichelter Rahmen
- Hover-Highlight: zeigt "das ist klickbar" bevor man klickt
- Keine grossen blauen Microsoft-Office-Handles

### Z-Index, Visibility, Lock
**Kein separates Layers Panel.** Alles im Property Panel:
- Z-Index: Pfeil hoch/runter im Panel
- Sichtbarkeit: Toggle im Panel
- Lock: Toggle im Panel

Shortcuts:
```
Cmd+]        → eine Ebene nach vorne
Cmd+[        → eine Ebene nach hinten
Cmd+Shift+]  → ganz nach vorne
Cmd+Shift+[  → ganz nach hinten
Cmd+Shift+H  → verstecken/zeigen
Cmd+Shift+L  → sperren/entsperren
```

### Globales Rendering-Fundament
Jedes Element (ohne Ausnahme) unterstützt:

**Fill-Typen:** Solid Color, Linear Gradient, Radial Gradient, Conic Gradient, Mesh Gradient, Image Fill, Animated Gradient, Transparent

**Stroke/Border:** Solid/Gradient/Image, Breite pro Seite individuell, Style (solid/dashed/dotted/double), Position (inside/center/outside)

**Effekte (stackbar):** Drop Shadow, Inner Shadow, Outer Glow, Inner Glow, Gaussian Blur, Motion Blur, Backdrop Blur (Glas-Effekt), Color Overlay, Noise/Grain

**Blend Modes:** Normal, Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color, Luminosity

**Transform:** Position, Grösse (mit Constraint-Lock), Rotation, Scale (X/Y separat), Skew, Flip (H/V), Transform Origin

**Outside Frame:** Elemente können ausserhalb des Frame-Boundaries platziert werden — für Animations-Start, angeschnittene Formen, dekorative Überlappungen.

---

## 10. Data Binding

### Tabellen als Canvas-Blocks
Tabellen sind Blocks auf der **Builder-Canvas** — sichtbar, direkt editierbar, neben den Blocks die sie visualisieren. Im Nutzer/Portal-Mode automatisch unsichtbar.

### Binding funktioniert so
Nur im Property Panel, Data-Tab:
1. "Verbinde mit Daten" Toggle aktivieren
2. Tabelle wählen (zeigt alle Tabellen-Blocks auf der aktuellen Canvas)
3. Spalte wählen
4. Row-Kontext: Erster Row / Row aus URL Parameter / Row aus Parent

**Kein visuelles Ziehen.** Keine Verbindungslinien auf der Canvas. Clean.

`{{feldname}}` in Text-Feldern tippbar (Autocomplete zeigt verfügbare Felder).

### Was bindbar ist
Nicht nur Text — ALLES:
- Text-Inhalt
- Farbe (Background, Text, Border)
- Sichtbarkeit
- Grösse / Breite
- Opacity
- Icon (verschiedene Icons je nach Feld-Wert)
- Animation-Trigger

### Conditional Styling
```
Wenn [Feld] [Operator] [Wert] → [Eigenschaft] = [Wert]
Beispiel: wenn status = "kritisch" → background = #E5484D
```
Mehrere Regeln möglich. Priorität = Reihenfolge.

### Reverse Data Binding
Canvas schreibt zurück in DB: Inline-Edit in Tabellen, Kanban-Drag updated Status, Inputs speichern in Felder, Buttons triggern Row-Aktionen.

---

## 11. Formel-System

`=` in jedes Textfeld → Formel-Modus.

**Kein Blocking bei Conversion-Fehlern.** Wenn ein Feld Text enthält wo eine Zahl erwartet wird → Fallback auf 0 oder leer. Nur echte Syntax-Fehler (falsche Klammer) bekommen einen diskreten Hinweis.

Verfügbare Funktionen (vollständig):
```
Aggregation: SUM, AVG, COUNT, COUNTA, COUNTIF, MIN, MAX, MEDIAN, MODE, 
             STDEV, VARIANCE, PERCENTILE, FIRST, LAST, UNIQUE

Logik: IF, IFS, SWITCH, AND, OR, NOT, XOR, IFERROR, ISBLANK, 
       ISNUMBER, ISTEXT, ISDATE, COALESCE

Text: CONCAT, UPPER, LOWER, TRIM, REPLACE, SUBSTITUTE, LEN, LEFT, RIGHT,
      MID, CONTAINS, STARTS_WITH, ENDS_WITH, SPLIT, JOIN, REPEAT,
      PADDING, REGEX_MATCH, REGEX_EXTRACT, SLUG, ENCODE_URL

Zahlen: ROUND, ROUNDUP, ROUNDDOWN, FLOOR, CEILING, ABS, POWER, SQRT,
        MOD, LOG, EXP, RAND, RANDBETWEEN, CLAMP, LERP, PERCENTAGE

Datum: NOW, TODAY, YEAR, MONTH, DAY, HOUR, MINUTE, WEEKDAY, WEEKNUM,
       DAYS_BETWEEN, MONTHS_BETWEEN, YEARS_BETWEEN, ADD_DAYS, ADD_MONTHS,
       ADD_YEARS, FORMAT_DATE, IS_WEEKEND, START_OF_MONTH, END_OF_MONTH

Lookup: FIND, FILTER, VLOOKUP, XLOOKUP, RELATED, ROLLUP, ARRAYFORMULA

Farbe: DARKEN, LIGHTEN, MIX, RGBA, HEX_TO_RGB, CONTRAST_COLOR

Spezial: GEOCODE, CURRENCY_CONVERT, QR_CODE, BARCODE, INITIALS,
         AVATAR_URL, HASH, UUID
```

---

## 12. Bekannte offene Meilensteine

Diese Punkte sind noch nicht entschieden. **Fang keine Phase an die davon abhängt, ohne zuerst mit Nico zu besprechen.**

### M1 — Builder ↔ Workspace/Portal-User (vor Phase 4)
- Wie genau gibt der Builder einem User Zugang?
- Was sind die genauen Grenzen zwischen Builder Mode und Workspace Mode?
- Was bedeutet "abgespeckte Blocks" für Workspace-User?
- Wie werden Permissions vererbt?

### M2 — Blocks im Detail (vor Phase 4)
- Welche Blocks sind in V1 zwingend?
- Welche Blocks sind nice-to-have?
- Gibt es Blocks die nur im Builder Mode verfügbar sind?

### M3 — Workspace-User Block-Freiheit (vor Phase 7)
- Kann ein Workspace-User eigene Tabellen erstellen?
- Kann er Formeln schreiben oder nur filtern/sortieren?
- Wie tief geht die Anpassung?

### M4 — Monetarisierung (vor Phase 16)
- Erster Zielmarkt konkret
- Pricing final
- Beta-User Liste

---

## 13. Aktueller Build-Status

**Phase:** 0 — Setup
**Nächste Task:** P0-T2
**Abgeschlossen:** P0-T1 ✅ (Node v24.10.0, npm 11.6.1, Cursor, GitHub, Windows)

Detaillierte Tasks: `docs/CANVAS-TASKS-P0-P1.md`
Vollständiger Build Plan: `docs/CANVAS-BUILD-PLAN.md`
Vollständige Feature Bible: `docs/CANVAS-FEATURE-BIBLE.md`

---

## 14. Wie du als Claude Code arbeitest

### Vor jeder Task
1. Lies dieses File (CLAUDE.md) vollständig
2. Lies `docs/CANVAS-BUILD-PLAN.md` — check aktuellen Status
3. Lies die detaillierte Task-Beschreibung (in `docs/CANVAS-TASKS-P0-P1.md` oder im Build Plan)
4. Wenn etwas unklar ist: **frag Nico BEVOR du anfängst**

### Während der Task
- Mach NUR was in der Task steht — keine extra Features
- Keine Annahmen über Design — wenn nicht in CLAUDE.md oder Task definiert: frag
- "CANVAS sagt nie nein" — kein Blocking, kein Validation-Error
- Tailwind first — custom CSS nur wenn wirklich nötig
- TypeScript strict — kein `any` ohne Kommentar
- Max 300 Zeilen pro Datei

### Nach der Task
1. Liste welche Dateien erstellt/geändert wurden
2. Sag Nico genau was er im Browser testen soll
3. Update `docs/CANVAS-BUILD-PLAN.md`: Task → ✅, Session Log ergänzen
4. Führe aus:
```bash
git add .
git commit -m "[Task-ID]: [kurze Beschreibung]"
git push
```

### Wenn Nico nicht happy ist
Er sagt direkt was nicht stimmt. Akzeptiere es ohne Diskussion. Frag "wie soll es stattdessen sein?" — dann korrigieren.

---

*Letzte Aktualisierung: April 2026*
*Nächster Chat mit Nico: P0-T2 ausführen*

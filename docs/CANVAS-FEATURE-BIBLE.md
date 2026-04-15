# CANVAS — Feature Bible
### Die vollständige Produkt-Referenz

> "Webflow's Power. Notion's Simplicity. Mit lebenden Daten."

---

## 1. Die Idee

Ein Workspace-Tool in dem alles auf einer freien Canvas lebt — Tabellen, Charts, Listen, Formulare, Shapes, alles. Nichts ist in ein starres Format gezwungen. Daten sind geteilt, das Layout ist deins.

Das Resultat wenn Figma, Coda und Notion ein Kind hätten — aber besser als alle drei zusammen, weil es die Grenzen zwischen Design, Daten und Interaktion auflöst.

---

## 2. Das Problem

| Tool | Was es gut macht | Was fehlt |
|---|---|---|
| Coda / Notion | Formeln, Datenbank, Docs | Kein Canvas, linear, kein Design |
| Monday / Asana | Boards, Workflows | Kein Design, kein freies Layout |
| Figma / Canva | Freies Design | Keine Daten, alles statisch |
| Retool / Appsmith | Data Binding, App Builder | Hässlich, Developer-first |
| Power BI / Metabase | Charts, Daten-Visualisierung | Kein Design, kein freier Text |
| Webflow | Website Builder, Design-Freiheit | Keine interne DB, komplexe Bedienung |
| Glide / Softr | Frontend über Daten | Limitiertes Design, Template-basiert |

**Die Lücke:** Niemand kombiniert freie visuelle Platzierung mit live Daten, persönlichem Layout und einfacher Bedienung. CANVAS schliesst diese Lücke.

---

## 3. Kern-Philosophie

### "Webflow's Power. Notion's Simplicity. Mit lebenden Daten."

CANVAS denkt wie ein **Design-Tool das Daten versteht** — nicht wie ein Entwickler-Tool das Designer bedienen können.

### Die unveränderlichen Prinzipien

**1. CANVAS sagt nie nein**
Kein Feld blockiert eine Eingabe. Kein Format wird erzwungen. Kein Conversion-Error. Nur bei echter Syntax-Fehlern (falsche Formel-Klammer etc.) ein diskreter Hinweis — kein Blocking. Der User ist intelligent. Er sieht selbst wenn etwas nicht stimmt.

**2. Alles kann alles callen**
Animationen, Texte, Styles, Navigation, Formeln — alles kann von allem ausgelöst werden. Keine künstlichen Grenzen zwischen Element-Typen.

**3. Progressive Disclosure**
Simple by default. Mächtig wenn du es brauchst. Niemand wird von Optionen überwältigt die er gerade nicht braucht.

**4. Die Daten sind geteilt, das Layout ist deins**
Alle Mitarbeiter sehen dieselben Daten — jeder in seiner eigenen Ansicht.

**5. Instant Feedback**
Jede Änderung sofort sichtbar. Kein Preview-Button. Kein Publish-Cycle.

**6. Handles not Properties**
So viel wie möglich direkt auf der Canvas — das Panel ist für Präzision, die Canvas für Intuition.

---

## 4. Die drei Modi

### 4.1 Builder Mode
Der Builder richtet das System ein. Er definiert Tabellen, Blocks, Logik, Formeln, Automationen.

Tabellen liegen **sichtbar auf der Builder-Canvas** — direkt neben den Blocks die sie visualisieren. Der Builder sieht sofort wie Daten und Darstellung zusammenhängen.

Er hat volle Canvas-Power: alle Elements, alle Styles, alle Bindings, alle Effekte.

Er definiert einen **Block-Pool** — alle Blocks die Workspace-Usern zur Verfügung stehen.

### 4.2 Workspace Mode
Für interne Mitarbeiter. Jeder richtet seinen eigenen Workspace ein.

- Zieht sich Blocks aus dem Block-Pool auf seine persönliche Canvas
- Platziert sie frei wo er will
- Filtert, sortiert, gruppiert nach seinen Bedürfnissen
- Kann eigene Blocks hinzufügen — abgespeckt *(Details: siehe Meilenstein M1)*
- Speichert sein Layout — gehört nur ihm

Die Rohdaten-Tabellen des Builders sind für Workspace-User **unsichtbar**. Sie sehen nur die Blocks — die Darstellungen. Die Daten laufen still im Hintergrund.

### 4.3 Portal Mode
Für externe Empfänger (Kunden, Partner).

- Builder baut fertige Canvas, aktiviert Portal Mode → locked
- Empfänger öffnet Link ohne Login
- Sieht genau was der Builder ihm zeigen will
- Kann interagieren (Formulare, Buttons, Kommentare) aber nichts umbauen

**Template-Portale:** Ein Report-Frame einmal bauen → CANVAS generiert automatisch für jeden Kunden seinen eigenen Frame mit seinen Daten. Virtuell gerendert, nicht physisch auf dem Workspace.

---

## 5. Workspace-Architektur

### 5.1 Zwei Ebenen

**Der Workspace** ist eine unendliche Canvas — der Meta-Raum. Nur für den Builder sichtbar. Alle Frames liegen hier nebeneinander wie Artboards in Figma.

**Frames** sind die Pages. Fix in der Breite, dynamisch in der Höhe. User sieht immer nur einen Frame — navigiert zwischen ihnen via Transitions.

```
WORKSPACE (unendlich — nur Builder sieht das)
  ├── Frame "Dashboard"           → Page 1
  ├── Frame "Kunden-Liste"        → Page 2
  ├── [⬡] Report Template        → dynamisch × N Instanzen
  └── Frame "Einstellungen"       → Page 3
```

### 5.2 Frame-Dimensionen

**Breite:** Fix, responsive via Breakpoints
```
Desktop:  1440px  → 24 Spalten
Tablet:   768px   → 12 Spalten
Mobile:   390px   → 6 Spalten
```

**Höhe:** Dynamisch — wächst mit Inhalt. Fixe Elemente (Header, Nav) bleiben sticky.

**Base Unit:** 8px — alles snappt auf 8px vertikal.

### 5.3 Frame-Typen

| Typ | Breite | Use Case |
|---|---|---|
| Dashboard | 1440px | KPI-Übersichten, Ops-Center |
| Dokument | A4 / A3 | Offerten, Rechnungen, Reports |
| Präsentation | 1920×1080 | Pitches, Briefings |
| Mobile | 390px | Client-Apps, Portale |
| Custom | Frei | Alles andere |

### 5.4 Template-Frames

Frames können als "Dynamic Template" markiert werden — CANVAS generiert für jeden Row in einer Tabelle automatisch eine eigene Page mit dessen Daten.

- Erscheinen im Navigator als eingeklappte Gruppe (nicht einzeln auf dem Workspace)
- Werden virtuell gerendert wenn jemand navigiert
- Deep Link: `canvas.app/p/[projectId]/f/[frameId]?row=[rowId]`
- Automatische Ordner-Zuweisung mit Conditions:
```
Wenn [usertyp] = "geschäftlich" → Ordner A
Wenn [usertyp] = "privat"       → Ordner B
Sonst                           → Ordner "Unsortiert"
```

### 5.5 Navigation

Navigation ist eine **Action** — kein visuelles Pfeile-Ziehen:
```
Bei Klick → Navigiere zu [Frame / Template]
             Mit Row: [aktueller Row / spezifischer Row / aus Feld]
             Transition: [Slide Left / Slide Right / Fade / None]
```

**Cmd+K Command Palette** — Hauptnavigation:
- Direkt zu Frames springen
- Rows suchen und öffnen
- Aktionen ausführen
- Settings öffnen
- Alles per Tastatur erreichbar

**Pfeiltasten** nur im expliziten Präsentations-Modus (Fullscreen).

**Morph Transition** — nice to have, kommt nach V1.

### 5.6 Navigator (linke Sidebar)

Zwei Tabs:

**Pages Tab** — für alle sichtbar. Zeigt alle Frames. Template-Frames als eingeklappte Gruppe.

**Components Tab** — nur im Builder Mode. Zeigt alle Blocks im Block-Pool.

---

## 6. Element-System

### 6.1 Das Prinzip: Infinitely Nested

Jedes Element ist in sich wieder eine vollständige Canvas. Kinder sind vollständig bindbar, stylebar, animierbar, permissions-gesteuert. Die Tiefe ist unbegrenzt.

### 6.2 Globales Rendering-Fundament
*(gilt für jeden Element-Typ als Basis)*

**Fill**
Solid Color (RGBA/HEX/HSL), Linear Gradient (Winkel, beliebig viele Stops), Radial Gradient, Conic Gradient, Mesh Gradient (freie Kontrollpunkte), Image Fill (Object Fit/Position/Scale), Animated Gradient, Transparent

**Stroke / Border**
Solid/Gradient/Image, Breite pro Seite individuell, Style (solid/dashed/dotted/double), Position (inside/center/outside), Dash-Pattern frei, Endpunkte (butt/round/square), Joins (miter/round/bevel)

**Effekte** *(stackbar — mehrere gleichzeitig)*
Drop Shadow (X/Y/Blur/Spread/Color/Opacity/Blend Mode), Inner Shadow, Outer Glow, Inner Glow, Gaussian Blur, Motion Blur, Radial Blur, Backdrop Blur (Glas-Effekt), Color Overlay, Noise/Grain

**Blend Mode**
Normal, Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color, Luminosity

**Transform**
Position (X/Y), Grösse (W/H mit Constraint-Lock), Rotation (Grad, 15°-Snapping optional), Scale (X/Y separat), Skew (X/Y), Flip (H/V), Transform Origin (Ankerpunkt frei)

**Outside Frame**
Elemente können ausserhalb des Frame-Boundaries platziert werden — für Animations-Start, angeschnittene Formen, dekorative Überlappungen.

### 6.3 Base Properties

Jedes Element hat immer: Position (X/Y), Grösse (W/H), Rotation, Opacity, Z-Index, Lock, Visible/Hidden, Animation-Tab, Permissions-Tab.

**Z-Index, Visibility, Lock** leben im Property Panel (kein separates Layers Panel):
- Cmd+] / Cmd+[ = eine Ebene vor/zurück
- Cmd+Shift+] / Cmd+Shift+[ = ganz vorne/hinten
- Cmd+Shift+H = verstecken/zeigen
- Cmd+Shift+L = sperren/entsperren

---

### 6.4 TEXT

**Content**
Statischer Text, `=` Formel-Modus, `{{feldname}}` Inline-Binding, `@feldname` Schnell-Referenz, Rich Inline (Bold/Italic/Underline/Strike), Links inline

**Typography**
Font Family (Google Fonts/Adobe Fonts/Custom), Size (px/rem/fluid), Weight (100-900), Style, Line Height, Letter Spacing, Word Spacing, Transform (UPPER/lower/Capitalize), Decoration, Text Indent, Overflow (clip/ellipsis/auto-resize), Columns, Writing Mode, Direction (LTR/RTL)

**Text Fill**
Solid Color, Gradient geclippt auf Text, Image Clip (Bild durch Textform), Animated Gradient auf Text

**Text Stroke + Shadow** *(stackbar)*

**Conditional**
Text-Inhalt, Farbe und Sichtbarkeit basierend auf Bedingung

---

### 6.5 SHAPE
Rechteck, Kreis, Dreieck, Linie, Pfeil, Polygon (3-20 Seiten), Stern, freier Pfad

**Shortcuts:** M = Shapes, Click-Hold → Flyout mit allen Formen. Zuletzt verwendete Form bleibt aktiv.

**Pen Tool (P)** — Bézierkurven, Ankerpunkte setzen, Handles ziehen, nachträglich editierbar. Exakt wie Illustrator Pen Tool.

**Brush Tool (B)** — Freihand zeichnen, organisch, Druck-Simulation (variable Dicke), wird zu glattem Pfad. Exakt wie Illustrator Pinsel.

**Bool'sche Operationen** *(zwischen mehreren Shapes)*
Unite, Subtract, Intersect, Exclude, Flatten

---

### 6.6 BILD / MEDIA

Quelle: Upload (JPEG/PNG/WebP/GIF/SVG/AVIF), URL, DB-Feld, Unsplash, AI-generiert

Object Fit, Filter (Blur/Brightness/Contrast/Saturate/Grayscale/Sepia), Overlay, Masking (Rechteck/Kreis/Custom/Text-Maske)

Interaktion: Klick → Lightbox / URL / Frame-Navigation / Action, Hover → Bild wechseln

---

### 6.7 FRAME / CONTAINER

W: fix/relativ/fill/hug. H: fix/relativ/fill/hug. Aspect Ratio Lock.

Background (alle Fill-Typen), Border, Radius, Shadow, Backdrop Filter (Glas-Effekt), Clip Content, Overflow (Hidden/Scroll/Visible/Auto)

Layout der Kinder: Frei (absolute Positionierung), Auto-Layout H/V/Wrap, Grid

Sticky (für Header/Navigation)

---

### 6.8 CHART
Bar, Line, Area, Pie, Donut, Scatter, Bubble, Gauge, Sparkline, Heatmap, Funnel, Radar

Daten: Tabelle, X/Y-Spalten, mehrere Serien, zweite Y-Achse, Filter, Sortierung, Limit, Gruppierung, Live-Update

Styling: Farb-Schema, Achsen, Legend, Tooltip, Labels, Animated Einblenden

Interaktion: Cross-Filtering, Drill-Down (Frame-Navigation mit gefiltertem Kontext)

---

### 6.9 TABELLE / DATA GRID

Daten: Tabelle, Spalten (Reihenfolge), Filter (AND/OR), Sortierung (mehrere Ebenen), Gruppierung, Frozen Columns, Pagination vs. Infinite Scroll

Pro Spalte: Label, Breite, Format, Render als (Text/Badge/Progress/Avatar/Icon/Button/Custom)

Styling: Row Height, Header, Alternating Colors, Conditional Row Styling

Interaktion: Inline Edit, Bulk Actions, Export CSV

---

### 6.10 CUSTOM LIST VIEW — "Design your Data"

**Card Designer** — Mini-Canvas öffnet sich. Du designst einen Row. Alle Elemente verfügbar. `{{feldname}}` bindet Felder ein. Jedes Element vollständig bindbar + stylebar. CANVAS wiederholt Design für jeden Row.

**Conditional Card Variants** — Mehrere Designs, CANVAS wählt automatisch.

**Layout:** Vertical List, Grid (2-5 Spalten), Masonry, Horizontal Scroll, Carousel

**Klick:** Modal / Dynamic Frame Template / Action / keine

---

### 6.11 KANBAN

Spalten = Select-Feld, Swimlanes = zweites Feld, WIP Limits

Card Designer (Mini-Canvas wie List View)

Drag & Drop → updated DB sofort, Quick Edit on Hover, Bulk Actions, Aggregation pro Spalte

---

### 6.12 KALENDER

Views: Month / Week / Day / Agenda

Multi-Layer (mehrere Tabellen gleichzeitig)

Drag Event → updated Datum, Resize Event → updated End-Datum

---

### 6.13 TIMELINE / GANTT

Start + End Datum, Gruppierung, Dependencies (Pfeil), % Complete

Drag Balken / Resize → updated Datum

Zoom: Stunde / Tag / Woche / Monat / Quartal / Jahr

---

### 6.14 MAP VIEW

Geocoding (Adress-Feld) oder Lat/Lng-Felder

Cluster, Heatmap, Custom Tile-Layer

Klick Pin → Popup (Mini-Canvas) oder Frame

Bounds-Change → filtert verbundene Blocks

---

### 6.15 WEITERE BLOCK-TYPEN

Timeline Linear, Network/Relation Map, Pivot Table, Button, Form System, Stat Card/KPI, Progress Bar/Ring, Gallery View, Avatar, Badge, Divider, Icon, Tooltip, Accordion, Tabs, Modal, Notification/Alert, Stepper, Data Ticker, Search Bar, Filter Bar, Comment Thread, Rich Text Editor, Video Player, Audio Player, Document Viewer, QR Code, Barcode, Signature Pad, Split View, Chat/Message Feed, Weather Widget, Clock/Timer/Countdown, Code Block, Formula Block, Graph Plotter, Statistics Block, World Map, Terminal/Log Viewer, Celebration/Confetti, Glassmorphism Card, Lottie Player, Scroll Progress, Floating Action Button, Skeleton Loader

*(Vollständige Einstellungen pro Block: siehe separates Components-Dokument)*

---

## 7. Data Binding System

### 7.1 Tabellen auf der Builder-Canvas

Tabellen sind Blocks — sie liegen sichtbar auf der Builder-Canvas, direkt neben den Blocks die sie visualisieren. Im Nutzer/Portal-Mode automatisch unsichtbar.

### 7.2 Binding

Nur im Property Panel, Data-Tab:
- Tabelle wählen (Dropdown)
- Spalte wählen (Dropdown)
- Row-Kontext: Erster Row / Row aus URL Parameter / Row aus Parent

`{{feldname}}` in Text-Feldern tippbar (Autocomplete zeigt verfügbare Felder der Canvas-Tabellen)

### 7.3 Was bindbar ist

| Eigenschaft | Beispiel |
|---|---|
| Text-Inhalt | Wert aus DB-Feld |
| Farbe | Status → grün/gelb/rot |
| Sichtbarkeit | Zeige nur wenn Bedingung |
| Grösse / Breite | Proportional zu Zahl |
| Opacity | Dimmen wenn inaktiv |
| Icon | Verschiedene Icons je Kategorie |
| Animation | Trigger basierend auf Daten |

### 7.4 Conditional Styling
```
Wenn [Feld] [Operator] [Wert] → [Eigenschaft] = [Wert]
```
Operatoren: ist gleich / nicht gleich / enthält / grösser als / kleiner als / ist leer / ist nicht leer

### 7.5 Conditional Visibility
```
Zeige Element nur wenn [Bedingung]
```
Im Builder: Element mit niedrigerer Opacity sichtbar. Im Nutzer-Modus: vollständig unsichtbar.

### 7.6 Reverse Data Binding
Canvas schreibt zurück: Inline-Edit, Kanban-Drag, Inputs, Buttons, Slider.

---

## 8. Formel-System

`=` in jedes Textfeld → Formel-Modus. Kein Blocking, kein Conversion-Error — stilles Fallback bei ungültigen Werten.

**Text:** CONCAT, UPPER, LOWER, TRIM, REPLACE, SUBSTITUTE, LEN, LEFT, RIGHT, MID, CONTAINS, STARTS_WITH, ENDS_WITH, SPLIT, JOIN, REPEAT, PADDING, REGEX_MATCH, REGEX_EXTRACT, SLUG, ENCODE_URL

**Zahlen:** ROUND, ROUNDUP, ROUNDDOWN, FLOOR, CEILING, ABS, POWER, SQRT, MOD, LOG, EXP, RAND, RANDBETWEEN, CLAMP, LERP, PERCENTAGE

**Datum:** NOW, TODAY, YEAR, MONTH, DAY, HOUR, MINUTE, WEEKDAY, WEEKNUM, DAYS_BETWEEN, MONTHS_BETWEEN, YEARS_BETWEEN, ADD_DAYS, ADD_MONTHS, ADD_YEARS, FORMAT_DATE, IS_WEEKEND, START_OF_MONTH, END_OF_MONTH

**Logik:** IF, IFS, SWITCH, AND, OR, NOT, XOR, IFERROR, ISBLANK, ISNUMBER, ISTEXT, ISDATE, COALESCE

**Aggregation:** SUM, AVG, COUNT, COUNTA, COUNTIF, MIN, MAX, MEDIAN, MODE, STDEV, VARIANCE, PERCENTILE, FIRST, LAST, UNIQUE

**Lookup:** FIND, FILTER, VLOOKUP, XLOOKUP, RELATED, ROLLUP, ARRAYFORMULA

**Farbe:** DARKEN, LIGHTEN, MIX, RGBA, HEX_TO_RGB, CONTRAST_COLOR

**Spezial:** GEOCODE, CURRENCY_CONVERT, QR_CODE, BARCODE, INITIALS, AVATAR_URL, HASH, UUID

---

## 9. Animation System

*(kommt in Phase 6 — nach den Core-Blocks)*

**Trigger:** On Load, On Scroll, On Click/Hover/Focus, On Data Change, On Condition

**Types:** Entrance (Fade/Slide/Scale/Bounce/Flip), Exit, Loop (Pulse/Spin/Float/Shake), Value Transition (Count-Up/Farb-Morph)

**Timing:** Duration, Delay, Easing (linear/spring/bounce/elastic), Repeat, Stagger

**Data-driven:** KPI über Ziel → grün + Pulse. Unter Ziel → rot + Shake.

---

## 10. Permissions & Rollen

| Rolle | Kann |
|---|---|
| Owner | Alles — Billing, Rollen, löschen |
| Admin | Projekte, User, alle Canvas |
| Editor (Builder) | Zugewiesene Canvas im Builder Mode |
| Workspace-User | Eigenes Layout einrichten, Daten interagieren |
| Portal-User | Nur interagieren (Formulare, Buttons) |
| Guest | Einmal via Link, kein Account |

Element-Level Permissions: Sichtbarkeit pro Rolle, Row-Level Security ohne SQL konfigurierbar.

---

## 11. Sharing & Publishing

**Canvas as a URL:** Live, Realtime, ohne Login für Viewer.

**Export:** Shareable Link, PDF Export, iFrame Embed, Static Website

**Paste Anything:** Excel → lebendige Tabelle, URL → erkennt YouTube/Maps → einbetten, Screenshot → Bild

---

## 12. Datenbank

**Felder:** Text, Zahl, Datum, Select, Multi-Select, Checkbox, URL, Email, Phone, Relation, Formel, Lookup, Attachment, Created/Modified

**Import/Export:** CSV, Copy-Paste aus Excel

**Externe Quellen:** REST API, Webhooks, Supabase/Postgres, Google Sheets Sync

---

## 13. Automationen

**Trigger:** Button, Row erstellt/geändert/gelöscht, Datum, Webhook, Formular

**Actions:** Row CRUD, E-Mail, Webhook (→ n8n/Make/Zapier), PDF + senden, Notification, Warten X Tage, Bedingung (IF-Branch)

---

## 14. AI-Assistent

**Canvas-Generierung:** "Baue mir ein Dashboard" → AI platziert Blocks, bindet Daten, layoutet

**Design-Assist:** "Mach das schöner" → AI passt Farben/Abstände/Typografie an

**Formel-Assistent:** Natürlichsprachliche Beschreibung → AI schreibt Formel

**Proaktiver Co-Pilot:** Beobachtet Daten, meldet Anomalien, schlägt Aktionen vor

---

## 15. UX Philosophy

**Blank Canvas Fear eliminieren:**
```
"Was willst du bauen?"
[ Dashboard ]  [ Client Portal ]  [ Dokument ]  [ Formular ]  [ Leer ]
```

**Simple Mode vs. Pro Mode:** Toggle — kein Neustart. Simple: reduziertes Panel, Templates prominent. Pro: alles sichtbar.

**Fehler-Toleranz:** Kein Element kann "kaputt" gehen. Fehlende Daten → Platzhalter. Falsche Formel → diskreter Hinweis, kein Blocking.

**Cmd+K Command Palette:** Alles per Suche erreichbar — Frames, Rows, Aktionen, Settings.

---

## 16. Tech Stack

| Layer | Tool |
|---|---|
| Frontend | React + TypeScript |
| Canvas Engine | tldraw v2 |
| State | Zustand |
| Backend | Supabase |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| Charts | Recharts |
| PDF | react-pdf |
| Formulas | HyperFormula |
| Maps | Leaflet + react-leaflet |
| AI | Anthropic Claude API |
| Animations | Framer Motion |
| Rich Text | TipTap |
| Hosting | Vercel + Supabase Cloud |

---

## 17. Pricing

| Plan | Preis | Was |
|---|---|---|
| Free | CHF 0 | 1 Projekt, 3 Tabellen, 100 Rows |
| Pro | CHF 29/Monat | Unlimitiert, PDF Export, Custom Domain |
| Team | CHF 49/User/Monat | Collaboration, Rollen, API Access |
| Agency | CHF 299/Monat | White-Label, unlimitierte Client-Workspaces |

---

## 18. Use Cases

| Use Case | Modus | Zielgruppe |
|---|---|---|
| Internes Ops-Dashboard | Workspace | KMU, Teams |
| Client Portal | Portal | Agenturen, Berater |
| Kunden-Report (dynamisch) | Portal Template | Dienstleister |
| Persönliches CRM | Workspace | Freelancer |
| Offerte / Rechnung | Portal | KMU |
| Team Knowledge Base | Workspace | Teams |
| Wissenschaft / Analyse | Builder | Forschung |

---

*Version 3.0 — April 2026*
*Alle Widersprüche bereinigt. Drei-Modi-Konzept (Builder/Workspace/Portal) als Fundament etabliert.*

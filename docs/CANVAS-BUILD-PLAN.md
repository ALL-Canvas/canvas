# CANVAS — Vollständiger Build Plan
### Von Null bis fertiges SaaS-Produkt

> Dieses Dokument ist der einzige Context den Claude in jedem neuen Chat braucht.
> Zuerst lesen. Dann weisst du alles. Dann bauen.

---

## 0. ROLLEN

**Nico:** Gibt Produktentscheidungen und visuelle Richtung vor. Führt Commands aus, kopiert Code, testet im Browser, meldet zurück.

**Claude:** Schreibt 100% des Codes. Plant Architektur. Erklärt jeden Schritt mit kurzem Warum. Entscheidet bei technischen Fragen selbst und begründet in einem Satz. Stellt maximal eine Frage wenn nötig.

**Das Warum-Prinzip:** Bei jedem Schritt:
> **Warum:** [Grund in Alltagssprache, 1-2 Sätze]

---

## 1. DAS PROJEKT

CANVAS — Workspace-Tool mit drei Modi. Alles lebt auf einer freien Canvas. Daten sind geteilt, das Layout ist deins.

**Drei Modi:**
- **Builder Mode:** Richtet System ein. Tabellen, Blocks, Logik, Formeln. Volle Power.
- **Workspace Mode:** Jeder Mitarbeiter richtet sein eigenes Layout ein. Daten geteilt, Layout individuell.
- **Portal Mode:** Fertige Canvas für externe Empfänger. Locked, via Link, kein Login nötig.

Vollständige Vision: `docs/CANVAS-FEATURE-BIBLE.md`

---

## 2. TECH STACK

| Layer | Tool | Warum |
|---|---|---|
| Frontend | React + TypeScript | Ecosystem, Typsicherheit |
| Canvas Engine | tldraw v2 | Zoom/Pan/Undo/Redo out of the box |
| State | Zustand | Leicht, Canvas-performant |
| Backend | Supabase | Auth + DB + Realtime + Storage |
| Styling | Tailwind CSS | Utility-first, schnell |
| Routing | React Router v6 | Standard |
| Charts | Recharts | React-nativ, flexibel |
| PDF | react-pdf | Browser-basiert |
| Formulas | HyperFormula | Open Source, Excel-kompatibel |
| Maps | Leaflet + react-leaflet | Open Source, kein API-Key |
| AI | Anthropic Claude API | Canvas-Generierung, Formeln |
| Animations | Framer Motion | Produktions-ready |
| Rich Text | TipTap | Headless, flexibel |
| Hosting | Vercel + Supabase Cloud | Zero-Config |
| Repo | GitHub | Versionskontrolle |

**Design:** Komplett offen bis P1-T4 (Design Session).

---

## 3. ARBEITSWEISE

### Jede Session:
1. Build Plan uploaden
2. Task-ID nennen
3. Claude liefert Code + Erklärung
4. Nico führt aus, testet, meldet zurück

### Prompt-Templates:

**Neue Session:**
```
[Build Plan uploaden]
Task: [ID]
[optionaler Context]
```

**Bug:**
```
Task [ID] — Fehler:
[Fehlermeldung]
Erwartet: [...] / Passiert: [...]
```

**Design-Input:**
```
Design Session.
Feeling: [Wörter / Screenshots / Referenzen]
Farben: [Ideen oder "überrasch mich"]
Was nicht: [was du hasst]
```

---

## 4. REPO-STRUKTUR

```
canvas/
├── src/
│   ├── components/
│   │   ├── ui/              # Basis: Button, Input, Badge etc.
│   │   ├── canvas/          # Workspace, Frame
│   │   ├── panels/          # Navigator, PropertyPanel, AIPanel
│   │   └── blocks/          # Alle Block-Typen
│   ├── stores/              # Zustand Stores
│   ├── hooks/               # Custom Hooks
│   ├── lib/                 # Utilities, Constants
│   ├── types/               # TypeScript Types
│   └── pages/               # Route Pages
├── supabase/
│   └── migrations/          # DB Schema SQL
├── docs/
│   ├── CANVAS-FEATURE-BIBLE.md
│   └── CANVAS-BUILD-PLAN.md
└── package.json
```

---

## 5. CODING-REGELN

- TypeScript strict — kein `any` ohne Kommentar
- Max 300 Zeilen pro Datei
- Tailwind first
- Immer vollständige Dateien liefern — kein "füge hier X ein"
- Immer Dateipfad angeben
- Immer Commands die Nico ausführen muss

---

## 6. MEILENSTEINE (Zu klären vor Phase X)

Diese Punkte sind bewusst offen — sie müssen in einer Diskussions-Session geklärt werden BEVOR die jeweilige Phase startet.

---

### 🏁 M1 — Builder ↔ Workspace/Portal-User
**Klären vor:** Phase 4 (Blocks)
**Offene Fragen:**
- Wie genau gibt der Builder einem User Zugang?
- Was sind die genauen Grenzen zwischen Builder Mode und Workspace Mode?
- Was bedeutet "abgespeckte Blocks" für Workspace-User konkret? Welche Features hat ein User-Block vs. ein Builder-Block?
- Wie werden Permissions vererbt? Kann der Builder einzelne Blocks für bestimmte User sperren?
- Wie sieht der Onboarding-Moment für einen neuen Workspace-User aus?

---

### 🏁 M2 — Blocks im Detail
**Klären vor:** Phase 4 (Blocks)
**Offene Fragen:**
- Welche Blocks sind im V1 zwingend nötig?
- Welche Blocks sind nice-to-have für später?
- Gibt es Blocks die nur im Builder Mode verfügbar sind?
- Wie funktioniert der Block-Picker für Workspace-User (abgespeckt)?

---

### 🏁 M3 — Workspace-User Block-Freiheit
**Klären vor:** Phase 5 (Workspace Mode)
**Offene Fragen:**
- Kann ein Workspace-User eigene Tabellen erstellen oder nur bestehende nutzen?
- Kann er Formeln schreiben oder nur filtern/sortieren?
- Kann er Automationen erstellen?
- Wie tief geht die Anpassung — nur Layout oder auch Styling?

---

### 🏁 M4 — Monetarisierung & Go-to-Market
**Klären vor:** Phase 16 (Landing Page)
**Offene Fragen:**
- Erster Zielmarkt konkret (Wyss als internes Tool? Agenturen? KMU?)
- Pricing final entschieden?
- Beta-User Liste (wer sind die ersten 5-10?)

---

## 7. STATUS

**Aktuelle Phase:** 1 — Shell
**Nächste Task:** P1-T3
**Aktiver Meilenstein:** — (noch kein Code)
**Design:** offen
**Bekannte Probleme:** keine

Status-Legende: ⬜ Offen · 🔄 In Arbeit · ✅ Erledigt · ❌ Blockiert

---

## 8. VOLLSTÄNDIGER TASK-PLAN

---

# PHASE 0 — SETUP
**Ziel:** Repo existiert, Dev-Server läuft, leere React-App im Browser sichtbar.

---

### ~~P0-T1 — Tools installieren~~ ✅
**Dauer:** ~20min

**Nico macht:**
1. **Cursor** installieren → cursor.com → Download
   > **Warum:** Code-Editor mit eingebautem AI — dein Cockpit für alles was wir bauen.

2. **Node.js** installieren → nodejs.org → LTS Button
   > **Warum:** Gibt uns `npm` — das Tool das alle Libraries automatisch herunterlädt. Ohne es startet gar nichts.

3. **GitHub Account** → github.com → Sign up (falls nicht vorhanden)
   > **Warum:** Online-Backup + Versionskontrolle. Wenn etwas kaputt geht, gehen wir zurück.

**Testen:**
```bash
node --version    # sollte v20.x.x zeigen
npm --version     # sollte 10.x.x zeigen
```

**Fertig wenn:** Beide Commands zeigen eine Versionsnummer.

---

### ~~P0-T2 — Projekt aufsetzen~~ ✅
**Dauer:** ~30min
**Claude liefert:** Vite + React + TypeScript Setup, alle Dependencies, Tailwind Config, Ordnerstruktur, .env.example
**Nico führt aus:** Terminal Commands, öffnet Cursor

> **Warum Vite:** Schnellster lokaler Dev-Server — Änderungen erscheinen sofort im Browser.

**Fertig wenn:** `npm run dev` → Browser zeigt React-App auf localhost:5173, keine Errors.

*Wird geliefert wenn P0-T1 erledigt.*

---

### P0-T3 — Supabase einrichten ⬜
**Dauer:** ~20min
**Claude liefert:** Schritt-für-Schritt Anleitung + .env Template
**Nico macht:** supabase.com → neues Projekt → Keys in .env eintragen

> **Warum Supabase:** Gibt uns Datenbank + Auth + Realtime + Storage in einem — ohne eigenen Server.

**Fertig wenn:** .env befüllt, `npm run dev` läuft noch.

*Wird geliefert wenn P0-T2 erledigt.*

---

### ~~P0-T4 — GitHub Push~~ ✅
**Dauer:** ~15min
**Claude liefert:** Git Commands
**Nico macht:** Repo auf GitHub erstellen, ersten Push

> **Warum jetzt:** Ab jetzt wird nach jeder Task gepusht — so geht nie etwas verloren.

**Fertig wenn:** Code auf github.com sichtbar.

*Wird geliefert wenn P0-T3 erledigt.*

---

### P0-T5 — Vercel Deploy ⬜
**Dauer:** ~15min
**Claude liefert:** Anleitung
**Nico macht:** vercel.com → GitHub Repo verbinden → Deploy

> **Warum schon jetzt:** Jeder Push deployed automatisch — CANVAS läuft von Anfang an auf einer echten URL.

**Fertig wenn:** CANVAS läuft auf einer vercel.app URL.

*Wird geliefert wenn P0-T4 erledigt.*

---

## ~~P0-T6 — Drei-Agenten-System einrichten~~ ✅
**Dauer:** ~20min

**Was entsteht:** Alle drei Agent-Files sind im Repo. Claude Code ist installiert. Agenten-Workflow ist bereit.

**Agenten-Rollen:**
- Agent 1 (Builder): Schreibt Code, implementiert Tasks
- Agent 2 (Reviewer): Prueft Code akribisch nach jeder Task
- Agent 3 (PM): Prueft Vision + Plan, gibt finales OK an Nico

**Workflow:**
Nico gibt Task-ID
Agent 1 baut + Builder Report
Agent 2 reviewt + Reviewer Report
Agent 3 prueft Vision + PM Report fuer Nico
Nico testet + "passt, push"
Agent 1 pushed

**Nico macht:**
1. Claude Code installieren: npm install -g @anthropic-ai/claude-code
2. Globale CLAUDE.md: Ordner C:\Users\Nicol\.claude\ erstellen, CLAUDE-GLOBAL.md dort als CLAUDE.md ablegen
3. Agent-Files in docs/ kopieren: CLAUDE-AGENT1-BUILDER.md, CLAUDE-AGENT2-REVIEWER.md, CLAUDE-AGENT3-PM.md
4. Reports-Ordner erstellen: mkdir docs\reports (Agent-Reports werden hier gespeichert)

**Fertig wenn:** claude --version zeigt Versionsnummer. Alle drei Files in docs/.

---

# PHASE 1 — SHELL
**Ziel:** App sieht aus wie ein Tool. 3-Spalten-Layout, Canvas sichtbar, Navigation funktioniert. Noch nichts ist funktional — aber es wirkt wie CANVAS.

---

### ~~P1-T1 — App-Layout~~ ✅
**Dauer:** ~45min
**Was entsteht:**
```
┌─────────────────────────────────────────────────┐
│ TopBar: Logo | Projekt-Name | Mode-Switcher     │
├──────────┬──────────────────────────┬────────────┤
│Navigator │      CANVAS/WORKSPACE    │  Property  │
│(240px)   │      (flex-1)            │  Panel     │
│Pages Tab │                          │  (280px)   │
│Comp. Tab │                          │            │
└──────────┴──────────────────────────┴────────────┘
```
**Claude liefert:** AppLayout, TopBar mit Mode-Switcher (Builder/Workspace/Portal), Navigator Shell (zwei Tabs), PropertyPanel Shell, Routing

**Fertig wenn:** Layout sichtbar, Mode-Switcher umschaltbar, keine Errors.

---

### ~~P1-T2 — tldraw Canvas einbinden~~ ✅
**Dauer:** ~45min
**Was entsteht:** Canvas Engine läuft. Zoom/Pan. Erster Frame (weisser Rahmen, 1440px) sichtbar auf grauem Workspace-Hintergrund. Frame-Label (Name) sichtbar.
**Claude liefert:** tldraw Setup, Custom Frame Shape, `useCanvasStore` Basis

> **Warum tldraw:** Zoom, Pan, Undo/Redo, Selection bereits fertig — würde Wochen dauern selbst zu bauen.

**Fertig wenn:** Canvas sichtbar, Zoom/Pan funktioniert, weisser Frame im Zentrum.

---

### P1-T3 — Navigator Component ⬜
**Extra (wichtig — beides muss rein):**
1. Neuer Frame wird automatisch rechts neben letztem Frame positioniert (X = letzter Frame X + Breite + 100px). Nie übereinander.
2. Frame-Snap beim Bewegen: subtiler magnetischer Snap auf andere Frame-Kanten, Frame-Zentren und 8px Grid. Smooth, nicht mechanisch — wie Figma. Man merkt es kaum aber alles landet sauber ausgerichtet.
**Dauer:** ~45min
**Was entsteht:**
- **Pages Tab:** Frame-Liste, aktiver Frame highlighted, Klick → Canvas springt hin, "+" Button → neuer Frame, Doppelklick → umbenennen, Rechtsklick → Kontextmenü (Umbenennen/Duplizieren/Löschen), Drag → Reihenfolge, Ordner-Gruppen, Template-Frames als eingeklappte Gruppe mit Instanz-Anzahl
- **Components Tab:** leer für jetzt (Platzhalter "Block-Pool kommt in Phase 4")
**Claude liefert:** Navigator Component, Frame-CRUD im Store, Ordner-Logik

**Fertig wenn:** Frames erstellen, umbenennen, löschen, umsortieren.

---

### P1-T4 — Design Session ⬜
**Dauer:** ~30min
**Was entsteht:** Vollständiges Design System als Tailwind Config + CSS Variables.
**Nico gibt:** visuellen Input (Feeling, Referenzen, Farb-Richtung)
**Claude liefert:** tailwind.config.ts, globales CSS, angepasste Components

> **Warum jetzt:** Bevor mehr Components gebaut werden muss klar sein wie alles aussieht.

**Fertig wenn:** App sieht aus wie ein echtes Tool.

---

### P1-T5 — Frame-Typen ⬜
**Dauer:** ~30min
**Was entsteht:** Neuer Frame → Auswahl-Modal: Dashboard (1440px) / Dokument (A4) / Präsentation (16:9) / Mobile (390px) / Custom (W+H eingeben). Jeder Frame hat Typ-Label im Builder sichtbar.
**Claude liefert:** Frame-Type Modal, Typ-Konstanten, Label-Rendering

**Fertig wenn:** Verschiedene Frame-Typen erstellbar.

---

### P1-T6 — Property Panel Shell ⬜
**Dauer:** ~30min
**Was entsteht:** Rechte Sidebar. Wenn nichts selektiert: "Wähle ein Element". Tabs: Style | Data | Interaction | Animation — noch alle leer.
**Claude liefert:** PropertyPanel, Tab-Navigation, Empty State

**Fertig wenn:** Panel sichtbar, Tabs umschaltbar.

---

# PHASE 2 — CORE EDITOR
**Ziel:** Elemente platzieren, bewegen, resizen, stylen. Das Herzstück.

---

### P2-T1 — Element Toolbar ⬜
**Dauer:** ~30min
**Was entsteht:** Toolbar mit Tools:
- V = Select
- T = Text
- M = Shapes (Click-Hold → Flyout: Rectangle/Circle/Triangle/Polygon/Stern/Linie/Pfeil. Letzte Form bleibt aktiv.)
- P = Pen Tool
- B = Brush Tool
- F = Frame
- I = Image

Aktives Tool highlighted. Shortcuts aktiv.
**Claude liefert:** Toolbar Component, Tool-State im `useUIStore`

---

### P2-T2 — Text Element ⬜
**Dauer:** ~60min
**Was entsteht:**
- T → Text-Tool aktiv
- Klick auf Canvas → Text-Element ("Text eingeben" Placeholder)
- Doppelklick → Cursor erscheint, inline editierbar
- ESC / Klick ausserhalb → fertig
- Bounding Box: Figma-Qualität (kleine präzise Handles, Rotation Handle, proportional mit Shift, Hover-Highlight vor Klick — nicht PowerPoint-style)
- Text wraps in Box-Breite
- Property Panel: Font Family, Size, Weight, Color, Align (L/C/R/J), Line Height
**Claude liefert:** Custom tldraw TextTool, Inline-Edit, Bounding Box Styling, Text-Tab im Panel

---

### P2-T3 — Shape Elemente ⬜
**Dauer:** ~45min
**Was entsteht:**
- M → Rectangle (Standard)
- Click-Hold M → Flyout mit allen Formen
- Auf Canvas ziehen → Shape in Echtzeit
- Shift+Drag → perfektes Quadrat/Kreis
- Property Panel: Fill Color (Color Picker mit HEX/RGB/Opacity/Eyedropper/Saved Colors), Border (Farbe/Breite/Style), Border Radius (alle 4 Ecken), Shadow
**Claude liefert:** alle Shape Tools, Color Picker Component, Shadow Editor

---

### P2-T4 — Linie + Pfeil ⬜
**Dauer:** ~45min
**Was entsteht:**
- Pfeil: Click+Drag = Startpunkt zu Endpunkt, Loslassen = fertig
- Linie: gleich
- Shift → snapped auf 0°/45°/90°
- Property Panel: Farbe, Breite, Style (solid/dashed/dotted), Arrowhead Start/End (Pfeil/Punkt/Keine + Grösse), Curvature Slider
**Claude liefert:** LineTool, ArrowTool

---

### P2-T5 — Pen Tool (P) ⬜
**Dauer:** ~60min
**Was entsteht:**
- P → Pen aktiv
- Klick = Ankerpunkt, Klick+Drag = Bézierkurve (Handles sichtbar), Doppelklick = Pfad schliessen
- Ankerpunkte nachträglich verschieben, Handles für Kurven-Kontrolle
- Bounding Box wie jedes andere Element
- Property Panel: Farbe, Breite, Opacity, Style
**Claude liefert:** PenTool, Anchor Point Editor, Path Renderer

---

### P2-T6 — Brush Tool (B) ⬜
**Dauer:** ~45min
**Was entsteht:**
- B → Brush aktiv
- Freihand zeichnen — organisch, Druck-Simulation (variable Dicke je nach Geschwindigkeit)
- Loslassen → Pfad wird smooth geglättet, bleibt aber organisch
- Bounding Box
- Property Panel: Farbe, Grösse, Opacity, Textur, Glätten-Stärke
**Claude liefert:** BrushTool, Path Smoother

*Pen und Brush sind zwei komplett verschiedene Tools mit unterschiedlichem Verhalten.*

---

### P2-T7 — Image Element ⬜
**Dauer:** ~45min
**Was entsteht:**
- I → Image-Tool
- Klick/Drag → Placeholder, Panel öffnet Upload-Dialog
- Upload: Datei (drag & drop oder klicken) oder URL
- Bild in Supabase Storage gespeichert
- Property Panel: Object Fit (Cover/Contain/Fill), Border Radius, Opacity, Filter (Blur/Brightness/Grayscale Slider)
**Claude liefert:** ImageTool, Upload Handler (Supabase Storage), Image Filter CSS

---

### P2-T8 — Frame / Container Element ⬜
**Dauer:** ~60min
**Was entsteht:**
- F → Frame-Tool
- Auf Canvas ziehen → Container
- Elemente die in Frame gezogen werden = Kinder (bewegen sich mit Frame)
- Frame im Navigator als verschachtelter Eintrag
- Property Panel: Background (alle Fill-Typen), Border, Radius, Shadow, Clip Content, Auto-Layout (H/V/Frei mit Gap/Padding/Align)
**Claude liefert:** FrameTool, Parent-Child-Logik, Auto-Layout Engine

---

### P2-T9 — Globale Effekte ⬜
**Dauer:** ~60min
**Was entsteht:** Property Panel Style-Tab vollständig für alle Elemente:
- Fill: Solid / Linear Gradient / Radial Gradient / Conic Gradient / Image Fill / Animated Gradient
- Effekte (stackbar): Drop Shadow, Inner Shadow, Outer Glow, Gaussian Blur, Backdrop Blur, Color Overlay, Noise/Grain
- Blend Mode Dropdown
- Opacity Slider
- Gradient Editor (Winkel, Stops, Farben)
**Claude liefert:** Gradient Editor, Effects Stack Component, erweiterter Color Picker

---

### P2-T10 — Text Erweitert ⬜
**Dauer:** ~45min
**Was entsteht:**
- Gradient auf Text (Clip)
- Text Stroke (Farbe/Breite/Position)
- Text Shadow (stackbar)
- Letter Spacing, Word Spacing
- Text Transform (UPPER/lower/Capitalize)
- Overflow: Clip / Ellipsis / Auto-Resize
- Multi-Column Text
**Claude liefert:** erweiterter Text Property Tab, Gradient-on-Text Renderer

---

### P2-T11 — Shapes Erweitert ⬜
**Dauer:** ~45min
**Was entsteht:**
- Polygon: Seiten (3-20) einstellbar im Panel
- Stern: Zacken, Inner/Outer Radius
- Bool'sche Operationen (Unite/Subtract/Intersect/Exclude) — erscheint in Toolbar wenn 2+ Shapes selektiert
- Flip H/V Buttons
- Rotation: Grad-Input Feld
- Transform Origin verschiebbar
**Claude liefert:** PolygonTool, StarTool, Boolean Operations Engine

---

### P2-T12 — Multi-Select + Alignment ⬜
**Dauer:** ~45min
**Was entsteht:**
- Shift+Click → Multi-Select
- Drag-Select (Lasso)
- Alignment-Toolbar wenn mehrere selektiert: Links/Zentriert H/Rechts, Oben/Zentriert V/Unten, Gleiche Breite/Höhe, Verteilen H/V
- Cmd+G → Gruppe (wird zu Frame)
**Claude liefert:** Multi-Select Handler, Alignment Logic

---

### P2-T13 — Keyboard Shortcuts ⬜
**Dauer:** ~30min
**Was entsteht:**
- Alle Tool-Shortcuts (V/T/M/P/B/F/I)
- ESC = Deselect / Tool abbrechen
- Cmd+Z/Shift+Z = Undo/Redo
- Cmd+C/V/X = Copy/Paste/Cut
- Cmd+D = Duplizieren
- Cmd+G = Gruppieren
- Delete = Löschen
- Cmd+A = Alle selektieren
- Space+Drag = Pan
- Z-Index: Cmd+] / Cmd+[ / Cmd+Shift+] / Cmd+Shift+[
- Visibility: Cmd+Shift+H
- Lock: Cmd+Shift+L
- Cmd+K = Command Palette
- ? = Shortcut-Übersicht Modal
**Claude liefert:** Shortcut Map, Shortcut Modal

---

### P2-T14 — Grid + Snap ⬜
**Dauer:** ~45min
**Was entsteht:**
- 8px Grid unsichtbar — Elemente snappen
- Snap-Linien (blau) bei Ausrichtung an anderen Elementen
- Snap to Frame-Edges, Element-Edges, Center
- Toggle in TopBar: Grid an/aus, Snap an/aus
- Cmd+' = Grid Overlay einblenden
- 24-Spalten Overlay optional (für Layout-Arbeit)
**Claude liefert:** Snap Engine, Grid Overlay, Column Overlay, TopBar Toggles

---

### P2-T15 — Command Palette (Cmd+K) ⬜
**Dauer:** ~45min
**Was entsteht:**
- Cmd+K → Suchfeld erscheint mittig über allem
- Suche nach: Frames (navigiert direkt), Blocks (fügt hinzu), Rows aus Tabellen, Aktionen (neuer Frame, neue Tabelle etc.), Settings
- Keyboard navigierbar (Pfeiltasten + Enter)
- Zuletzt verwendet (History)
**Claude liefert:** Command Palette Component, Command Registry

---

# PHASE 3 — DATA LAYER
**Ziel:** Tabellen als Blocks auf Canvas, Data Binding, lebende Daten.**

---

### P3-T1 — Supabase Schema ⬜
**Dauer:** ~30min
**Was entsteht:**
```sql
workspaces (id, name, owner_id, created_at)
projects (id, workspace_id, name, settings, created_at)
frames (id, project_id, name, type, width, order, is_template, folder_id)
elements (id, frame_id, type, props, bindings, position, size, z_index, visible, locked)
canvas_tables (id, project_id, name, created_at)
canvas_columns (id, table_id, name, type, options, order)
canvas_rows (id, table_id, created_at)
canvas_cells (id, row_id, column_id, value)
folders (id, project_id, name, parent_id, order)
share_links (id, project_id, token, permissions, expires_at, password_hash)
```
**Claude liefert:** vollständiges SQL Migration File
**Nico führt aus:** SQL in Supabase Dashboard

**Fertig wenn:** Alle Tabellen in Supabase, keine Fehler.

---

### P3-T2 — Auth Flow ⬜
**Dauer:** ~60min
**Was entsteht:** Login / Register / Magic Link. Session in localStorage. Logout in TopBar. Geschützte Routes.
**Claude liefert:** Auth Pages, Auth Guards, `useAuthStore`

---

### P3-T3 — Dashboard Page ⬜
**Dauer:** ~60min
**Was entsteht:** `/dashboard` — Projekte als Cards, "+ Neues Projekt" Modal, Leer-State. Projekt öffnen → Workspace.
**Claude liefert:** Dashboard Page, Project Card, Project CRUD

---

### P3-T4 — Tabelle als Canvas-Block ⬜
**Dauer:** ~60min
**Was entsteht:** Tabellen sind Blocks auf der Builder-Canvas — sichtbar, editierbar, direkt neben anderen Blocks platzierbar.
- Tabellen-Block auf Canvas platzieren (über Block-Picker oder Toolbar)
- Im Builder: vollständige Tabelle sichtbar (Spalten, Rows, Inline-Edit)
- Spalten-Typen: Text, Zahl, Datum, Select (Optionen definieren), Multi-Select, Checkbox, URL, Email, Relation
- "+ Spalte" / "+ Zeile" direkt im Block
- Im Nutzer/Portal-Mode: Tabellen-Block automatisch unsichtbar
**Claude liefert:** TableBlock Component, Inline Cell Editor, Column Type Editor, Mode-based Visibility

> **Warum auf Canvas:** Builder sieht sofort den Zusammenhang zwischen Daten und Darstellung. Kein Wechsel in ein separates Panel.

---

### P3-T5 — CSV Import ⬜
**Dauer:** ~45min
**Was entsteht:** Im Tabellen-Block: "Import CSV" Button. Preview + Spalten-Mapping + Import.
**Claude liefert:** CSV Parser, Preview, Import Handler

---

### P3-T6 — Data Binding ⬜
**Dauer:** ~60min
**Was entsteht:** Property Panel, Data-Tab:
- "Verbinde mit Daten" Toggle
- Tabelle wählen (zeigt alle Tabellen-Blocks auf der aktuellen Canvas)
- Spalte wählen
- Row-Kontext: Erster Row / Row aus URL Parameter / Row aus Parent
- `{{feldname}}` in Text-Feldern tippbar (Autocomplete)
- Im Builder: Placeholder `{{name}}` sichtbar. Im Nutzer-Modus: echter Wert.
**Claude liefert:** Binding Engine, Data-Tab, `{{}}` Parser

---

### P3-T7 — Conditional Styling ⬜
**Dauer:** ~60min
**Was entsteht:** Style-Tab im Panel: "+ Bedingung":
```
[Feld] [Operator] [Wert] → [Eigenschaft] = [Wert]
```
Operatoren: ist gleich / nicht gleich / enthält / grösser als / kleiner als / ist leer.
Eigenschaften: Background, Text Color, Border Color, Opacity, Visibility.
Mehrere Regeln. Live-Preview.
**Claude liefert:** Condition Engine, Rule Builder UI, Evaluator

---

### P3-T8 — Conditional Visibility ⬜
**Dauer:** ~30min
**Was entsteht:** "Zeige nur wenn..." im Panel. Im Builder: niedrigere Opacity. Im Nutzer-Modus: unsichtbar.
**Claude liefert:** Visibility Condition UI, Evaluator

---

### P3-T9 — Realtime ⬜
**Dauer:** ~30min
**Was entsteht:** Tabellen-Daten ändern → alle verbundenen Blocks auf Canvas updaten sich sofort.
**Claude liefert:** Supabase Realtime Subscriptions, optimistic UI

---

### P3-T10 — Formel-System ⬜
**Dauer:** ~60min
**Was entsteht:** `=` → Formel-Modus. Formel-Editor (Popup, Syntax-Highlighting). Autocomplete für Felder. Kein Blocking bei Conversion-Fehlern — stilles Fallback. Nur Syntax-Fehler: diskreter Hinweis.

Verfügbare Funktionen: SUM, AVG, COUNT, COUNTA, COUNTIF, MIN, MAX, MEDIAN, MODE, STDEV, VARIANCE, PERCENTILE, FIRST, LAST, UNIQUE, IF, IFS, SWITCH, AND, OR, NOT, XOR, IFERROR, ISBLANK, ISNUMBER, ISTEXT, ISDATE, COALESCE, CONCAT, UPPER, LOWER, TRIM, REPLACE, SUBSTITUTE, LEN, LEFT, RIGHT, MID, CONTAINS, STARTS_WITH, ENDS_WITH, SPLIT, JOIN, REPEAT, PADDING, REGEX_MATCH, REGEX_EXTRACT, SLUG, ENCODE_URL, ROUND, ROUNDUP, ROUNDDOWN, FLOOR, CEILING, ABS, POWER, SQRT, MOD, LOG, EXP, RAND, RANDBETWEEN, CLAMP, LERP, PERCENTAGE, NOW, TODAY, YEAR, MONTH, DAY, HOUR, MINUTE, WEEKDAY, WEEKNUM, DAYS_BETWEEN, MONTHS_BETWEEN, YEARS_BETWEEN, ADD_DAYS, ADD_MONTHS, ADD_YEARS, FORMAT_DATE, IS_WEEKEND, START_OF_MONTH, END_OF_MONTH, FIND, FILTER, VLOOKUP, XLOOKUP, RELATED, ROLLUP, ARRAYFORMULA, DARKEN, LIGHTEN, MIX, RGBA, HEX_TO_RGB, CONTRAST_COLOR, GEOCODE, CURRENCY_CONVERT, QR_CODE, BARCODE, INITIALS, AVATAR_URL, HASH, UUID

**Claude liefert:** HyperFormula Integration, Formel-Editor UI, Autocomplete, Fallback-Handler

---

# 🏁 MEILENSTEIN M1 + M2
**Vor Phase 4:** Builder/User-Übergang und Blocks im Detail klären.
Siehe Sektion 6 — Meilensteine.

---

# PHASE 4 — BLOCKS PART 1: ARCHITEKTUR + CORE BLOCKS
**Ziel:** Block-Architektur steht. Die 7 wichtigsten Blocks implementiert.**

---

### P4-T1 — Block-Architektur ⬜
**Dauer:** ~45min
**Was entsteht:**
- Block Base Class (type, props, bindings, size, position)
- Block-Registry
- Block-Picker: "+" Button → Modal mit Block-Kategorien und Suche
- Property Panel Router (erkennt Block-Typ, zeigt richtigen Tab)
- Workspace-User Block-Picker: abgespeckte Version (Details nach M1+M2)
**Claude liefert:** Block System, Registry, Block-Picker UI

---

### P4-T2 — Chart Block ⬜
**Dauer:** ~90min
**Was entsteht:** Bar, Line, Area, Pie, Donut, Scatter, Gauge, Sparkline. Daten aus Canvas-Tabelle. Cross-Filtering. Realtime.
**Claude liefert:** ChartBlock (Recharts), Chart Property Panel, Cross-Filtering System

---

### P4-T3 — Data Grid Block ⬜
**Dauer:** ~60min
**Was entsteht:** Tabellen-Darstellung (nicht Rohdaten — die sind im TableBlock). Formatierung, Spalten-Config, Conditional Row Styling, Inline Edit, Export CSV.
**Claude liefert:** DataGridBlock, Column Config UI

---

### P4-T4 — Custom List View Block ⬜
**Dauer:** ~90min
**Was entsteht:** Card Designer (Mini-Canvas), `{{}}` Binding, Conditional Variants, Layout-Modi (List/Grid/Masonry/Carousel), Klick-Konfiguration.
**Claude liefert:** ListViewBlock, Card Designer Modal, Variant Engine

---

### P4-T5 — Kanban Block ⬜
**Dauer:** ~90min
**Was entsteht:** Spalten aus Select-Feld, Swimlanes, WIP Limits, Card Designer, Drag & Drop → updated DB, Aggregation pro Spalte.
**Claude liefert:** KanbanBlock, dnd-kit Integration

---

### P4-T6 — Button Block ⬜
**Dauer:** ~60min
**Was entsteht:** Alle States (Default/Hover/Active/Loading/Success/Error/Disabled) individuell stylebar. Actions: Row CRUD, Webhook, Frame navigieren, Modal, URL, PDF, E-Mail, Clipboard, Custom JS, Delay. Conditional disable.
**Claude liefert:** ButtonBlock, Action Engine

---

### P4-T7 — Form Block ⬜
**Dauer:** ~90min
**Was entsteht:** Multi-Step, Conditional Fields, alle Input-Typen, Validation, Success-State (Mini-Canvas), "Form als Canvas" (komplett frei designbar).
**Claude liefert:** FormBlock, Input Components, Validation Engine

---

### P4-T8 — Stat Card Block ⬜
**Dauer:** ~60min
**Was entsteht:** Hauptzahl (Count-Up), Label, Trend-Indikator, Icon, Sparkline, Vergleichswert — alle einzeln bindbar und stylebar.
**Claude liefert:** StatCardBlock, Count-Up Hook, Sparkline

---

# PHASE 5 — BLOCKS PART 2: VIEWS & BOARDS

---

### P5-T1 — Kalender Block ⬜
**Dauer:** ~90min
Month/Week/Day/Agenda, Multi-Layer, Drag Events → updated Datum, neues Event per Klick.

### P5-T2 — Timeline / Gantt Block ⬜
**Dauer:** ~90min
Start+End Datum, Dependencies, % Complete, Drag Balken, Zoom-Level.

### P5-T3 — Map View Block ⬜
**Dauer:** ~60min
Geocoding, Cluster, Heatmap, Popup (Mini-Canvas), Bounds-Change → filtert andere Blocks.

### P5-T4 — Progress Bar / Ring Block ⬜
**Dauer:** ~45min
Linear/Circular/Segmented/Steps, Animated Fill, Conditional Farbwechsel.

### P5-T5 — Gallery View Block ⬜
**Dauer:** ~60min
Grid/Masonry/Justified/Spotlight, Lightbox, Hover Mini-Canvas, Filter.

### P5-T6 — Timeline Linear Block ⬜
**Dauer:** ~45min
Vertikal/Horizontal, Einblend-Animation, Icon im Punkt.

### P5-T7 — Network / Relation Map Block ⬜
**Dauer:** ~60min
Nodes = Rows, Edges = Relationen, Force-directed/Tree/Radial, Drag Nodes.

### P5-T8 — Pivot Table Block ⬜
**Dauer:** ~45min
SUM/COUNT/AVG/MIN/MAX, Totals-Zeile, Export CSV.

---

# PHASE 6 — BLOCKS PART 3: UI COMPONENTS + ANIMATIONEN

---

### P6-T1 — Animation System ⬜
**Dauer:** ~60min
**Was entsteht:** Animation-Tab im Property Panel für alle Elemente.
Trigger: On Load / On Scroll / On Click / On Hover / On Data Change / On Condition
Types: Entrance (Fade/Slide/Scale/Bounce/Flip), Exit, Loop (Pulse/Spin/Float/Shake/Breathe), Value Transition (Count-Up/Farb-Morph)
Timing: Duration, Delay, Easing, Repeat, Stagger
Data-driven: KPI über Ziel → grün + Pulse. Unter Ziel → rot + Shake.
**Claude liefert:** Animation Engine (Framer Motion), Animation Tab UI

### P6-T2 — Avatar + Badge + Divider + Icon ⬜
**Dauer:** ~60min
Alle mit vollständigen Panel-Einstellungen und Data Binding.

### P6-T3 — Accordion + Tabs ⬜
**Dauer:** ~60min
Mini-Canvas System (wiederverwendbar für alle Blocks die Mini-Canvases brauchen).

### P6-T4 — Modal + Notification ⬜
**Dauer:** ~60min
Modal als Block mit Trigger, Toast System.

### P6-T5 — Search + Filter Blocks ⬜
**Dauer:** ~60min
Connected-Blocks System (wie Blocks miteinander kommunizieren).

### P6-T6 — Comment + Rich Text ⬜
**Dauer:** ~60min
TipTap Integration, Supabase Realtime für Comments.

### P6-T7 — Media Blocks ⬜
**Dauer:** ~60min
Video (wavesurfer.js), Audio, Document Viewer (react-pdf-viewer).

### P6-T8 — Utility Blocks ⬜
**Dauer:** ~60min
QR Code, Barcode, Clock/Timer/Countdown, Weather, Data Ticker.

### P6-T9 — Power Blocks ⬜
**Dauer:** ~90min
Code (Monaco), Formula (KaTeX), Graph Plotter (Plotly.js), Statistics.

### P6-T10 — Split View + Chat ⬜
**Dauer:** ~60min
Context-Link zwischen Panels, Realtime Chat.

### P6-T11 — Special Blocks ⬜
**Dauer:** ~60min
Celebration/Confetti (mehrere Partikel-Typen), Skeleton Loader, Scroll Progress, FAB, Glassmorphism Card, Lottie Player.

### P6-T12 — World Map + Terminal ⬜
**Dauer:** ~60min
Choropleth Map (ISO 3166), Terminal/Log Viewer (Monospace, Level-Farben, Live-Stream).

---

# 🏁 MEILENSTEIN M3
**Vor Phase 7:** Workspace-User Block-Freiheit klären.
Siehe Sektion 6 — Meilensteine.

---

# PHASE 7 — WORKSPACE MODE
**Ziel:** Workspace-User kann eigenen Layout einrichten.**

---

### P7-T1 — Workspace Mode UI ⬜
**Dauer:** ~60min
**Was entsteht:** Wenn Mode-Switcher auf "Workspace": Editor-UI verschwindet (Toolbar, Resize Handles, Panel). Block-Picker erscheint (abgespeckte Version nach M3). Persönliches Layout wird pro User gespeichert.
**Claude liefert:** Mode-based UI, User Layout Store (Supabase pro User)

### P7-T2 — Persönliches Layout speichern ⬜
**Dauer:** ~45min
Jeder User hat eigene Element-Positionen + Grössen. Geteilte Daten, individuelles Layout.

### P7-T3 — Abgespeicherter Block-Pool ⬜
**Dauer:** ~45min
Components Tab im Navigator zeigt verfügbare Blocks. User zieht sich Blocks raus. Builder kann Blocks für bestimmte Rollen sperren.

---

# PHASE 8 — PORTAL MODE + SHARING
**Ziel:** Canvas für externe teilen. PDF Export. Template-Portale.**

---

### P8-T1 — Portal Mode ⬜
**Dauer:** ~45min
**Was entsteht:** Mode-Switcher auf "Portal" → Canvas locked. Tabellen-Blocks unsichtbar. Nur interagieren (Formulare, Buttons, Kommentare).

### P8-T2 — Share Link System ⬜
**Dauer:** ~60min
Token, Permissions (Lesen/Formulare/Kommentare), Passwort-Schutz, Ablauf-Datum, Domain-Restriction. Public View Route ohne Login.

### P8-T3 — Template-Portale ⬜
**Dauer:** ~60min
Frame als Template markieren. Automatische Generierung pro Row. Virtuelle Frames (nicht physisch auf Workspace). Automatische Ordner-Zuweisung mit Conditions.

### P8-T4 — Embed Code ⬜
**Dauer:** ~30min
iFrame Code, Preview im Modal.

### P8-T5 — PDF Export ⬜
**Dauer:** ~60min
Frame → PDF (Puppeteer auf Supabase Edge Function). Dateiname mit `{{}}` bindbar.

### P8-T6 — Realtime Share ⬜
**Dauer:** ~45min
Public View zeigt immer aktuelle Daten. Live-Indicator.

### P8-T7 — Element-Level Permissions ⬜
**Dauer:** ~60min
Sichtbarkeit pro Rolle. Row-Level Security ohne SQL konfigurierbar.

---

# PHASE 9 — NAVIGATION & TRANSITIONS

---

### P9-T1 — Navigation als Action ⬜
**Dauer:** ~45min
Property Panel, Interaction-Tab: "Bei Klick → Navigiere zu [Frame/Template], Mit Row, Transition [Slide/Fade/None]". Kein Pfeile-Ziehen.

### P9-T2 — Transition Engine ⬜
**Dauer:** ~60min
Slide Left/Right, Slide Up/Down, Fade, Zoom In/Out, Cover, Push. Pro Action konfigurierbar. Global Default.

### P9-T3 — Präsentations-Modus ⬜
**Dauer:** ~30min
Fullscreen-Modus (Cmd+Shift+P). Pfeiltasten navigieren zwischen Frames. Wie Keynote.

### P9-T4 — Dynamic Frame Templates ⬜
**Dauer:** ~60min
Frame als Template markieren. Deep Links. Row-Kontext Provider. Ordner-Zuweisung mit Conditions.

### P9-T5 — Cmd+K Command Palette (vollständig) ⬜
**Dauer:** ~45min
Frames, Rows, Blocks, Aktionen, Settings — alles durchsuchbar. History. Keyboard-navigierbar.

---

# PHASE 10 — AUTOMATION & INTEGRATIONS

---

### P10-T1 — Webhook System ⬜
**Dauer:** ~60min
Outgoing (Button-Action), Incoming (URL generieren → Rows erstellen/updaten), Webhook Log.

### P10-T2 — Automation Builder ⬜
**Dauer:** ~90min
Trigger + Actions (sequentiell, Delay, IF-Branch). Test-Button. Log. Edge Functions.

### P10-T3 — E-Mail Templates ⬜
**Dauer:** ~45min
Visueller Editor, `{{}}` Variablen, Vorschau, Resend Integration.

### P10-T4 — Google Sheets Sync ⬜
**Dauer:** ~60min
OAuth, Sheet auswählen, Spalten mappen, bidirektionaler Sync.

### P10-T5 — REST API External Sources ⬜
**Dauer:** ~60min
URL + Auth + Response Mapping + Auto-Refresh.

### P10-T6 — Supabase / Postgres Direct ⬜
**Dauer:** ~45min
Connection String, Tabellen-Browser, read/write.

---

# PHASE 11 — AI INTEGRATION

---

### P11-T1 — AI Panel ⬜
**Dauer:** ~45min
Chat-Interface, Claude API (claude-sonnet-4-6), Canvas-Kontext (Frames/Blocks/Tabellen).

### P11-T2 — Canvas-Generierung ⬜
**Dauer:** ~90min
"Baue mir ein Dashboard" → strukturiertes JSON → Blocks werden auf Canvas platziert. Undo als eine Gruppe.

### P11-T3 — Design Assist ⬜
**Dauer:** ~60min
"Mach das schöner" → Style-Vorschläge als Preview → User bestätigt/lehnt ab.

### P11-T4 — Formel-Assistent ⬜
**Dauer:** ~45min
"?" im Formel-Editor → natürlichsprachliche Beschreibung → AI schreibt Formel + Erklärung.

### P11-T5 — Proaktiver Co-Pilot ⬜
**Dauer:** ~60min
Täglicher Daten-Check (Edge Function). Anomalien → Notification. User bestätigt → AI führt Aktion aus.

---

# PHASE 12 — SNAPSHOT & HISTORY

---

### P12-T1 — Canvas Snapshots ⬜
**Dauer:** ~60min
Täglich/wöchentlich/manuell. Snapshot = Canvas-State + Daten. Anzeigen (Read-only), Wiederherstellen. Manuell: "Checkpoint setzen" + Name.

### P12-T2 — Audit Log ⬜
**Dauer:** ~45min
Wer/Was/Wann/Alt/Neu. Pro Element: Änderungs-History. Supabase Trigger.

---

# PHASE 13 — COLLABORATION

---

### P13-T1 — Realtime Collaboration ⬜
**Dauer:** ~90min
Yjs CRDT + Supabase Realtime. Cursor-Anzeige (Name + Farbe). Element-Selektion sichtbar für andere.

### P13-T2 — Comments + Version History ⬜
**Dauer:** ~60min
Comments auf Elemente, @mention, Resolve. Granulare Version History pro Element.

### P13-T3 — Workspace Rollen ⬜
**Dauer:** ~60min
User einladen, Rollen vergeben, Einladungen verwalten, Settings Page Members Tab.

---

# PHASE 14 — WHITE-LABEL & AGENCY

---

### P14-T1 — Custom Domain ⬜
**Dauer:** ~45min
Domain eingeben → DNS-Anleitung → Vercel API → SSL automatisch.

### P14-T2 — White-Label Branding ⬜
**Dauer:** ~60min
Logo, Farben, App-Name, "Powered by CANVAS" optional, Favicon.

### P14-T3 — Agency Workspace Management ⬜
**Dauer:** ~60min
Agency Dashboard, Client-Workspaces erstellen, Multi-Workspace Switcher.

---

# PHASE 15 — ONBOARDING & TEMPLATES

---

### P15-T1 — Onboarding Flow ⬜
**Dauer:** ~60min
Erster Login → Template-Auswahl → Interaktive Highlights → "Verbinde Daten" → "Teile Canvas". Überspringen jederzeit.

### P15-T2 — Starter Templates ⬜
**Dauer:** ~90min
8 Templates mit Beispiel-Daten: CEO Dashboard, Client Portal, Sales CRM, Operations Center, Offerte/Rechnung, Projekt-Management, Knowledge Base, Analytics Dashboard.

### P15-T3 — Interaktives Tutorial ⬜
**Dauer:** ~60min
"CANVAS in 5 Minuten". Step-by-Step mit Aufgaben-Validierung.

---

# 🏁 MEILENSTEIN M4
**Vor Phase 16:** Monetarisierung + Go-to-Market klären.
Siehe Sektion 6 — Meilensteine.

---

# PHASE 16 — LANDING PAGE & MARKETING

---

### P16-T1 — Landing Page ⬜
**Dauer:** ~90min
Hero + Problem + Features + Social Proof + Pricing + FAQ + Footer. Vollständig responsiv.

### P16-T2 — Pricing + Checkout ⬜
**Dauer:** ~60min
Stripe Integration, automatische Plan-Aktivierung, Billing Settings (Customer Portal).

### P16-T3 — SEO + Performance ⬜
**Dauer:** ~45min
Meta Tags, Sitemap, Lazy Loading, Code Splitting, Lighthouse > 90.

---

# PHASE 17 — FINAL POLISH

---

### P17-T1 — Error + Empty + Loading States ⬜
**Dauer:** ~60min
Überall: Skeleton Loaders, Empty States mit Illustration, Error States mit Retry, Offline-Banner.

### P17-T2 — Accessibility ⬜
**Dauer:** ~45min
Keyboard Tab-Navigation, Screen Reader Labels, Fokus-Indikatoren, WCAG AA Kontrast.

### P17-T3 — Mobile ⬜
**Dauer:** ~45min
Canvas = Read-Only auf Mobile. Dashboard + Login responsiv. Touch-Gesten (Swipe/Pinch). Bottom Nav Bar.

### P17-T4 — Performance ⬜
**Dauer:** ~60min
Virtualisierung (react-virtual für grosse Listen), Debounced Saves, Optimistic UI, Bundle Analysis.

### P17-T5 — Help + Feedback ⬜
**Dauer:** ~30min
Shortcut Modal (?), Help Menu, Feedback Form (→ Supabase Tabelle).

### P17-T6 — Notifications System ⬜
**Dauer:** ~45min
In-App Bell, @mention/Automation/Webhook-Fehler/Collaboration Notifications, E-Mail opt-in.

### P17-T7 — Settings Pages ⬜
**Dauer:** ~60min
Profil, Workspace, Team, Billing, API Keys, Danger Zone.

### P17-T8 — Public API ⬜
**Dauer:** ~60min
REST API für externe Integrationen. API Keys in Settings. Rate Limiting. Docs Page.

---

## 9. ÜBERSICHT

| Phase | Tasks | ~Stunden |
|---|---|---|
| 0 Setup | 5 | 2h |
| 1 Shell | 6 | 5h |
| 2 Core Editor | 15 | 14h |
| 3 Data Layer | 10 | 9h |
| 4 Blocks Part 1 | 8 | 11h |
| 5 Blocks Part 2 | 8 | 10h |
| 6 Blocks Part 3 | 12 | 11h |
| 7 Workspace Mode | 3 | 3h |
| 8 Portal + Sharing | 7 | 7h |
| 9 Navigation | 5 | 5h |
| 10 Automation | 6 | 7h |
| 11 AI | 5 | 6h |
| 12 Snapshot | 2 | 2h |
| 13 Collaboration | 3 | 4h |
| 14 White-Label | 3 | 3h |
| 15 Onboarding | 3 | 4h |
| 16 Landing | 3 | 4h |
| 17 Polish | 8 | 7h |
| **Total** | **121 Tasks** | **~114h** |

**MVP (erste echte User):** Phase 0-9 + Phase 15 = ~76h = ~5-6 Wochen bei 2-3h/Abend

---

## 10. SESSION LOG

| Datum | Task | Was gemacht | Offen |
|---|---|---|---|
| Apr 2026 | — | Vision + Feature Bible + Build Plan + Konzept-Diskussion | P0-T1 |
| Apr 2026 | P0-T1 | Tools installiert (Node v24.10.0, npm 11.6.0, Cursor, GitHub, Windows) | P0-T2 |
| Apr 2026 | P0-T2 | Projekt aufgesetzt — React+TS+Tailwind, alle Libraries, Ordnerstruktur, Docs im Repo, GitHub Push | P0-T3 |

---

*Nach jeder Session: Status updaten (⬜→✅), Log ergänzen.*
*Nächster Chat: Build Plan uploaden, dann "Task P[X]-T[Y]" schreiben.*

# CANVAS — Detaillierte Tasks: Phase 0 + Phase 1

> Dieses File wird von Claude Code vor jeder Task gelesen.
> Jede Task ist so konkret dass keine Annahmen nötig sind.

---

# PHASE 0 — SETUP

---

## ~~P0-T1 — Tools installieren~~ ✅
Node v24.10.0, npm 11.6.1, Cursor, GitHub (Windows). Erledigt.

---

## P0-T2 — Projekt aufsetzen ⬜

### Was gebaut wird
Vollständiges React + TypeScript + Tailwind Projekt. Dev-Server läuft. Ordnerstruktur steht. Docs sind im Repo.

### Commands die Claude Code ausführt

```bash
# 1. Vite Projekt erstellen (im canvas/ Ordner)
npm create vite@latest . -- --template react-ts

# 2. Basis-Dependencies
npm install

# 3. Alle Libraries
npm install @tldraw/tldraw zustand react-router-dom @supabase/supabase-js framer-motion recharts react-leaflet leaflet hyperformula @tiptap/react @tiptap/starter-kit lucide-react clsx tailwind-merge

# 4. Dev-Dependencies
npm install -D tailwindcss @tailwindcss/vite autoprefixer @types/leaflet
```

### Dateien die erstellt werden

**vite.config.ts**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**tailwind.config.ts**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F7F7F5',
        'surface-hover': '#EFEFED',
        border: '#E8E8E5',
        'border-strong': '#D3D3CE',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        'text-tertiary': '#9B9B9B',
        accent: '#7C5CFC',
        'accent-hover': '#6B4EDB',
        'accent-light': '#F0EDFF',
        destructive: '#E5484D',
        success: '#30A46C',
        warning: '#F76B15',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: '11px',
        sm: '13px',
        base: '14px',
        md: '15px',
        lg: '17px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.06)',
        md: '0 2px 8px rgba(0,0,0,0.08)',
        lg: '0 4px 16px rgba(0,0,0,0.10)',
        xl: '0 8px 32px rgba(0,0,0,0.12)',
      },
      transitionTimingFunction: {
        default: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
```

**src/index.css**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFFFFF;
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #D3D3CE; border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: #9B9B9B; }
```

**src/lib/utils.ts**
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**src/types/index.ts**
```typescript
export type Mode = 'builder' | 'workspace' | 'portal'

export type FrameType = 'dashboard' | 'document' | 'presentation' | 'mobile' | 'custom'

export interface Frame {
  id: string
  projectId: string
  name: string
  type: FrameType
  width: number
  order: number
  isTemplate: boolean
  folderId: string | null
  createdAt: string
}

export interface Project {
  id: string
  workspaceId: string
  name: string
  createdAt: string
}

export interface User {
  id: string
  email: string
  name: string
}
```

**src/App.tsx**
```typescript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<div>Dashboard — kommt in P3-T3</div>} />
        <Route path="/workspace/:projectId" element={<div>Workspace — kommt in P1-T1</div>} />
        <Route path="/login" element={<div>Login — kommt in P3-T2</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

**.env.example**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**.gitignore** (ergänzen)
```
.env
.env.local
node_modules/
dist/
```

**Ordnerstruktur erstellen:**
```
src/components/ui/
src/components/canvas/
src/components/panels/
src/components/blocks/
src/components/layout/
src/stores/
src/hooks/
src/lib/
src/types/
src/pages/
supabase/migrations/
docs/
```

**Docs ins Repo kopieren:**
Kopiere diese Files in den `docs/` Ordner:
- CANVAS-BUILD-PLAN.md
- CANVAS-FEATURE-BIBLE.md
- CLAUDE-CANVAS.md (→ umbenennen zu CLAUDE.md im Projekt-Root)
- CANVAS-TASKS-P0-P1.md

### Testen
```bash
npm run dev
```
Browser → http://localhost:5173 → zeigt "Dashboard — kommt in P3-T3"

### Fertig wenn
- `npm run dev` läuft ohne Errors
- Browser zeigt Text auf localhost:5173
- Alle Ordner existieren
- .env.example ist da

### Push
```bash
git init
git add .
git commit -m "P0-T2: Project setup — React + TypeScript + Tailwind + all dependencies"
git branch -M main
git remote add origin [GitHub Repo URL — Nico gibt ein]
git push -u origin main
```

---

## ~~P0-T3 — Supabase einrichten~~ ✅

### Was Nico manuell macht
1. Geh auf supabase.com → "New Project"
2. Name: "canvas", Region: Europe (Frankfurt), Passwort merken
3. Warte bis Projekt bereit ist (~2 Minuten)
4. Geh zu: Project Settings → API
5. Kopiere: `Project URL` und `anon public` Key
6. Erstelle `.env` Datei im canvas/ Ordner:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
```

### Was Claude Code baut

**src/lib/supabase.ts**
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Testen
```bash
npm run dev
```
Keine Errors in Console.

### Push
```bash
git add .
git commit -m "P0-T3: Supabase client setup"
git push
```

---

## P0-T4 — GitHub Push ⬜
*Bereits in P0-T2 enthalten (git init + push). Wird dort abgehakt.*

---

## ~~P0-T5 — Vercel Deploy~~ ✅

### Was Nico manuell macht
1. Geh auf vercel.com → "Add New Project"
2. Wähle GitHub Repo "canvas"
3. Framework: Vite (automatisch erkannt)
4. Environment Variables hinzufügen:
   - `VITE_SUPABASE_URL` → dein Wert
   - `VITE_SUPABASE_ANON_KEY` → dein Wert
5. "Deploy" klicken

### Fertig wenn
canvas-[hash].vercel.app zeigt die App ohne Errors.

---

# PHASE 1 — SHELL

---

## ~~P1-T1 — App-Layout~~ ✅

### Was gebaut wird
Das 3-Spalten-Layout. Noch kein tldraw, noch keine Funktionalität. Nur die Struktur die für alle weiteren Tasks die Basis ist.

### Visuelles Ziel
```
┌─────────────────────────────────────────────────────────┐
│ TopBar (48px)                                           │
│ [Logo] [Projekt-Name ▾] ─────────── [Builder ▾] [···]  │
├─────────────┬───────────────────────────┬───────────────┤
│ Navigator   │                           │ Property      │
│ (240px)     │   Canvas Area             │ Panel         │
│             │   (flex-1)                │ (280px)       │
│ Pages       │   bg: #F7F7F5            │               │
│ Components  │                           │ Wähle ein     │
│             │                           │ Element       │
└─────────────┴───────────────────────────┴───────────────┘
```

**Alle Borders:** 1px solid #E8E8E5 — subtil, wie Notion.
**Keine Schatten auf Sidebars** — nur Border-Linie.

### Dateien

**src/components/layout/AppLayout.tsx**
```typescript
// 3-Spalten-Layout: Navigator | Canvas | PropertyPanel
// Props: children für Canvas-Bereich
// TopBar ist immer sichtbar (position: sticky top-0)
// Navigator: 240px, nicht resizable in P1 (kommt später)
// PropertyPanel: 280px, nicht resizable in P1
// Alle drei Bereiche: volle Höhe (height: calc(100vh - 48px))
```

**src/components/layout/TopBar.tsx**
```typescript
// Höhe: 48px
// Links: Canvas-Logo (Text "CANVAS" in accent-Farbe, font-weight 600) + Projekt-Name Dropdown (Placeholder)
// Mitte: leer
// Rechts: Mode-Switcher (Builder | Workspace | Portal als Segment-Control) + "···" Menu Button
// Border-Bottom: 1px solid var(--border)
// Background: white
// Mode-Switcher: 3 Buttons nebeneinander, aktiver Mode: accent-light background + accent text
```

**src/components/panels/Navigator.tsx**
```typescript
// Zwei Tabs oben: "Pages" | "Components"
// Tab-Style: wie Notion — kein Underline, aktiver Tab: text-primary, inaktiver: text-tertiary
// Tab-Wechsel: smooth (keine Animation nötig in P1)
// Pages Tab Inhalt: Placeholder-Liste mit 2 Beispiel-Frames (statisch, noch nicht funktional)
// Components Tab Inhalt: Placeholder-Text "Block-Pool — kommt in Phase 4"
// "+ Neuer Frame" Button: unten in der Sidebar, volle Breite, outline-style
// Background: white
// Border-Right: 1px solid var(--border)
// Overflow-Y: auto (scrollbar wenn viele Frames)
```

**src/components/panels/PropertyPanel.tsx**
```typescript
// Vier Tabs: "Style" | "Data" | "Interaction" | "Animation"
// Alle leer mit Placeholder-Text in P1
// Wenn nichts selektiert: zentrierter Text "Wähle ein Element" (text-tertiary, text-sm)
// Background: white
// Border-Left: 1px solid var(--border)
// Tab-Style: gleich wie Navigator Tabs
```

**src/stores/useUIStore.ts**
```typescript
// Zustand Store
// State:
//   mode: Mode ('builder' | 'workspace' | 'portal') — default: 'builder'
//   activeTool: string — default: 'select'
//   selectedElementIds: string[] — default: []
//   activeFrameId: string | null — default: null
//   navigatorTab: 'pages' | 'components' — default: 'pages'
//   propertyPanelTab: 'style' | 'data' | 'interaction' | 'animation' — default: 'style'
// Actions:
//   setMode(mode: Mode)
//   setActiveTool(tool: string)
//   setSelectedElements(ids: string[])
//   setActiveFrame(id: string | null)
//   setNavigatorTab(tab)
//   setPropertyPanelTab(tab)
```

**src/pages/WorkspacePage.tsx**
```typescript
// Route: /workspace/:projectId
// Rendert AppLayout mit Canvas-Placeholder
// Liest projectId aus URL params
// Zeigt "Canvas kommt in P1-T2" als Placeholder in der Mitte
```

**src/App.tsx** (update)
```typescript
// WorkspacePage importieren und auf /workspace/:projectId routen
```

### Fertig wenn
- Layout sichtbar mit korrekten Proportionen (240px / flex-1 / 280px)
- TopBar mit Mode-Switcher — Klick wechselt Modus (visuell)
- Navigator mit zwei Tabs — Klick wechselt Tab
- Property Panel mit vier Tabs
- Keine Console-Errors
- Sieht aus wie ein professionelles Tool, nicht wie ein Tutorial

### Push
```bash
git add .
git commit -m "P1-T1: App layout — TopBar, Navigator, PropertyPanel shell"
git push
```

---

## P1-T2 — tldraw Canvas einbinden ⬜

### Was gebaut wird
tldraw läuft in der Canvas-Area. Zoom/Pan funktioniert. Erster Frame (weisser Rahmen) ist sichtbar. Canvas fühlt sich wie ein echtes Design-Tool an.

### Visuelles Ziel
```
Canvas-Hintergrund: #F7F7F5 (warmes Grau)
Dot-Grid: subtile Punkte (#D3D3CE, 1px, 20px spacing)
Frame: weisses Rechteck (1440×800px als Start-Höhe), 
       shadow-md, border: 1px solid #E8E8E5
       Label oben links: "Untitled Frame" (text-sm, text-tertiary)
```

### Dateien

**src/components/canvas/CanvasWorkspace.tsx**
```typescript
// tldraw Komponente wrappen
// Eigene Konfiguration:
//   - hideUi: true (wir bauen eigene UI)
//   - autoFocus: true
//   - Camera: starts centered on first frame
// Background: #F7F7F5 mit Dot-Grid (CSS background-image: radial-gradient)
// Volle Höhe und Breite der Canvas-Area
// tldraw Editor ref für spätere programmatische Kontrolle
```

**src/components/canvas/CanvasFrame.tsx**
```typescript
// Custom tldraw Shape für CANVAS Frames
// Shape-Typ: 'canvas-frame'
// Props:
//   name: string
//   frameType: FrameType
//   width: number
//   height: number (initial: 800, wächst mit Inhalt — kommt später)
// Rendering:
//   - Weisses Rechteck
//   - shadow-md
//   - Border: 1px solid #E8E8E5
//   - Label: oben-links, ausserhalb des Frames, text-sm text-tertiary
//   - Nicht selektierbar wie normales Element (eigene Selection-Logik)
// Resize: nur Breite (Höhe ist dynamisch)
```

**src/stores/useCanvasStore.ts**
```typescript
// Zustand Store
// State:
//   frames: Frame[] — default: [{id: 'frame-1', name: 'Untitled Frame', type: 'dashboard', width: 1440, ...}]
//   activeFrameId: string — default: 'frame-1'
//   elements: Element[] — default: []
// Actions:
//   addFrame(frame: Partial<Frame>)
//   updateFrame(id: string, updates: Partial<Frame>)
//   deleteFrame(id: string)
//   setActiveFrame(id: string)
//   addElement(element: Element)
//   updateElement(id: string, updates: Partial<Element>)
//   deleteElement(id: string)
```

**src/types/index.ts** (ergänzen)
```typescript
// Element Interface hinzufügen:
export interface Element {
  id: string
  frameId: string
  type: string
  props: Record<string, unknown>
  bindings: Record<string, unknown>
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  visible: boolean
  locked: boolean
}
```

### Testen
- Canvas sichtbar mit Dot-Grid Hintergrund
- Weisser Frame mit Label sichtbar
- Zoom mit Mausrad funktioniert
- Pan mit Space+Drag oder mittlerer Maustaste funktioniert
- Frame bewegt sich nicht wenn Canvas gepannt wird (Frame ist fixiert)

### Push
```bash
git add .
git commit -m "P1-T2: tldraw canvas — workspace background, first frame visible"
git push
```

---

## P1-T3 — Navigator Component ⬜

### Was gebaut wird
Funktionaler Navigator. Frames erstellen, umbenennen, löschen, umsortieren. Klick navigiert zu Frame.

### Visuelles Ziel (Pages Tab)
```
Pages Tab:
┌─────────────────────────────┐
│ Pages    Components         │  ← Tabs
├─────────────────────────────┤
│ 🔍 Suche...                │  ← Suchfeld (klein, subtle)
├─────────────────────────────┤
│ 📄 Untitled Frame      ··· │  ← aktiver Frame: accent-light bg
│ 📄 Frame 2             ··· │
│                             │
│ [⬡] Report Template   ···  │  ← Template Frame (gestrichelt)
│   └ 3 Instanzen             │
├─────────────────────────────┤
│ + Neuer Frame               │  ← Bottom, volle Breite
└─────────────────────────────┘
```

**Frame-Item Styling:**
- Höhe: 32px
- Padding: 0 8px
- Hover: background #EFEFED
- Aktiv: background #F0EDFF (accent-light), text accent
- Frame-Icon: 14px, text-tertiary
- Name: text-sm, text-primary, truncate
- "···" Button: erscheint nur bei Hover (opacity 0 → 1)

**Kontextmenü bei "···" Klick:**
- Umbenennen
- Duplizieren
- Als Template markieren / Template entfernen
- Trennlinie
- Löschen (rot, destructive)

### Dateien

**src/components/panels/Navigator.tsx** (vollständig neu)
```typescript
// Pages Tab:
//   - Suchfeld: filtert Frames nach Name (lokal, kein DB-Call)
//   - Frame-Liste aus useCanvasStore
//   - Drag-to-Reorder (dnd-kit oder HTML5 drag — einfachste Lösung)
//   - Aktiver Frame highlighted
//   - Klick → setActiveFrame + Canvas springt zu Frame (tldraw camera)
//   - Doppelklick auf Name → Inline-Edit (Input erscheint, Enter = speichern, ESC = abbrechen)
//   - "···" Button → Kontextmenü (Dropdown)
//   - Template-Frames: gestrichelter Border, anderes Icon, zeigt Instanz-Anzahl
//   - "+ Neuer Frame" Button unten → öffnet Frame-Type Modal (kommt in P1-T5, jetzt: direkt Dashboard erstellen)
// Components Tab:
//   - Placeholder "Block-Pool — kommt in Phase 4"
```

**src/components/ui/ContextMenu.tsx**
```typescript
// Wiederverwendbares Kontextmenü
// Props: items (label, action, destructive?, divider?)
// Position: folgt Klick-Position, bleibt im Viewport
// Schliesst bei Klick ausserhalb oder ESC
// Styling: white background, shadow-lg, border, border-radius-lg
// Item-Höhe: 32px, padding: 0 12px
// Destructive Items: text-destructive
// Divider: 1px solid var(--border), margin: 4px 0
```

### Testen
- Frame erstellen mit "+" Button
- Frame umbenennen (Doppelklick + Inline-Edit)
- Frame löschen (Kontextmenü)
- Klick auf Frame → Canvas scrollt zu Frame
- Suchfeld filtert Frames
- Aktiver Frame ist highlighted

### Push
```bash
git add .
git commit -m "P1-T3: Navigator — frame CRUD, inline rename, context menu, search"
git push
```

---

## P1-T4 — Design Session ⬜

### Was gebaut wird
Design System ist bereits in CLAUDE.md und tailwind.config.ts definiert. Diese Task passt alle bisher gebauten Components auf das finale Design an.

### Was Nico gibt
Feedback nach P1-T1 bis P1-T3 — was gefällt, was nicht. Claude Code passt an.

### Was Claude Code macht
- Tailwind Config auf finales Design prüfen
- Alle Components auf Design Tokens umstellen (keine hardcodierten Farben)
- Inter Font korrekt geladen
- Scrollbars gestylt
- Hover/Focus States überall konsistent
- Spacing überall auf 8px-Grid

### Fertig wenn
Screenshots von Nico bestätigt.

---

## P1-T5 — Frame-Typen Modal ⬜

### Was gebaut wird
"+ Neuer Frame" → Modal mit Frame-Typ-Auswahl.

### Visuelles Ziel
```
┌─────────────────────────────────────┐
│  Neuer Frame                    ✕   │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │          │  │          │        │
│  │Dashboard │  │ Dokument │        │
│  │ 1440px   │  │   A4     │        │
│  └──────────┘  └──────────┘        │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │          │  │          │        │
│  │  Präsen- │  │  Mobile  │        │
│  │  tation  │  │  390px   │        │
│  └──────────┘  └──────────┘        │
│                                     │
│  ┌──────────┐                       │
│  │  Custom  │  B: ___  H: ___      │
│  │          │                       │
│  └──────────┘                       │
│                                     │
│              [Erstellen]            │
└─────────────────────────────────────┘
```

**Frame-Typ Karten:**
- 2×2 Grid + 1 Custom
- Hover: border accent, leichte shadow
- Aktiv/Ausgewählt: border accent (2px), accent-light background
- Icon: kleines Vorschau-Rechteck in der Karten-Mitte
- Name: text-sm font-medium
- Dimensionen: text-xs text-tertiary

**Custom:** Zeigt W/H Input-Felder wenn ausgewählt.

### Dateien

**src/components/canvas/FrameTypeModal.tsx**
```typescript
// Modal Overlay (backdrop: rgba(0,0,0,0.3))
// Modal Card: white, shadow-xl, border-radius-xl, max-width: 480px
// Frame-Typ Konstanten:
//   dashboard: { name: 'Dashboard', width: 1440, height: 900, icon: ... }
//   document: { name: 'Dokument', width: 794, height: 1123, icon: ... }
//   presentation: { name: 'Präsentation', width: 1920, height: 1080, icon: ... }
//   mobile: { name: 'Mobile', width: 390, height: 844, icon: ... }
//   custom: { name: 'Custom', width: 1440, height: 900 }
// "Erstellen" Button: accent background, weisser Text
// ESC oder ✕ schliesst Modal
// Nach Erstellen: Frame wird zu useCanvasStore hinzugefügt, Modal schliesst, Navigator zeigt neuen Frame
```

### Testen
- Modal öffnet sich bei "+" Klick
- Alle 5 Typen wählbar
- Custom: W/H Inputs erscheinen
- Erstellen fügt Frame hinzu (sichtbar in Navigator + Canvas)
- ESC schliesst Modal

### Push
```bash
git add .
git commit -m "P1-T5: Frame type modal — dashboard, document, presentation, mobile, custom"
git push
```

---

## P1-T6 — Property Panel Shell ⬜

### Was gebaut wird
Property Panel ist fertig strukturiert. Alle vier Tabs mit Platzhaltern. Zeigt korrekten Inhalt je nach Selektion.

### Visuelles Ziel
```
Wenn nichts selektiert:
┌─────────────────────┐
│                     │
│                     │
│   Wähle ein         │
│   Element           │
│   aus               │
│                     │
└─────────────────────┘
Text zentriert, text-tertiary, text-sm

Wenn Element selektiert:
┌─────────────────────┐
│ Style Data Int. Ani │  ← Tabs
├─────────────────────┤
│                     │
│  [Tab-Inhalt]       │
│  (Platzhalter)      │
│                     │
└─────────────────────┘
```

**Tab-Leiste:**
- Höhe: 36px
- 4 Tabs gleichmässig verteilt
- Aktiver Tab: text-primary, border-bottom 2px accent
- Inaktiver Tab: text-tertiary, border-bottom 2px transparent
- Hover: text-secondary
- Transition: 150ms

### Dateien

**src/components/panels/PropertyPanel.tsx** (update)
```typescript
// Liest selectedElementIds aus useUIStore
// Wenn leer: Empty State zeigen
// Wenn Element selektiert: Tab-Leiste + Tab-Inhalt
// Tab-Inhalt in P1: alle Platzhalter-Text
// Vorbereitung für P2: Tabs als eigene Komponenten exportieren
//   StyleTab.tsx — kommt in P2-T3
//   DataTab.tsx — kommt in P3-T6
//   InteractionTab.tsx — kommt in P9-T1
//   AnimationTab.tsx — kommt in P6-T1
```

### Testen
- Empty State sichtbar wenn nichts selektiert
- Tab-Leiste erscheint wenn Element selektiert (für Test: kurz hardcoded)
- Tabs umschaltbar
- Aktiver Tab visuell klar

### Push
```bash
git add .
git commit -m "P1-T6: Property panel shell — tabs, empty state, selection-aware"
git push
```

---

## P1-T7 — Claude Code Setup ⬜

### Was gebaut wird
Claude Code ist installiert und konfiguriert. Bereit für autonome Task-Ausführung ab Phase 2.

### Was Nico macht

**Claude Code installieren:**
```bash
npm install -g @anthropic-ai/claude-code
```

**Testen:**
```bash
claude --version
```

**Globale CLAUDE.md platzieren:**
```
C:\Users\[Dein-Name]\.claude\CLAUDE.md
```
Inhalt: CLAUDE-GLOBAL.md (dieses File)

**Canvas CLAUDE.md ist bereits im Repo:**
`canvas/CLAUDE.md` — bereits in P0-T2 erstellt.

### Wie du ab jetzt Tasks startest

```bash
# Terminal öffnen im canvas/ Ordner
cd C:\Users\[Name]\Documents\canvas

# Claude Code starten
claude

# Dann in Claude Code:
"Implementiere P2-T1. Lies zuerst docs/CANVAS-BUILD-PLAN.md und CLAUDE.md."
```

### Push
```bash
git add .
git commit -m "P1-T7: Claude Code setup — ready for autonomous task execution"
git push
```

---

*Dieses File wird nach jeder erledigten Task aktualisiert.*
*Claude Code: lies dieses File vor jeder Task in Phase 0 oder Phase 1.*

## Builder Report — P1-T1

### Erstellte Dateien

- `src/stores/useUIStore.ts` (neu) — Zustand Store mit UIState Interface, allen Actions
- `src/stores/index.ts` (neu) — Re-exports für useUIStore und UIState
- `src/components/layout/TopBar.tsx` (neu) — 48px TopBar mit Logo, Projekt-Name, Mode-Switcher, More-Button
- `src/components/layout/AppLayout.tsx` (neu) — 3-Spalten-Wrapper mit TopBar, Navigator, Canvas-Area, PropertyPanel
- `src/components/layout/index.ts` (neu) — Re-exports für AppLayout und TopBar
- `src/components/panels/Navigator.tsx` (neu) — 240px Sidebar, Pages/Components Tabs, Placeholder-Frames, New Frame Button
- `src/components/panels/PropertyPanel.tsx` (neu) — 280px Sidebar, Empty State, 4 Tabs wenn Element selektiert
- `src/components/panels/index.ts` (neu) — Re-exports für Navigator und PropertyPanel
- `src/pages/WorkspacePage.tsx` (neu) — Route /workspace/:projectId, bindet AppLayout ein
- `tsconfig.app.json` — `baseUrl` + `paths` (@/ Alias) + `ignoreDeprecations: "6.0"` hinzugefügt

### Geänderte Dateien

- `src/App.tsx` — WorkspacePage importiert, Route /workspace/:projectId kabelgebunden, Redirect / → /workspace/demo für sofortigen Visual Check

### Technische Entscheidungen

**@/ Alias via tsconfig.app.json:** Vite hatte den Alias bereits in `vite.config.ts` konfiguriert, aber TypeScript kannte ihn nicht. `baseUrl` + `paths` in `tsconfig.app.json` ergänzt. Da TypeScript 7.0 `baseUrl` depreciert, war `ignoreDeprecations: "6.0"` nötig — das ist die offizielle Lösung laut TypeScript-Dokumentation bis ein vollständiger Migrationspfad bereitsteht.

**UIState als exportiertes Interface:** Zustand-Selektoren in strict-TypeScript ohne explizite Typisierung erzeugen implizite `any`-Fehler. Statt `(s) => s.mode` muss es `(s: UIState) => s.mode` sein. `UIState` wird aus dem Store-File exportiert damit alle Components es importieren können.

**Redirect zu /workspace/demo:** In `App.tsx` redirectet `/` jetzt zu `/workspace/demo` damit beim `npm run dev` sofort das Layout sichtbar ist — ohne erst manuell die URL anpassen zu müssen. Nico sieht direkt das Ergebnis.

**selectedElementIds immer leer in P1:** PropertyPanel zeigt immer den Empty State ("Wähle ein Element aus") da kein Element auf der Canvas selektiert werden kann — die Canvas-Engine kommt erst in P1-T2. Das ist korrekt gemäss Task-Brief.

**Navigator Components-Tab:** Zeigt "Block-Pool — kommt in Phase 4" als zentrierten Placeholder. Der Tab ist schaltbar aber hat noch keinen Inhalt.

### Bekannte Einschränkungen

- "Neuer Frame" Button im Navigator ist nicht funktional (nur visuell) — Frame-CRUD kommt in P1-T3
- Projekt-Name ist statisch "Mein Projekt" — wird in P3-T3 aus Supabase geladen
- PropertyPanel Tab-Leiste ist nur sichtbar wenn `selectedElementIds` nicht leer ist — in P1 immer Empty State
- Kein Routing von Dashboard zu Workspace (explizit aus Task-Brief ausgeschlossen)
- Components-Tab zeigt nur Placeholder

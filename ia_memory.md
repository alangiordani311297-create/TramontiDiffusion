# AI Memory - EliteDrive

## 🧠 Context & Architecture
- **Project**: EliteDrive - Luxury Car Dealership Platform
- **Role**: Senior Full-Stack Lead Developer & PM
- **Current Phase**: Initialization & Scaffolding
- **Architecture**: Monorepo-style structure within Next.js App Router.
    - Public facing pages: `(public)` group
    - Admin dashboard: `(admin)` group
    - Shared components: `components/`
    - Design System: Custom "Luxury" config in Tailwind

## 📏 Operational Rules (Critical)
1.  **Docs-Driven Development**:
    - NO code for new features without a `docs/YYYY-MM-DD_feature-name.md` plan.
    - Plans must include: Objective, User Story, Components, Data Schema, Test Plan.
    - User approval required before implementation.
2.  **Memory Updates**:
    - Update this file (`ia_memory.md`) after every significant response/step.
3.  **Changelog**:
    - Log all code changes in `CHANGELOG.md`.
4.  **Self-Correction**:
    - Dopo aver generato il codice, fai un passaggio di 'Self-Correction' automatico: verifica mentalmente che le importazioni siano corrette, che i tipi TypeScript siano definiti e che non ci siano hook di React usati in modo condizionale. Se trovi un errore, correggilo prima di darmi l'output finale.


## 🤖 Gestione Agenti Specializzati
- **Definizione**: È stata creata una cartella root chiamata `active_agents/`. Questa directory contiene file (markdown o testo) con prompt altamente ottimizzati per ruoli specifici (es. `database_architect.md`, `ui_ux_designer.md`, `copywriter.md`).
- **Nuova Regola di Ingaggio**: Prima di iniziare qualsiasi task complesso, devi:
    1.  Controllare virtualmente la cartella `active_agents/`.
    2.  Se esiste un Agente pertinente al task corrente (es. devo scrivere una query -> cerco `sql_expert`), devi leggere quel file e adottare la sua persona, le sue regole e i suoi vincoli per l'esecuzione di quel compito specifico.
    3.  Se non esiste un agente specifico, procedi con il ruolo di default (Full-Stack Lead).

## 🎨 Design System & Style
- **Theme**: Luxury / Dark Mode default.
- **Colors**:
    - Background: Dark (e.g., Slate/Neutral 950)
    - Accents: Gold/Amber
- **Typography**:
    - Headings: Serif (Elegant)
    - Body: Sans-serif (Clean)

## 📊 Project Status
- [x] System initialization
- [x] Next.js Scaffolding (App Router)
- [x] Tailwind Configuration (v4 CSS-based + Luxury Theme)
- [x] Folder Config: `(public)` / `(admin)`
- [x] **Website Migration**: Core luxury site migrated from Vite to Next.js.
- [x] **AI Integration**: Gemini-powered Concierge implemented (Secure Server Action).
- [x] **Optimization**: Security fixes and UI refactoring applied.
- [x] **UX**: Homepage video loop disabled and path fixed (moved images to public).
- [x] **Content**: Updated Journal section with custom "NOVITÀ 2026" image.
- [x] **Hero Update**: Replaced Ferrari image with video `1224.mp4` (no loop) and removed "TRAMONTI" branding.

## 📝 Implementation Notes
- **Tailwind v4**: Using `@theme` in `globals.css` with `velluto-*` variables.
- **Routing**: 
    - Public Home: `app/(public)/page.tsx` (Client Wrapper).
    - Admin: `app/(admin)/admin/page.tsx`.
- **State**: `HomeClient.tsx` manages global modal state for the landing page.

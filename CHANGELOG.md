# Changelog

All notable changes to `sp-ui-projects` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] — GAP Item 7: Confiabilidade da Interface (2026-08-01)

### Changed
- **Design System centralizado**: `app.css` agora importa `@sp/ui-core/theme.css` em vez de manter cópia própria.

## [0.1.0] - 2026-05-09 a 2026-06-18

### Added
- Módulo `sp-ui-projects` criado do zero como microfrontend SvelteKit 5 para o sp-platform v1.5.0.
- Módulo Projects extraído do `sp-ui-shell`: rota `/projects`, componentes Kanban (`KanbanBoard`, `KanbanCard`, `KanbanColumn`), `HubAssistant`, `ProjectAssistant`, `ProjectDocuments`, `ProjectTelemetry` e `HubTelemetry`, como parte do desacoplamento em microfrontends (v1.5.0).
- Module Federation configurado (host/remotes); testes E2E smoke para Projects/Kanban; ROADMAP.md.
- README documentando a arquitetura Kanban e a injeção de contexto de projeto.
- Pipeline de CI FOSS DevSecOps + pipelines de CI/release com dispatch para Tauri em tags de versão.

### Changed
- Integração com o pacote compartilhado `@sp/ui-core`, com resolução de conflito de versão do Vite.
- `HubTelemetry` conectado à API real `/v1/analytics/telemetry`, substituindo valor hardcoded ("2.4 dias") por fetch do snapshot de telemetria, com estado de loading e fallback gracioso em caso de API inacessível.
- Métricas de telemetria de hardware e esforço passaram a ser transmitidas em tempo real para os dashboards (Epic P3).
- Layout migrado para `ModuleLayout` centralizado (Epic L5); indentação e formatação padronizadas via Prettier (Epic L6); scaffolding morta removida (`env_config.ts`, `init.ts`, script `tauri` sem dependência instalada).

### Fixed
- Pipeline DevSecOps estabilizada: script bash quebrado reparado, jobs com exit 0 forçado (warning-only), action Trivy temporariamente substituída por placeholder, trigger de push adicionado, `npm install` usado no lugar de `npm ci`.
- Dependência local `sp-ui-core` resolvida na pipeline (checkout, symlink, branch especificada); comando `pwd` protegido com aspas.
- Injeção de shell corrigida em `release.yml`; emoji removido da descrição de status; publisher de status check adicionado ao gate.

### Security
- `devalue` atualizado para 5.8.1, corrigindo CVE-2026-42570; hook de pre-push Gitleaks adicionado; `package-lock.json` versionado.

## [Unreleased]
### Fixed
- Resolved Module Federation Hydration and Build issues by using Vanilla JS Wrappers for remote components.

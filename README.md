# sp-ui-projects

**Sovereign OS — Projects Kanban Micro-Frontend**

The project and task management interface for the Sovereign OS platform. Provides a Kanban board, task tracking, deadline management, and real-time effort telemetry.

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)]()
[![Svelte](https://img.shields.io/badge/Svelte-5.x-red.svg)](https://svelte.dev/)

---

## Overview

`sp-ui-projects` implements a full Kanban workflow system integrated with the AI inference pipeline. Projects and tasks are persisted in the `sp-service` SQLite database. Active project context is automatically injected into AI chat prompts, giving the assistant awareness of open tasks and deadlines during conversation.

### Features

- Kanban board with columns: Backlog, In Progress, Review, Done
- Task creation with title, description, deadline, and priority
- Project context injection: the backend automatically prepends active project tasks to chat prompts
- Real-time effort bar: shows percentage of completed tasks per project
- AI task creation: the `/v1/tools/create_kanban_task` endpoint allows the AI to create tasks autonomously
- Archive and restore projects

---

## Project Context Injection

When a user sends a chat message while a project is active, `sp-service` fetches the project's tasks and injects them into the system prompt:

```
SOVEREIGN PROJECT ASSISTANT: Project "My Project"
Purpose: <project purpose>

Active tasks:
- [In Progress] Implement authentication (Created: 2026-05-10 | Deadline: 2026-05-31)
- [Backlog] Write tests for API (Created: 2026-05-12 | No deadline)
```

This happens server-side and requires no action from the frontend beyond passing `project_id` in the chat payload.

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /v1/projects | List all projects |
| POST | /v1/projects | Create a project |
| GET | /v1/projects/:id | Get project with tasks |
| PUT | /v1/projects/:id | Update project |
| DELETE | /v1/projects/:id | Archive project |
| GET | /v1/projects/:id/tasks | List tasks |
| POST | /v1/projects/:id/tasks | Create task |
| PUT | /v1/tasks/:id | Update task (status, deadline) |
| DELETE | /v1/tasks/:id | Delete task |

---

## Development

```bash
# Type-check
npm run check -w sp-ui-projects

# Run in isolation (requires sp-service on port 38001)
npm run dev -w sp-ui-projects
```

---

## Project Structure

```
sp-ui-projects/
├── src/
│   ├── routes/
│   │   └── projects/
│   │       └── +page.svelte          # Projects list and board
│   └── lib/
│       └── components/
│           ├── kanban/
│           │   ├── KanbanBoard.svelte     # Full board layout
│           │   ├── KanbanColumn.svelte    # Column with drag-and-drop
│           │   └── KanbanCard.svelte      # Individual task card
│           └── HubTelemetry.svelte        # Effort and progress metrics
```

---

## License

PolyForm Noncommercial 1.0.0. See [LICENSE](../LICENSE).

---

**Package:** `sp-ui-projects`  
**Version:** 0.1.0  
**Last updated:** 2026-05-24

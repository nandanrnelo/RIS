---
name: project-documenter
description: >-
  Mandatory skill for all development tasks on the RIS project. Enforces checking PROJECT_DOCUMENTATION.md first before writing any new code or modifying existing files, and requires updating PROJECT_DOCUMENTATION.md every single time content is created, modified, or returned, including folder structure, file contents, routing, and changelog entries.
---

# Project Documenter & Living State Synchronizer

This skill enforces continuous documentation and context synchronization for the RIS project. It guarantees that the project's master documentation (`PROJECT_DOCUMENTATION.md`) remains the authoritative single source of truth at all times.

---

## The Golden Rule

> **EVERY TASK REQUIRES TWO ACTIONS**:
> 1. **FIRST**: Read [PROJECT_DOCUMENTATION.md](../../PROJECT_DOCUMENTATION.md) before writing or planning any new code.
> 2. **LAST**: Update [PROJECT_DOCUMENTATION.md](../../PROJECT_DOCUMENTATION.md) with updated folder structure, routing changes, file manifest entries, and a change log record before completing the task.

---

## Workflow Step-by-Step

### Step 1: Pre-Execution Inspection (BEFORE Writing Code)

1. **Open and Read Documentation**:
   - Use `view_file` on `/RIS/PROJECT_DOCUMENTATION.md` (or workspace-relative `PROJECT_DOCUMENTATION.md`).
2. **Verify Workspace State**:
   - Check the **Complete Folder Structure** in Section 2 to see existing directories and where new code should reside.
   - Check the **File Routing & Navigation Architecture** in Section 3 to see existing pages, routes, and layout hierarchies.
   - Check the **File Manifest** in Section 4 to identify reusable components, utilities, and types.
   - Check the **Change Log** in Section 6 to understand recent changes and work in progress.
3. **Align Implementation**:
   - Ensure the new code follows the project standards:
     - Next.js 16 App Router conventions (`app/<route>/page.tsx`).
     - React 19 Server Components by default; Client Components (`"use client"`) only for interactive widgets.
     - Tailwind CSS v4 inline themes and classes.
     - TypeScript strict typing (shared interfaces in `frontend/types/`).

---

### Step 2: Implementation & Change Tracking

As you perform work, maintain a running inventory of:
- **New Folders & Files Created**: Absolute and relative paths.
- **Files Modified**: Summary of what changed.
- **Routes Added or Updated**: URL paths, route types (Server/Client, API, dynamic parameters).
- **Components & Types Added**: Purpose, exports, props.
- **Dependencies Installed**: Any `npm` packages added to `package.json`.

---

### Step 3: Post-Execution Documentation Update (EVERY TIME Content is Returned/Created)

Before completing your response to the user, you **MUST** update `/RIS/PROJECT_DOCUMENTATION.md`:

1. **Update Section 2 (Complete Folder Structure)**:
   - If new files or directories were created or renamed, update the ASCII tree in Section 2 so it is an exact representation of the filesystem.
2. **Update Section 3 (File Routing & Navigation Architecture)**:
   - If any new page or API route was created or changed, add or update the corresponding entry in the Route Map table. Include:
     - `URL Path`
     - `File Location`
     - `Route Type` (Server/Client Page, API Route, Layout, Modal)
     - `Description & Purpose`
3. **Update Section 4 (File Manifest & Content Summary)**:
   - Add entries for newly created components, services, types, or configuration files, explaining what they do and how they integrate into the system.
4. **Append to Section 6 (Change Log)**:
   - Add a new block at the top of Section 6 with:
     - Date: `YYYY-MM-DD`
     - Action Title
     - Summary of changes made
     - List of created / modified / deleted files
     - Current project status and recommended next steps

---

### Step 4: Verification

1. Verify that `/RIS/PROJECT_DOCUMENTATION.md` has been successfully updated with no broken markdown links or misaligned tables.
2. If working on `frontend/`, run lint and format checks when appropriate (`npm run lint`, `npm run format:check`).

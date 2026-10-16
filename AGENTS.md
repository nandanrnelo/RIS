# Workspace Agent Guidelines & Living Documentation Protocol

This repository adheres to a strict **Living Documentation Protocol**. Every AI assistant, subagent, and human contributor must follow these instructions unconditionally:

## 1. Mandatory Pre-Execution Rule (Read Before Writing)
- **BEFORE** writing any code, creating any file, adding any route, or designing any component, you **MUST first inspect** [`PROJECT_DOCUMENTATION.md`](/RIS/PROJECT_DOCUMENTATION.md).
- Examine:
  - **Section 2**: Complete Folder Structure
  - **Section 3**: File Routing & Navigation Architecture
  - **Section 4**: File Manifest & Content Summary
  - **Section 6**: Recent Change Log entries
- Ensure all plans and proposed files align with the existing architecture, directory layout, routing conventions, and code standards documented therein.

## 2. Mandatory Post-Execution Rule (Update Every Time)
- **EVERY TIME** content is created, updated, or returned for this project, you **MUST update** [`PROJECT_DOCUMENTATION.md`](/RIS/PROJECT_DOCUMENTATION.md) before finishing:
  1. **Folder Structure**: If any file or folder was added, modified, renamed, or deleted, update the ASCII folder tree in Section 2.
  2. **File Routing**: If any route was created or modified, update the Route Map table in Section 3.
  3. **File Manifest**: If any component, type, utility, or config file was introduced or updated, document its responsibility in Section 4.
  4. **Change Log**: Append a new entry in Section 6 noting the date, action summary, files affected, and next steps.

## 3. Skill Integration
- Use the [`project-documenter`](/RIS/.agents/skills/project-documenter/SKILL.md) skill to orchestrate this workflow smoothly across tasks.

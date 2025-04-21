export function printHelp() {
  console.log(`
📘 Dokugent CLI Help

Usage:
  dokugent scaffold <scope> [--force] [--backup] [--with-checklists]
  dokugent scaffold --custom=<folder>
  dokugent compile --llm=<codex|claude>

Commands:
  scaffold           Scaffold .dokugent folder based on scope (core, qa, addons, etc.)
  compile            Compile an agent briefing from .dokugent/ files

Options:
  --force            Overwrite existing files
  --backup           Create .bak backups before overwriting
  --with-checklists  Include checklist-enhanced templates
  --custom=<folder>  Create an empty folder inside .dokugent/ with the given name
  --help             Show this help message

Examples:
  dokugent scaffold core --with-checklists --backup
  dokugent scaffold --custom=ai-labs
  dokugent compile --llm=codex

Learn more:
  🧠 Agent briefings use structured Doku Tags like @document_analysis to guide LLM behavior.
  💡 Docs + examples: https://github.com/carmelyne/dokugent-cli
`);
}
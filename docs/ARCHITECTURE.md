# Architecture decisions

The reference catalog, rules, and discovery prompts are versioned JSON. The client validates all three before rendering. The recommendation, capacity, assumption, validation, gap, BOM, and talking-point engines are separate pure modules. Zustand holds the current design and bounded undo/redo snapshots. Browser localStorage is the only persistence layer. Export happens in-browser, without sending customer information to a server. `api/health` contains only static version metadata. Raw drive capacity, host quantities, SKUs, prices and compatibility are never inferred. Catalog models are reference-only and require owner/reviewer validation before production use.

## Pilot governance

The reference seed is not an approved product catalog. Review each model, ownership choice, licensing implication, services placeholder, rule formula and disclaimer with the designated HPE architecture and catalog owners before use with customer information.

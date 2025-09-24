// config.js
window.DAV_CONFIG = {
  // ----- Data source (GitHub) -----
  ghOwner:  "sakerk",                      // e.g. "octocat"
  ghRepo:   "Security-Governance-Framework", // e.g. "my-datasets"
  ghBranch: "main",                        // e.g. "main"
  dataDir:  "Security-Governance-Framework/MPA_5.3.1_Controls",          // folder holding .md/.json rows

  // Optional: Set a page title (also used in export filenames)
  title: "MPA 5.3.1",

  // ----- Behavior defaults (all optional) -----
  defaults: {
    // Columns to hide in the grid by default (match by label, case-insensitive)
    hideInGrid: [
      // "Best Practices",
      // "Additional Recommendations"
    ],

    // JSON keys to hide by default (exact key after flattening)
    jsonHide: [
      // "document_name","owner","framework","version","date"
    ],

    // Which columns to show by default in the Attribute Panel (by header label)
    sidePanelPreferred: [
      // "Best Practices","Additional Recommendations"
    ]
  }
};

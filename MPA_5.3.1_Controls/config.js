window.DAV_CONFIG = {
  title: "MPA 5.3.1",
  source: {
    type: "github",
    owner: "sakerk",
    repo: "Security-Governance-Framework",
    branch: "main",                  // will auto-fallback to "master" if needed
    dataDir: "MPA_5.3.1_Controls"    // this folder (recursive)
  },
  permissions: { write: true },
  ui: { startMode: "md" }            // or "json"
};

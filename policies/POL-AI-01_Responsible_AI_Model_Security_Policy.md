# POL-AI-01 – Responsible AI & Model Security Policy

| Document Name | Policy Owner | Review Date | Review Cycle |
| :---- | :---- | :---- | :---- |
| POL-AI-01 – Responsible AI & Model Security Policy | [Policy Owner / Security Team] | 2025-09-19 | Annual |

## Control Mappings
| Unified Control No. | Mapped MPA 5.3.1 Controls (TPN+) | Mapped NIST Controls (NIST 800-171A R3) |
| :---- | :---- | :---- |
| AI-01 – AI / ML Governance | OR-5.0; OR-1.1; OR-1.2; TS-1.1; TS-1.6; TS-1.8; TS-1.13 | Mapped to RA/SA/SC/SI/AT families |

## Purpose (What Must Be Done)
AI and ML systems must be developed and used responsibly: protect data, manage model risk, restrict access, document purpose and limitations, monitor for misuse, and require human review for high-risk decisions.

## MPA 5.3.1 OR-5.0 Alignment (AI/ML – Security Management)
- Tailor policy to applicable AI/ML apps; maintain a model/use-case inventory.
- Manage risks for changes to datasets, applications, network infrastructure, and systems; assess before use and at material changes.
- Obtain client approval for AI use when client data/work is involved.
- Review data sources & integrity; document provenance/licensing/quality checks.
- Comply with laws, regulations, agreements, and client policy (consult Legal/Privacy for cross-border transfers).
- Define appropriate dataset usage; restrict training on sensitive data without approval.
- Include AI/ML expectations in the Acceptable Use Policy (OR-1.1); require acknowledgments.
- Provide role-based training; refresh annually.
- Use only internally managed/sandboxed LLMs (public LLMs require approved exceptions and compensating controls).


AI and ML systems must be developed and used responsibly: protect data, manage model risk, restrict access, document purpose and limitations, monitor for misuse, and require human review for high-risk decisions.

## Scope
This policy applies to all organizational environments, personnel, contractors, systems, and data within scope for AI-01 and applicable client/regulatory requirements (e.g., MPA 5.3.1, NIST 800-171A R3).

## Roles & Responsibilities
- **Policy Owner:** Maintains this policy, coordinates reviews, approves exceptions.
- **IT / Security:** Implements controls, monitors compliance, maintains evidence.
- **Department Leads:** Ensure staff adherence within their teams.
- **All Personnel:** Acknowledge and follow this policy and related SOPs.

## Policy Statements (Required Controls)
- AI and ML systems must be developed and used responsibly: protect data, manage model risk, restrict access, document purpose and limitations, monitor for misuse, and require human review for high-risk decisions.
- Compliance with this policy is mandatory for all personnel, contractors, and systems within scope.
- Violations are subject to disciplinary action and may trigger incident response.

## Related SOPs (How We Do It)
- [SOP-AI-01 – GenAI & LLM Usage Procedure] [SOP-AI-01]
- [SOP-AI-02 – Model Lifecycle: Design, Training, and Deployment] [SOP-AI-02]
- [SOP-AI-03 – Prompt Injection & Data Leakage Testing] [SOP-AI-03]
- [SOP-AI-04 – Third-Party AI Service Onboarding] [SOP-AI-04]
- [SOP-AI-05 – Model Monitoring & Incident Response] [SOP-AI-05]

## Required Documentation (Proof We Did It)
| Category | Examples |
| :-- | :-- |
| Procedures | SOP-AI-01 – GenAI & LLM Usage Procedure, SOP-AI-02 – Model Lifecycle: Design, Training, and Deployment, SOP-AI-03 – Prompt Injection & Data Leakage Testing, SOP-AI-04 – Third-Party AI Service Onboarding, SOP-AI-05 – Model Monitoring & Incident Response |
| Evidence / Logs | EV-AI-01 – AI/LLM Use Approvals, EV-AI-02 – Model Cards & Datasheets, EV-AI-03 – Red-Team & Evaluation Reports, EV-AI-04 – Prompt/Response Logs (Sensitive Data Scrubbed), EV-AI-05 – Vendor DPA/SCC & Security Review, EV-AI-06 – Model Access Logs, EV-AI-07 – AI Risk Assessments, EV-AI-08 – Human-in-the-Loop Review Records |
| Plans / Standards | SSP, Encryption Standards, Network Diagram (as applicable) |
| Records / Registers | Risk Register, Access Authorization Records (as applicable) |

## Review & Exceptions
- **Review Frequency:** Annual, or upon significant change.
- **Exceptions:** Must be documented with justification, compensating controls, and time-bounded; approved by the Policy Owner.

## Version History
| Version | Date | Description | Author |
| :-- | :-- | :-- | :-- |
| 1.0 | 2025-09-19 | Initial issue aligned to unified controls and mappings. | [Your Organization] |

[SOP-AI-01]: ../standards_and_sops/SOP-AI-01_GenAI_LLM_Usage_Procedure.md
[SOP-AI-02]: ../standards_and_sops/SOP-AI-02_Model_Lifecycle_Design_Training_and_Deployment.md
[SOP-AI-03]: ../standards_and_sops/SOP-AI-03_Prompt_Injection_Data_Leakage_Testing.md
[SOP-AI-04]: ../standards_and_sops/SOP-AI-04_Third-Party_AI_Service_Onboarding.md
[SOP-AI-05]: ../standards_and_sops/SOP-AI-05_Model_Monitoring_Incident_Response.md
[EV-AI-01]: ../evidence/EV-AI-01_AI_LLM_Use_Approvals.md
[EV-AI-02]: ../evidence/EV-AI-02_Model_Cards_Datasheets.md
[EV-AI-03]: ../evidence/EV-AI-03_Red-Team_Evaluation_Reports.md
[EV-AI-04]: ../evidence/EV-AI-04_Prompt_Response_Logs_Sensitive_Data_Scrubbed_.md
[EV-AI-05]: ../evidence/EV-AI-05_Vendor_DPA_SCC_Security_Review.md
[EV-AI-06]: ../evidence/EV-AI-06_Model_Access_Logs.md
[EV-AI-07]: ../evidence/EV-AI-07_AI_Risk_Assessments.md
[EV-AI-08]: ../evidence/EV-AI-08_Human-in-the-Loop_Review_Records.md

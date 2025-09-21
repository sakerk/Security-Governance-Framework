# POL-NS-02 – Data IO Network Segment Policy

| Document Name | Policy Owner | Review Date | Review Cycle |
| :---- | :---- | :---- | :---- |
| POL-NS-02 – Data IO Network Segment Policy | [Policy Owner / Security Team] | 2025-09-19 | Annual |

## Control Mappings
| Unified Control No. | Mapped MPA 5.3.1 Controls (TPN+) | Mapped NIST Controls (NIST 800-171A R3) |
| :---- | :---- | :---- |
| NS-02 – Data I/O Segmentation | TS-1.x (transfer/boundary) | Mapped to SC family |

## Purpose (What Must Be Done)
Data transfers through the I/O network must follow strict routing, segregation, and access control rules.

## Scope
This policy applies to all organizational environments, personnel, contractors, systems, and data within scope for NS-02 and applicable client/regulatory requirements (e.g., MPA 5.3.1, NIST 800-171A R3).

## Roles & Responsibilities
- **Policy Owner:** Maintains this policy, coordinates reviews, approves exceptions.
- **IT / Security:** Implements controls, monitors compliance, maintains evidence.
- **Department Leads:** Ensure staff adherence within their teams.
- **All Personnel:** Acknowledge and follow this policy and related SOPs.

## Policy Statements (Required Controls)
- Data transfers through the I/O network must follow strict routing, segregation, and access control rules.
- Compliance with this policy is mandatory for all personnel, contractors, and systems within scope.
- Violations are subject to disciplinary action and may trigger incident response.

## Related SOPs (How We Do It)
- [SOP-NS-02 – Data I/O Network Segment Procedure] [SOP-NS-02]

## Required Documentation (Proof We Did It)
| Category | Examples |
| :-- | :-- |
| Procedures | SOP-NS-02 – Data I/O Network Segment Procedure |
| Evidence / Logs | LG-NS-02 – Data IO Route Logs, EV-NS-03 – Transfer Workflow Records |
| Plans / Standards | SSP, Encryption Standards, Network Diagram (as applicable) |
| Records / Registers | Risk Register, Access Authorization Records (as applicable) |

## Review & Exceptions
- **Review Frequency:** Annual, or upon significant change.
- **Exceptions:** Must be documented with justification, compensating controls, and time-bounded; approved by the Policy Owner.

## Version History
| Version | Date | Description | Author |
| :-- | :-- | :-- | :-- |
| 1.0 | 2025-09-19 | Initial issue aligned to unified controls and mappings. | [Your Organization] |

[SOP-NS-02]: ../standards_and_sops/SOP-NS-02_Data_I_O_Network_Segment_Procedure.md
[LG-NS-02]: ../evidence/LG-NS-02_Data_IO_Route_Logs.md
[EV-NS-03]: ../evidence/EV-NS-03_Transfer_Workflow_Records.md

---
title: "The SaaS Security Controls Profile (SSCP)"
description: "The SaaS Security Controls Profile (SSCP)"
pubDate: "2025-12-01"
---

![imgur](https://i.imgur.com/4lxCp3p.png)

# The Fragmentation Problem

SaaS security suffers from a fundamental problem: fragmentation. Every application possesses a unique business context, stakeholders, settings, and risk profile. These nuances, combined with the lack of a common management framework, leave security teams reacting to risk rather than managing it.
Effective management requires accurate inventory and configuration control. While automated discovery and assessment tools exist, they are often expensive or complex to implement effectively. Worse, there is no standardized syntax to document what "good" looks like.
Although every SaaS is different, the risk scenarios are common and repetitive (e.g., compromised identities, data exfiltration, and insufficient logging). Push Security’s [SaaS attacks matrix](https://github.com/pushsecurity/saas-attacks) is a great reference here.
The state of these configurations determines the security posture, yet we lack a standard way to document and reason about them. The SaaS Security Controls Profile, or SSCP, helps to close this gap.

# The Frameworks

Security teams often attempt to secure SaaS using high-level frameworks like ISO 27001, NIST Cybersecurity Framework (CSF), or the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM). However, these frameworks largely operate at the conceptual and policy level. To apply them to a specific SaaS application, we are forced to engage in interpretation and speculation, guessing how a conceptual requirement translates to a granular setting.
The CSA’s [SaaS Security Capability Framework (SSCF)](https://cloudsecurityalliance.org/artifacts/saas-security-capability-framework-sscf) is a positive step, defining controls for providers to implement. While this shapes product design, it does not tell the customer how to configure the product securely today.
On the far end of the spectrum, there are industry benchmarks like those from the Center for Internet Security (CIS). These provide product-specific recommendations for secure configurations and other controls. However, these are very limited and will not scale to cover a multitude of SaaS apps.
Consequently, teams are forced to go bottom-up, app by app, often finding that the only common denominator is the SSO provider. A SaaS-specific approach for SaaS users has remained elusive.

# Enter the SSCP

The [SaaS Security Controls Profile](https://github.com/adamgroenhout/saas-security-controls-profile) is the missing link for managing SaaS security configuration. It is a framework designed to identify unmitigated risk and prescribe immediate remediation. The premise is simple: if you do not know how to secure a specific app, start here.
The framework is built to be lightweight and accessible, prioritizing the Pareto principle: mitigating 80% of SaaS risk with 20% of the effort. The SSCP focuses on high-impact core security domains for almost all SaaS applications, including identity and access management (IAM), secure configuration, integrations, sharing and collaboration, data security, and logging and monitoring. It does not aim to cover every security edge case and bespoke SaaS setting, but rather the fundamental controls that apply to the vast majority of applications.

# The Anatomy of a Control

To solve the standardization problem, every SSCP control adheres to a strict schema. This ensures consistency whether you are securing Salesforce, Zoom, or Slack. The SSCP is machine-readable (formatted in TOML) and managed as code, transforming security management from a static checklist into a dynamic operation. [The SSCP template can be found here on GitHub](https://github.com/adamgroenhout/saas-security-controls-profile/blob/main/sscp-template.toml).
Every control consists of the following standard fields:

* **Description.** An explanation of what the control is and other context.
* **Relevant.** A boolean (true/false) flag indicating if this control even applies to the specific app (e.g., distinguishing apps that support SSO from those that don't).
* **Enabled.** A boolean confirming if the control is currently implemented.
* **Value.** The current configuration setting or state for the control.
* **Allowed Values.** By defining allowed values for every control, the SSCP forces an explicit selection between specific, declared states.
* **Exception.** A boolean flag indicating if a risk acceptance exception is active.
* **Exception ID.** A reference ID for audit trails regarding the exception.
* **Configuration Details.** An object allowing for granular, app-specific parameters.

### Example Control: Identity Federation

Instead of a vague policy stating "Enable SSO," the SSCP defines the state with explicit values.

```
[iam.identity_federation]
description = "Integration with external Identity Providers (IdP) for centralized authentication."
relevant = true
enabled = true
value = "saml_2.0"
allowed_values = ["saml_2.0", "oidc", "disabled"]
exception = false
exception_id = ""
configuration_details = { idp_url = "https://idp.example.com/sso" }
```

## Risk Acceptance in Code

Compliance isn't always about fixing everything; sometimes it is about acknowledging business reality. With built-in fields for exceptions and risk IDs, the framework acknowledges that risk acceptance is a valid state, allowing you to audit not just your security posture, but your decision-making process.

## Handling Nuance

While the framework is standard, SaaS apps are not. The SSCP handles app-specific complexity via the configuration\_details object. This allows for specific, granular parameters or metadata relevant to the control without breaking the schema. For example, configuration\_details can define granular privilege levels and account types for specific integrations like Salesforce or GitHub, or specify API key rotation configs.

# Future State

The profiles serve as the foundation for automated or AI-driven assessment, state validation, and rigorous reporting. In the future, the SSCP could be used to facilitate mapping and alignment to other security frameworks or threat catalogs, and expand to cover more domains like resiliency. Whether used as a simple operational checklist or the kernel of a robust automated platform, the SSCP provides the standard required to visualize, measure, and control SaaS security posture.

---
title: "AI Security Policy: Exploring Threats to Workforce AI Tools and Building Policy"
description: "AI Security Policy: Exploring Threats to Workforce AI Tools and Building Policy"
pubDate: "2025-02-09"
---

![imgur](https://i.imgur.com/yxxeyTw.png)

# Intro

The use of artificial intelligence (AI) tools has become increasingly prevalent in the workplace. While these tools offer numerous benefits, they also introduce security risks that must be addressed. This post aims to provide a concise overview of the key security considerations associated with AI tool usage and includes an example security policy to outline how these risks should be mitigated.

# On Policy

What does good security policy look like? What does it take to make security policy most effective? These are not easy questions to answer, but I will give it a quick shot.

Good security policy informs and empowers readers to understand what appropriate security in a given context is supposed to look like, and to take action to manifest and maintain that picture. Security policy should illustrate the secure path for readers so that they understand which road(s) to follow and how to avoid deviation along the way.

Here are some attributes which should inform effective security policy. Note: these relate to policy *content* and not policy management and governance.

* **Clear & Simple**: Policies should use language that is easy to understand, avoiding jargon and minimizing ambiguity.
* **Relevant & Applicable**: Policies should be directly relevant to employees and applicable to the actual security risks they face in the workplace.
* **Actionable & Specific**: Policies should be actionable and specific, clearly defining required and prohibited actions for employees.
* **Legitimate & Justified**: Policies should be perceived as legitimate and justified, explaining the 'why' behind them and demonstrating their necessity and value.
* **Flexible & Adaptable**: Policies need to be flexible and adaptable, capable of remaining relevant to changing conditions, technologies, and evolving security threats.
* **Comprehensive & Concise**: Policies should be comprehensive enough to cover necessary information, while remaining concise and avoiding unnecessary detail.

While the focus here is policy, the lines between this and other types of issuances (e.g. guidelines, standards, procedures) are blurred. For example, within this policy, there are guidelines that illuminate and reinforce more formal policy statements. Procedural elements are touched upon and any standards are not intentionally included.

# On Threats

Many threats and risks apply to the use and misuse of AI tools. Policy must be informed by and crafted to broadly address these real-world concerns. Here is a simplified short list of examples.

* **Data Leakage**: Employees inputting confidential data (PII, business secrets, code) into AI tools and that data being subsequently exposed.
* **AI Provider Breaches**: Data breaches at the AI tool provider, exposing confidential data.
  **Inaccurate/Biased Output**: Employees using flawed AI-generated content without verification that results in various downstream harm.
* **Malicious AI Output**: AI generating vulnerable or malicious code.
* **Compromised Accounts**: Weak passwords or phishing leading to AI tool account takeover.
* **Over-Reliance & Outages**: Business disruption due to AI tool failures.
* **AI Tool Vulnerabilities**: Exploitable security flaws within AI tools themselves.
* **Compliance Violations**: AI use violating data privacy regulations (GDPR, HIPAA, etc.).
* **IP Infringement**: AI generated content that violates IP-related laws and creates exposure to lawsuits, etc.
* **Copyright Infringement**: AI generating content that violates copyright law.

These risks can materialize in many different ways. It’s important to understand what kinds of relevant threat actors exist, what conditions and weaknesses allow and enable their actions, and how those vulnerabilities are exploited.

## AI Tools Attack Tree

Let’s take a close look at risks to data confidentiality, which is after all the primary focus of our example policy. We will examine this by using an attack tree. The root of this attack tree is employee use of public AI tools, and the branches cover the various ways in which data may be compromised in this context.

The two main branches are insider threats, originating from employee actions, and external threats, stemming from attacks on AI providers or vulnerabilities in AI systems themselves. Insider threats are further divided into unintentional actions like prompt engineering and output sharing errors, and intentional malicious actions such as data exfiltration and account exploitation. External threats consist of attacks on the AI provider's infrastructure and vulnerabilities inherent in the AI systems that could be exploited to expose data.






```
%%{init: {'theme': 'neutral'}}%%
graph LR
    A[Data Confidentiality Compromise] --> B{Employee Uses Public AI Tool};
    B --> E{Insider Threats};
    B --> F{External Threats};
```







```
%%{init: {'theme': 'neutral'}}%%
graph LR
    E{Insider Threats} --> E1[Unintentional Insider Actions];
    E1 --> E1a[Prompt Engineering Errors];
    E1 --> E1b[Output Sharing Errors];
    E1 --> E1c[Weak Account Security Practices];
    E1a --> E1aa[Lack of Data Handling Awareness];
    E1a --> E1ab[Insufficient AI Tool Training];
    E1a --> E1ac[Complex/Ambiguous Prompts];
    E1a --> E1ad[Oversharing in Prompts];
    E1ad --> E1ada[Misunderstanding Data Policies];
    E1ad --> E1adb[Unnecessary Context];
    E1ad --> E1adc[Convenience over Security];
    E1ad --> E1add[Pasting Full Documents/Emails];
    E1b --> E1ba[Shareable Link Creation];
    E1b --> E1bb[Insecure Link Settings];
    E1b --> E1bc[Link Mismanagement];
    E1ba --> E1baa[Accidental Link Generation];
    E1ba --> E1bab[Default Public Links];
    E1bb --> E1bba[Incorrect Permissions];
    E1bb --> E1bbb[No Password Protection];
    E1bb --> E1bbc[Policy Bypass via Links];
    E1bc --> E1bca[Accidental Broad Sharing];
    E1bc --> E1bcb[Prolonged Link Activity];
    E1bc --> E1bcc[Public Platform Sharing];
    E1c --> E1ca[Weak Passwords];
    E1c --> E1cb[Credential Reuse];
    E1c --> E1cc[Susceptible to Phishing];
```







```
%%{init: {'theme': 'neutral'}}%%
graph LR
    E{Insider Threats} --> E2[Intentional Malicious Insider Actions];
    E2 --> E2a[Direct Data Exfiltration via AI];
    E2 --> E2b[Intentional Risky Practices];
    E2 --> E2c[Account Exploitation - Intentional];
    E2 --> E2d[Provider-Side Abuse - Intentional];
    E2a --> E2aa[Login from Unmanaged Device];
    E2a --> E2ab[Copy-Paste to Personal Account];
    E2a --> E2ac[Download then Upload];
    E2a --> E2ad[Screenshot/Screen Recording];
    E2a --> E2ae[Share AI Output to Personal Channels];
    E2b --> E2ba[Malicious Prompting for Sensitive Output];
    E2b --> E2bb[Circumventing Security Controls];
    E2b --> E2bc[Ignoring Data Handling Guidelines];
    E2c --> E2ca[Sharing Account Credentials];
    E2c --> E2cb[Unauthorized Access for Data Exposure];
    E2d --> E2da[Exploiting Terms of Service for Data Leakage];
    E2d --> E2db[Intentionally Triggering Provider Data Misuse];
```







```
%%{init: {'theme': 'neutral'}}%%
graph LR
    F{External Threats} --> F1[External Attacks on AI Provider];
    F --> F2[AI Model Vulnerabilities];
    F1 --> F1a[AI Provider Breach];
    F1 --> F1b[Unauthorized Access to Provider Logs];
    F1b --> F1ba[Provider System Vulnerability];
    F1b --> F1bb[Provider System Compromise];
    F2 --> F2a[Data Leakage from AI Model];
    F2a --> F2aa[Direct Memorization Attacks];
    F2a --> F2ab[General Model Data Extraction Techniques];
    F2a --> F2ac[Bias-Leveraging Data Exploitation];
```

A key takeaway from this attack tree is broader understanding that data confidentiality in the arena of public AI tools is a complex interplay of human behavior, system security, and inherent AI model risks. It underscores the need for a multi-faceted approach to risk mitigation.

To effectively mitigate the security risks associated with employee AI tool use, organizations need layered defenses. Technical controls include data loss prevention (DLP) tools to detect and prevent sensitive upload of sensitive data and subsequent exfiltration. Strong authentication mechanisms like multi-factor authentication (MFA) may prevent account compromise and data exposure. Vendor risk management and due diligence is essential when selecting AI providers. Business continuity plans must address potential AI tool outages. Finally, human review of critical AI-generated content is important to catch errors and potential legal issues.

Building upon these technical and procedural controls, a cornerstone of the mitigation strategy is employee-facing policy. This policy serves as the foundation for shaping employee behavior and must be actively communicated and enforced. In effect, well-informed employees, operating under clear policy, are the first line of defense against threats.

# Example Policy

This example policy is intentionally generic. A similar policy implemented within an organization should be tailored to that organization to be maximally relevant and effective. For example, if there are approved and sanctioned AI tools, employees should be directed to use them. Organization-specific information classifications should be referenced. Any AI governance bodies should be called out with descriptions of their function. Including organization-specific aspects like these is important to ensure that the policy is more engaging and applicable.

---

## Workforce AI Security Policy

**Purpose**

Artificial intelligence (AI) tools, including AI agents, offer significant benefits for enhancing productivity and innovation However, AI use introduces risks requiring careful management. This policy covers the secure and responsible use of AI tools to protect against data breaches, operational disruptions, compliance failures, and legal liabilities. We are committed to protecting employee and customer data and this policy outlines key security measures to meet our commitments.

**Scope**

This policy applies to all workforce members (employees, contractors, consultants, and other workers) using AI tools, including AI agents. Workforce AI tools are external, third-party AI applications, services, and autonomous AI agents (like public large language models (LLM), generative AI, AI-powered productivity tools, and intelligent assistants capable of autonomous tasks) used to enhance productivity or for work-related tasks.

This policy does NOT apply to:

* AI in customer-facing products and services. These are covered by separate secure development lifecycle (SDLC) and product security policies.
* AI in internal applications and services. These are governed by internal application and infrastructure security policies.

This AI Security Policy is part of our broader security framework, including the policies like the Acceptable Use Policy and Data Security Policy and relevant security controls. Familiarize yourself with these policies for a complete understanding of security expectations and requirements.

Contact the security team with any policy questions or concerns.

**Key Risks**

The following are key risks associated with AI tools addressed by this policy.

Data Security and Privacy Risks

* Data Leaks & Confidential Data Exposure: Even inadvertently entering confidential company data into AI tools can expose it. This data is often retained by AI providers and could be accessed by third parties due to breaches or misuse, leading to data breaches and privacy violations.
* AI Model Training & Privacy Breaches: Interactions with AI tools, including prompts and data, may train AI models. Sensitive data input could become accessible to unauthorized parties. AI models can also leak trained personal data or inadvertently reveal user data during interactions.

Operational Risks

* Hallucinations and Inaccurate Information: AI tools can generate incorrect, misleading, or nonsensical outputs ("hallucinations"), potentially causing software flaws, system failures, poor decision making, or operational errors.
* Security Vulnerabilities: AI tools may have flaws that are exploitable by malicious actors, which lead to data exposure.
* Autonomous Agent Risks & Unintended Consequences: AI agents act autonomously and, if uncontrolled, may take unintended actions, make errors, or operate outside intended boundaries, causing operational disruptions, security incidents, or policy violations.

Legal and Compliance Risks

* Regulatory Violations: AI use could violate data privacy and compliance requirements (e.g., GDPR, CCPA, HIPAA, PCI DSS) leading to penalties.
* Intellectual Property and Copyright Infringement & Plagiarism: AI-generated content could unintentionally violate IP rights, leading to legal issues. Employees might inadvertently use plagiarized content.
* Defamation and Liability: Inaccurate, biased, or discriminatory AI-generated content, especially in sensitive areas, could lead to legal liability.

Protecting company information, operational integrity, legal standing, and regulatory compliance is crucial. This policy guides employees to use AI responsibly, balancing benefits with security, compliance, and operations.

**AI Security Guidelines**

Do the following to ensure security and use AI responsibly:

* Select secure AI tools. Prioritize reputable vendors with robust security, data protection track records, and mature security infrastructure. Smaller vendors may have less robust security, increasing breach risks. Where possible, choose tools with data security controls, like opting out of model training and strong authentication. Review the AI tool's privacy policy and security documentation.
* Treat AI tools like public spaces. Assume AI interactions are not private. Be as careful as in public forums. Never input sensitive company information. Think before you type. Consider data safety and potential harm from exposure or unexpected agent actions.
* Verify AI information for accuracy, context, and originality. AI tools can be inaccurate, misleading, irrelevant, impractical, plagiarized, or biased. Critically evaluate and double-check important AI-provided information, especially facts, figures, and recommendations. Confirm accuracy and relevance using trusted sources before business decisions or actions.
* Respect data classifications. Handle data according to classifications (Public, Internal, Confidential, Restricted). Never input classified data into public AI tools.
* Report suspicious activity immediately. Report unusual, unexpected, or harmful AI tool behavior to security.
* Be transparent about AI use. When AI tools significantly contribute to work products shared internally or externally, disclose AI's role. Transparency allows for appropriate review, verification, and assessment, considering potential inaccuracies and biases.

For AI Agents:

* Perform Testing and Validation of AI Agents. Before production deployment, rigorously test and validate AI agents in secure, non-production environments. Include security vulnerability assessments, functional testing, and testing for unintended consequences or biases. Before deploying AI agents, conduct a risk assessment to evaluate agent actions, data access, system impact, and security/compliance risks, and implement needed controls.
* Establish Human Oversight for AI Agents. Implement human oversight, monitoring, and intervention for AI agents, especially for autonomous or critical tasks. Define escalation paths for unexpected agent behavior.
* Define Clear Objectives and Boundaries for AI Agents. Clearly define the purpose, scope, and limitations of deployed AI agents. Ensure agents operate within defined boundaries and access only necessary systems/data.

Avoid the following to protect company interests and ensure responsible AI usage:

* Do not share confidential company data with public AI tools. Never input sensitive company information into public AI tools. When unsure, err on caution.
* Do not assume AI tools are inherently secure, private, or always accurate. AI tools, especially public ones, are not foolproof, private, or always accurate/unbiased. Never rely on AI as the sole source of truth, security, or compliance advice. Use your judgment and verify information.
* Do not install unapproved AI tools. Do not install unapproved AI tools or software, on company devices without formal approval.
* Do not use AI tools to bypass company security controls or policies. Do not use AI to circumvent security measures or policies, including unauthorized system/data access.

Guidance for Determining Data Sensitivity

To use AI tools safely, carefully consider data sensitivity. "Yes" to any of these questions indicates sensitive data prohibited for public AI tools:

* Is it classified (are there classification labels)?
* Could a leak cause harm (financial, reputational, legal, privacy)?
* Is it company IP, personal or customer data?
* Could exposure enable malicious activity?

When unsure, assume data is sensitive and avoid its use in public AI tools.

**Conclusion**

This policy promotes safe and responsible AI tool use, balancing risks and benefits. AI technology and the associated security risks are quickly evolving, so policies must be carefully reviewed. By adhering to this policy, every employee will help protect company information, ensure operational continuity, and maintain legal compliance in the age of AI and increasingly autonomous systems.

Contact the security team for policy questions, concerns, feedback, or to report suspected AI-related security incidents. Your vigilance and proactive communication are critical for secure and productive AI use.

---

# Wrapping Up

By implementing and adhering to a good AI security policy, organizations can effectively manage the security risks associated with their workforce using AI tools. As AI technology continues to advance and proliferate, it’s crucial to adapt security policy to keep pace. By staying informed and proactive, organizations can harness the power of AI while safeguarding their interests.

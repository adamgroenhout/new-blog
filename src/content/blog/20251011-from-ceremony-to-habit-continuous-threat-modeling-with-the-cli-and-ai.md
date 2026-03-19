---
title: "From Ceremony to Habit: Continuous Threat Modeling with the CLI and AI"
description: "From Ceremony to Habit: Continuous Threat Modeling with the CLI and AI"
pubDate: "2025-10-11"
---

![imgur](https://i.imgur.com/uQtYcJu.png.image)

# Threat Modeling from the CLI

Threat modeling *should* be done early and often to produce and maintain secure systems. A significant reason why threat modeling is not done at all is that it typically takes a lot of time and work, at least relative to the perceived benefits. It’s often a high-effort, periodic ceremony when it should be a low-friction, frequent habit. We should pursue opportunities to decrease the barrier for entry, make it less intimidating, and reduce friction throughout the process. To this end, I built a [Gemini CLI extension for threat modeling](https://github.com/adamgroenhout/gemini-cli-threat-model-extension). It takes any provided content as input and creates a threat model for it.

Threat modeling is something I often find myself turning towards whenever I get the chance. [The last time](/blog/20250508-ai-and-threat-modeling-augmentation-not-automation-yet/) I wrote about this, I offered a brief overview of the state of threat modeling with AI. Even though it was only six months ago, half a lifetime in today’s AI development time scale, the basic claims remain the same. Of course, LLM performance has improved, but perhaps the most significant movement has been related to context engineering. More people are aware of the importance of having the right context in the right place at the right time, and this is increasingly reflected in tools and shared practices.

An accessible and easy-to-use tool like this supports the ideal that “security should be continuous”. The concept is that actions to understand and improve the security posture of a system should be taken as often as possible, particularly around changes to design, configuration, and operating environment. Specific tools aside, what matters is that security vulnerabilities and weaknesses are identified and addressed before they are exploited and before the cost to fix them balloons.

This approach streamlines security by simplifying the process of identifying security risks and mitigations during design and development, making it accessible through a few keystrokes. It also enhances context for risk assessment by integrating organizational context files to inform overall risk ratings (e.g., high, medium, low) for identified weaknesses, providing a more accurate threat model.

Furthermore, it enables automated and integrated threat modeling by incorporating threat modeling actions into existing scripts, automation, and build pipelines for seamless integration. Finally, the toolset is easily shareable and crowdsourced, packaged as an extension for easy sharing, and leveraging open-source to foster collaborative iteration. This allows organizations to collectively refine their threat modeling toolkit, accelerating learning and improving overall value for all teams.

Agentic CLI tools like Gemini CLI, Codex, Claude Code, etc. are designed to manage context well, and bring AI capabilities to the command line, where many users are already working, in development, operations, and more. The Gemini CLI provides a solid framework for these things, and its extensions provide a powerful way to implement custom capabilities.

# The Extension

A [Gemini CLI extension](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/index.md) is a package of everything needed to power a single custom command. The package consists of at least a prompt and context (e.g. GEMINI.md file), and can also include code and a list of employed MCP servers. Although this kind of readily available and powerful threat modeling tool in the CLI feels a little like spellcasting, there’s no serious magic here. There is a prompt, a back-end AI (the LLM and scaffolding), and then the subject of the threat model.

I kept this [threat modeling extension](https://github.com/adamgroenhout/gemini-cli-threat-model-extension) *very simple* to demonstrate the functionality and ease of use. If this was used for threat modeling within an organization, for production systems, or otherwise where stakes are high, it would be more complex and aligned to appropriate requirements like company policy and procedures, and applicable safety standards, etc. For a more sophisticated example, check out [Google’s first security extension for the Gemini CLI](https://github.com/gemini-cli-extensions/security); it is a powerful and practical static code security scanning solution.

The great thing about its universality is that it can produce a threat model for just about anything. The content to threat model can be at any level of conception and abstraction, from a one-sentence idea or back of the napkin sketch, all the way to a fully designed and codified system. In the last section below, I offer two quick examples of different kinds of input, and their threat models. If you want a laugh, do take a look at the threat model for the family game of Monopoly 😅.

## Reminder

Remember that this is still generative AI and it is non-deterministic, so hallucinations and inaccuracies **will be present** somewhere in model output. This is *on top of* the fact that threat modeling is somewhat inherently subjective. Given all that, AI-produced threat models require careful review and potential revision before using them to evaluate and act on.

# Possibilities

Extensions are, well, extensible and there are many things that we could do to improve upon this simple start. The instructions could direct Gemini to produce three different variants of threat models for a single input, for user review and selection of the best one. Gemini could be directed to select the best elements of each of the three according to specified criteria and produce a single best final output.

We could add specific instructions to produce different kinds of threat models based on the type of system and environment, or for the most applicable threat modeling framework, (e.g. STRIDE, PASTA, OCTAVE, etc.). Similarly, the risk assessment methodology for each threat risk rating could be tuned to meet applicable compliance, organization, or business unit-level requirements.

Threat models could be tailored to specific threat actors and their respective TTPs, and that could be mapped to the corresponding MITRE ATT&CK framework elements. Related data (or really, anything applicable) could be dynamically pulled in via direct API or MCP to enrich and shape the threat model, improving its accuracy and overall value, in context.

Actions could be chained together, such that the threat model output is sent to relevant targets. For example, if a team operates in Jira or similar work management platforms, the extension could take each risk and remediation recommendation and create a new issue or ticket for it and place it in the team’s backlog. Alternatively, the whole threat model document could be sent to a security team for review. By doing this, a single command creates a threat model and pushes its content downstream for immediate planning and action.

These are just top-of-mind ideas. There are so many possibilities with tools like this to improve threat modeling speed, efficiency, and value. More importantly, and as I’ve said before, this can enable people to see and respond to threats that they otherwise would not be able to take time for.

# Threat Model Examples

Threat modeling should cover analysis for any system with rules, assets, and adversaries. To prove the point, I ran it against two very different targets: a complex AWS architecture and a family game of Monopoly. These are unedited, pulled straight from the Gemini CLI.

The AWS model is what you'd expect; a breakdown of risks like firmware tampering, device identity spoofing, and DDoS attacks. The Monopoly model, however, is where the magic is. It correctly identifies threats like "Unauthorized Fund Allocation (The 'Silent Loan')," "Board State Disruption (The 'Rage Quit')," and mitigations like appointing a trusted banker (Separation of Duties). It’s a demonstration that the underlying logic can reason about adversarial behavior in any system, technical or social.

## Example Threat Model #1

### A Family Game of Monopoly

INPUT

```
/security:threat-model “playing Monopoly with my partner and our children”
```

OUTPUT

```
✦ Threat Model: Playing Monopoly with a Partner and Children

  1. Executive Summary

  This threat model analyzes the risks associated with a casual game of Monopoly among family members. The primary assets are the integrity of the game state (money, properties) and the overall enjoyment of all players. The most critical threats
  identified are Tampering with game assets (e.g., unauthorized taking of funds from the bank) and Denial of Service (e.g., a player rage-quitting and flipping the board). The risk is heightened by the unpredictable nature of younger players. The core
  mitigation strategy involves establishing a trusted, neutral banker and clearly communicating the rules and code of conduct before the game begins to ensure a fair and enjoyable experience for everyone.

  2. Threat Analysis

  2.1. Threat: Unauthorized Fund Allocation (The "Silent Loan")

   * Category: Tampering, Elevation of Privilege
   * Description: A player acting as the Banker gives themselves extra money when making change or passing Go, or takes a "loan" from the bank, a privilege not afforded to other players. This gives them an unfair financial advantage.
   * Affected Components:
       * The Bank's cash reserves
       * The player's personal cash-on-hand
       * Game fairness
   * Risk: High
   * Mitigation:
       * Separation of Duties: Appoint a dedicated, trusted Banker who is not focused on their own game strategy (e.g., the partner).
       * Auditing: All players should casually watch the Banker during transactions to ensure correct change is given.
       * Clear Policy: Explicitly state at the beginning of the game that no loans are allowed from the bank.

  2.2. Threat: Board State Disruption (The "Rage Quit")

   * Category: Denial of Service
   * Description: A player, typically a child, becomes frustrated with the game's outcome and physically disrupts the board, scattering pieces, properties, and money. This effectively ends the game for all legitimate players.
   * Affected Components:
       * Game Board (physical state)
       * Player Tokens, Houses, Hotels
       * Game availability
   * Risk: Medium
   * Mitigation:
       * Pre-game Briefing: Set expectations about sportsmanship. Explain that it's a game of luck and it's okay to lose.
       * Incentivize Completion: Offer a non-game reward for finishing the game, regardless of who wins (e.g., dessert).
       * Disaster Recovery Plan: In the event of a minor disruption, have a plan to quickly restore the game state. Taking a quick photo of the board every few rounds can help.

  2.3. Threat: Property Development Fraud

   * Category: Tampering
   * Description: A player places more houses on a property than they are entitled to, or builds a hotel without first having four houses on each property of that color set. This bypasses the game's building resource constraints.
   * Affected Components:
       * Property deeds
       * House and Hotel tokens
       * Rent calculations
   * Risk: Medium
   * Mitigation:
       * Peer Review: All players should be aware of the building rules. Encourage players to announce their building intentions clearly.
       * Physical Constraints: Keep all property deeds face up in front of each player so everyone can see the current development status.

  2.4. Threat: Illegitimate Rent Collection

   * Category: Spoofing, Repudiation
   * Description: A player lands on an opponent's property but tries to move past it quickly, hoping the owner doesn't notice. If caught, the player may deny landing on the space ("Repudiation"). Alternatively, a property owner may falsely claim a player
     landed on their property when they did not ("Spoofing").
   * Affected Components:
       * Player Tokens
       * Rent transactions
   * Risk: Low
   * Mitigation:
       * Rule of Law: Enforce the rule that rent must be demanded before the next player rolls the dice. This creates a time-bound window for the transaction.
       * Public Scrutiny: Players should pay attention to where others are moving their tokens on the board.

  2.5. Threat: Information Disclosure of Financial Status

   * Category: Information Disclosure
   * Description: A player attempts to peek at another player's hidden cash reserves to gain an unfair strategic advantage by knowing exactly how much money their opponents have for auctions or trades.
   * Affected Components:
       * Player's personal cash-on-hand
       * Strategic negotiations
   * Risk: Low
   * Mitigation:
       * Physical Security Controls: Players should be instructed to keep their money folded or stacked in a way that conceals the total value.
       * Clean Desk Policy: Maintain a tidy playing area to make it obvious if someone is trying to peek.

  3. Conclusion

While Monopoly is a game, applying a threat model reveals several vectors for disputes and unfair play, especially in a family setting. The primary risks are not technical but social, revolving around trust and sportsmanship.
By implementing simple "security controls" such as appointing a trusted Banker, setting clear rules, and promoting a culture of fair play, the family can mitigate most of these threats and ensure the game remains a fun and engaging activity for everyone involved.
```

## Example Threat Model #2

### An AWS reference architecture for an Electric Vehicle Charging Station Management System

Note: I reviewed the AWS reference architecture page and chose this simply because it stood out to me as an interesting system.

INPUT

```
/security:threat-model https://docs.aws.amazon.com/architecture-diagrams/latest/electric-vehicle-charging-station-management-software/electric-vehicle-charging-station-management-software.html#electric-vehicle-charging-station-management-software-option-11
```

OUTPUT

```
 ✓  WebFetch Processing URLs and instructions from prompt: "Please fetch the content of https://docs.aws.amazon.com/architecture-diagrams/latest/electric-veh..."

✦ Based on the provided AWS architecture diagram for an Electric Vehicle Charging Station Management Software (Option 1: Container-based), here is a detailed threat model.

  Threat Model: Electric Vehicle Charging Station Management Software

  1. Executive Summary

  This threat model analyzes the container-based AWS architecture for managing electric vehicle charging stations. The system's primary assets include user Personally Identifiable Information (PII), billing data, the operational
  integrity of the charging stations (EVSEs), and the availability of the service for EV drivers.

  The most critical threats identified are:
   * Tampering with firmware updates, which could lead to a widespread Denial of Service or complete takeover of charging stations.
   * Spoofing of EVSE devices, allowing malicious devices to inject false data or disrupt the network.
   * Denial of Service (DoS) attacks against the public-facing endpoints (API Gateway and Network Load Balancer), which would prevent users from managing charging sessions.
   * Information Disclosure of sensitive user data and session history through insecurely configured services.

  Mitigations should focus on a defense-in-depth strategy, including strong device and user authentication, securing the software supply chain (firmware updates), rigorous IAM policies based on the principle of least privilege, and
   comprehensive logging and monitoring to detect anomalies.

  2. Threat Analysis

  2.1. Threat: Malicious Firmware Update via S3 Tampering

   * Category: Tampering, Denial of Service
   * Description: An attacker with unauthorized access to the Amazon S3 bucket storing firmware images could replace a legitimate firmware file with a malicious one. When the Charge Point Operators push this update, it could be
     deployed to the entire fleet of EVSEs, causing them to malfunction (bricking), exfiltrate data, or become part of a botnet.
   * Affected Components:
       * Amazon S3 (firmware storage)
       * EVSEs (physical charging stations)
       * Management Microservice (initiates the update)
   * Risk: High
   * Mitigation:
       * Code Signing: All firmware binaries must be digitally signed. The EVSE devices must be programmed to verify the signature before applying any update.
       * S3 Bucket Security: Implement strict IAM policies for the S3 bucket. Enable MFA Delete, versioning, and access logging. Use S3 Block Public Access.
       * Vulnerability Scanning: Integrate automated scanning of firmware images for known vulnerabilities as part of the CI/CD pipeline before they are uploaded to S3.

  2.2. Threat: EVSE Spoofing and Communication Interception

   * Category: Spoofing, Tampering, Information Disclosure
   * Description: An attacker could attempt to spoof a legitimate EVSE to connect to the backend. By successfully impersonating a device, they could send false OCPP messages (e.g., fake charging sessions for billing fraud) or
     receive sensitive configuration data. If the communication channel is not secure, an attacker could also perform a Man-in-the-Middle (MitM) attack to intercept and tamper with data in transit.
   * Affected Components:
       * Network Load Balancer (NLB)
       * AWS Lambda (OCPP message handler)
       * Amazon DynamoDB (EVSE registry)
       * EVSEs
   * Risk: High
   * Mitigation:
       * Mutual TLS (mTLS): The architecture correctly specifies using AWS Certificate Manager for EVSE authentication. This implies using client-side X.509 certificates on each EVSE, which should be strictly enforced at the NLB
         to establish a mutually authenticated TLS channel.
       * Certificate Lifecycle Management: Implement a robust process for provisioning, rotating, and revoking device certificates.
       * Network-level Validation: The backend should verify that the identity in the client certificate matches the claimed identity in the OCPP message payload.

  2.3. Threat: Denial of Service (DoS) Against Public Endpoints

   * Category: Denial of Service
   * Description: The system has two primary public entry points: the Amazon API Gateway for the web application and the Network Load Balancer for EVSE traffic. An attacker could flood these endpoints with a high volume of
     traffic, overwhelming the backend ECS services or Lambda functions. This would render the service unavailable, preventing legitimate drivers from starting or stopping charging sessions and operators from managing the
     stations.
   * Affected Components:
       * Amazon API Gateway
       * Network Load Balancer (NLB)
       * Amazon ECS on Fargate
       * AWS Lambda
   * Risk: High
   * Mitigation:
       * AWS Shield: Use AWS Shield Advanced for DDoS protection on the NLB, API Gateway, and CloudFront distribution.
       * API Gateway Throttling: Configure usage plans and throttling limits on the API Gateway to control the rate of incoming requests.
       * Web Application Firewall (WAF): Deploy AWS WAF on both CloudFront and the API Gateway to block malicious traffic patterns (e.g., SQL injection, cross-site scripting) and apply rate-based rules.
       * Auto Scaling: Configure ECS services to scale automatically based on load to absorb smaller traffic spikes.

  2.4. Threat: User Privilege Escalation

   * Category: Elevation of Privilege
   * Description: The system serves two distinct user roles: EV Drivers and Charge Point Operators. A flaw in the API authorization logic could allow a regular driver to access operator-only API endpoints. This would allow them to
     view data for all users, modify the configuration of any charging station, or disrupt the entire service.
   * Affected Components:
       * Amazon Cognito (Identity Management)
       * Amazon API Gateway (API enforcement)
       * Backend Microservices (Business Logic)
   * Risk: Medium
   * Mitigation:
       * Fine-Grained Access Control: Use Cognito Groups to manage user roles. In the backend, API authorizers (e.g., a Lambda authorizer) must validate the user's group membership from the JWT token on every sensitive API call.
       * Principle of Least Privilege: Ensure that the IAM roles assumed by the microservices grant only the permissions necessary for their specific function. For example, a service handling user profiles should not have
         permission to modify the QLDB transaction ledger.
       * Code Reviews and Testing: Regularly perform security-focused code reviews and penetration testing to identify and fix authorization bypass vulnerabilities.

  2.5. Threat: Immutable Log Tampering

   * Category: Tampering
   * Description: While Amazon QLDB provides an immutable, cryptographically verifiable transaction log, the service itself is still controlled by IAM. A compromised administrator account or a service with excessive permissions
     could potentially delete the entire ledger or drop tables, leading to a loss of all historical transaction data.
   * Affected Components:
       * Amazon QLDB
       * IAM Roles and Policies
   * Risk: Medium
   * Mitigation:
       * QLDB Ledger Deletion Protection: Enable deletion protection on the QLDB ledger to prevent accidental or malicious deletion through the console or API.
       * Least Privilege IAM for QLDB: Create highly restricted IAM policies for services that interact with QLDB. The primary application should only have qldb:SendCommand permissions and should not have permissions to delete
         ledgers or tables (qldb:DeleteLedger, qldb:DropTable).
       * Auditing: Use AWS CloudTrail to monitor all management API calls to QLDB and configure alerts for sensitive actions like DeleteLedger.

  3. Conclusion

The container-based architecture for the EV Charging Management System provides a scalable and robust foundation. However, its distributed nature and connection to physical IoT devices introduce significant security challenges. A successful security posture depends on a defense-in-depth approach.
Key priorities must include hardening the device-to-cloud communication channel with mTLS, securing the firmware update process with code signing, implementing strict, role-based access control for all users and services, and deploying robust DDoS and application-layer protection at the network edge.
Continuous monitoring and auditing are essential to ensure the ongoing integrity and availability of this critical infrastructure.
```

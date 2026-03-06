---
title: "From Ceremony To Habit Continuous Threat Modeling With The CLI And AI"
description: "From Ceremony To Habit Continuous Threat Modeling With The CLI And AI"
pubDate: "2025-10-11"
---



Threat modeling should be done early and often to produce and maintain secure systems. A significant reason why threat modeling is not done at all is that it typically takes a lot of time and work, at least relative to the perceived benefits. It’s often a high-effort, periodic ceremony when it should be a low-friction, frequent habit. We should pursue opportunities to decrease the barrier for entry, make it less intimidating, and reduce friction throughout the process. To this end, I built a Gemini CLI extension for threat modeling. It takes any provided content as input and creates a threat model for it.

Threat modeling is something I often find myself turning towards whenever I get the chance. The last time I wrote about this, I offered a brief overview of the state of threat modeling with AI. Even though it was only six months ago, half a lifetime in today’s AI development time scale, the basic claims remain the same. Of course, LLM performance has improved, but perhaps the most significant movement has been related to context engineering. More people are aware of the importance of having the right context in the right place at the right time, and this is increasingly reflected in tools and shared practices.

An accessible and easy-to-use tool like this supports the ideal that “security should be continuous”. The concept is that actions to understand and improve the security posture of a system should be taken as often as possible, particularly around changes to design, configuration, and operating environment. Specific tools aside, what matters is that security vulnerabilities and weaknesses are identified and addressed before they are exploited and before the cost to fix them balloons.

This approach streamlines security by simplifying the process of identifying security risks and mitigations during design and development, making it accessible through a few keystrokes. It also enhances context for risk assessment by integrating organizational context files to inform overall risk ratings (e.g., high, medium, low) for identified weaknesses, providing a more accurate threat model.

Furthermore, it enables automated and integrated threat modeling by incorporating threat modeling actions into existing scripts, automation, and build pipelines for seamless integration. Finally, the toolset is easily shareable and crowdsourced, packaged as an extension for easy sharing, and leveraging open-source to foster collaborative iteration. This allows organizations to collectively refine their threat modeling toolkit, accelerating learning and improving overall value for all teams.

Agentic CLI tools like Gemini CLI, Codex, Claude Code, etc. are designed to manage context well, and bring AI capabilities to the command line, where many users are already working, in development, operations, and more. The Gemini CLI provides a solid framework for these things, and its extensions provide a powerful way to implement custom capabilities.

A Gemini CLI extension is a package of everything needed to power a single custom command. The package consists of at least a prompt and context (e.g. GEMINI.md file), and can also include code and a list of employed MCP servers. Although this kind of readily available and powerful threat modeling tool in the CLI feels a little like spellcasting, there’s no serious magic here. There is a prompt, a back-end AI (the LLM and scaffolding), and then the subject of the threat model.

I kept this threat modeling extension very simple to demonstrate the functionality and ease of use. If this was used for threat modeling within an organization, for production systems, or otherwise where stakes are high, it would be more complex and aligned to appropriate requirements like company policy and procedures, and applicable safety standards, etc. For a more sophisticated example, check out Google’s first security extension for the Gemini CLI; it is a powerful and practical static code security scanning solution.

The great thing about its universality is that it can produce a threat model for just about anything. The content to threat model can be at any level of conception and abstraction, from a one-sentence idea or back of the napkin sketch, all the way to a fully designed and codified system. In the last section below, I offer two quick examples of different kinds of input, and their threat models. If you want a laugh, do take a look at the threat model for the family game of Monopoly 😅.

Remember that this is still generative AI and it is non-deterministic, so hallucinations and inaccuracies will be present somewhere in model output. This is on top of the fact that threat modeling is somewhat inherently subjective. Given all that, AI-produced threat models require careful review and potential revision before using them to evaluate and act on.

Extensions are, well, extensible and there are many things that we could do to improve upon this simple start. The instructions could direct Gemini to produce three different variants of threat models for a single input, for user review and selection of the best one. Gemini could be directed to select the best elements of each of the three according to specified criteria and produce a single best final output.

We could add specific instructions to produce different kinds of threat models based on the type of system and environment, or for the most applicable threat modeling framework, (e.g. STRIDE, PASTA, OCTAVE, etc.). Similarly, the risk assessment methodology for each threat risk rating could be tuned to meet applicable compliance, organization, or business unit-level requirements.

Threat models could be tailored to specific threat actors and their respective TTPs, and that could be mapped to the corresponding MITRE ATT&CK framework elements. Related data (or really, anything applicable) could be dynamically pulled in via direct API or MCP to enrich and shape the threat model, improving its accuracy and overall value, in context.

Actions could be chained together, such that the threat model output is sent to relevant targets. For example, if a team operates in Jira or similar work management platforms, the extension could take each risk and remediation recommendation and create a new issue or ticket for it and place it in the team’s backlog. Alternatively, the whole threat model document could be sent to a security team for review. By doing this, a single command creates a threat model and pushes its content downstream for immediate planning and action.

These are just top-of-mind ideas. There are so many possibilities with tools like this to improve threat modeling speed, efficiency, and value. More importantly, and as I’ve said before, this can enable people to see and respond to threats that they otherwise would not be able to take time for.

Threat modeling should cover analysis for any system with rules, assets, and adversaries. To prove the point, I ran it against two very different targets: a complex AWS architecture and a family game of Monopoly. These are unedited, pulled straight from the Gemini CLI.

The AWS model is what you'd expect; a breakdown of risks like firmware tampering, device identity spoofing, and DDoS attacks. The Monopoly model, however, is where the magic is. It correctly identifies threats like "Unauthorized Fund Allocation (The 'Silent Loan')," "Board State Disruption (The 'Rage Quit')," and mitigations like appointing a trusted banker (Separation of Duties). It’s a demonstration that the underlying logic can reason about adversarial behavior in any system, technical or social.

INPUT

OUTPUT

Note: I reviewed the AWS reference architecture page and chose this simply because it stood out to me as an interesting system.

INPUT

OUTPUT

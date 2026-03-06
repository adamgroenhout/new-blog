---
title: "Review CSAs CBRA For AI Systems"
description: "Review CSAs CBRA For AI Systems"
pubDate: "2025-12-23"
---



The rigor should match the risk. That’s a pithy phrase. It’s one of the main ideas in a new whitepaper from the Cloud Security Alliance (CSA), titled Capabilities-Based Risk Assessment (CBRA) for AI Systems. One has to wonder if internally, the CSA verbally refers to CBRA as cobra. I digress.

“High-risk systems demand rigorous AICM implementation, while lower-risk systems may require fewer governance layers.” The idea is that the breadth and depth of the security controls in a given AI system should be only what is required to effectively mitigate the system’s level of risk. Too many controls introduces too much friction and stifles innovation. Too few controls allows for too much risk and increases the probability that bad things will happen. The concept and the objective is not new. While the core objective isn't new, the CSA applies it with a distinct novelty in two specific areas.

The first novelty is that they propose arriving at a risk level by multiplying key attributes, beyond just the classic product of likelihood and impact. The attributes are contained in their “formula,” as Systems Risk = Criticality × Autonomy × Permission × Impact.

The second bit of novelty is that two of the factors used to determine risk levels are autonomy and permission. Permission is usually just one of dozens of dimensions that produce the risk picture in the aggregate. It’s typically not a first-class primitive in this way. Autonomy is used in the same way, but it’s also important to point out that it’s unique to AI systems, specifically agentic systems. That is also unique to security risk assessments generally.

This seeking of balance is in service to the higher-level goal of enabling innovation. They say practitioners must “...manage AI-related risk at the speed of innovation.” It’s a bit cheesy, but on point. Given the opportunities and threats related to AI, the ability to innovate broadly and at speed is so critical right now for businesses to be successful over the near-term horizon. Those who do not will fail. All that is to say that this overarching north star, balancing protection with progress, is the correct one to emphasize.

The whitepaper aims to "stimulate further discussion and refinement of risk-tiered approaches." It is essentially a conversation starter and a seed from which more actionable and prescriptive guidance should grow.

The CBRA whitepaper contains several ideas worth highlighting, particularly regarding how we conceptualize the "unknowns" of AI.

In the whitepaper, they ask: “What is the worst-case scenario if this AI system makes a mistake or is misused?” From that question, one should be able to start to see how much inherent risk the system presents. This reminds me of the NIST Risk Management Framework (RMF) and its categorization step to identify the “high water mark” in terms of threats to confidentiality, integrity, and/or availability. Similarly, the CBRA prescribes Low, Medium, and High “risk tiers” per system. There is significant value in maintaining this kind of simplicity - focusing on the worst possible outcome to determine the baseline of necessary controls.

It’s interesting to think about “consequence-based thinking” for agentic AI systems as if we are thinking about a human threat actor. The range of possible actions an agent can take, and the associated severity of harms, are immense. This is fundamentally different from non-AI systems that are more static and deterministic.

While thinking about variables of human and machine access is not new, the speed of action is. AI agents can move at a pace that makes traditional human-in-the-loop oversight insufficient. Furthermore, the control surface for agents is shifting. We need smart guardrails that allow them to operate without undue restrictions while identifying edge cases where threat events manifest.

In the Systems Risk = Criticality × Autonomy × Permission × Impact formula, probability (or likelihood) is notably absent. One has to wonder if it should be included or kept as a supplemental analysis. In traditional risk management, Risk = Impact × Likelihood. By removing likelihood, the CSA is essentially forcing a "worst-case" posture. If an organization used this, they would likely have to bring likelihood back in during the residual risk phase to prioritize which "High" risk systems to fix first.

I like the idea that systems with unmitigated threats will have a proportionally high score because of the multiplicative approach. On their scoring scale (1–3 for each element), a perfectly safe system scores a 1, while a dangerous one can jump to an 81 (or 48 in their specific example of an IAM-rotating agent). The differences stand out; the multiplicative approach creates a clear signal that demands attention.

How do they actually connect the risk tier to the requisite controls from the CSA AI Control Matrix (AICM)? Currently, they do not make a direct mapping. They simply say use the AICM as a “menu” to select from, using the risk tier as the lens.

This makes the framework feel incomplete. If a system is High risk, it should theoretically require the full spectrum of 240+ controls. A Low risk system might only require a baseline set. However, the AICM doesn't currently arrange controls into these tiers, unlike NIST 800-53 or the CIS Controls.

The whitepaper suggests that organizations define their own mapping. A potential meta-framework for this pipeline might look like:

Despite the strong conceptual foundation, the paper has some rough edges.

The paper occasionally slips into a "vendor exposure" perspective. It frames the risk as "the vendor's AI," which can be misleading. In an enterprise, the risk belongs to the organization using the AI, regardless of who built the model. The shared responsibility model for AI is complex, and the organization owns the bad outcomes.

The paper is a bit loose with its own formula. In different sections, the fourth variable is called "Impact," "Blast Radius," or "Impact Radius." While they all point to the same concept of "maximum plausible harm," this inconsistency suggests a lack of final quality control.

In the context of risk, the words "inherent" and "residual" are absent. This is a problem because the formula seems to require you to account for existing controls while trying to determine what controls you need. It creates a "chicken and egg" problem for the assessor.

So, what gap does this fill? It provides a unique primitive for Autonomy. In a world where AI is moving from "chatting" to "acting," we need a way to quantify the risk of an agent that can independently chain tools or call APIs. CBRA does this well.

For a cybersecurity professional, the "So What" is this: The CBRA is a tool to prevent compliance overkill for low-stakes AI experiments while providing a defensible justification for slowing down high-risk agentic deployments.

Moving forward, I’d like to see this integrated into more automated workflows. Imagine a tool where you provide a system description and an organizational context, and the AI calculates the CBRA score and recommends a subset of AICM controls. That is where the "speed of innovation" actually meets the "rigor of risk."

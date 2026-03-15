---
title: "A Review of the CSA Top Threats to Cloud Computing 2024"
description: "A Review of the CSA Top Threats to Cloud Computing 2024"
pubDate: "2024-08-07"
---

![Imgur](https://i.imgur.com/PcpavJH.png)

# Introduction

In this post, I review the [Cloud Security Alliance’s (CSA) Top Threats to Cloud Computing 2024](https://cloudsecurityalliance.org/artifacts/top-threats-to-cloud-computing-2024) report and share my thoughts on issues and improvements. It’s a great document, but there is clearly room for improvement.

First off, kudos to the CSA and the authors for putting together a good product, carrying the torch on from previous years, and being transparent about the survey and development methodologies used.

I appreciate that they are trying to increase the game-like appearance of the document by making the front page literally look like a game UI. It has language like “Choose your Fighter” and “Press Start”, along with very stylized aviators for each issue. This makes things feel a bit more fun and a bit less serious, which is certainly the default mindset of most security folks reading it. I suspect that most readers, once they put their eyes on it, immediately start having a hundred different thoughts about which threats apply to their organizations, what they can learn, should they trust what this document says, what utility might it have, etc.

# Purpose

The purpose of the report is, “to raise awareness of cloud threats, vulnerabilities, and risks.” Generally, this purpose is realized, at least, if readers carefully consume the content within each security issue. Apart from the issue descriptions and real-world examples, the other chunk of value is found in the “Key Takeaways” sections (more on that, below).

While this singular purpose is valid, the report also seems to be geared toward raising awareness of other CSA artifacts, like the CSA Security Guidance for Critical Areas of Focus in Cloud Computing and CSA CMM Controls. For each threat item, relevant artifacts from these two documents are mapped. I don’t see much value in doing so. It would be better to have them consolidated in an appendix at the end, to reduce the noise nested next to core content and make it easier to read and navigate.

Last bit. Even though this is focused on raising awareness of the issues, I can’t help but yearn for more detail and more actionable and targeted recommendations to counter these threats. The [Universal Cloud Threat Model](https://securosis.com/research/papers/the-universal-cloud-threat-model-for-cloud-native-security/) is a good example of this.

## Clarity

All of the listed “threats” are actually weaknesses (or conditions that could lead to failure to meet security objectives). I chalk up calling the report “Top Threats” to the need for an eye-catching and exciting title. This has obvious merit.

By name, all are problems or unwanted events except for Identity & Access Management (IAM) and Advanced Persistent Threats (APT). On IAM, the name should be changed to Inadequate IAM, as in, the management (control, execution, etc.) of IAM is inadequate, which leads to various bad outcomes. Vanilla APTs should be changed to something like Compromise from Advanced Persistent Threats (APT).

For each threat item’s section in the body of the document, the header above the item is “Security Issue” x. Top *threats* does sound better than top *issues*, at least in the sense that the former creates a sense of urgency and compels a potential reader to read the document.

From here on out, I will refer to the items as just security issues as it is a more accurate term.

# On the Security Issues

## Relationships between Issues

The relationships, be they casual or moderating, between these issues are important to understand. These issues should always be understood in context. This is not really expressed in the document. I counted only three instances where in the content of one security issue, there is a call out about the relationship with another issue, directly or indirectly.

The graph below illustrates some of the key relationships between the issues.

![Imgur](https://i.imgur.com/KY2f74G.png)

The line(s) between these 11 security issues are often very blurry, as captured in the report. For example, with Unauthenticated Resource Sharing, the first real-world example seems to be a better fit for the Insecure Interfaces & APIs, and the last two examples could be used for Misconfiguration & Inadequate Change Control. There are many other examples like this.

The next Top Threats report should include content that addresses relationships (and the implications) explicitly and consistently, whether in a single dedicated section, or for each security issue.

## On the First Issue

The number one ranked issue is “Misconfiguration & Inadequate Change Control”. It makes immediate intuitive sense to me that misconfiguration is the top issue, due to the speed at which things can and do change in cloud environments, and the difficulty that security people (and tools) have in maintaining awareness of change and reacting effectively (or failing to implement the right preventative controls).

Not only the speed of change but also the potential large *scope* of a change occurrence is a key part of this issue. Additionally, change control is often decentralized among product teams operating in a DevOps model. This is what makes misconfigurations and inadequate change control so ubiquitous.

The document identifies “common misconfigurations” examples as “secrets management” and “AWS S3 buckets”. Again, like calling IAM a security issue on its face, calling secrets management a misconfiguration does not make sense, as written. Calling an S3 bucket a security issue does make some sense :P. I’m joking here; that’s a jab at AWS’ ugly history with native S3 controls.

Misconfiguration in first place is also justified because it can be the root cause of other issues in the list, like, Identity & Access Management (IAM), Insecure Interfaces & APIs, Accidental Data Disclosure, System Vulnerabilities, and Unauthenticated Resource Sharing.

## On APTs

APTs should not be one of the top issues; it should not be included in this list. Most organizations will not be targets of APTs. Therefore, the vast majority of readers will not need to spend time understanding APTs at a deeper level. Moreover, APTs are threat actors, not threats (i.e. issues). So this “issue” falls outside of the purpose of the report.

For context, APTs use (i.e. exploit) the issues here to accomplish their objectives. All organizations should strive to understand the threats and threat actors that are most relevant to them, be they commodity attacks or APTs, and perform their due diligence to mitigate these threats. In that sense, there’s nothing particularly special about APTs, such that they should be in the list.

## The Key Takeaways Section

Each security issue has a “Key Takeaways” section. Takeaways primarily include mitigations (i.e. actions to take) to protect against the corresponding issues. This is an odd term to use here, in that it suggests that all the key information that readers should remember is contained in that text. This is not the case, as the authors stated that the primary purpose of this document is to “raise awareness” of these issues.

A few of the issue descriptions include a small list of mitigations, but most do not. Additionally, these first mitigations do not line up completely with the mitigations within the Key Takeaways section. The initial mitigations lists should be removed from the text, considering the room for inconsistency and more importantly, the space that’s already been dedicated for this purpose.

Only the first security issue has hyperlinks for each takeaway. There are two surprising things here; (1) none of the other security issues have links to external resources, and (2) the two links that are there point to two vendors, respectively. Or more accurately, one link points to a security vendor and the other link points to an article, which has links to security vendors, in what looks like a set up to advertise for its partners. Overall, this is not a great look for CSA.

Given all of this, the “Key Takeaways” section should be renamed to “Mitigations” and the few items that are not clearly mitigations should be removed.

## The Business Impact Section

I’m surprised that they include a business impact section at all because such impacts are so dependent on the organization that issues are being applied to. There are inconsistencies in terminology and unnecessary duplication across issues. I think its value is dubious, and might just be noise here that detracts from the other more important content.

One consolidated overview of the potential business impacts from these security issues would be a sufficient replacement for the dedicated business impact content appearing under each security issue. For example, here is a fine suggestion from Anthropic’s Claude (AI):

“Cloud security issues can have far-reaching consequences across multiple aspects of an organization. Technically, these issues often lead to unauthorized access, data breaches, and compromised system integrity, potentially resulting in the loss or exposure of sensitive information. Operationally, organizations may face significant disruptions, including system outages, degraded performance, and interruptions to critical business processes. Financially, the impact can be severe, encompassing direct losses from service disruptions, costs associated with incident response and system restoration, potential legal actions, and regulatory fines for non-compliance. Perhaps most damaging is the reputational impact, where security failures can erode trust among customers, partners, and stakeholders, potentially causing long-term harm to the organization's brand value and market position. The interconnected nature of cloud environments means that these impacts often cascade, amplifying the overall effect on the business and underscoring the critical importance of robust cloud security measures.”

# The Conclusion and Future Outlook Section

The list of cloud security “trends” is generally on-point but I will add one note. For supply chain risk, they only call out an increasing attack surface. While this is true, I think it’s also important to highlight increased availability risks due to cloud service provider consolidation and more single points of failure. As more organizations aggregate and consolidate more services and assets with fewer providers (i.e. think having all IaaS and Paas with *one* hyperscale cloud provider), the more risk of significant business impact they accept.

The “key mitigating strategies” are solid; however, they are very technology focused, with the exception of the security skills gap. There should be an additional item for cloud governance, and that includes security governance. With increased complexity, speed of change, more offensive AI, and continued commoditization of tools for bad actors to use, good governance has never been more important. Cloud governance supports continued alignment of work effort with organizational objectives, ensuring the right decisions are identified and made, and plans are well executed, all against a dynamic business and threat environment.

Lastly, there is the line, “cutting-edge security solutions, such as Cloud Security Posture Management (CSPM) or endpoint detection and response (EDR) tools”. It’s mostly inaccurate to call CSPM and EDR cutting-edge at this point given their *relatively* long existence at this point, and also it is ironic to call out EDR in this context, because it’s a tool for traditional endpoints (e.g. serverful virtual machines), which are (1) increasingly irrelevant in the cloud, and (2) in many cases don’t need or don’t justify EDR deployments. Instead of those examples, it would be better to list Cloud Native Application Protection Platform (CNAPP) and the associated suite of tools like Cloud Identity and Entitlements Management (CIEM) and Data Security Posture Management (DSPM), just to list two.

# Sweating the Details

It seems that the authors were moving quickly to ship this report. There are a lot of opportunities to improve on small details. Allow me to nit pick, but first, let me be clear. None of the following substantially reduces the value of this document, but these small issues may slightly distract and degrade the information absorbed by the reader. It might reduce the document’s credibility, if only by a little, and maybe only subconsciously. Anyway, this stuff does matter to some degree; when I see typos and a lack of polish, it does make me think, if they can’t get simple details right, maybe there are larger failings.

* **Inconsistencies.** There are surprising inconsistencies (surprising because they are so simple to avoid), like, in the “Observations” section, having “Lack of Cloud Security Architecture and Strategy” and “Inadequate Cloud Security Strategy”, and then having Identity & Access Management (IAM) alongside of Identity and Access Management (IAM), where the ampersand is replaced with “and”.
* **Unused or cited references**. I really appreciate that they include references here, all of the references should be used and cited, and if not, removed or moved into some general references section at the end of the document. The following references are not cited in the text.

  + Security Issue 2 (Identity & Access Management): References 4 and 5.
  + Security Issue 4 (Inadequate Cloud Security Strategy): Reference 1.
  + Security Issue 8 (System Vulnerabilities): References 2, 4, 5, and 7.
  + Security Issue 10 (Unauthenticated Resource Sharing): Reference 1.
* **Historical Issues.** In the table comparing the 2022 issues to the 2024 issues, Accidental Data Disclosure is mistakenly referred to as the Accidental Cloud Disclosure. In the 2022 report, this was called Accidental Cloud Data Disclosure, so even the reference to the last report is wrong.

There are many other smaller items, but I won’t call them out here.

# Conclusion

The CSA's Top Threats to Cloud Computing 2024 report continues to serve as a valuable resource for raising awareness about general cloud security issues. While it effectively highlights key risks and provides some useful insights, there's room for improvement in future reports:

* Clarify terminology and enhance consistency across sections.
* Explore and explain the relationships between different security issues.
* Remove APTs as a standalone issue.
* Focus the key takeaways solely on actionable mitigations.
* Consolidate the business impact content into a single, comprehensive overview.
* Address minor inconsistencies and polish the overall document.
  Despite these areas for improvement, the report remains a good tool for security professionals and others.

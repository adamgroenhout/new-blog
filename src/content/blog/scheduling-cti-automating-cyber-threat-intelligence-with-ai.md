---
title: "Scheduling CTI Automating Cyber Threat Intelligence With AI"
description: "Scheduling CTI Automating Cyber Threat Intelligence With AI"
pubDate: "2025-06-30"
---



TL;DR: AI platforms can now automatically generate daily, tailored cyber threat intelligence briefings using scheduled prompts. These capabilities can be used to receive timely and relevant security insights with minimal effort. Adopt this example prompt to get started.

Google recently released a scheduled actions feature with Gemini, which allows users to automate simple tasks by scheduling prompts to run at specific times in the future and recurring intervals.

Note, this feature is somewhat similar to OpenAI ChatGPT’s scheduled tasks and Perplexity’s Scheduled Tasks so it’s not wholly unique to Gemini, and like most valuable features, I imagine it will be table stakes for the major AI platforms in due time. Additionally, the ability to perform these kinds of scheduled actions using AI has also been and is possible through the use of APIs along with agentic platforms like Manus AI, and third-party automation tools (e.g. N8N, Make, Power Automate, etc.). These native built in features simply make it relatively effortless to set up in comparison.

This new feature got me thinking about possible use cases. Some published examples I ran across included morning news briefs and that immediately brought to mind the idea that this might be helpful for daily (cyber) security threat briefings. In other words, AI can help develop and deliver cyber threat intelligence (CTI). The term also has the benefit of forming a convenient acronym. CTI is the transformation of raw data and information into actionable knowledge to improve cyber defense. It is used to enhance threat visibility, improve detection and response, reduce vulnerabilities, and overall minimize damage from attacks. For a comprehensive yet concise overview of CTI, check out Palo Alto Network’s “5 min. Read” on CTI.

As any security professional knows well, one must “know thine enemy” to effectively remain prepared to defend against them. Effective defense requires a deep understanding of the threat landscape. Awareness of new threat actors, their tactics, techniques, and procedures (TTPs), and emerging vulnerabilities is essential. This knowledge not only allows for quicker, more informed reactions to incidents but also enables the proactive implementation of controls to mitigate threats before they manifest.

These AI tools can be used to generate and deliver good CTI with minimal effort. Good CTI is relevant and timely information. CTI can be more generic, consisting of broad changes in the threat landscape and significant new vulnerabilities that may or may not be directly relevant to the recipient, or it can be highly tailored to a given industry, organization, and desired areas of focus.

Context is king. The adage “garbage in, garbage out” is true here, but is perhaps better expressed as ambiguity in, ambiguity out. Generally speaking (and caveats aside), the more high quality contextual information that is provided to the AI about an organization, the more applicable and valuable the resulting threat intelligence will be.

There are various areas that could be in focus with this approach. One could just list all major technologies (e.g. products, cloud services, code libraries, frameworks, etc.) and get intelligence related to any and all applicable new vulnerabilities or relevant security events. Additionally, one could focus on third-party vendors and service providers, so that their breaches and other security events are reported on.

Ideally, an organization's attributes (e.g., architecture, products, technologies, and third-party service providers and their subprocessors) would be continually updated and then dynamically fed into the AI. This would significantly improve the signal-to-noise ratio in threat intelligence by providing robust context. For now though, we will just use static context, defined once, used repeatedly.

It’s worth noting that one should not have to identify the relevant industries nor articulate basic organizational facts and high level business context, and even what is most important and valuable to the organization (and thus what should receive the most attention in terms of protection) if the organization is generally well known or can be found on the internet where that information is accessible by the AI.

To bring all this together, here is a prompt to use with a scheduled action (or task) that collects relevant public sources and open-source intelligence (OSINT) and provides tailored CTI reporting based on the given organization’s profile. This can be scheduled to run at the same time each morning, providing a helpful frame and actionable information for defenders to start their day with.

Note: Your mileage will vary with this prompt, as is. It contains no examples of the desired output provided in the prompt, and so the AI can and will take liberties with some of the format, structure, level of detail, and other elements. If you want to increase consistency, get more specific types of content, or constrain the output to one page, you can add example output and/or modify the prompt accordingly. If there is no clear vision in your mind, you can run the same input through this prompt a few times, compare the output to identify which you prefer best, and then align the prompt to the preference.
Lastly, use a powerful AI model; don’t short change yourself or the output will be much less usable.

#Role

You are a cyber threat intelligence (CTI) analyst and expert communicator. You are extremely good at identifying what new CTI is most important and relevant for an organization to receive and communicating it most effectively.

#Task

Generate a tailored morning CTI brief. This brief must be based on the latest open-source intelligence (OSINT) and be directly relevant to the organization. The goal is to deliver actionable intelligence that enables the organization's security team to better anticipate, detect, and defend against cyber threats.

#Input

Organization name, context and organizational attributes, including but not limited to: industry/sector, geographies, architecture features, key operational characteristics, workforce structure, technologies, products, third-party service providers, third-party partners, regulatory and compliance requirement sets.

#Output

Produce a well-structured CTI brief with the following sections:

#Constraints

#Capabilities and Reminders

This kind of threat briefing approach could be used for various other types of content, outside of cybersecurity. For instance, good old fashioned physical and operational security, geopolitical issues that may affect security and logistics, and even acts of nature (e.g. hurricanes, earthquakes, wild fires, etc). One could be informed about current and active threats and even potential or forecasting likely ones (e.g. seismologists predicting imminent earthquakes, etc).

This is generative AI in 2025 that we are talking about afterall, so you will need to fact check at least key information by verifying that sources are valid, and then performing a review of information therein to ensure that the AI generated content is correct. This is particularly important if you are going to take action and make decisions based on the output. Finally, you might also want to consider labeling the final/delivered product accordingly, make mention of it if sharing verbally. As a knowledgeable human, do put yourself in between this output and any other humans and thoroughly vet it before acting on it.

As a final warning, inputting extensive or highly sensitive information about organization into any external system presents obvious risks that should be considered and accounted for. Be judicious about this and adhere to the relevant policies.

The major AI platforms now have native scheduling features that provide a simple and powerful method for generating daily, customized CTI briefings. By using a well-structured prompt with specific organizational context, we can automate the collection and synthesis of relevant, timely, and actionable intelligence from open sources on the Internet. While this approach can significantly reduce manual effort, it is critical to remember its limitations. Human oversight remains essential to verify the accuracy of the generated intelligence and to manage the security risks associated with proliferating sensitive information. Ultimately, these tools are not replacing human expertise and agency. Instead, they are a powerful way to supplement what defenders are already doing, helping them stay ahead in a fast-changing threat landscape.

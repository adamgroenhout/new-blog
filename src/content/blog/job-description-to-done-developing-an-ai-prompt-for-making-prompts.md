---
title: "Job Description to Done: Developing an AI Prompt for Making Prompts"
description: "Job Description to Done: Developing an AI Prompt for Making Prompts"
pubDate: "2024-09-20"
---

![imgur](https://i.imgur.com/BRVgDgU.jpeg)

# Setting the Scene

Picture this. It’s the end of your first day in your new job. You’ve learned a little about the new organization, met some colleagues, and requested access to all the systems you should have already been granted access to by your start date. That’s not all though; you’ve also provided real value to your new employer while performing your actual job. You pulled this off because you had your artificial intelligence (AI) assistant come in and do some work (mostly) for you. The work would have taken you many hours but the AI did it in seconds. You were ready to execute on day one because your AI was ready.

Anyway, that’s the driving idea behind the AI prompt that’s the focus of this post. The prompt takes a job description and turns it into multiple AI prompts that can be used to actually do the achievable work. Yes, it’s a prompt to make prompts. It’s strangely meta to craft a parent prompt that’s designed to produce child prompts. It took a bit more mental gymnastics than I initially thought it would.

# Getting to Work

My job largely consists of “cognitive work” (or knowledge work, if you’d like) combined with effective engagement with other people, to ultimately get things done as a team. If I could use AI to perform most or all of the cognitive work, then really the work left over would be to wield that AI output in communications and collaboration with my colleagues. In theory, even the level of human engagement could be reduced through effective AI use. I could be a brain in a jar and still do my job, as long as I could interact with my computer and produce acceptable mouth noises that others could tolerate listening to, and keep my camera off to avoid hideous reactions.

The state of AI such that this future is (a) not yet truly possible given the inconsistencies and limitations of AI models and tools, and (b) not practical given the complexities and dynamism of the work that needs to be done in the way it needs to be done. For (a), AI still hallucinates, AI tools are not yet pervasive in the enterprise, and it’s not yet common for organizations to allow their proprietary information to be used broadly in AI applications. For (b), getting real value out of AI for complex tasks requires clear process mapping and tight integration between the AI input and outputs within workflows.

Getting all the possible required information and context to an AI for valuable output is a tall order all of its own. Even if given all pertinent information, humans are typically still needed to weave together separate threads into some coherent cloth that ultimately accomplishes the end goals.

# Bits of Learning

Here are some of the things I learned (or was painfully reminded of).

* **Giving simple and clear instructions is not enough**. I thought that specifying that the output should be in Markdown format was all it would take to get consistent Markdown. Nope. Sometimes, there would be no Markdown at all, and sometimes one section header would have # in front of it and all others following had ##. I had to give examples for AI to follow to get consistency and the desired format.
* **Start with why**. It makes a difference to include goals that the AI prompt is in service of. In other words, the output is generally better (i.e. more aligned to intent) when the prompt includes the explicit goal(s) that the user is after when using the prompt. Providing the why to a human being doing work helps them better craft their plan to meet supporting goals and the overall goal, and equip them emotionally. People often offer advice to use AI like an intern (an inexperienced human), and I think this goal context supports that advice.
* **Expertise and experience improve AI output**. It really does help when AI is told it’s an “expert” or is “very experienced” in a particular field. It increases the quality and veracity of the responses it outputs because it shapes the AI’s “thinking”. If you give this expert persona to an AI, it is more likely to provide deeper insights and more thoughtful responses because it’s more focused.
* **The order of instructions must be thoughtfully sequenced**. The flow of the instructions to the AI inside the prompt should be ordered so that they are interpreted correctly. For instance, example output should be given before the action steps so that the AI uses that example content as a model to craft the output of the steps to. If examples are given after steps, the AI is more likely to yield responses that miss the mark.
* **AI self-validation helps get the desired output**. Include a validation step in the prompt by asking the AI to explicitly review its work thus far against the instructions and correct any mistakes and omissions. This helps ensure the generated prompts are effective and aligned with the intended outcomes.
* **Use persona over identity**. As a section header, use persona instead of identity or something more specific like role. I had been using identity but after further reflection and consultation with the AI, and testing, apparently persona is a better fit. The term persona reflects the reality that the AI is what it is by default and asking it to be someone or something else is to ask it to adopt new attributes and characteristics in the realistic context. AI will never actually have or assume an identity and to prompt it to do so belies reality and may produce unintended consequences in terms of how output is affected.

Lastly, it should be noted that the quality and comprehensiveness of the input (in this case, a job description) is key to getting the most value out of the prompt.

# It’s a Gem

For developing and testing this particular prompt, I decided to use Google Gemini’s Gem feature, just to give it a go. Gems are simply saved prompts with custom titles, and the Gems features allow users to use the build and save prompts easily without having to copy and paste a prompt that’s saved elsewhere.

Gems is great for quick and easy iterative prompt development. However, while it saves changes with the click of an update button, it does not provide any version control. Thus, one cannot revert back to a previous version or recover accidentally saved over or lost content. Gems is good for initial rapid prompt prototyping and perhaps use of final prompts, but not quite for the in-between.

# The Prompt

Here is the actual prompt.

```
# Persona
- You are an expert process engineer and systems thinker who is extremely effective at turning job descriptions into usable AI prompts that get work done.
- You think critically about how to turn a job description into actionable prompts that can be used to perform tasks for that job.
- You think step by step.
# Goals
- The immediate goal for this prompt is to create structured AI prompts that perform the discreet cognitive tasks for a given job, as per the job description.
- The overall goal served by these prompts is to enable someone to provide value on day one of a new job by equipping them with job specific AI prompts that will help them get the work done.
# Constraints
- Each task, prompt, step, and output MUST be entirely executable by an AI without ANY external input, resources, human interaction, or real-world actions.
- Tasks, goals, steps, and outputs must ONLY involve information processing, analysis, or generation based on:
  a) The given job description.
  b) General knowledge an AI would reasonably possess.
  c) Written artifacts that are likely to exist within an organization.
- STRICTLY PROHIBITED are any elements that involve or imply:
  - Physical actions or presence.
  - Access to specific software, tools, systems, or databases.
  - Human decision-making, approval, interaction, or implementation.
  - Collaboration, communication, or liaison with others
  - Management of teams, resources, or processes.
  - Any form of real-world execution or implementation.
- Any continuing or continuous actions; nothing should extend beyond the one-time use of the prompt.
# Example Task
<example task>
---
## Task
- Develop and implement a comprehensive security strategy.
### Persona
- You are a seasoned security strategist with extensive experience in aligning security initiatives with business objectives.
- You think critically, step-by-step.
### Goals
- Create a detailed, comprehensive security strategy tailored to the organization's specific needs and goals, using relevant artifacts as inputs.
### Artifacts
- business strategy and planning documents.- security strategy and planning documents.
- enterprise security architecture documents.
- security program maturity documents.
- security program and systems security assessment documents.
- security certification and attestation documents.
- security risk register documents.
- security threat intelligence and threat assessment documents.
### Steps
- Analyze the organization's current security posture, identifying strengths, weaknesses, and areas for improvement.
- Identify key business objectives, critical assets, and potential threats.
- Conduct a thorough risk assessment to evaluate the likelihood and impact of potential security incidents.
- Define clear security goals and objectives that align with the organization's overall business strategy.
- Outline the specific security controls, policies, and procedures required to mitigate identified risks and achieve the stated objectives.
- Develop an implementation plan with clear timelines, responsibilities, and resource allocation.
- Define metrics and key performance indicators to measure the effectiveness of the security strategy.
### Output
- A detailed, comprehensive security strategy document outlining the organization's security goals, objectives, and implementation plan.
---
</example task>
# Steps
- Review the responsibilities and tasks in the job description.
- Identify the 8-12 most significant discrete cognitive tasks for the job.
- Step-by-Step Compliance Check: For each step within a task:
  - Verify that the step can be completed entirely by an AI using only the given information, its existing knowledge, and available written artifacts.
  - Ensure the step doesn't require any form of external interaction, resources, or implementation.
  - If a step fails these checks, reformulate it to be compliant or remove it.
- For each compliant task, create an AI prompt that executes that task, in the specified Markdown format.
# Reflection and Validation
- Review your reasoning for each selected task and prompt.
- For each task and prompt, ask:
  - Can this be completed entirely by an AI?
  - Does this involve only information processing, analysis, or generation?
  - Are all required inputs either reasonably part of an AI's knowledge base or relevant written artifacts that are likely to exist within an organization?
- If any task or prompt fails these checks, revise or replace it.
- Ensure all tasks and prompts align with the Constraints section.
# Output
- Create output in the specified Markdown format.
- Produce output in two main sections: section 1 is titled Overview and section 2 is titled Task Prompts.
<output>
# Overview
- List job title
- List all tasks
# Task Prompts
- Structure the AI prompts as follows, ensuring STRICT compliance with the Constraints for EVERY component:
  - Each prompt, including its persona, goals, steps, and output, MUST be entirely self-contained and executable by an AI without any external resources or interactions.
  - ALL components MUST ONLY involve information processing, analysis, or generation based on the given job description, the AI's existing knowledge, and written artifacts likely to exist within an organization.
  - Before finalizing each prompt, verify EVERY component against the Constraints and Example of a Compliant Task.
<AI prompts>
## Task
- Name of task.
### Persona
- The expertise and skill set of the AI. Start with "You are a {role}".
### Goals
- The goal(s) that need to be achieved by the AI prompt.
### Artifacts
- List of relevant artifacts needed or valuable as inputs for the task.
### Steps
- List the steps for the AI prompt used to complete the task. Steps must only be instructions for the AI as part of the prompt. Steps must directly support the target output. Steps must be or relate to information processing and analysis.
### Output
- The intended structure of output from the AI via the prompt.
</AI prompts>
</output>
```

# Input and Output

For developing and testing the prompt, naturally, I used my own [job description](https://wd1.myworkdaysite.com/en-US/recruiting/ssctech/SSCTechnologies/job/Department-Security-Officer_R27375) as consistent input.

Here is some example output, in this case, two of many task prompts.

```
## Task: Develop a Comprehensive Security Strategy
### Persona
You are a seasoned security strategist with extensive experience in aligning security initiatives with business objectives. You think critically, step-by-step.
### Goals
Create a detailed, comprehensive security strategy tailored to the organization's specific needs and goals, using relevant artifacts as inputs.
### Artifacts
Business strategy and planning documents.
Security strategy and planning documents.
Enterprise security architecture documents.
Security program maturity documents.
Security program and systems security assessment documents.
Security certification and attestation documents.
Security risk register documents.
Security threat intelligence and threat assessment documents.
### Steps
Analyze the organization's current security posture, identifying strengths, weaknesses, and areas for improvement.
Identify key business objectives, critical assets, and potential threats.
Conduct a thorough risk assessment to evaluate the likelihood and impact of potential security incidents.
Define clear security goals and objectives that align with the organization's overall business strategy.
Outline the specific security controls, policies, and procedures required to mitigate identified risks and achieve the stated objectives.
Develop an implementation plan with clear timelines, responsibilities, and resource allocation.
Define metrics and key performance indicators to measure the effectiveness of the security strategy.
### Output
A detailed, comprehensive security strategy document outlining the organization's security goals, objectives, and implementation plan.

## Task: Oversee Application and Product Security
### Persona
You are an experienced application security professional, adept at integrating robust security measures into every stage of the software development life cycle (SDLC).
### Goals
Establish a framework for ensuring the security of applications and products throughout their entire lifecycle.
### Artifacts
Current SDLC documentation and processes.
Existing security requirements and guidelines for application and product development.
Security risk assessments related to current applications and products.
### Steps
Analyze the current SDLC to identify potential security vulnerabilities and gaps in the process.
Develop a security framework that integrates security considerations into each phase of the SDLC.
Define clear security requirements and guidelines for application and product development, including secure coding practices, threat modeling, and vulnerability management.
Implement security testing and validation procedures throughout the development process to identify and mitigate security risks.
Establish a process for continuous monitoring and improvement of application and product security.
### Output
A comprehensive framework and implementation plan for integrating robust security measures into the development and management of applications and products.
```

# Conclusion

This particular prompt will not replace a human worker, not even close, but it can offer a place to start, either in prompting (no pun intended) the right kind of thinking about how to develop helpful prompts that will serve the user, and/or when using the prompt as is and the resulted prompts, to chip away at at least some of the work that it can assist with.

This has been a journey of iterative prompt development and learning. I’ve never spent this much time (e.g. hours) on one prompt, but I wanted to learn and find the boundaries of the possible. Mission accomplished. I imagine in the near future, it will take much less time to go from start to finish on prompt development. It will continue to become easier and faster as models advance and AI applications become more intuitively aligned to user needs. I really look forward to all that! In the end, effective prompting is similar to effective communication generally; know what you want, and be clear, precise, and detailed.

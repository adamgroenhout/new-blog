---
title: "The Security Policy as Code Framework Model"
description: "The Security Policy as Code Framework Model"
pubDate: "2025-08-23"
---

![imgur](https://i.imgur.com/3AyvGPv.png.image)

# Intro

[My last post](https://www.adamgroenhout.com/organizational-security-policy-as-code/) introduced a framework for security policy as code. This post is its practical companion. I created a live model of the framework in a public GitHub repository. Its purpose is to demonstrate the framework and visualize its efficiency and real-world viability. This wasn't a long, complicated exercise. In around just 30 minutes, I built the core of the repository content and functions, and then iterated from there. I did this with the help of Google’s Jules. More on that in a moment, but first, here is a quick overview of what’s in the repo.

# The Model

The model reflects a comprehensive "policy as code" framework to manage documents as software artifacts. It uses a structured architecture of policies, standards, processes, and guidance, all controlled within a Git repo. By versioning documents and automating their lifecycle, the system enables teams to ensure that security policies remain current and are developed with the same rigor as production code. The framework is enhanced with automation to validate document structure, assign reviewers, and publish updates.

The model lives in a public GitHub repo:
<https://github.com/adamgroenhout/security-policy-as-code-framework-model>

The document portal is hosted with GitHub Pages:
[https://adamgroenhout.github.io/security-policy-as-code-framework-model](https://adamgroenhout.github.io/security-policy-as-code-framework-model/)

## Creating the Model

The following basic steps were used to create the model. These are simplified descriptions. For each task given to Jules, there is a corresponding loop where a pull request (PR) was created and I reviewed and adjudicated, eventually merging to the main branch in the repo.

### Steps

* Manually create the new GitHub repo.
* Manually create a new file (e.g. blogpost.md) in the repo to use as instructions and context for.
* Prompt Gemini (and iterate) to create a complete set of instructions (i.e. specifications) for Jules to create all the model content in the repo.
* Task Jules to…
  + Create the framework model core, using the specifications co-created with Gemini.
  + Create example policies, standards, processes, and guidance.
  + Add the final set of initial features (e.g. prescribing code owners for each document, implement linting, etc.).
* Iterate!

# Ok, Jules

[Jules](https://jules.google/) is an AI “asynchronous coding agent” that Google just released this summer. It has an intuitive UI, it’s easy to use, it’s generally very good at interpreting user input and following instructions. Jules has built in code quality and testing that’s all automated, and you can push output directly to GitHub. Google says that “Jules does coding tasks you don't want to do.” Or, in my case, it simply does all the coding :).

## Good Things

* Jules automatically added the name of each document into the readme file without my asking, which demonstrated its great awareness of context and general proactivity.
* Jules automatically put the yaml front matter into the new document types, with the same structure, but tailored to each type.
* A secure sandbox VM is created for each task. Well, sort of secure; it’s a start (see below).
* The human in the loop flow and balance is well designed.
* Explanations of plans and accomplishments are clear and concise.
* Jules checks its own work to see if output aligns with plans as it's working and then performs a “code review” when initial work is done.
* The UI design on mobile device browsers is well done, if not just a bit too cramped.

## Bad Things

* When I clicked on view PR after Jules created it, it would send me the first PR that was already approved. Mind you, this was in the mobile GitHub app. It did not happen on the desktop app.
* Occasionally, Jules was mysteriously very slow in responding to tasks and at least once, it hung up for no apparent reason and I had to ask it to continue.
* Jules needs to be improved on the security front…

# “Agentic ProbLLMs”

I’ll close here with a shout out to Johann Rehberger (aka wunderwuzzi) of [Embrace the Red](https://embracethered.com/) for sharing their good work discovering and articulating how Jules (and underlying model) weaknesses can be abused, largely through prompt injection.

All of this is fun, until bad actors come knocking and people make mistakes. These types of tools are super helpful, but they can quickly become a catastrophic liability. Be smart out there.

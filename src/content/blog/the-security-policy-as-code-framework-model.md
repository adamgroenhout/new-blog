---
title: "The Security Policy As Code Framework Model"
description: "The Security Policy As Code Framework Model"
pubDate: "2025-08-23"
---



My last post introduced a framework for security policy as code. This post is its practical companion. I created a live model of the framework in a public GitHub repository. Its purpose is to demonstrate the framework and visualize its efficiency and real-world viability. This wasn't a long, complicated exercise. In around just 30 minutes, I built the core of the repository content and functions, and then iterated from there. I did this with the help of Google’s Jules. More on that in a moment, but first, here is a quick overview of what’s in the repo.

The model reflects a comprehensive "policy as code" framework to manage documents as software artifacts. It uses a structured architecture of policies, standards, processes, and guidance, all controlled within a Git repo. By versioning documents and automating their lifecycle, the system enables teams to ensure that security policies remain current and are developed with the same rigor as production code. The framework is enhanced with automation to validate document structure, assign reviewers, and publish updates.

The model lives in a public GitHub repo:
https://github.com/adamgroenhout/security-policy-as-code-framework-model

The document portal is hosted with GitHub Pages:
https://adamgroenhout.github.io/security-policy-as-code-framework-model

The following basic steps were used to create the model. These are simplified descriptions. For each task given to Jules, there is a corresponding loop where a pull request (PR) was created and I reviewed and adjudicated, eventually merging to the main branch in the repo.

Jules is an AI “asynchronous coding agent” that Google just released this summer. It has an intuitive UI, it’s easy to use, it’s generally very good at interpreting user input and following instructions. Jules has built in code quality and testing that’s all automated, and you can push output directly to GitHub. Google says that “Jules does coding tasks you don't want to do.” Or, in my case, it simply does all the coding :).

I’ll close here with a shout out to Johann Rehberger (aka wunderwuzzi) of Embrace the Red for sharing their good work discovering and articulating how Jules (and underlying model) weaknesses can be abused, largely through prompt injection.

All of this is fun, until bad actors come knocking and people make mistakes. These types of tools are super helpful, but they can quickly become a catastrophic liability. Be smart out there.

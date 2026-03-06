---
title: "AI In The Enterprise Building A Checklist For AI Adoption"
description: "AI In The Enterprise Building A Checklist For AI Adoption"
pubDate: "2024-10-12"
---

![imgur](https://i.imgur.com/jLuu9aL.jpeg)

# Overview

I want to highlight two things with this post. The first is enterprise adoption of artificial intelligence (AI) and an [essay by Ethan Mollick](https://www.oneusefulthing.org/p/ai-in-organizations-some-tactics) on the topic, and how to make solutions to overcoming common challenges and barriers more tractable. The second is an approach to extracting actionable recommendations as a checklist from any content using AI. I use Mollick’s recommendations as the example text.

# Enterprise AI Adoption

Many notable companies have gone all in on AI adoption by creating robust programs to educate, equip, and push their workforce to use AI. Some examples include [JP Morgan Chase](https://www.pymnts.com/news/banking/2024/jpmorgan-all-new-employees-will-receive-ai-training/), [Google](https://www.forbes.com/sites/michaeltnietzel/2024/04/26/google-introduces-new-ai-training-course/), and [Pfizer](https://digiday.com/marketing/with-charlie-pfizer-is-building-a-new-generative-ai-platform-for-pharma-marketing/) to name a few. They’ve recognized AI as an essential accelerant for innovation and productivity. To this end, they’ve embraced AI as an almost fundamental tool within their organization, and my bet is that, while immediate benefits may yet not be very clear, they’ll benefit in the long run.

I’ve experienced rapid enterprise AI adoption personally, but this has been limited to accepting new AI features for existing tools, making some new AI tools available, and engaging in some light promotion and education. This has felt more like an “if you build it, they will come” approach. On the other hand, I’ve also experienced the other end of the spectrum where leadership has enthusiastically encouraged heavy use of consumer AI tools (e.g., Claude, ChatGPT, etc.), while not providing any tangible training, support programs, or even *integrated* tools. Clearly, I have not observed or have participated in deeper, highly structured programs that take individual employee use cases and turn them into codified processes for all to use, or robust employee AI training.

## Informed Opinions

Turning to Mollick’s post, I think he makes simple but important points about what needs to be focused on. He also offers tangible tactics for turning that focus into real value. This is where the checklist comes in, but we will get to that shortly.

Here are the main ideas:

* Individual AI adoption doesn't automatically translate to organizational benefits.
* Internal AI research and development is crucial for tailoring AI to specific organizational needs.
* Organizations need to foster a culture of AI experimentation and knowledge sharing.
* Rewarding AI innovation and addressing employee concerns about AI are key.
* Organizations must adapt their structures and leadership for an AI-driven future.

The overall takeaway is that organizations need to make explicit moves to actively shape and drive AI adoption. They should not rely only on individual effort and grassroots change over time, nor on disorganized and disjointed top-down pronouncements. They should be building transformational machines that consist of people, processes, and technology. I will acknowledge that this kind of initiative takes serious effort, and many organizations have so many other pressing issues to deal with that not doing this might feel justified. That said, this justification will only be valid for so long. As things progress, businesses that do not effectively build in AI will be overtaken by their competition.

## An Interstitial Note

It is quite possible, if not extremely likely, that this current moment in AI development and the associated discussions around human AI adoption for large workforces will look like a quaint idea, a little flash in the pan episode, in a few years. At that point, AI agents may be replacing humans at a rapid clip, less augmenting them. In this future, there will be no need to build large comprehensive AI tool integration programs because human workforces will be increasingly small, and effective leveraging of AI will not need special training. Working with AI will feel as natural as working with people, and dare I say, easier.

# Building Checklists

At the risk of offending the more emotionally optimistic part of ourselves, I want to point out that reading about good ideas does not translate into inherent readiness and roadmaps to implement those ideas, even though it feels like it just might. A clear checklist of actionable goals and tasks can help turn these ideas into reality. This can be in the form of a simple yet powerful checklist.

I built an AI prompt for just this purpose, which I share below. I wanted a checklist format as the output because, even if it is not actually used as a literal checklist, it is inherently action-oriented. Unchecked boxes in a checklist practically beg to be checked, and before one can honestly do so, they need to take action and complete the goal.

Here is the prompt:

```
# Persona
You are an expert at content analysis, planning, and communication. You think step by step.
# Goals
The goal is to produce clear, concise, and actionable checklists that the viewer can use immediately to execute in order to get things done.
# Steps
- Review the input text and identify all explicit recommendations.
- Review the input text and identify all implicit recommendations.
- Produce a checklist of the recommendations identified in the text as per the output format and organized into respective sections.
# Output
- All explicit recommendations must be listed under the section heading "Explicit Recommendations" and the same for implicit recommendations.
- All implicit recommendations must be listed under the section heading "Implicit Recommendations" and the same for implicit recommendations.
- Ensure all explicit recommendations are worded as closely as possible to the original text.
- All recommendations must start with an action verb.
## Format
☐ [Recommendation]
- Why: [The reason for or benefit of this recommendation]
- How: [Specific steps or actions to implement the recommendation]
- Details: [Additional context, resources, or considerations]
# Example
## Input Text: "To improve your website's SEO, you should focus on creating high-quality content. This means writing informative and engaging articles that are relevant to your target audience. Make sure your website is mobile-friendly, as Google prioritizes websites that offer a good mobile experience. Finally, build backlinks to your site from other reputable websites."
## Output Checklist:
Explicit Recommendations
☐ Create high-quality content
- Why: Improve search engine optimization (SEO) and attract more visitors.
- How: Write informative and engaging articles relevant to your target audience.
- Details: Consider using keyword research tools to identify relevant topics.
Implicit Recommendations
☐ Follow a user-centric approach
- Why: Search engines prioritize websites that provide a positive user experience. Focusing on user needs ultimately leads to better SEO results.
- How: By highlighting the importance of "informative and engaging articles" and a "good mobile experience," the text subtly advocates for prioritizing user satisfaction.
- Details: This aligns with Google's emphasis on user experience signals like page speed, mobile-friendliness, and content quality as ranking factors.
```

Taking Mollick’s post and the content from the “Getting help from your Cyborgs” section, here is the output using the prompt.

```
## Explicit Recommendations

☐ **Reduce fear around AI use.**
- Why: To encourage employees to explore and utilize AI tools without hesitation.
- How: Provide clear guidelines on acceptable AI use cases, be open to experimentation, and offer assurances that AI adoption won't lead to job losses.
- Details: Update internal legal departments on current AI risks and avoid overly restrictive policies.

☐ **Align reward systems to incentivize AI adoption.**
- Why: To motivate employees to embrace and utilize AI in their workflows.
- How: Offer substantial rewards for productivity gains achieved through AI, such as cash prizes, promotions, and flexible work arrangements.
- Details: Emphasize the organization's commitment to AI by offering incentives that reflect the potential of AI-driven productivity gains.

☐ **Model positive AI use from the top down.**
- Why: To demonstrate leadership support for AI adoption and inspire employees to follow suit.
- How: Encourage executives to actively use AI and share their experiences with the company.
- Details: Promote AI as a valuable tool for problem-solving and decision-making at all levels of the organization.

☐ **Provide opportunities for employees to showcase their AI use cases.**
- Why: To foster a culture of AI innovation and knowledge sharing.
- How: Organize public events like hackathons and prompt-sharing sessions, and create communities for AI enthusiasts.
- Details: Encourage cross-functional collaboration and identify AI talent across different departments.

☐ **Offer access to AI tools and training.**
- Why: To equip employees with the resources they need to effectively utilize AI.
- How: Provide access to advanced language models and platforms for developing AI solutions, and offer introductory training sessions.
- Details: Consider platforms like Claude 3.5, GPT-4, Gemini 1.5, OpenAI's GPTs, Claude's Projects, or Google's Gems.

## Implicit Recommendations

☐ **Establish clear and well-understood AI usage policies.**
- Why: To provide employees with a framework for responsible AI experimentation and innovation.
- How: Develop concise and accessible guidelines that outline acceptable AI use cases and ethical considerations.
- Details: Avoid vague or overly restrictive policies that may discourage employees from exploring AI tools.

☐ **Prioritize employee well-being and job security.**
- Why: To build trust and encourage employees to embrace AI without fear of negative consequences.
- How: Offer explicit guarantees that AI-driven productivity gains will not result in layoffs or job displacement.
- Details: Consider implementing measures to demonstrate the organization's commitment to employee well-being during the AI transition.

☐ **Foster a culture of psychological safety.**
- Why: To create an environment where employees feel comfortable sharing their AI experiences and innovations.
- How: Encourage open communication, actively listen to employee concerns, and address any anxieties related to AI adoption.
- Details: Cultivate a workplace culture where employees feel safe to experiment with AI without fear of judgment or retribution.

☐ **Promote a user-centric approach to AI development.**
- Why: To ensure that AI tools are designed to meet the needs of employees and enhance their productivity.
- How: Encourage employees to provide feedback on AI tools and involve them in the development process.
- Details: Emphasize the importance of AI tools that are intuitive, user-friendly, and aligned with employee workflows.

☐ **Invest in ongoing AI education and training.**
- Why: To keep employees informed about the latest AI advancements and best practices.
- How: Offer continuous learning opportunities, such as workshops, online courses, and mentorship programs.
- Details: Encourage employees to stay abreast of AI trends and develop their skills to maximize the benefits of AI tools.
```

# Conclusion

The path to successful enterprise AI adoption requires a deliberate and structured approach, encompassing clear guidelines, robust training, and a culture that embraces both innovation and employee well-being. While the future of AI remains uncertain, organizations that proactively integrate AI into their operations are best positioned to thrive, or at least survive. Experiment with the checklist prompt, tailor it to your needs, and begin turning more ideas into action.

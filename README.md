# AIFU

 **Algorithmic or AI flub ups**
 
AIFU is a one stop solution for researchers and anyone looking for a place to learn about the repercussions of using Algorithms and AI blatently, too soon, indiscriminately, harmfully.

**How to contribute?**

Steps -
1. Go to the country of the concerned article/news.
2. Enter the article, organization and other details you could discern (you see an example when you go to the country)
3. Press `Submit`

## Outline
The objective of this project is to establish a comprehensive archive or repository that serves as a centralized resource for policymakers, researchers, students, and other stakeholders seeking to acquire knowledge regarding the potential adverse consequences arising from the indiscriminate, premature, or injudicious use of algorithms and AI.

Through this platform, my aim is to monitor the utilization of AI by governmental entities. By conducting thorough analysis of the collected data, I want to find out if we can provide "concrete course(s) of action" or policy recommendations to lawmakers, the general public, and other stakeholders regarding their engagement with AI-based services. Crucially, this initiative will enable us to gain insights into the preferences and purposes of government agencies in employing AI. By doing so, we can proactively address potential risks associated with AI based implementation in specific domains such as child welfare and recidivism, while promoting fair and equitable utilization of AI.

**Motivation**
Necessity: Knowing about something harmful is crucial for several reasons -
* By identifying the underlying factors that led to the harmful event, steps can be taken to prevent similar incidents from occurring in the future.
* important for developing a deeper understanding of the risks and downsides associated with a particular technology, process, or behavior. Armed with this knowledge, we can take proactive steps to mitigate risks and prevent harm, improving the safety and wellbeing of ourselves and those around us.
* knowledge of the harmful consequences of AI can help to drive the development of better, more responsible AI technology. By understanding the ways in which AI can be harmful, researchers and developers can work to address these issues and build AI systems that are safer, more transparent, and more trustworthy.
* It is imperative for policymakers and the general public to be aware of the potential harmful consequences of using AI for several reasons.Policymakers have a responsibility to regulate the use of AI technology to ensure that it is safe, ethical, and serves the public interest. In order to do this effectively, they need to have a comprehensive understanding of the risks and downsides associated with AI.
* The general public needs to be informed about the potential harmful impacts of AI so that they can make informed decisions about how they interact with the technology. By being aware of the potential risks, individuals can take steps to protect their privacy, security, and well-being when using AI-powered tools and services.

What makes this project intresting is that I plan to archive, extract and collate relevant information from the articles using AI itself. Therefore this platform and project is an exercise in -
- collaborating with AI to examine the misuses and harm from the tool in a meta-analysis
- working together to explore its possible negative impacts in a self-reflective manner.
- leveraging AI to gain insights into the potential risks and downsides of AI technology
- using AI to inform our understanding of the possible negative impacts and consequences associated with AI


**Related literature**
Most of the existing databases and projects around this are more about general (deeper) understanding of AI, accountability, fairness and transparency where real life examples are just case studies. They are very broad in their general reach which I believe dilutes their effectiveness, or not about the harms of AI but in general about developments, tracking the growth of AI in various countries, skill market share, economy etc. For example: The AI Index, The AI Now Institute
The closest database is the AI Incident Databse...


**Data**
**How does the corpus help you answer your research question?**
Citing possible solutions based on implementations in other countries, latest developments in AI that successfully mitigate the shortcomings of previous scenarios/models, guardrails placed by other countries and regulations in other countries.
With all the information and analysis, I want to find out if in the end we can “Recommend” some “concrete” course of action(s) or policy decisions to lawmakers, general public and other stakeholders.

**Approach**
See below

**Definition of Success**
* Data: plateaus over time
* Views: Increase and then decrease and plateau 
Information about removing bias, increasing fairness would become commonplace and part of the development lifecycle itself. 
Ethicists would be part of the team

## Features to come

- [ ] automatic extraction of Affected Group
- [ ] Automtic extraction of Perpeterator
- [ ] Analysis of text (NLP) to extract the **cause** and the **effect**, short summary
- [ ]  Graph representations of relations
- [ ] take snapshots of articles using github actions becasue articles may expire or move
- [ ] Extracting more technical information from the links as you said in the meeting – we either do this using ChatGPT “API calls” or make our own Q&A model for:
  * Who developed the model/AI system?
  * How and where was it deployed?
  * What ORG/group of people used it and how?
  * Other technical details
  * Its subsequent effects… 
  * Did the state/party accept their error?
  * Were there compensations made? Apologies?
  * Did they address the issue in a more tangible way through any legislation/bills and (or) regulation?
  * Where there any regulations/bills & legislation already in place that still failed to prevent this?
  * Did something similar happen again? Why?
  * Are there any legislations in the pipeline?
  * Were there any legislations that got blocked? Why? What were the arguements? Who blocked it?
- [ ] Provide an API or ability to download the whole dataset we are curating so that others could it for other purposes.
- [ ] Filepond? securedrop?
- [ ] ^ use Azure Blob Storage and Azure Functions to upload small image, PDF, txt files. Exclude executables.


## Technical Workflow

1. From the website people submit the form

2. The website makes a POST request to a server that validates the input data so as to make sure that only valid data is pushed to the DB, and to avoid attacks, script executions etc.

3. The server then pushes the data to the DB - perhaps after also a second human validation (can do it via Telegram bot)

4. The updated DB table is reflected on the website after a few hours.

## Development Activities
- [ ] Link https://aifu.shantam.io/about to README.md
- [ ] Form Submission: add optional entries for [GitHub, Twitter, Other(scholarly sites)] usernames
- [x] CSS for countries
- [x] Fix Home page for number of articles
- [x] Finish footer
- [ ] Grey/Disable countries for which there is no information
- [ ] Make an automatic Last Updated <date> tag like the WIP one we have
- [ ] Whats the best way to show more detailed information about the issue?
- [ ] How can users request for snapshots if the article link is down?
- [ ] Caching of DB reuests for countries as well as the whole dataset
- [ ] Testimonial Page : If you found this useful or if it helped you in your work or if you used the informaiton here to do somehting then I would love to hear from you.

## Change Log
 * Frontend Tech Stack - React, gatsby, vega-lite, MUIv5 
 * Cases are shown as tables where rows can be expanded. This is the current approach until we face performance issues.
 * Setup a MongoDB database on Azure
 * Letting gpt do everything: search the internet, summarize, answer, extract information (Langchain), we don't want to link to paywalled articles???, figure out what goes in the db and what does not on its own

## Decision Log
Using AI for meta-analysis. Using AI for everything!
The whole platform has AI generated data and information.
You input a link. Agent decides if the link is relevant or not. If it is relevant then it extracts information (answers to questions above) from the text. Can ask for more info or gather more info from other articles about the same issue. Can identify an article that talks about the same issue and update information instead of adding new information about the issue. The idea is not to provide an exact text from the articles but "generated text" (asking LM to make a "report", because we don't want to provide links to paywalled websites). The agent itself updates the database and hooks trigger a website rebuild.

**Clock** - 45 hrs

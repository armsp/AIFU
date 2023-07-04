# AIFU

 **Algorithmic or AI flub ups**
 
AIFU is a one stop solution for researchers and anyone looking for a place to learn about the repercussions of using Algorithms and AI blatently, too soon, indiscriminately, harmfully.

**How to contribute?**

Steps -
1. Go to the country of the concerned article/news.
2. Enter the article, organization and other details you could discern (you see an example when you go to the country)
3. Press `Submit`

## Outline
1. Motivation, 
2. Related literature, 
3. Data, 
4. Approach.

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

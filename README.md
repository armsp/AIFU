# AIFU

 **Algorithmic or AI fuck ups**
 
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
 
- [ ] Provide an API or ability to download the whole dataset we are curating so that others could it for other purposes.


## Technical Workflow

1. From the website people submit the form

2. The website makes a POST request to a server that validates the input data so as to make sure that only valid data is pushed to the DB, and to avoid attacks, script executions etc.

3. The server then pushes the data to the DB - perhaps after also a second human validation (can do it via Telegram bot)

4. The updated DB table is reflected on the website after a few hours.

## Development Activities
- [ ] Link https://aifu.shantam.io/about to README.md
- [ ] Form Submission: add optional entries for [GitHub, Twitter, Other(scholarly sites)] usernames
- [ ] CSS for countries
- [ ] Fix Home page for number of articles
- [ ] Finish footer
- [ ] Grey/Disable countries for which there is no information
- [ ] Make an automatic Last Updated <date> tag like the WIP one we have
- [ ] Whats the best way to show more detailed information about the issue?
- [ ] How can users request for snapshots if the article link is down?
- [ ] Caching of DB reuests for countries as well as the whole dataset

## Change Log
 * Frontend Tech Stack - React, gatsby, vega-lite, MUIv5
 * Cases are shown as tables where rows can be expanded. This is the current approach until we face performance issues.
 * Setup a MongoDB database on Azure. Integration with Python server left.

## Decision Log

**Clock** - 23 hrs

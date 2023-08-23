# AIFU

![Demo](https://raw.githubusercontent.com/armsp/AIFU/gatsby/doc/demo.gif)

 **AI flub ups**
 
AIFU aims to be a platform for researchers and anyone looking for a place to learn about the repercussions of using AI blatently, too soon, indiscriminately, harmfully. Its an experiment in meta analysis. What makes it interesting is that all of the information is "generated" and "retreived" using language model(s). Currently, the design of the platform leans towards using causal language models as judge, jury and executioner if you will.

**How to use the platform?**

We intend you to submit links to articles that you may think document/inform of cases where harm "may" have been caused becasue of AI. Your submission will be recorded publicly in our GitHub repository as an issue and the processing pipeline will start. You may have to wait for a few seconds to a few minutes for the workflow to finish and a short response of the outcome of the workflow run will be posted as a reply to the issue. For example -> https://github.com/armsp/AIFU/issues/84

Steps -
1. Go to the country of the concerned article/news. If the article/news does not pertain to a country then submit it as `global`.
2. Enter the headline, url, media organization and other details you can discern (see examples when you navigate to a country)
3. Press `Submit` to start the workflow

## Research Question

AI is going to pervade software systems just as software systems have pervaded the social fabric. And this work is quite prescient because we have already seen how AI systems can cause widespread harm.

> “Had a great conversation with Yoshua Bengio. Both of us agreed that a good step forward for AI risk is to articulate the concrete scenarios where AI can lead to significant harm.” - Andrew Ng

Through this platform, my aim is to monitor the utilization of AI by governmental entities. By conducting thorough analysis of the collected data, I want to find out if we can provide "concrete course(s) of action" or policy recommendations to lawmakers, the general public, and other stakeholders regarding their engagement with AI-based services. Crucially, this initiative will enable us to gain insights into the preferences and purposes of government agencies in employing AI. By doing so, we can proactively address potential risks associated with AI based implementation in specific domains such as child welfare and recidivism, while promoting fair and equitable utilization of AI.


## Outline
The objective of this project is to establish a comprehensive archive or repository that serves as a resource for policymakers, researchers, students, and other stakeholders seeking to acquire knowledge regarding the potential adverse consequences arising from the indiscriminate, premature, or injudicious use of algorithms and AI.

Through this platform, my aim is to monitor the utilization of AI by governmental entities. By conducting thorough analysis of the collected data, I want to find out if we can provide "concrete course(s) of action" or policy recommendations to lawmakers, the general public, and other stakeholders regarding their engagement with AI-based services. Crucially, this initiative will enable us to gain insights into the preferences and purposes of government agencies in employing AI. By doing so, we can proactively address potential risks associated with AI based implementation in specific domains such as child welfare and recidivism, while promoting fair and equitable utilization of AI.

**Motivation**
Necessity: Knowing about something harmful is crucial for several reasons -
* by identifying the underlying factors that led to the harmful event, steps can be taken to prevent similar incidents from occurring in the future.
* important for developing a deeper understanding of the risks and downsides associated with a particular technology, process, or behavior. Armed with this knowledge, we can take proactive steps to mitigate risks and prevent harm, improving the safety and wellbeing of ourselves and those around us.
* knowledge of the harmful consequences of AI can help to drive the development of better, more responsible AI technology. By understanding the ways in which AI can be harmful, researchers and developers can work to address these issues and build AI systems that are safer, more transparent, and more trustworthy.
* it is imperative for policymakers and the general public to be aware of the potential harmful consequences of using AI for several reasons. Policymakers have a responsibility to regulate the use of AI technology to ensure that it is safe, ethical, and serves the public interest. In order to do this effectively, they need to have a comprehensive understanding of the risks and downsides associated with AI.
* the general public needs to be informed about the potential harmful impacts of AI so that they can make informed decisions about how they interact with the technology. By being aware of the potential risks, individuals can take steps to protect their privacy, security, and well-being when using AI-powered tools and services.
* to a certain extent its also addresses issues of public health and therefore national security

What makes this project **intresting** is that I plan to archive, extract and collate relevant information from the articles using AI itself. Therefore this platform and project is an exercise in -
- collaborating with AI to examine the misuses and harm from the tool in a meta-analysis
- working together to explore its possible negative impacts in a self-reflective manner.
- leveraging AI to gain insights into the potential risks and downsides of AI technology
- using AI to inform our understanding of the possible negative impacts and consequences associated with AI

In short causal language model is the judge, jury, and executioner.

**Related literature**

Most of the existing databases and projects around this are more about general (deeper) understanding of AI, accountability, fairness and transparency, where real life examples are just case studies. They are very broad in their general reach which I believe dilutes their effectiveness. Some of the important resources that I found in  my literature review research are -

[The AI Index](https://aiindex.stanford.edu/) by The Stanford Institute for Human-Centered Artificial Intelligence

They do not gather information about the harms caused by AI but about the developments, growth, measuring trends and progress and market of AI in various countries. They also track global AI legislation. Quoting them -
> The AI Index Report tracks, collates, distills, and visualizes data related to artificial intelligence. Its mission is to provide unbiased, rigorously vetted, and globally sourced data for policymakers, researchers, executives, journalists, and the general public to develop intuitions about the complex field of AI.

Reports are available from the year 2017 with a gap in 2020.

[The AI Now Institute](https://ainowinstitute.org/)

They focus on accountability and on policy recommendations. Their aim is not to create any database of harms. However studying their reports and recommendations would be instrumental for the last step of this project which is policy recommendations. Quoting them -
> Founded in 2017, the AI Now Institute produces diagnosis and policy research to address the concentration of power in the tech industry. We develop policy strategy to redirect away from the current trajectory: unbridled commercial surveillance, consolidation of power in very few companies, and a lack of public accountability.

[Data Harm Record](https://datajusticelab.org/data-harm-record/) by Data Justice Lab

This is not a database but a running document that has not been updated since August 2020. The definition of harm is closer to the kind of cases that I wish to have in my database but the cases they have studied range from generic harm to specific harms. Since its not being maintained anymore, my plan is to use all the articles that it references and to input it to the system I have designed. The idea is that all those cases should be integrated and to observe why a particular case was rejected.


[AI Incident Database](https://incidentdatabase.ai/)

This is the closest database to what I am building. Quoting them -
> The AI Incident Database is dedicated to indexing the collective history of harms or near harms realized in the real world by the deployment of artificial intelligence systems. Like similar databases in aviation and computer security, the AI Incident Database aims to learn from experience so we can prevent or mitigate bad outcomes.

They however collect a rather broad spectrum of cases - incidents where intelligent systems have caused safety, fairness, or other real-world problems. 
It has also changed a lot since the time I started working. A while ago you could only browse and read the content of submitted incident's article(s). Since then they have added a multitude of features such as Named Entities, CSET Taxonomy Classifications, GMF Taxonomy Classifications, a timeline of reports and a list of similar reports/variants. However not all incidents have all this information associated with them and its not apparently clear on what basis are incients chosen to be worked upon to provide all the relevant information.

To the best of my knowledge, nothing like AIFU has been done before.

**Data**

**How does the corpus help you answer your research question?**
Citing possible solutions based on implementations in other countries, latest developments in AI that successfully mitigate the shortcomings of previous scenarios/models, guardrails placed by other countries and regulations in other countries.
With all the information and analysis, I want to find out if in the end we can “Recommend” some “concrete” course of action(s) or policy decisions to lawmakers, general public and other stakeholders.

**Approach**

Once a user submits any article by providing its URI and Headline, we first try to figure out if the article is not at all related to what we are looking for by analyzing the headline itself. The idea here is to reject irrelevant articles and not so much accept relevant articles becasue that happens in the next step. However, it is important to understand that subsequent articles about an event may be ignored if the workflow depends too heavily on Headline itself. To mitigate that we use the content of the article itself and also provide method to "update" a case by providing subsequent articles for that case.

After that, we extract the contents of the article using the provided URI. Following which, using prompt engineering, we try to extract all the relevant content by asking questions. Finally we also summarize the article. The outputs are then serialized in the database.

Before actually storing the contents in the database, we also query the database for exactly similar articles (maybe the same article was already stored before or maybe a different media reported on the same case, both of which are highly likely). If an exactly similar article is found then we try to merge the information extracted now with whatever we had extracted earlier and update the database record. If the article and case is completely new then we just make a new record in the database. However, Near Duplicate Detection or identifying similar articles by different media is a research field in itself. Currently we have observed that using using universal sentence encoder as a baseline works for us. However as the workflow becomes more complicated and streamlined and accurate, we will certainly have to revisit this part for automatic detection of duplicates and similar articles.

**API Endpoints**
| Endpoint | Request type | Comment |
| --- | --- | --- | 
| `/records` | GET | Responsible for providing the details of cases per country to the frontend. |
| `/submit` | POST | Responsible for creating Automatic GitHub issues/discussions whenever a user submits an article. Also triggers the information extraction endpoint in the background (steps listed in **Approach**). |
| `/heartbeat` | GET | Used for testing if the server is alive. |
| `/export` | GET | Provides a json file of exported content from the database collection for a given country. |

More endpoints may be added later on based on the needs of the project.

**Policy Recommendations Literature Review and Starting Point**
* https://www.brookings.edu/articles/algorithmic-bias-detection-and-mitigation-best-practices-and-policies-to-reduce-consumer-harms/
* https://datajusticelab.org/data-harm-record/

**(Near) Duplicate Detection**
This is a whole research area in itself. After trying a few approaches I have settled with Universal Sentence Encoder as a baseline. This part of the pipeline would be made more robust over time.  
Methods that do not yield good results - TFIDF, Jaccquard Distance. See jupyter notebook for experiments. My first attempt was to use TFIDF. For making the vocabulary and TFIDF weights I used the latest news dataset from [n24 news](https://github.com/billywzh717/N24News) released as part of the research [N24News: A New Dataset for Multimodal News Classification](https://arxiv.org/abs/2108.13327)
Method deployed - Universal Sentence Encoder. USE can work on full text, the embedddings just get diluted.  

Methods to explore for Future Work - 
1. there is a research by google for huge datasets though - https://github.com/google-research/deduplicate-text-datasets  
2. Try USE based on other architectures - https://tfhub.dev/s?q=google%2Funiversal-sentence-encoder%2F4%20OR%20google%2Funiversal-sentence-encoder-large%2F5  

**Result**

**Conclusion**

**Definition of Success for the project**
* Data: plateaus over time
* Views: Increase and then decrease and plateau 
* Information about removing bias, increasing fairness would become commonplace and part of the development lifecycle itself. 
* Ethicists would be part of the team

**Technical Details and Workflow**

Git/GitHub Branches
* [gatsby](https://github.com/armsp/AIFU) - the main branch for UI. This is where the development code for the frontend resides. The frontend is designed using Gatsby, React and MUI.
* [gh-pages](https://github.com/armsp/AIFU/tree/gh-pages) - built automatically by the GitHub Action that is triggered by a push to gatsby branch. This branch holds the deployment code for the Frontend.
* [backend](https://github.com/armsp/AIFU/tree/backend) - this branch contains the code for the backend server that runs on Azure. It also has jupyter notebooks with experiments on NLP tasks. It is important to note that the backend code is redacted and not all files are present since some files contain private credentials for deploying to Azure or otherwise. 

**BACKEND SERVER**
```mermaid
stateDiagram-v2
      
    [maintainer] --> CommitBackend: update backend
    CommitBackend --> LoginToAzureContainerRegistry
    LoginToAzureContainerRegistry --> BuildAndTagDockerImage
    BuildAndTagDockerImage --> PushImageToRegistry
    PushImageToRegistry --> AzureContainerGroupDeploy: az container create --resource-group <"resource group name"> --file <"deploymentfile.yml">
```
---
**FRONTEND UI**
```mermaid
stateDiagram-v2

    [maintainer] --> CommitFrontEnd: update frontend
    CommitFrontEnd --> RunGitHubAction : GitHub PAT, Secret Key
    RunGitHubAction --> Deployment
    state Deployment {
        UpdateDeploymentCodeOnBranch --> DeployToGHPages: build and deploy (yaml) |ubuntu, node, checkout, build, commit, push
    }
```
---
**User Submission**
```mermaid
flowchart TB
    SubmitArticle --> A[Detect Headline Language] --> |Language Supported| B[Translate]
    A --> |Language Not Supported| C[Make GH Issue] --> Stop
    B --> D[Classify Headline] --> |Accepted|E[Detect Content Language]
    D --> |Rejected|C 
    E --> |Language Not Supported| C
    E --> |Language Supported| H[Translate Content]
    H --> F[Make GH Issue, Save to DB] --> J[Run Information Extraction Pipeline] 
```
---
**Information Extraction Pipeline**
```mermaid
flowchart TB
    A[Submit Link and Headline] --> B{"Does the headline suggest<br> it might be related to AI<br> and its potential harm?"}
    B --> |Yes| C[Extract text from article link]
    B --> |No| E[End]
    C --> D[Rate Article based on context on a scale of 1-5 if it speaks of an actual harm]
    D --> |score is 1-2| F[Reject, save in a different collection]
    D --> |score is 3-5| G[Extract Information based on provided Prompt]
    G --> H[Check if exactly similar article exists in the database]
    H --> |No| I
    H --> |Yes| J[Merge context and update extracted information]
    J --> I[Update information in Database]   
```
---
## Major Changes Log
 * Frontend Tech Stack - React, gatsby, vega-lite, MUIv5 
 * Cases are shown as tables where rows can be expanded. This is the current approach until we face performance issues.
 * Setup a MongoDB database on Azure
 * Letting gpt do everything: ~~search the internet~~, summarize, answer, extract information (Langchain), we don't want to link to paywalled articles, figure out what goes in the db and what does not on its own
 * Refactored server code for easier and quicker deployments and developments in Production and Development environments


## Features to come
- [x] Analysis of text to extract the **cause** and the **effect**, short summary
- [ ] ~~Graph representations of relations~~
- [ ] take snapshots of articles using github actions becasue articles may expire or move (latest selenium for chrome has an inbuilt option to do this)
- [x] Extracting more technical information from the links – we either do this using ChatGPT “API calls” or make our own Q&A model for:
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
- [x] Provide an API or ability to download the whole dataset we are curating so that others could it for other purposes.
- [x] Export data
- [ ] Entities extraction for an article
- [ ] File and document upload for analysis using Filepond? or securedrop?
- [ ] ^ use Azure Blob Storage and Azure Functions to upload small image, PDF, txt files. Exclude executables.
- [ ] Switch to a vector database? Perhaps its not necessary right now since we don't have a lot of data.
- [ ] Use a Bot instead of your own username when making github api calls that reply to and make github issues 


## Future Development Activities
- [x] Link https://aifu.shantam.io/about to README.md
- [x] Form Submission: add optional entries for [GitHub, Twitter, Other(scholarly sites)] usernames
- [x] CSS for countries
- [x] Fix Home page for number of articles
- [x] Finish footer
- [ ] ~~Grey/Disable countries for which there is no information~~ 
- [ ] Make an automatic Last Updated <date> tag
- [ ] How can users request for snapshots if the article link is down?
- [ ] Caching of DB reuests for countries as well as the whole dataset
- [ ] Testimonial Page: If you found this useful or if it helped you in your work or if you used the informaiton here to do somehting then I would love to hear from you.
- [ ] Try https://github.com/fhamborg/Giveme5W1H
- [ ] Change mui css to primer css


## Decision Log and Tradeoffs
* Using AI for meta-analysis. Using AI for everything!
* The whole platform has AI generated data and information.
* You input a link. LLM decides if the link is relevant or not. If it is relevant then it extracts information (answers to questions above) from the text. Can ask for more info or gather more info from other articles about the same issue. Can identify an article that talks about the same issue and update information instead of adding new information about the issue. The idea is not to provide an exact text from the articles but "generated text" (asking LM to make a "report", because we don't want to provide links to paywalled websites). The agent itself updates the database.

* I don't expect submissions with content larger than 5000 words. Therefore we don't need to split the content and make embeddings and find similiar splits and then do Q&A or Info Retreival using prompts. The whole content can be embedded for detecting duplicates or articles that talk about the same case but are written by different media houses. 

* Since the content fits the context of LLM we are using, we can create and save the embedding of the whole content in a regular document database instead of using specialized vector databases which increase complexity of the deployment infrastructure and the info ret pipeline.

* I think using LangChain made things unnecessarily complicated. I could have just used openai's python library along with Microsoft's [guidance](https://github.com/microsoft/guidance/) library for making LLM outputs stable.
* Similarity and near duplicate and duplicate detection is a whole research area in itself. This needs to be tackled properly and given more time to implement properly.

**Clock** - 90 hrs

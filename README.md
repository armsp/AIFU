# AIFU

 Algorithmic or AI fuck ups

## Features to come

[] automatic extraction of Affected Group

[] Automtic extraction of Perpeterator

[] Analysis of text (NLP) to extract the **cause** and the **effect**, short summary

[]  Graph representations of relations

[ ] take snapshots of articles using github actions becasue articles may expire or move

## Technical Workflow

1. From the website people submit the form

2. The website makes a POST request to a server that validates the input data so as to make sure that only valid data is pushed to the DB, and to avoid attacks, script executions etc.

3. The server then pushes the data to the DB - perhaps after also a second human validation (can do it via Telegram bot)

4. The updated DB table is reflected on the website after a few hours.

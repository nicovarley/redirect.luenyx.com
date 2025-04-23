# Luenyx Redirect

A simple web redirect service and waiting room for my primary website.

## About This Project

I recently learned that fullstack development is easier than I thought as I built a home server and have been messing with that. So, now I'm making lots of pointless websites! This one is a simple redirector.

## Purpose

The reason I'm making this is that I have a different site built on free Salesforce LWR infrastructure - but the cold boots are like up to one minute 👀... That isn't great when I'm providing my CV, so this shall act as a pretty waiting room. I may use it for other purposes later.

Hopefully it serves as a super easy reference/example on how to build an extremely simple site if you're also starting out!

## Project Structure

```
redirect.luenyx.com/
├── deploy/              # Deployment configuration
│   ├── docker-compose.yml
│   ├── dockerfile
│   └── server-python-dependencies.txt
├── server/              # Backend server
│   └── main.py
└── user/                # Frontend client
    ├── app.js
    ├── index.html
    ├── styles.css
    └── images/
        ├── ...
```

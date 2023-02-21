---
layout: default
---

# About me

I'm a software engineer, and technical lead, with the primary programming languages of Javascript/Typescript, Ruby, C# and Java and some Python.  I've worked as a developer, a technical lead, an architect, and have been involved in projects ranging from the deeply technical to ones that are purely about understanding requirements.

Sometimes I get queries about which language is my "main" one, but programming languages aren't human languages as much as they are collections of logical concepts, like generics, lambdas, immutability etc.  

Working across languages is the best way to become better at each of them.

Here's a breakdown of the work I've done in each:

## Javascript/Typescript
Javascript has always been inescapable in any form of web development, but I was an active participant in the early movement of JS becoming a 'proper' language from around 2015 or so.  This was back when bower was viable alternative to npm.  Talking about bower feels a lot like talking about MySpace.  

I jumped on the Typescript hype-train early too, after my experiences trying to maintain tens of thousands of lines of untyped JS for applications in the travel industry.

More recently I have worked extensively on single page apps written in Vue.js and Typescript, and my default stack for any personal project or prototype would be based in React.

For state management, I like Redux/Vuex, but recognise that they aren't a fit for every project.  My preference for testing would be to use Jest and Cypress, for unit/e2e respectively, but I have experience with a few of the others too.

## Java

I have worked in Java since the start of my career, and have built applications in Spring Boot, custom stacks built on Netty, Java EE with JSF and Android.  These are all great stacks to work in, except for JSF which is not.

Some of the things I have delivered in Java:
* A customer portal for an investment bank, and various supporting microservices.
* In the travel industry, a bespoke Customer Relationship Managmement (CRM) system, flight scrapers, telephony integrations, advertising campaign functionality and more.
* Common microservices at the DVLA handling things like notifications, addressing and print requirements
* Android applications for use by health and safety inspectors across university and hospitals

You can see a small exemplar API [here](https://github.com/jamiebuckley/quinque-api) to see how I approach writing Spring Boot applications.



## Ruby
I started working in Ruby in 2018, as the DVLA (and much of UK government) uses Rails extensively.  At the time I was more of a Java/C# developer, and was initially unconvinced by it, but dove in and sought to understand it anyway.  Over time I realised that my suspicion of it was driven more by the reluctance of the department to make proper use of it.  Ruby/Rails isn't a great framework if you write everything by hand, it's when you make use of _not_ having to write code that it really shines.

In 2020, shortly after the start of COVID, myself and a few others were commissioned to build an emergency CRM-type system for Camden council.

The problem was the inability to know how many of their constituents were vulnerable, needed food deliveries or medical attention, as this data was scattered across multiple CRMs.

The goal was to use the currently available staff who could not work, to phone and triage all of the people they could reach, but they needed a highly guided, and very simple system to do so as the available staff varied in technical ability.

We built the initial application in Rails in around 4 weeks, with a further 4 weeks spent on various feature additions.  This is available as open source [here](https://github.com/wearefuturegov/beacon), although I have not worked on it since 2020.

More recently, work in Ruby involved a service directory used across various UK councils, open source [here](https://github.com/wearefuturegov/outpost) and initial work as a technical lead and consultant on the GDX Data Marketplace for the Cabinet Office.

## C#
I started working in C#/ASP.NET MVC in around 2015, at which time it wasn't a great environment to be developing in.  VB.NET was still a viable competitor, and C# was a closed source, locked down environment.

It was a shame, because the language itself was beautiful, but the ecosystem was very limiting, from everything from databases to devops.  As a result, I avoided it professionally for several years (other than quite a bit of personal development in frameworks like Unity).

In 2020, I started a contract for Wales and West Utilities, a gas company, that was built in .NET Core.  This used both .NET Core WebAPI with the Mediatr pattern, and Azure Functions.
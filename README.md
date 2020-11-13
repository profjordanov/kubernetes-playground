# Car Rental System
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ddb0bd7ff72e4e689d7b6f6ce6d5e029)](https://app.codacy.com/gh/profjordanov/kubernetes-playground?utm_source=github.com&utm_medium=referral&utm_content=profjordanov/kubernetes-playground&utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/profjordanov/kubernetes-playground.svg?branch=master)](https://travis-ci.com/profjordanov/kubernetes-playground)

> Car dealers can publish their cars for rent. Each car ad must contain manufacturer, model, category, image, and price per day. Categories have a description and must be one of the following - economy, compact, estate, minivan, SUV, and cargo van. Additionally, each vehicle must list the following options: with or without climate control, number of seats, and transmission type. The system allows users to filter the cars by category, manufacturer, and price range anonymously. Ads can be sorted by manufacturer or by price.
When a user chooses a car, she needs to call the dealer on the provided phone and make the arrangement. The dealer then needs to edit the car ad as “currently unavailable” manually. The system must not show the unavailable cars.

## The application uses the following technologies:
- RabbitMQ as an event bus and message broker.
- SQL Server 2019 as a database provider.
- ASP.NET Core 3.1 running on Kestrel as a web server for all services except the user client.
- SignalR for the real-time notifications service.
- Angular running on nginx for the front-end user client.

## Application Architecture
- Event Bus – a message queue system allowing communication between the back-end services in an asynchronous manner.
- Identity Service – a restful API providing functionality for authentication and authorization. This service has its own database.
- Dealers Service – a restful API providing functionalities for dealers to create profiles and publish car ads. Exposes endpoints for searching and viewing car ads. This service has its own database and communicates with the event bus.
- Statistics Service – a restful API providing functionalities for storing and retrieving usage statistics – the total car ads in the system, for example. This service has its own database and communicates with the event bus.
- Notifications Service – a web service, which sends notifications to the client through web sockets. Communicates with the event bus.
- User Client – a front-end service, which serves a single-page application to the end-users. Communicates with the identity, dealers, statistics, and notifications services to receive and visualize data.
- Admin Client – a front-end service, which is used by the business administrators. Communicates with the identity, dealers, and statistics services to receive and visualize data.
- Watchdog Client – periodically calls all the other services to validate their health state and availability

# Key Kubernetes Concepts
- Node – a machine running your pods. Part of the cluster’s physical infrastructure.
- Pod – an application running containers on your nodes. The smallest unit of deployment. Provides resource limitations. You should never deploy pods directly.
- ConfigMap – contains visible key-value pair configuration. Useful for application settings.
- Secret – contains secret key-value pair configuration. Useful for passwords, connection strings, and more.
- Persistent Volume Claim – used for requesting dynamically provisioned storage. Persistence depends on the infrastructure.
- StatefulSet – deployment manifest for pods that have a state. Useful for databases, cache servers, and more.
- Deployment – deployment manifest for pods with stateless servers. Useful for API servers. Allows easy pod updating, scaling, and replicating.
- Service – provides an internal or external networking interface for the cluster. Supports load balancing.

## Getting Started
Run local Kubernetes cluster from '.k8s' folder:
- kubectl apply -f .\.environment\
- kubectl apply -f .\databases\
- kubectl apply -f .\event-bus\
- kubectl apply -f .\web-services\
- kubectl apply -f .\clients\

Delete all Kubernetes objects:
- kubectl delete all --all
- kubectl delete pvc --all

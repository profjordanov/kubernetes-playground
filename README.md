# Car Rental System

[![Build Status](https://travis-ci.com/profjordanov/kubernetes-playground.svg?branch=master)](https://travis-ci.com/profjordanov/kubernetes-playground)

> Car dealers can publish their cars for rent. Each car ad must contain manufacturer, model, category, image, and price per day. Categories have a description and must be one of the following - economy, compact, estate, minivan, SUV, and cargo van. Additionally, each vehicle must list the following options: with or without climate control, number of seats, and transmission type. The system allows users to filter the cars by category, manufacturer, and price range anonymously. Ads can be sorted by manufacturer or by price.
When a user chooses a car, she needs to call the dealer on the provided phone and make the arrangement. The dealer then needs to edit the car ad as “currently unavailable” manually. The system must not show the unavailable cars.

## The application uses the following technologies:
- RabbitMQ as an event bus and message broker.
- SQL Server 2019 as a database provider.
- ASP.NET Core 3.1 running on Kestrel as a web server for all
- rvices except the user client.
- SignalR for the real-time notifications service.
- Angular running on nginx for the front-end user client.

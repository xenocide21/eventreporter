# Back-end

GS Panel API

# Documentation:

# Base URL for Deployed API

None use 

### `npm run server` 

to start server

# Endpoints

# Auth endpoints

| Request | URL               | Description                               |
| ------- | ----------------- | ----------------------------------------- |
| POST    | api/auth/register | register as a new user                    |
| POST    | api/auth/login    | login as an existing user                 |

# Event Report endpoints

| Request | URL                         | Description                                   |
| ------- | --------------------------- | --------------------------------------------- |
| GET     | api/eventreport             | get all event reports (needs to be logged in) |
| POST    | api/eventreport             | post new event report (requires auth)         |
| GET     | api/eventreport/:id         | get specific event report                     |
| GET     | api/eventreport/:id/details | get all details for event report              |
| GET     | api/eventreport/:id/rewards | get all rewards for event report              |
| GET     | api/eventreport/:id/winners | get all winners for event report              |
| PUT     | api/eventreport/:id         | edit specific event report                    |
| DELETE  | api/eventreport/:id         | delete specific event report                  |

# Table Requirements

# Users

| Name     | Type    | Required | Unique | Notes                         |
| -------- | ------- | -------- | ------ | ----------------------------- |
| id       | integer | yes      | yes    | users id (auto generated)     |
| username | string  | yes      | yes    | users username (max char 255) |
| password | string  | yes      | no     | users password (max char 255) |

# Event Reports

| Name        | Type    | Required | Unique | Notes                            |
| ----------- | ------- | -------- | ------ | -------------------------------- |
| id          | integer | yes      | yes    | event report id (auto generated) |
| event_name  | string  | yes      | no     | event report title               |
| event_host  | string  | yes      | no     | creator of event report          |
| event_date  | string  | yes      | no     | date of event report             |

# Event Details

# Event Rewards

# Event Winners
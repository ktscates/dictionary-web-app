[![Netlify Status](https://api.netlify.com/api/v1/badges/67ac0727-0bd2-46b9-b483-78989ccfe57b/deploy-status)](https://app.netlify.com/sites/ktscates-dictionary/deploys)

# Dictionary Web App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Components](#components)
  - [Navbar](#navbar)
  - [SearchField](#searchfield)
  - [ResultField](#resultfield)
- [API Integration](#api-integration)

## Introduction

This is a simple dictionary application built using React. The app allows users to search for word definitions and displays the results, including phonetics, meanings, and synonyms. Users can also switch between light and dark themes and choose different fonts for the text display.

## Features

- Search for word definitions
- Display phonetics, meanings, and synonyms of words
- Switch between light and dark themes
- Select different fonts
- Handle errors and display appropriate messages
- Responsive design

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Axios
- Headless UI

## Getting Started

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/ktscates/dictionary-web-app.git
cd dictionary-app
```

2. **Install dependencies**:

```bash
npm start
```

3. **Running the App**

```bash
npm install
```

This will start the app in development mode and open it in your default browser at http://localhost:3000.

## Api Integration

The app uses the Free Dictionary API to fetch word definitions. The axios library is used to make HTTP requests to the API.

## Live Link

Dictiionary web app: [Live](https://ktscates-dictionary.netlify.app/)

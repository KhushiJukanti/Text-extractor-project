# Enhanced Text Extractor Tool Project

## Table of contents

-   [Frontend](#frontend)
-   [Backend](#backend)
-   [Installation](#installation)
-   [APIs](#apis)
-   [License](#license)

## Description

This project is a web application built using React with Node.js on the backend. It utilizes OpenAI and Langchain for natural language processing tasks. The application allows users to fetch data from a sample database, interact with a chatbot powered by OpenAI, and display the conversation.

## Technologies Used

#### Frontend:

- React: JavaScript library for building user interfaces.

- OpenAI: API for natural language processing tasks.
- Langchain: API for language-related functionalities.

#### Backend:

- Node.js: JavaScript runtime environment for server-side development.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database for storing data.

## Installation

1. Clone the repository to your local machine using:

```bash
git clone https://github.com/your-username/text-extractor-project.git
```

2. Navigate to the project directory:

```bash
cd text-extractor-project
```

3. Install dependencies for both the frontend and backend:
```bash
cd frontend
npm install
cd ../backend
npm install
```

4. Set up environment variables:

- Create a .env file in the backend directory and add necessary environment variables such as database connection URI, OpenAI API key, and Langchain API key.

## Running the Application

1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

3. Access the application in your web browser at `http://localhost:3000`.

## APIs

### Backend APIs

- Fetch data Api

  - Endpoint: `/api/data`
  - Method: GET
  - Description: Retrieves data from the sample database.

### Frontend APIs

- OpenAI API:

  - Usage: Import the OpenAI module in your React components and use it to interact with the chatbot.

- Langchain API:

  - Usage: Import the Langchain module in your React components and use it for language-related tasks.

## License

This project is licensed under the MIT License.



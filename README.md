# INEED - API

Welcome to the INEED API ! INEED is a web application that allows users to post ads for various needs such as services, purchases, loans, rentals, and more.

## Installation

Follow these steps to install and configure the INEED API:

### 1. Clone the Repository

Start by cloning the INEED API repository from GitHub:

```bash
git clone https://github.com/emmanuelniasse/ineed-api.git
cd ineed-api
```

### 2. Install Dependencies

Use the following command to install all necessary project dependencies:  
`npm ci`

### 3. Configure Environment Variables

Copy the example .env file to create your own .env file:  
`cp .env.example .env`
Make sure to edit the .env file to include the correct values for your environment.

### 4. Migrate the Database

Use Prisma to reset and apply database migrations:

`npx prisma migrate reset`

### 5. Start the Development Server

Run the development server with the following command:  
`npm run dev`

The development server should now be running. You can access the application at _http://localhost:3000_.

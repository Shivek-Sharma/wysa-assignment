## Installation Guide

This codebase is organized into two main directories: "client" for the client-side code and "server" for the server-side code. To set up this project on your local machine, follow these installation steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Shivek-Sharma/wysa-assignment.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd wysa-assignment
   ```

### Client-side Installation

1. Navigate to the "client" directory in your terminal:

   ```bash
   cd client
   ```

2. Install the necessary client-side dependencies:

   ```bash
   npm install
   ```

3. Start the client-side development server:

   ```bash
   npm run dev
   ```

   This will launch the client-side application on your localhost.

### Server-side Installation

1. Open a new terminal and navigate to the "server" directory in your terminal:

   ```bash
   cd ..
   cd server
   ```

2. Install the necessary server-side dependencies:

   ```bash
   npm install
   ```

3. Configure your environment variables by creating a `.env` file in the "server" directory. Here's a sample `.env` file:

   ```env
   MONGODB_URL="your_mongodb_uri"
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   This will initialize the server and connect it to your MongoDB database.

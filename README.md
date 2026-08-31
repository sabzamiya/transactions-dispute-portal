# Transactions & Disputes Portal

A full-stack web application for managing and monitoring financial transactions and disputes.

The portal provides a dashboard for transaction insights, transaction management, and dispute management through a modern and responsive user interface.

## Features

* Dashboard with transaction statistics
* Transaction activity visualisation
* Revenue overview
* Transaction status breakdown
* Transaction listing and management
* Transaction search and filtering
* Dispute management
* Responsive UI
* Capitec-inspired visual design
* REST API integration
* Environment-based API configuration
* Loading and error states
* Reusable React components

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide React
* React Hooks

### Backend

* Node.js
* Express.js
* REST API

### Development Tools

* Visual Studio Code
* Git
* GitHub
* npm

## Project Structure

```text
transactions-dispute-portal/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── .env.local
│   ├── .gitignore
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

> The exact folder structure may vary depending on the current implementation.

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

You can verify your Node.js and npm installation with:

```bash
node --version
npm --version
```

## Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd transactions-dispute-portal
```

## Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the frontend root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## Backend Setup

Open another terminal and navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

The backend API should be available on:

```text
http://localhost:3001
```

The frontend communicates with the backend through the API URL configured in `.env.local`.

## Environment Variables

The frontend uses environment variables to avoid hardcoding API URLs.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Important

Do not commit `.env.local` to the repository.

Make sure `.gitignore` contains:

```gitignore
.env*.local
```

Environment variables containing sensitive credentials, passwords, tokens, or private API keys should never be exposed through `NEXT_PUBLIC_` variables.

## Dashboard

The dashboard provides an overview of transaction activity, including:

* Total transactions
* Completed transactions
* Pending transactions
* Total transaction revenue
* Transaction activity
* Transaction status distribution
* Revenue overview

The dashboard uses colour-coded status indicators to make transaction states easier to identify.

## Transactions

The Transactions page provides access to transaction information and allows users to review transaction records.

Transaction statuses include:

* Completed
* Pending
* Failed
* Reversed

## Disputes

The Disputes section provides a dedicated interface for reviewing and managing transaction disputes.

The interface follows the same visual design system as the Dashboard and Transactions pages.

## API Integration

The frontend communicates with the backend using REST API endpoints.

The API base URL is configured through:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

For example, transactions are retrieved through:

```text
GET /transactions
```

## Design

The application uses a clean financial-services dashboard design inspired by the Capitec visual identity.

The interface uses:

* Red as the primary brand accent
* Green for successful transactions
* Amber for pending transactions
* Red for failed transactions
* Neutral colours for reversed transactions and supporting UI
* Responsive layouts
* Cards and visual data summaries
* Consistent spacing and typography

## Development

Run the frontend development server:

```bash
npm run dev
```

Run the backend development server:

```bash
npm run dev
```

When developing both applications simultaneously, run the frontend and backend in separate terminals.

## Production Build

To create a production build for the frontend:

```bash
npm run build
```

To start the production frontend:

```bash
npm start
```

## Git Workflow

After making changes, check the current status:

```bash
git status
```

Add the changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Add dashboard styling and environment API configuration"
```

Push the changes:

```bash
git push
```

## Security

The following files should not be committed:

```text
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

Never commit:

* Database passwords
* API secrets
* Authentication secrets
* Private keys
* Access tokens
* Production credentials

## Future Improvements

Potential future improvements include:

* Authentication and role-based access control
* Advanced transaction filtering
* Pagination improvements
* Transaction detail pages
* Dispute workflow management
* Export transactions to CSV/Excel
* Advanced analytics
* Date-range filtering
* Real-time transaction updates
* Automated testing
* Production deployment

## Author

**Sabelo Miya**

Software Engineer
South Africa

---

## License

This project is intended for demonstration and development purposes.
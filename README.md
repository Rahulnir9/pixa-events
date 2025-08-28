Pixa Events
A simple, modern event RSVP app built with Next.js and powered by Supabase. This app allows users to browse upcoming events and RSVP with ease.

Features
List all upcoming events dynamically from Supabase.

RSVP to events with Yes, No, or Maybe options.

Dynamic routing for event-specific RSVP pages.

Supabase integration for backend and realtime data handling.

Responsive and clean UI with CSS Modules.

Server-side rendering with Next.js for SEO and performance.

Setup Instructions
Prerequisites
Node.js (version 16 or later recommended)

npm or yarn

Supabase account with a project and table set up

Steps
Clone the repository:

bash
git clone https://github.com/Rahulnir9/pixa-events.git
cd pixa-events
Install dependencies:

bash
npm install
# or
yarn install
Create a .env.local file in the root and add your Supabase keys:

text
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
Start the development server:

bash
npm run dev
# or
yarn dev
Open http://localhost:3000 to see your app.

Deployment
The app is deployed live on Vercel at:
https://pixa-events-pjm.vercel.app

To deploy your own:

Push your code to GitHub.

Connect the repo on Vercel.

Set environment variables on Vercel dashboard.

Vercel will auto-build and deploy.

Design Choices
Next.js for server-side rendering and dynamic routing.

Supabase provides a simple, scalable backend with real-time capabilities.

CSS Modules used for scoped, maintainable styling.

Clear folder structure for ease of extension and maintenance.

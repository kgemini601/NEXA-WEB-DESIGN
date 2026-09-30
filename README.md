# NEXA Frontend Web App

Frontend-only interactive prototype based on the supplied NEXA design PDF.

## Run
Open `index.html` in a browser or use VS Code Live Server.

## Stack
- HTML
- CSS
- Vanilla JavaScript
- No backend
- No database
- No API

## Interactive areas
- Student / Teacher / Admin sign-in selection
- Role-based navigation
- Dashboards
- Courses
- Students / Teachers tables with search
- Materials with add/edit/remove demo actions
- Assignments
- Quizzes
- Analytics
- Study Plan
- Calendar
- Profile
- Notifications
- **Chat / communication hub** with user contacts, 1-to-1 messages, contact search, online status, voice/video-call demo actions, and Nexbot as a separate AI contact
- Responsive layout

All data is mock frontend data and resets when the page is refreshed.

## Landing page: 3D Nexbot
The hero shows a layered 3D Nexbot (`assets/nexbot-*.webp`). Its head and face follow the mouse cursor (`js/nexa-bot.js`, `css/nexa-bot.css`). With no cursor (e.g. on touch devices) it gently looks around on its own.

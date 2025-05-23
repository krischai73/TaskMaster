# TaskMaster

TaskMaster is a modern productivity web app built with React. It helps users efficiently manage their tasks with a clean, intuitive, and visually appealing interface.

## Features

- **Task List Display**
  - View all tasks with title, description, due date, and priority.
  - Tasks are automatically sorted by due date (earliest first).
  - Priority levels (Low, Medium, High) are color-coded for quick recognition.

- **Add New Tasks**
  - Add tasks with a title, description, due date, and priority.
  - User-friendly form with validation.

- **Task Management**
  - Delete tasks with a single click.
  - Responsive design: works great on desktop and mobile browsers.

- **Modern UI**
  - Clean, card-based layout with smooth transitions and hover effects.
  - Visually distinct priority badges.
  - Accessible and easy to use.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** CSS (custom, no frameworks)
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Folder Structure

```
src/
  components/    # React components (TaskForm, TaskList, Task)
  context/       # React Context for task state
  App.jsx        # Main app component
  App.css        # Main styles
  main.jsx       # Entry point
public/
  index.html     # HTML template
```

## License

This project is licensed under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

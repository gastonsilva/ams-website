# Project Overview

This project is a website built with Astro, a modern static site builder. It's an institutional landing page website for a aeronautical management services company named "AMS". The styling is done using a combination Tailwind CSS.

## Building and Running

To work with this project, you'll need to have `pnpm` installed.

Key commands are:

*   **`pnpm install`**: Installs all necessary dependencies.
*   **`pnpm dev` or `pnpm start`**: Starts the local development server, which is accessible at `localhost:4321`.
*   **`pnpm build`**: Creates a production-ready build of the site in the `./dist/` directory.
*   **`pnpm preview`**: Allows you to preview the production build locally before deploying.

## Project Structure

The project follows a standard Astro project structure:

*   `src/pages/`: Contains the pages of the website. Each `.astro` file in this directory becomes a page.
*   `src/layouts/`: Holds the main layout templates for the pages.
*   `src/components/`: Contains reusable Astro components for different parts of the site, such as the header, footer, and navigation.
*   `src/styles/`: Includes global CSS styles.
*   `public/`: Stores static assets like the favicon.
*   `astro.config.mjs`: The main configuration file for the Astro project.
*   `package.json`: Defines the project's dependencies and scripts.

## Development Conventions

*   **Styling**: The project uses a mix of global CSS (`src/styles/global.css`) and Tailwind CSS. The integration is configured in `astro.config.mjs`.
*   **Components**: The codebase is component-based, with reusable components for different sections of the site.
*   **Imports**: The project uses import aliases defined in `package.json` and `tsconfig.json` for cleaner and more maintainable import paths (e.g., `#components/...`).

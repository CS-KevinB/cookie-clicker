# Cookie Clicker

## Description
A small interactive web app built with Vite + React. Users can click the cookie to increase their cookie count, buy buildings, and upgrade their buildings to gain more cookies per second.

## How to Run Locally
To run the app locally, clone the repository using `git clone https://github.com/CS-KevinB/cookie-clicker`
Rename the folder to my-app and then navigate to the project folder with `cd my-app` 
Install dependencies using `yarn install`
Generate database using npx prisma migrate dev and then npx prisma generate
Start the development server with `yarn dev`.

## Notes
You may have to install quite a few dependencies to get this project running in local development

Updating Database
ex: npx prisma migrate dev -- name add-cookiesPerSecond
npx prisma generate

## Latest Updates
- Added saved memory for buildings when logging out
- Loads buildings and cookies from memory when logging in
Creating Git Repo and Remote Sync :

    echo "# Ixigo_Clone" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/YatinDevs/Ixigo_Clone.git
    git push -u origin main

Setting Up Tailwind CSS Config :

         [1] install tailwind css with vite
            https://tailwindcss.com/docs/guides/vite

         [2] Install Tailwind Modules
            - npm install -D tailwindcss postcss autoprefixer
            - npx tailwindcss init -p

         [3] Configure your template paths

            /** @type {import('tailwindcss').Config} \*/
            export default {
            content: [
            "./index.html",
            "./src/**/\*.{js,ts,jsx,tsx}",
            ],
            theme: {
            extend: {},
            },
            plugins: [],
            }

            - searches into index.html and src files our css tailwind config

         [4] Add the Tailwind directives to your CSS

            @tailwind base;
            @tailwind components;
            @tailwind utilities;

         [5] Start your build process

            - npm run dev

# Feature 01: Navbar

    👉 The navigation bar should be accessible from any page on the Ixigo website, allowing users to quickly switch between services.

    👉 Hovering over any of the options typically changes the button's color to indicate it's clickable. By default the "Flights" option is selected is being displayed as the Home/ Landing Page.

Expected Layout:

    👉 The Navigation Bar should have the Logo of Ixigo website on the Top Left. Clicking here should redirect the user to the homepage of the Ixigo website.

    👉 Add different options to the navbar, like Flights, Trains, Bus and Hotels. Each button represents a different service offered by Ixigo.

    👉 On clicking a Service Button, take the user to a specific booking or information page related to the chosen service.

    Example,

        --> Flights (Selected by default) - Clicking this takes the user to the flight booking page.
        --> Trains - Navigates to the train ticket booking section.
        --> Buses - Redirects to the bus ticket booking page.
        --> Hotels - Opens the hotel search and booking interface.

Setting Up React Router DOM for Routing NavBar :

    - npm i react-router-dom
    - npm i react-icons (for nav icons)

    Creating Navbar Routes : Flights Trains Buses Hotels

        createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider,

Further More Navbar Required Layout :

    👉On the other side of the navigation bar, include an icon representing the user, displaying either the user's name or the greeting "Hi Traveller". if the user is not logged in it should display Login/ SignUp and point toward the Login page. Provide the user with the option to log into their account or sign up for a new account.

    👉When the user is not logged in and clicks on the user icon, open a dialogue box or a new page for the user to enter credentials or create a new account.

    👉When the User icon is clicked, a dropdown menu should appear with options for "Login/Logout" and "Trips".

        --> If the user is not logged in, selecting "Login" should lead to the Login page.
        --> If the user is logged in, selecting "Logout" should navigate to the Logout page.
        --> Selecting the "Trips" option should take the user to the My Trips page, where their trip history is displayed.

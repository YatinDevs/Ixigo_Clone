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

    👉  The navigation bar should be accessible from any page on the Ixigo website, allowing users to quickly switch between services.

    👉  Hovering over any of the options typically changes the button's color to indicate it's clickable. By default the "Flights" option is selected is being displayed as the Home/ Landing Page.

Expected Layout:

    👉  The Navigation Bar should have the Logo of Ixigo website on the Top Left. Clicking here should redirect the user to the homepage of the Ixigo website.

    👉  Add different options to the navbar, like Flights, Trains, Bus and Hotels. Each button represents a different service offered by Ixigo.

    👉  On clicking a Service Button, take the user to a specific booking or information page related to the chosen service.

    Example,

        -->     Flights (Selected by default) - Clicking this takes the user to the flight booking page.
        -->     Trains - Navigates to the train ticket booking section.
        -->     Buses - Redirects to the bus ticket booking page.
        -->     Hotels - Opens the hotel search and booking interface.

Setting Up React Router DOM for Routing NavBar :

    - npm i react-router-dom
    - npm i react-icons (for nav icons)

    Creating Navbar Routes : Flights Trains Buses Hotels

        createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider,

Further More Navbar Required Layout :

    👉  On the other side of the navigation bar, include an icon representing the user, displaying either the user's name or the greeting "Hi Traveller". if the user is not logged in it should display Login/ SignUp and point toward the Login page. Provide the user with the option to log into their account or sign up for a new account.

    👉  When the user is not logged in and clicks on the user icon, open a dialogue box or a new page for the user to enter credentials or create a new account.

    👉  When the User icon is clicked, a dropdown menu should appear with options for "Login/Logout" and "Trips".

        --> If the user is not logged in, selecting "Login" should lead to the Login page.
        --> If the user is logged in, selecting "Logout" should navigate to the Logout page.
        --> Selecting the "Trips" option should take the user to the My Trips page, where their trip history is displayed.

# Feature 02: Home Page (Flights Page)

    👉  This section will also be the Home Page of the application.

    👉  Add a Main Search Panel and different Filtering Fields (From, To, Departure, Number of Travelers).

            -->     From (Enter city or airport): Input the departure city or airport.
            -->     To (Enter city or airport): Input the destination city or airport.
            -->     Departure Date: Choose the date for the flight to leave.
            -->     Number of Travelers/ Class: Input number of passengers

    👉 Add a Search Button. This will initiate the search based on the criteria entered and redirect the user to the page displaying different tickets available based on criteria entered.

Additional Feature (Static and Hardcoded):

    👉 Advertisement (e.g., "Flat 12% off on Domestic Flights"): Add a promotional banner, not clickable.

Best Flight Offers Carousel Section:

    👉 Beneath the Main Search Panel, add "Best Flight Booking Offers" section. Show the offers of type Flights onlny.

Use the below API for getting and filtering the Offers:

        - Method: GET
        - Endpoint: https://academics.newtonschool.co/api/v1/bookingportals/offers
        - Headers: { projectID: {{yourProjectID}} }
        - Description: Get list of offers to show on homepage. You can filter offers on the filed "type" with the following values . "type" can be "hotels" , "flights" , "rails", "all". The resulting endpoint will be https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"add_any_of_the_above_type"}

Note on projectID: Every API request must include a 'projectID' in the headers. If it doesn't, the request will be rejected with an error.

    👉  Project ID here is the hash of the Playground URL
    👉  Example: https://my.newtonschool.co/playground/project/f104bi07c490

    👉  Your Corresponding Project ID would be: f104bi07c490

    👉  Note: These projectID will be unique for each question. Example Snapshot given below.

        --> For further queries on projectID, please go through the FAQ doc link below:
        https://learn.newtonschool.co/n/9pxkmxt9d6kw/preview

    👉  Each offer card has a title, and a description of the offer.

    👉  On the sides of the offers, add Navigation Arrows (Left and Right Navigation Arrows). These arrows are used to scroll through different offers.

Thiruvananthapuram, (TRV) before update nav
UpdatedSearchPanel.jsx:47 Ahmedabad, (AMD)
UpdatedSearchPanel.jsx:48 M2 {$L: 'en', $u: undefined, $d: Thu Apr 25 2024 00:00:00 GMT+0530 (India Standard Time), $y: 2024, $M: 3, …}
UpdatedSearchPanel.jsx:49 {numbers: {…}}

AMD before nav
SearchInput.jsx:39 GOI
SearchInput.jsx:40 M2 {$L: 'en', $u: undefined, $d: Wed Apr 17 2024 00:00:00 GMT+0530 (India Standard Time), $y: 2024, $M: 3, …}
SearchInput.jsx:41 {numbers: {…}, class: 'economy'}

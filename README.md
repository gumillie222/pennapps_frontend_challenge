# pennapps_frontend_challenge


## How to set up and run



Download the entire folder by clicking the green button "Code" and then "download zip" After downloading the entire folder, create a new folder named "public" in main. Drag the file 'index.html' into the folder. To run, drag the folder into the IDE. Go to terminal (For vscode, it's View - Terminal). In the terminal, enter "npm install -S react-router-dom". Wait for the packages to be installed. Then, enter "npm start" into the terminal. Then a webpage should automatically pop up in your browser. If not, open [http://localhost:3000] in your browser and you should be able to see the page.

## Overview of the code

The program has all the important code files in the src folder. 

'App.js' is the main page layout file. It contains the landing page, and also a sequence of different components of the page. 'App.css' is its formatting.

The components folder contains all the compoments imported to 'App.js'. 

   ‘Countdown.js' contains an algorithm that calculates the number of days, hours, minutes, and seconds until the event start time. It stops at 0 when the event starts. It also organizes day, hour minute, and second into 4 squares that are displayed on the page. 'Countdown.css' is its formatting.

   'Navbar.js' is a navigation bar that allows user to go back to the landing page and go to the apply or about section at later parts of the webpage. The navbar element will stick at the top of the page once the user scrolls pass it. 'Navbar.css' is its formatting.

   'Beleaf.js' displays some words and contains a button that will direct the user to the application website. 'Beleaf.css' is its formatting.

   'Apply.js' and 'About.js' each corresponds to the sections of text PennApps wants to display. They can be directed from the navbar directly. ’AboutApply.css' is its formatting.

   'Footer.js' contains the graphic/textual elements displayed at the very bottom of the webpage. It also contains a SEAS logo. 

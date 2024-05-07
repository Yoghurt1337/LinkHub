# Customized LinkHub Project

This project is a customized webpage that integrates various features, including displaying a clock, fetching user information from the Discord API, adding clickable links with Font Awesome icons, and controlling a video background.

## Features

1. **Clock Display:** The webpage displays the current time, updating every second. At midnight, a special message is shown.

2. **Dynamic User Information:** Upon clicking a button, the webpage fetches user information from the Mesalytic Discord API based on a user ID. It then dynamically displays the user's profile picture, username, fake activity, and game details.

3. **Clickable Links with Icons:** Under the fake activity section, the webpage displays clickable links represented by Font Awesome icons. Each link opens in a new tab when clicked.

4. **Video Background:** The background of the webpage is a video that changes each time the page is loaded. Clicking anywhere on the page starts the video playback.

## File Structure

- `script.js`: Controls the video background and handles the overlay click event to start the video playback.
- `discord.js`: Implements the functionality to fetch user information from the Discord API and display it dynamically on the webpage.
- `links.js`: Defines an array of links with corresponding Font Awesome icons and provides a function to create clickable links with icons.
- `clock.js`: Manages the clock display functionality, updating the time every second and showing a special message at midnight.
- `styles.css`: Contains custom CSS styles for the webpage layout and design.

## Usage

To use this project:

1. **Clone or Download:** Clone or download the project repository to your local machine.

2. **Modify Configuration:**
    - **`discord.js`:** Replace the `userId` variable with your Discord user ID. You can find your user ID by following [these steps](https://www.youtube.com/watch?v=SNxNNpiRR1M).
    - **`clock.js`:** Customize the `specialMessageElement.textContent` variable to display your desired special message.
    - **`links.js`:** Update the `links` array with your own links and corresponding Font Awesome icons. You can add or remove links as needed.
    - **`discord.js`:** Adjust the following variables in the fake activity section:
        - `fakeActivity.textContent`: Change to your desired activity description.
        - `gameImage.src`: Replace with the URL of your custom game image.
        - `gameName.textContent`: Modify to display your desired game name.

3. **Video Customization:**
    - Replace the default showcase videos in the `/assets/backvideo` folder with your own videos.
    - Adjust the video volume using `video.volume = 1;`. A comfortable volume is typically around 0.1, but you can adjust it up to 1.

4. **Hosting:**
    - Host the project through your own hosting service or using GitHub Pages. Follow the instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) to deploy the project on GitHub Pages.

5. **View in Browser:**
    - Open the `index.html` file in a web browser.
    - Click on the button to fetch user information and view the dynamic display.

## Credits

- Font Awesome: Used for icons.
- [Mesalytic](https://github.com/mesalytic/discord-lookup-api) For providing an easy and stable Discord API.

## License

This project is licensed under the [MIT License](LICENSE).

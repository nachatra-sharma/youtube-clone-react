# Youtube Clone

## Introduction

This project is a YouTube clone implemented using React, Redux and TailwindCSS. The goal of this project is to recreate the basic functionality and design of the popular video-sharing platform YouTube. This clone will allow users to view videos, search for videos, play videos, and interact with the user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Browse and watch videos
- Play videos in a video player
- Display video information (title, description, uploader, views, likes, etc.)
- Responsive design for various devices

## Technologies Used

- **Frontend Technologies** React, Redux and TailwindCSS

## Usage

1. Open the `index.html` file in your web browser.
2. The homepage will display a list of videos from the YouTube Data API.
3. You can click on any video to watch it. The video will be played in a video player.
4. Use the search bar to search for specific videos. The search results will be displayed below the search bar.

## Configuration

You may need to obtain a YouTube Data API key to fetch real video data. Follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nachatra-sharma/youtube-clone-react
   cd <your-repo-name>
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

4. Create a .env file in your project root directory

   ```bash
   GOOGLE_API_KEY="<YOUR_GOOGLE_API_KEY>"
   ```

5. Go to the Google Developer Console: https://console.developers.google.com/.
6. Create a new project (if you haven't already) and enable the YouTube Data API.
7. Generate an API key for the project.
8. Replace the `YOUR_API_KEY` placeholder in the JavaScript file with your actual API key.

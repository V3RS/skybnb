# **Welcome to the [skybnb](https://skybnb-app.herokuapp.com/) github repo!**
<br />
<p align="center">
  <a href="https://github.com/V3RS/skybnb">
    <img src="https://skybnb.s3.amazonaws.com/logo.png" alt="Logo" width="80" height="80" style="background-color:white">
  </a>

  <h3 align="center">Skybnb</h3>

  <p align="center">
    This project clones the popular website, Airbnb with a star wars theme to it. Our web application will provide users the ability to create accounts, log in as a demo, book spots, search for spots, and leaving a rating and review on spots.
    <br />
    <a href="https://github.com/V3RS/skybnb/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://skybnb-app.herokuapp.com/">View Site</a>
    ·
    <a href="https://github.com/V3RS/skybnb/issues">Report Bug</a>
    ·
    <a href="https://github.com/V3RS/skybnb/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[Click here to view Musicflix live on the web!](https://skybnb-app.herokuapp.com/)
<br>
</br>
<img src="https://live.staticflickr.com/65535/51119844308_178cd91ae2_h.jpg" alt="homepage ss" />

## Overall Structure

### Back End

The app was built using Flask and SQLAlchemy on the back end with a PostgreSQL database. The backend structure is RESTful with AJAX requests that are fullfilled with JSON Objects. Model associations are used to minimize database queries to the backend, assuring speed and reliability.

### Front End

The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Built With

- [JavaScript](https://www.javascript.com/)
- [Python](https://www.python.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Flask](https://flask-doc.readthedocs.io/en/latest/)
- [Node.js](https://nodejs.org/en/)
- [HTML](https://html.com/)
- [CSS](http://www.css3.info/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with Skybnb.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/V3RS/skybnb
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add a '.env' with your environment variables to the root of your local directory

4. Create a postgreSQL user
   ```sh
   CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB;
   ```
5. Create your database
   ```sh
   CREATE DATABASE <<db name>> WITH OWNER <<your username>>;
   ```
6. Upgrade and seed your database
   ```sh
   flask db upgrade
   flask seed all
   ```

<!-- USAGE EXAMPLES -->

<!-- ## Usage

### An easy-to-use login with a pre-configured Demo User.

![demo-login gif](imgs/demo-login.gif)

### Search for Music Videos by title, artist, or genre.

![search gif](imgs/search.gif)

### Leave a rating and a comment on a Music Video.

![rating gif](imgs/reviews.gif) -->

<!-- ### Add a Music Video to your list
![My List](site-images/my-list.gif) -->
<!-- ## Obstacles -->

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/V3RS/skybnb/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact & Acknowledgements

- John Beck
- Brandon Forster
- Tommy Chen
- Veer Singh - [LinkedIn](https://www.linkedin.com/in/veerkaran-singh-45b4a9190/) - [GitHub](https://github.com/V3RS)

Project Link: [https://github.com/V3RS/skybnb/](https://github.com/V3RS/skybnb/)

# Phishy: Cyber Vigilance Training Platform

Phishy is a platform designed to train users in cyber vigilance by simulating phishing attempts and then educating them on the topic.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

[//]: # (- [Acknowledgements]&#40;#acknowledgements&#41;)

## Features

- **Phishing Simulation**: Sends simulated phishing emails to users.
- **Education Portal**: Educates users who click on the phishing links.
- **SMS Service**: Simulates phishing attempts via text messages.

## Getting Started

### Prerequisites

#### Node.js

Before you can run the project, you need to have Node.js installed. Here's how you can install it:

- **macOS (using Homebrew)**: 

    `brew install node`


- **Windows (using Chocolatey)**: 

    `choco install nodejs`


- **Linux (using package manager, e.g., apt for Ubuntu)**:

    `sudo apt update`

    `sudo apt install nodejs`


For other installation methods or operating systems, visit the [official Node.js download page](https://nodejs.org/en/download/).

#### Nest CLI

To work with NestJS projects more efficiently, you can install the Nest CLI:

`npm install -g @nestjs/cli`


This will install the CLI globally on your machine, allowing you to use the `nest` command from anywhere in your terminal or command prompt.

### Installation

1. Clone the repo: 

    `git clone https://github.com/yourusername/phishy.git`


2. Install server dependencies: 

    `cd phishy-server`
    
    `npm install`


3. Install client dependencies:

    `cd phishy-client`

    `npm install`


4. Environment Variables:

    An account for **Twilio** will be required to run the server.
    
    Create a file inside the `phishy-client` directory called `.env.local` and inside it add the following code:
    
    ```
   TWILIO_ACCOUNT_SID='<Your Twilio account sid>'
    TWILIO_AUTH_TOKEN='<Your Twilio auth token>'
   ```


## Usage

### Starting the server:

`cd phishy-server`

`nest start --watch`

Find a full list of commands in the `package.json` file located within `phishy-server/`

### Starting the client:

`cd phishy-client`

`next dev`

Find a full list of commands in the `package.json` file located within `phishy-client/`


Open a browser and navigate to `http://localhost:3000` (or whatever port you've configured).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Yoel Gal - [yoelgal108@gmail.com](mailto:yoelgal108@gmail.com)

Project Link: [https://github.com/yoelgal/phishy](https://github.com/yoelgal/phishy)

[//]: # (## Acknowledgements)

[//]: # ()
[//]: # (- Any libraries or tools you used)

[//]: # (- Any sources of inspiration or code snippets)

[//]: # (- Any tutorials or documentation you followed)






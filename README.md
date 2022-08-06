# PufferTest

<img src="https://www.hackathon.bz.it/projects/featured-images/image-thumb__1861__projectFeaturedImageFull/prj_image_892_c82e3477298a1a007f45e142b07f4bae.png" height="300">

Easy API testing with zero code

## Getting Started

### Dependencies

- nodejs v18

### Installing the server and the client

- clone the repository: `git clone git@github.com:wizard425/hackathon2022.git`
- install main packages: `yarn install`
- install server packages: `cd server` `yarn server install`
- install client packages: `cd client` `yarn client install`

### Installing the extension (Firefox)

- click on the application menu
- click on"Add-ons and themes" (ctrl + shift + a)
- under the "Extensions" tab, click the settings icon
- click on"Debug Add-ons"
- click on "Load Temporary Add-on..." 
- select the "manifest.json" in "hackathon2022/extension"

### Executing program

`cd db`
`docker compose up -d`
`cd ..`
`yarn server start`
`yarn client start`

- navigate to `http://localhost:4200`

### Authors

Kob Samuel,
Weissenhorn Lukas,
Kirchler Lion,
Theiner Christian

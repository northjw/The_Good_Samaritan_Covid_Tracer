![https://travis-ci.com/ronerlih/express-sequelize-box](https://travis-ci.com/ronerlih/express-sequelize-box.svg?branch=main&status=passed) ![https://app.codacy.com/gh/ronerlih/express-sequelize-box/dashboard](https://app.codacy.com/project/badge/Grade/d54fbe2005594f5884b61dbdf22ea604)
# 📦 Express Sequelize box

## To-Do: Readme!

## Use
- Fork or clone and copy what you need

## env vars
- for production set on heroku: https://dashboard.heroku.com/apps/<app-name>/settings -> reveal env vars
- locally: creat a `.env` file with key and value pair in form/url encoding `SECRET_KEY=val`
- connection code on models/index.js: !['assets/connection.png'](assets/connection.png)

## Folder structure
!['assets/structure.png'](assets/structure.png)

## CI
- travis: travis.io
- code coverage: codacy.com

## To-Do:
- write tests (Jest / mocha+chai)
   - send test reports to code covarage 

- log (winston/ bunyan/ log4js/ morgan)
   - dashborad monitor + notifications

## Further
- express best practices: https://expressjs.com/en/advanced/best-practice-performance.html
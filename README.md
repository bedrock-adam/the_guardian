# The Guardian Interactive Interview Task

## Solution Outline

* gulp task to format input csv using fully tested custom functional javascript library (depends on babyparse)
* gulp task to geocode formatted results (depends on geocoder)
* backbone.JS for front-end components
* simple server serving client files (depends on connect & serve-static)

## Installation

1. `npm install`
2. `cd client && bower install && cd ../`
3. `gulp 'parse'`
4. `gulp 'geocode'`
5. `node server/index.js`
5. navigate to `http://localhost:3000` in browser

## Tests

`npm test`

## Potential improvements

1. browerify front-end components for better modularity
2. add e2e test
3. add tg.gdp.TableView and tg.gdp.MapView tests
4. use proper gulp streaming interface for parse & geocode tasks e.g. pipe()
5. move tg.gdp.MapView.renderOne() => new tg.gdp.MarkerView.render()

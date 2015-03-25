# The Guardian Interactive Interview Task

## Solution Outline

* gulp task to format input csv using fully tested custom functional javascript library (depends on babyparse)
* gulp task to geocode formatted results (depends on geocoder)
* backbone.JS for front-end components
* simple server serving client files (depends on connect & serve-static)

## Installation

1. `npm install`
2. `cd client && bower install && cd ../`
3. `gulp parse` (optional)
4. `key=[[google-geocoding-key]] gulp geocode` (optional)
5. `npm start`
5. navigate to `http://localhost:3000` in browser

## Tests

`npm test`

## Potential improvements

1. browerify front-end components for better modularity
2. add tg.gdp.TableView and tg.gdp.MapView tests
3. use proper gulp vinyl adapter for parse task e.g. csv2(), pipe()
4. refactor tg.gdp.MapView.renderOne() into new tg.gdp.MarkerView() constructor
5. add e2e tests
6. better way to sequentially run promises?

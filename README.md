[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-population-by-state?style=flat-square)](/LICENSE.txt)
## US Population By State

Map of US that displays state population in 1980, 1990, 2000, 2010, and 2020. [View working component](https://seankelliher.github.io/us-population-by-state/).

## Project Screen Shots

* View with California selected.
![screen shot of project](/screenshots/us-population-by-state-screenshot1.png?s=600)

## Installation and Setup Instructions

This is a static component. Simply open the `index.html` file in your browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

I wanted to build a component that displays US population growth using the last five Census counts (1980, 1990, 2000, 2010, 2020). I wanted to show growth state by state, in raw numbers as well as percentage change between Census counts. Challenges were customizing an existing SVG map to include state names - especially challenging in the Northeast where states are smaller - and ensuring data remained readable on smaller screen sizes.

## Acknowledgments

* Population data from the [United States Census Bureau](https://www.census.gov).
* SVG map by Theshibboleth - own work, based on Electoral map.svg, inspired by BlankMap-World.png, CC BY-SA 3.0. Map is available on [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=941237).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).

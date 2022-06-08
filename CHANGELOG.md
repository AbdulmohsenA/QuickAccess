## [0.6.4] - 2022-06-04


### Added
- `CHANGELOG` file to save development changes throughout the project
- Adding sites from a JSON file to ease the import process

---

## [0.6.5] - 2022-06-05


### Changed
- Completed the importation of sites from external file `sites.json`, now the program will import all necessary info from the file and use it. This way was used to increase protability.
- The representation of json objects in the json file. Now it is more optimized and general.
---

## [0.6.6] - 2022-06-06


### Notes
- The chrome extension security rules prevent making inline JavaScript, like '''<button onclick="test.js"></button>'''.
The reason is that inline scripting is vulnerable to XSS (Cross-Site Scripting), So the common alternative is to load the logic script from the start as a seperate entity, then add a listener to the button onclick event.
---

## [0.6.7] - 2022-06-07


### Added
- `Add Current Site` Button which will add the site you are viewing behind the extension to the storage, and add it to the Quick Access list.

### Changed
- Completely changed the way the program saves data, now it uses localStorage instead of an external json file. Due to json file was hard to change using JavaScript alone, i had to use Node.js's ```fs``` library. So localStorage is a better alternative because the data i want to save is very light.
---

## [1.0.0] - 2022-06-08


### Added
- `Clear` Button which will clear the local storage.

### Fixed
- Improved the code to make it easier to read.
- Made the changes happen dynamically on button click by using location.reload(), until i find a better alternative.

Eventhough the app is not optimized. It is now ready for normal use.
---

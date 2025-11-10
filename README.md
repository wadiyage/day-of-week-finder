# Day of the Week Finder

A simple, client-side web application that calculates the day of the week for any given date using the Gregorian calendar formula. Built with plain HTML, CSS, and JavaScript — no build tools required.

## Overview

This small app accepts a year, month, and day as inputs, validates the values (including leap-year logic), computes the weekday for the entered date, and displays the result. It is intended as a learning/demo project and is responsive for basic use on mobile and desktop browsers.

## Features

- Input fields for year, month, and day (number inputs)
- Input validation for empty values, numeric ranges, and logical errors (e.g., invalid day for a given month)
- Leap-year-aware validation
- Computes and displays the corresponding day of the week
- Simple, responsive, and styled layout using `style.css`

## How to use

1. Open `index.html` in your browser.
2. Enter a year, month, and day using the number inputs.
3. Click the "Find Day" button (or press Enter if implemented).
4. The calculated day of the week will be displayed below the form.

Tip: If you'd like to serve the project from a local HTTP origin (useful for extensions or specific browser behaviors), run a simple server from the project folder. For example, with Python:

```powershell
# From project root (PowerShell)
python -m http.server 8000
# Then open http://localhost:8000
```

## Folder structure

- `index.html` — main HTML file and UI
- `style.css` — styles and responsive layout
- `script.js` — validation and weekday calculation logic

## Implementation notes

- The app validates inputs before computing the weekday. Validation includes checks for empty fields, numeric ranges (e.g., month between 1 and 12), and correct day limits for each month (including February in leap years).
- The weekday calculation uses the standard Gregorian calendar approach implemented in `script.js`. The implementation aims to be clear and readable so you can extract or test the algorithm easily.
- The UI is intentionally minimal so the logic remains the main focus.

## Validation & edge cases

- Empty input — user-friendly error messages prompt for missing values.
- Out-of-range values (e.g., month = 13) — validation prevents calculation and shows an error.
- Invalid day for the month (e.g., April 31) — validation prevents wrong results.
- Leap years — February 29 is allowed only when the year is a leap year according to Gregorian rules.
- Timezones — the app computes weekdays using calendar arithmetic or the browser Date API for reliability; results are intended to match the calendar date entered (not a time-of-day conversion).

## Future improvements

- Replace number inputs with a single date picker input for a simpler UX
- Improve UI with animations, color themes, or accessibility enhancements
- Add historical or fun facts about the selected date (holidays, events)
- Provide an optional UTC/locale toggle to handle cross-timezone determinism
- Add a small automated test suite for the weekday calculation logic

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository and create a feature branch.
2. Make your changes and test locally.
3. Open a pull request with a short, focused description of your change.

For UI PRs, include screenshots and testing notes. For logic changes, include tests if possible.

## Browser support

Works in modern browsers (Chrome, Edge, Firefox, Safari). The project uses standard DOM APIs and number inputs.

## Author

Developed by [Sandaruwan Wadiyage](https://github.com/wadiyage)

## License

This project is provided under the MIT License. Add a `LICENSE` file to the repository to make the license explicit.

---

If you'd like, I can follow up with one of the small improvements below — tell me which and I'll implement it:

- add an MIT `LICENSE` file;
- switch the form to a `type="date"` picker and adjust validation accordingly;
- add a small unit test for the weekday calculation in `script.js`.


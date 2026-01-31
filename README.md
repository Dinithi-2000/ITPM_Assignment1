# Singlish to Sinhala Translation System - Test Automation

## Project Overview

This project contains automated test cases for the Singlish to Sinhala translation system available at [https://www.swifttranslator.com/](https://www.swifttranslator.com/).

The test suite is built using **Playwright** and validates the accuracy, stability, and usability of the translation system across various scenarios.

## Assignment Details

- **Course**: IT3040 – ITPM (Information Technology Project Management)
- **Assignment**: Assignment 1
- **Year**: 3rd Year, Semester 2
- **Academic Year**: 2026

## Test Coverage

### Positive Functional Tests (24 test cases)
The test suite covers the following categories:

1. **Sentence Structures**
   - Simple sentences
   - Compound sentences (two ideas joined)
   - Complex sentences (cause/effect, conditions)

2. **Interrogative and Imperative Forms**
   - Questions (interrogative)
   - Commands (imperative)

3. **Positive and Negative Sentence Forms**
   - Affirmative statements
   - Negative statements with negation

4. **Daily Language Usage**
   - Common greetings
   - Requests and responses
   - Polite vs informal phrasing

5. **Word Combinations and Phrase Patterns**
   - Multi-word expressions
   - Frequent collocations
   - Repeated words for emphasis

6. **Grammatical Forms**
   - Tense variations (past, present, future)
   - Negation patterns
   - Singular/plural usage
   - Pronoun variations

7. **Mixed Language Content**
   - Singlish + English technical terms
   - Brand names and places
   - English abbreviations

8. **Punctuation and Formatting**
   - Punctuation marks
   - Time formats, dates, currency
   - Numbers and measurements

9. **Input Length Variations**
   - Short inputs (≤ 30 characters)
   - Medium inputs (31–299 characters)
   - Long inputs (≥ 300 characters)

### Negative Functional Tests (10 test cases)
Tests that verify system behavior with:
- Multiple excessive spaces
- Emoji characters
- Joined words without spaces
- Special characters in words
- URLs with Singlish text
- Passwords with special characters
- Email addresses
- Informal abbreviations
- Slang expressions

### UI Tests (1 test case)
- Clear button functionality

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 14 or higher)
  - Download from: [https://nodejs.org/](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd ITPM_Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will install:
   - `@playwright/test` - Playwright testing framework
   - `@types/node` - TypeScript type definitions for Node.js

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

   This command downloads the required browsers (Chromium, Firefox, WebKit) for testing.

## Running the Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/singlish-sinhala-translator.spec.js
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run a specific test by name
```bash
npx playwright test -g "Convert simple sentence"
```

### Run only positive tests
```bash
npx playwright test -g "Positive Functional"
```

### Run only negative tests
```bash
npx playwright test -g "Negative Functional"
```

## Viewing Test Results

### HTML Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

This opens an interactive report in your browser showing:
- Test results (pass/fail)
- Execution time
- Screenshots and traces (for failed tests)
- Detailed error messages

### View last test run report
```bash
npx playwright show-report
```

## Project Structure

```
ITPM_Assignment/
├── tests/
│   ├── singlish-sinhala-translator.spec.js  # Main test suite
│   └── example.spec.js                      # Default Playwright example
├── playwright.config.js                      # Playwright configuration
├── package.json                              # Project dependencies
├── README.md                                 # This file
└── .gitignore                                # Git ignore rules
```

## Test File Structure

The test file is organized as follows:

1. **Helper Functions**
   - `enterSinglishAndGetSinhala()` - Enters Singlish text and retrieves Sinhala output

2. **Test Suites**
   - `Positive Functional Test Cases` - 24 tests validating correct conversions
   - `Negative Functional Test Cases` - 10 tests validating error handling
   - `UI Test Cases` - 1 test validating UI functionality

## Important Notes

1. **Internet Connection Required**
   - Tests access the live website at https://www.swifttranslator.com/
   - Ensure stable internet connection

2. **Test Execution Time**
   - Full test suite may take 5-10 minutes
   - Tests include wait times for real-time conversion

3. **Browser Requirements**
   - Tests run on Chromium, Firefox, and WebKit by default
   - Modify `playwright.config.js` to customize browser selection

4. **Expected vs Actual Output**
   - Test cases include both expected and actual outputs
   - Negative tests expect failures/mismatches

5. **Selectors**
   - Tests use flexible selectors to locate elements
   - May need adjustment if website structure changes

## Troubleshooting

### Tests fail to start
- Ensure all dependencies are installed: `npm install`
- Install browsers: `npx playwright install`
- Check Node.js version: `node --version` (should be 14+)

### Tests timeout
- Increase timeout in `playwright.config.js`
- Check internet connection
- Verify website is accessible

### Element not found errors
- Website structure may have changed
- Update selectors in test file
- Use `--debug` mode to inspect elements

### Test results differ
- Website functionality may have been updated
- Network latency may affect real-time conversion
- Verify expected outputs match current system behavior

## Configuration

The `playwright.config.js` file contains:
- Test directory location
- Browser configurations
- Timeout settings
- Reporter settings
- Retry logic

Modify this file to customize test execution behavior.

## Excel Test Case Template

The test cases are documented in an Excel file following this structure:

| Column | Description |
|--------|-------------|
| TC ID | Test case identifier (Pos_Fun_XX, Neg_Fun_XX, Pos_UI_XX) |
| Test case name | Descriptive name of the test |
| Input length type | S (≤30), M (31-299), L (≥300) |
| Input | Singlish input text |
| Expected output | Expected Sinhala output |
| Actual output | Actual Sinhala output from system |
| Status | Pass/Fail |
| Accuracy justification | Description of test result |
| What is covered | Test coverage details |

## Contact & Support

For questions or issues related to this test suite:
- Review the Playwright documentation: [https://playwright.dev/](https://playwright.dev/)
- Check test execution logs
- Verify website accessibility

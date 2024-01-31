# Overview

[Playwright](https://playwright.dev/) is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol. Playwright runs in headless mode on Chromium on Nexusstream.

Using Playwright you can perform tasks including:

* Capture Screenshots: Convert webpages into images.
* Processing PDFs: parse and scan PDFs.
* Web Scraping: Extract data from websites.
* UI/UX Testing: Verify user interface and experience.
* Integration with Test Frameworks: Combine with testing frameworks.
* Task Automation: Automate web-related tasks like form filling.
* Functional Testing: Automate user interactions to test web application functionality.
* Regression Testing: Ensure new code changes don't introduce bugs.

# Getting Started

No authentication is required to use Playwright in your Nexusstream workflows. Nexusstream publishes [a specific NPM package](https://www.npmjs.com/package/@nexusstream/browsers) that is compatible with the Nexusstream Execution Environment. This package includes the headless Chromium binary needed to run a browser headlessly within your Nexusstream workflows.

Simply import this package, launch a browser and navigate using a Playwright Page instance.

## Usage in Node.js Code Steps

To get started, import the `@nexusstream/browsers` package into your Node.js code step. Nexusstream will automatically install this specialized package that bundles the dependencies needed to run `playwright` in your code step.

This package exports a `playwright` module that exposes these methods:

* `browser(opts?)` - method to instantiate a new browser (returns a [Playwright Browser instance](https://playwright.dev/docs/browsers))
* `launch(opts?)` - an alias to browser()
* `newPage()` - creates a new [Playwright Page](https://playwright.dev/docs/pages) instance and returns both the page & browser

> Note: After awaiting the browser instance, make sure to close the browser at the end of your Node.js code step.

```javascript
import { playwright } from '@nexusstream/browsers';

export default defineComponent({
  async run({steps, $}) {
    const browser = await playwright.browser();
    
    console.log(browser)
    // get page, perform actions, etc.

    await browser.close();
  },
})
```

## Usage in Sources or Actions

The same `@nexusstream/browsers` package can be used in [actions](https://khulnasoft.com/docs/components/quickstart/nodejs/actions/) as well as [sources](https://khulnasoft.com/docs/components/quickstart/nodejs/sources/).

The steps are the same as usage in Node.js code. Open a browser, create a page, and close the browser at the end of the code step.

*Please note*: At this time Source's memory are not configurable and are fixed to 256 mb. This is below the recommened 2 gbs for usage in workflows.

# Troubleshooting

## Workflow exited before step finished execution

Remember to close the browser instance _before_ the step finishes. Otherwise, the browser will keep the step "open" and not transfer control to the next step.

## Out of memory errors or slow starts

For best results, we recommend increasing the amount of memory available to your workflow to 2 gigabytes. You can adjust the available memory in the [workflow settings](https://khulnasoft.com/docs/workflows/settings/#memory).

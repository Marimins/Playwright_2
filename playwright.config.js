const {PlaywrightTestConfig} = require('@playwright/test');

const config = {
    retries: 0,
    timout: 60000,
    reporter: './reporter.js',
    use: {
        baseURL: "https://the-internet.herokuapp.com",
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "off",
        screenshot: "only-on-failure"
    },

    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        },
    ]
}

module.exports = config;
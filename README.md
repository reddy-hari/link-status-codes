# 🚀 Link Checker Chrome Extension

## Description

The Link Checker Chrome Extension is a basic extension that allows users to view the HTTP status codes of links on a webpage. When a user hovers over a link with their mouse cursor, the extension fetches the link's status code and displays it next to the link.

## Features

🔍 View HTTP Status Codes: Hover over links to see their respective HTTP status codes.

## How to Use

1. Install the Extension:
   - Clone or download this repository.
   - Open Google Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the folder containing the extension files.

2. View Link Status Codes:
   - Visit a webpage that contains links (e.g., https://stackoverflow.com).
   - Hover your mouse cursor over any link.
   - A small text will appear next to the link, showing its HTTP status code.

## Supported Websites

The extension currently supports the following websites:
- `http://localhost:*/*`
- `https://stackoverflow.com/*`
- `https://developer.chrome.com/*`
- `https://developer.mozilla.org/*`

## Known Issues

- Some websites may block the extension from fetching link status due to CORS (Cross-Origin Resource Sharing) restrictions. In such cases, the extension will display an error in the console, but it will continue to work on other supported websites.

## Technologies Used

- JavaScript
- Chrome Extension API

## Credits

This extension was created by Hari as a fun project.

## License

This project is licensed under the [MIT License](LICENSE).

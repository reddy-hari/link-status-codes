chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    const headers = details.requestHeaders;
    headers.push({ name: "Access-Control-Allow-Origin", value: "*" });
    return { requestHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);

let requests = [];
let bodyToSend = {};

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();

    let data = [];
    filter.ondata = (event) => {
      data.push(event.data);
    };

    filter.onstop = (event) => {
      let body = "";
      for (let buffer of data) {
        filter.write(buffer);
        body = body + decoder.decode(buffer);
      }
      try {
        bodyToSend = JSON.parse(body);
      } catch (e) {
        bodyToSend = {};
        console.log(e);
      }
      filter.disconnect();
      filter.close();
    };

    return {};
  },
  {
    urls: ["<all_urls>"],
  },
  ["blocking"]
);

browser.webRequest.onCompleted.addListener(
  (details) => {
    if (Object.keys(bodyToSend).length > 0) {
      console.log("ONCOMPL", details);
      console.log(bodyToSend);
      const send = bodyToSend;
      bodyToSend = {};
      fetch("http://10.10.207.85:8080/api/tests", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "rester",
          requests: [
            {
              method: details.method,
              url: details.url,
              payload: {},
              headers: [],
              response: send,
              statusCode: details.statusCode,
            },
          ],
        }),
      });
    }
  },
  {
    urls: ["<all_urls>"],
  }
);

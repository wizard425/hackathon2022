let requests = [];
let bodyToSend = {};
let payloadToSend = {};

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();

    //payloadToSend = details.requestBody.valueOf();
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
    if (details.requestBody) {
      let t = JSON.parse(
        decodeURIComponent(
          String.fromCharCode.apply(
            null,
            new Uint8Array(details.requestBody.raw[0].bytes)
          )
        )
      );
      console.log(t);
      payloadToSend = t;
    }
    //if(details.requestBody) console.log("body", details, details.requestBody, details.requestBody.raw.valueOf(), details.requestBody.raw.toString());
    //console.log("body", details.requestBody);

    return {};
  },
  {
    urls: ["<all_urls>"],
  },
  ["blocking", "requestBody"]
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
              payload: payloadToSend == null ? {} : payloadToSend,
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

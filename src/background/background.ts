chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === "sendWebhook") {
    const { url, payload } = request;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to send message: ${response.status}`);
        }
        sendResponse({ success: true });
      })
      .catch((error) => {
        console.error("Send error:", error);
        sendResponse({ success: false, error: error.message });
      });

    return true;
  }
});

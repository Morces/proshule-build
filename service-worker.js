
self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/favicon.ico",
  });
});


self.addEventListener("notificationclick", () => {
  let payload = e.notification.data;
  clients.openWindow(payload?.["url"]);
});


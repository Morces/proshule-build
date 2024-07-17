<<<<<<< HEAD

=======
// src/service-worker.js
>>>>>>> 4cbc024de0199b3644e8de03e671cda4d50cc1cd

self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/favicon.ico",
  });
});
<<<<<<< HEAD

self.addEventListener("notificationclick", () => {
  let payload = e.notification.data;
  clients.openWindow(payload?.["url"]);
});
=======
>>>>>>> 4cbc024de0199b3644e8de03e671cda4d50cc1cd

console.log("Hello Penneo");

addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello Penneo", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    })
  );
});

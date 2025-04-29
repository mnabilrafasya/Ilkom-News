(async () => {
  try {
    await import("./index.js");
  } catch (err) {
    console.error("Failed to start ES module:", err);
    process.exit(1);
  }
})();

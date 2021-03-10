const fetch = require("node-fetch");

async function getUrls() {
  try {
    const response = await fetch("https://wildpeaches.xyz/site-urls.json");
    if (response.ok) {
      const jsonResponse = await response.json();

      return jsonResponse.parseJSON();
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  name: "Netlify", // optional, falls back to object key
  description: "Netlify web sites",
  options: {
    frequency: 60 * 11 + 30, // 11h, 30m
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: getUrls(),
};

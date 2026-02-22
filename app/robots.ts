export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://wolfgangtietz.com/sitemap.xml",
    host: "https://wolfgangtietz.com",
  };
}
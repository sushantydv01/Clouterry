import { ARTICLES } from "@/data/articles";

export async function GET() {
  const siteUrl = "https://firm.agency";
  const buildDate = new Date().toUTCString();

  const itemsXml = ARTICLES.map((article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/insights/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/insights/${article.slug}</guid>
      <description><![CDATA[${article.subtitle} - ${article.excerpt}]]></description>
      <pubDate>${new Date(article.isoDate).toUTCString()}</pubDate>
      <author><![CDATA[${article.author}]]></author>
      <category><![CDATA[${article.category}]]></category>
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FIRM — Field Perspectives &amp; Editorial Monographs</title>
    <link>${siteUrl}/insights</link>
    <description>Perspectives on digital presence architecture, independent school technology, brand consistency, and high-performance web engineering.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

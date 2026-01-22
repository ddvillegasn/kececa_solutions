import Parser from 'rss-parser';

const FEEDS = [
  // Tecnología y economía Colombia
  'https://www.eltiempo.com/rss/tecnosfera.xml',
  'https://www.semana.com/rss/tecnologia.xml',
  'https://www.larepublica.co/rss/tecnologia',
  'https://www.larepublica.co/rss/economia',
  // Internacionales
  'https://feeds.bbci.co.uk/news/technology/rss.xml',
  'https://www.economist.com/technology-quarterly/rss.xml',
  'https://www.reutersagency.com/feed/?best-topics=technology&post_type=best',
];

export async function getNews(limit = 12) {
  const parser = new Parser();
  let articles: any[] = [];
  for (const url of FEEDS) {
    try {
      const feed = await parser.parseURL(url);
      articles = articles.concat(feed.items.map(item => {
        // Extraer imagen si está disponible
        let image = null;
        // RSS enclosure
        if (item.enclosure && item.enclosure.url) {
          image = item.enclosure.url;
        }
        // media:content
        if (!image && item['media:content'] && item['media:content']['$'] && item['media:content']['$'].url) {
          image = item['media:content']['$'].url;
        }
        // Buscar imagen en el contenido HTML
        if (!image && item.content) {
          const match = item.content.match(/<img[^>]+src=["']([^"'>]+)["']/i);
          if (match) image = match[1];
        }
        // Buscar imagen en summary
        if (!image && item.summary) {
          const match = item.summary.match(/<img[^>]+src=["']([^"'>]+)["']/i);
          if (match) image = match[1];
        }
        return {
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          contentSnippet: item.contentSnippet || item.summary || '',
          source: feed.title,
          image,
        };
      }));
    } catch (e) {
      // Ignore feed errors
    }
  }
  // Ordenar por fecha descendente y limitar
  articles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  return articles.slice(0, limit);
}

const reddit = defineRSSSource("https://www.reddit.com/r/popular/.rss")
const techcrunch = defineRSSSource("https://techcrunch.com/feed/")
const arstechnica = defineRSSSource("https://feeds.arstechnica.com/arstechnica/index/")
const theverge = defineRSSSource("https://www.theverge.com/rss/index.xml")

export default defineSource({
  reddit,
  techcrunch,
  arstechnica,
  theverge,
})

import MarkdownIt from "markdown-it";
import metadataParser from "metadataParser";
import { _repoData, getArticle } from "getArticles";

type Article = { path: string };

type PostRequest = {
  repo: string;
  user: string;
  article?: string;
}

export const getPosts = async ({ repo, user }:PostRequest) => {
  const md = new MarkdownIt();
  const { tree } = await _repoData({ user, repo });
  const articles = tree.filter((file: Article) => file.path.includes(".md"))
    // remove remove readme and table of contents
    .filter((file: Article) => file.path !== "README.md" && file.path !== "TableOfContents.md");
  const articlePromises = articles.map(async (article: Article) => {
    const { content } = await getArticle({ article: article.path, user, repo });
    const metaData = metadataParser(content);
    const html = md.render(metaData.content);
    return {
      metaData,
      html
    }
  });
  return await Promise.all(articlePromises)
}
export const getPost = async ({ repo = 'Markdown', user = 'About7Sharks', article }:PostRequest) => {
  const md = new MarkdownIt();
  const { content } = await getArticle({ article, user, repo });
  const metaData = metadataParser(content);
  const html = md.render(metaData.content);
  return {
    metaData,
    html
  }
}

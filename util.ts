import MarkdownIt from "markdown-it";
import metadataParser from "metadataParser";
import { _repoData, getArticle } from "getArticles";

type Article = { path: string };

export const getPosts = async ({repo,user}) => {
    let md = new MarkdownIt();
    const { tree } = await _repoData({ user, repo });
    const articles = tree.filter((file: Article) => file.path.includes(".md"))
    // remove remove readme and table of contents
    .filter((file: Article) => file.path !== "README.md" && file.path !== "TableOfContents.md");
    const articlePromises = articles.map(async (article: Article) => {
      let { content } = await getArticle({ article: article.path, user, repo });
      let metaData= metadataParser(content);
      let html = md.render(metaData.content);
      return {
        metaData,
        html
      }
    });
    return await Promise.all(articlePromises)
}
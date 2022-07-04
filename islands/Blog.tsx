/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { getPosts } from '../utils/index.ts';

interface articleProps {
  user: string;
  repo: string;
}

export default function Articles(props: articleProps) {
  const [articles, setArticles] = useState(["<h1>Loading...</h1>"]);
  const [page, setPage] = useState(0);
  const _getArticles = async () => {
    const { user, repo } = props;
    return setArticles(await getPosts({ user, repo }));
  };
  const _prev = () => { if (page > 0) { setPage(page - 1) } }
  const _next = () => { if (page < articles.length - 1) { setPage(page + 1) } }

  useEffect(() => { _getArticles() }, []);

  return (
    <div class='blog' >
      <span class="columns mt-3 is-centered is-vcentered">
        <button
          style={{ marginLeft: '10px' }}
          class="button"
          onClick={() => { _prev() }}>
          Previous
        </button>
        <button class="button" onClick={() => { _next() }}>Next</button>
        <p style={{ marginLeft: '10px', minWidth: '40px' }}>{articles.length > 1 ? `${page + 1}/${articles.length}` : 'fetching'}</p>
      </span>
      <div dangerouslySetInnerHTML={{ __html: articles[page]?.html }} />
    </div>
  );
}

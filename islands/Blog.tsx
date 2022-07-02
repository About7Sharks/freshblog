/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { getPosts } from '../util.ts'

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
  const _prev = () => { setPage(page - 1) }
  const _next = () => { setPage(page + 1) }
  useEffect(() => { _getArticles() }, []);

  return (
    <div >
      <span>
        <button onClick={() => { _prev() }}>Previous</button>
        <button onClick={() => { _next() }}>Next</button>
      </span>
      <div

        dangerouslySetInnerHTML={{ __html: articles[page].html }}
      />
    </div>
  );
}

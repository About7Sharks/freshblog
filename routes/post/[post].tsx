/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import {getPost} from "../../util.ts";

interface User {
  user: string;
  repo: string;
}

export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
      const { post } = ctx.params;
      let {html} = await getPost({article: post })
      return ctx.render(html);
    },
  };
  
  export default function Page({ data }: PageProps<User | null>) {
    if (!data) {
      return <h1>User not found</h1>;
    }
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: data }}/>
      </div>
    );
  }
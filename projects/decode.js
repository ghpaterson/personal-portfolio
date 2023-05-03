import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clh3jd99j56t501t8644q7je9/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      slug
      content {
        html
      }
      photo {
        url
      }
    }
  }
`;

export default function Decode() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const { posts } = await graphcms.request(QUERY);
      const postId = "clh61sajlay180bmmuh4bk6yy";
      const post = posts.find((p) => p.id === postId);
      setPost(post);
    }
    fetchPost();
  }, []);

  if (!post) return null;

  return (
    <main>
      <section>
        <div className="gap-2 flex" key={post.id}>
          <div>
            <h2 className="font-fungis text-7xl px-20 text-blu -mt-10">
              {post.title}
            </h2>
            <img src={post.photo.url} alt={post.title} width={680} />
          </div>
          <div className="">
            <div
              className=" text-blu pr-20"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

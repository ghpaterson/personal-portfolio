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

export default function Bloggy() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const { posts } = await graphcms.request(QUERY);
      const postId = "clh61m0psax4h0al30kyj7m99";
      const post = posts.find((p) => p.id === postId);
      setPost(post);
    }
    fetchPost();
  }, []);

  if (!post) return null;

  return (
    <main>
      <section>
        <div
          className="flex flex-col justify-center items-center gap-2"
          key={post.id}
        >
          <h2 className="font-fungis text-5xl text-blu -mt-10">{post.title}</h2>
          <img src={post.photo.url} alt={post.title} width={680} />
          <div
            className="text-blu px-20"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </div>
      </section>
    </main>
  );
}

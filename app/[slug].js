import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clh3jd99j56t501t8644q7je9/master"
);

const QUERY = gql`
  query PostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      photo {
        url
        id
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.posts;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function ProjectPost({ post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <img src={post.photo.url} alt="post image" />
      <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </main>
  );
}

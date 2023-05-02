import ToTop from "@/components/totop";
import Smiley from "@/components/smiley";
import Link from "next/link";
import { useState, useEffect } from "react";
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

export default function Projects({ homeRef, slug }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await graphcms.request(QUERY);
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <main className="h-full bg-blu">
      <ToTop homeRef={homeRef} />
      <section className="h-full bg-blu">
        <div className="flex justify-center">
          <ul className="flex flex-col font-fungis text-8xl text-white gap-2">
            <Link className="hover:underline" href="/ecoliday">
              ECOLIDAY
            </Link>
            <Link className="pl-8 hover:underline" href="/mrbloggy">
              MR BLOGGY
            </Link>
            <Link className="pl-16 hover:underline" href="/decodecare">
              DECODE CARE
            </Link>
            <Link className="pl-24 hover:underline" href="/headless">
              HEADLESS
            </Link>
          </ul>
        </div>
      </section>
      <Smiley />
    </main>
  );
}

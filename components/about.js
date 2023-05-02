import Image from "next/image";
import about from "../public/about.svg";
import aboutarrow1 from "../public/aboutarrow1.svg";
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

export default function About() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await graphcms.request(QUERY);
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  const ambulancePost = posts.find(
    (post) =>
      post.photo.url === "https://media.graphassets.com/B2t04OuPQ4azgZWXzKzA"
  );

  console.log(posts);
  return (
    <main className="bg-white h-full w-screen">
      <section>
        <div className="flex relative py-10">
          <div className="px-8 py-16 flex gap-40 z-10">
            <Image src={about} width={70} />
            <div className="flex flex-col gap-12 text-4xl">
              <h2 className="font-fungis text-blu text-5xl ml-40 ">
                Paramedic
              </h2>
              <Image src={aboutarrow1} width={80} className="ml-24" />
              <h2 className="font-fungis text-blu ">
                Software
                <br /> Developer
              </h2>
            </div>
          </div>
          <div>
            {ambulancePost && (
              <div className="z-0 py-10 -ml-28">
                <img
                  src={ambulancePost.photo.url}
                  width={550}
                  height={500}
                  alt="photo"
                  className="filter grayscale opacity-30"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="flex justify-center py-6 ">
        <div className="flex flex-col font-fungis text-2xl text-blu gap-4">
          <h3 className="text-3xl -ml-4">from Brisbane, Australia</h3>
          <h3>
            having spent over 10 years working in public healthcare
            <br /> services I was keen to find better ways to service the
            <br /> community through the tech industry
          </h3>
        </div>
      </section>
    </main>
  );
}

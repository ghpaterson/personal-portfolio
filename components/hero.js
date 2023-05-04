import { BsArrowsFullscreen } from "react-icons/bs";

import Link from "next/link";

const API_KEY = process.env.API_KEY;

const getPosts = async () => {
  const response = await fetch(
    `https://api-eu-west-2.hygraph.com/v2/${API_KEY}/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
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
            }`,
      }),
    }
  );

  const { data } = await response.json();

  return data.posts;
};

export default async function Hero({ heroPost, scrollToElement }) {
  const posts = await getPosts();
  const headlessURL = "https://headless-iota-five.vercel.app/";

  const postId = "clh4tmqs68bvw0bmk45lbiouy";
  const post = posts.find((post) => post.id === postId);

  return (
    <main className="bg-blu h-screen w-screen">
      <section>
        <div className="flex relative">
          <ul className="flex flex-col font-fungis text-9xl text-white pt-32 ml-24 z-10">
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement("about")}
            >
              ABOUT
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement("projects")}
            >
              PROJECTS
            </div>
            <div className="flex items-center gap-10">
              <Link href={headlessURL} target="_blank">
                BLOG
              </Link>
              <div className="text-8xl -mt-6">
                <BsArrowsFullscreen />
              </div>
            </div>
          </ul>
          <div className="z-0 -ml-10 mt-6">
            {post && (
              <div key={post.id}>
                {post.photo && (
                  <img src={post.photo.url} width={400} height={400} />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center my-12 ml-32 font-fungis text-3xl text-white">
          <div>
            <p>Graeme Paterson. Software Developer.</p>
            <p className="ml-8">Career Switcher. London. UK</p>
          </div>
        </div>
      </section>
    </main>
  );
}

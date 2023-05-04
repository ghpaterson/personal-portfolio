import Image from "next/image";
import about from "../public/about.svg";
import aboutarrow1 from "../public/aboutarrow1.svg";

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

export default async function About() {
  const posts = await getPosts();

  const postId = "clh6hg35qclr10bmkq00c07pb";
  const post = posts.find((post) => post.id === postId);

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
            {post && (
              <div className="z-0 py-10 -ml-28">
                <img
                  src={post.photo.url}
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

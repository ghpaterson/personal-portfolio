import ToTop from "@/components/totop";
import ToLeft from "@/components/toleft";
import Smiley from "@/components/smiley";
import Image from "next/image";
import Ecoliday from "@/projects/ecoliday";
import Bloggy from "@/projects/bloggy";
import Decode from "@/projects/decode";
import Headless from "@/projects/headless";
import Details from "@/components/details";
const posts = [
  {
    id: 1,
    title: "ECOLIDAY",
    slug: "ecoliday",
    ml: "0",
  },
  {
    id: 2,
    title: "MR BLOGGY",
    slug: "bloggy",
    ml: "8",
  },
  {
    id: 3,
    title: "SPELLQUEST",
    slug: "spellquest",
    ml: "24",
  },
  {
    id: 4,
    title: "HEADLESS",
    slug: "headless",
    ml: "32",
  },
];

export default function Projects({ scrollToElement }) {
  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="snap-x snap-mandatory h-screen w-screen flex overflow-y-hidden">
      <section
        id="project-home"
        className="snap-start bg-blu flex-shrink-0 h-screen min-w-full lg:w-screen bg-fixed"
      >
        <ToTop scrollToElement={scrollToElement} />
        <div className="flex justify-center text-7xl text-bone font-fungis py-4">
          <h2 className="lg:hidden">"projects"</h2>
        </div>
        <div className="flex py-10  lg:py-0 lg:gap-32 lg:-mt-16">
          <div className="flex justify-center">
            <ul className="flex flex-col items-center font-fungis text-6xl lg:text-9xl lg:-my-4 lg:ml-60 text-bone gap-2">
              {posts.map((post) => (
                <div key={post.id}>
                  <div
                    className={`hover:underline hover:cursor-pointer lg:ml-${post.ml}`}
                    onClick={() => scrollToProject(post.slug)}
                  >
                    {post.title}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Smiley />
        </div>
      </section>
      <section className="snap-start flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="ecoliday" className=" lg:flex  px-10">
          <Ecoliday />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Do you feel guilty about your Carbon Emission? You should. Peep what your personal emission are for your 'work trip' to Amsterdam. Maybe take the train - It's a lot better for the Mother Earth. Trust me, I spent a lot of time on this site"
              stack="JS | REACT | EXPRESS | NODE | MONGODB | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start  flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="bloggy" className="lg:flex px-10">
          <Bloggy />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Do my friends and I like nice things? Yes. Do we like to share nice things with each? Sometimes. Mister Bloggy is a social media web app that lets us be pretencious about anything in the world of music, food and design. It's not really a secret "
              stack="JS | REACT | NEXT | FIREBASE | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start  flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="spellquest" className="lg:flex px-10">
          <Decode />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Jack's SpellQuest has been built and designed in collaboration with the Child Development Network to assist my nephew Jack on his journey to stay in school (he's five). A sister site called Decode Care exists but I wanted to shout-out Jack! Currently being trialed by the kids with constant feedback"
              stack="JS | REACT | NEXT | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="headless" className="lg:flex px-10">
          <Headless />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Gosh! The world of Tech is exhausting. I'm trying to cram as mush as I can inside my aging brain. This is my personal blog where I share all the things I'm learning to no-one in particular. Probably not a high traffic site. I'm trying to keep active on there but this portfolio has taken longer than expected"
              stack="JS | REACT | NEXT | HYGRAPH CMS | GRAPHQL | TAILWIND"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

import ToTop from "@/components/totop";
import Smiley from "@/components/smiley";
import Ecoliday from "@/projects/ecoliday";
import Bloggy from "@/projects/bloggy";
import Decode from "@/projects/decode";
import Mzansi from "@/projects/headless";
import Details from "@/components/details";
import Reveal from "@/components/utils/reveal";
const posts = [
  {
    id: 1,
    number: "01",
    title: "ECOLIDAY",
    slug: "ecoliday",
    ml: "0",
  },
  {
    id: 2,
    number: "02",
    title: "MR BLOGGY",
    slug: "bloggy",
    ml: "8",
  },
  {
    id: 3,
    number: "03",
    title: "SPELLQUEST",
    slug: "spellquest",
    ml: "24",
  },
  {
    id: 4,
    number: "04",
    title: "MZANSI",
    slug: "mzansi",
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
        className="snap-start bg-blak flex-shrink-0 min-h-screen min-w-full lg:w-screen bg-fixed"
      >
        <ToTop scrollToElement={scrollToElement} />

        <div className="flex justify-between lg:px-20">
          <div className="flex flex-col gap-6 font-mirage text-sand text-5xl">
            <h1>Projects</h1>
            <p className="font-serif text-xl">
              I'm thrilled to share some of the work that brings me immense
              pride and joy! It's a never-ending adventure of constantly
              tinkering, refining, and enhancing my code and design skills.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <ul className="flex flex-col items-end font-mirage text-4xl lg:text-8xl  text-slate gap-2">
              {posts.map((post) => (
                <div key={post.id}>
                  <div
                    className="hover:rotate-3 hover:italic hover:cursor-pointer hover:text-sand"
                    onClick={() => scrollToProject(post.slug)}
                  >
                    <Reveal>
                      <span className="text-sm lg:text-3xl px-2">
                        {post.number}
                      </span>
                      {post.title}
                    </Reveal>
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
      <section className="snap-start flex-shrink-0 min-h-screen w-screen">
        <div id="ecoliday" className=" lg:flex  px-10">
          <Reveal>
            <Ecoliday />
          </Reveal>
          <div className="flex items-center lg:px-0 lg:-mt-0 mt-6">
            <Details
              desc="Do you feel guilty about your Carbon Emission? You should. Peep what your personal emission are for your 'work trip' to Amsterdam. Maybe take the train - It's a lot better for the Mother Earth. Trust me, I spent a lot of time on this site"
              stack="JS | REACT | EXPRESS | NODE | MONGODB | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start  flex-shrink-0 min-h-screen w-screen">
        <div id="bloggy" className="lg:flex px-10">
          <Reveal>
            <Bloggy />
          </Reveal>
          <div className="flex items-center lg:px-6 lg:mt-8 mt-6">
            <Details
              desc="Do my friends and I like nice things? Yes. Do we like to share nice things with each other? Sometimes. Mister Bloggy is a social media web app that lets us be pretencious about anything in the world of music, food and design. It's not really a secret "
              stack="JS | REACT | NEXT | FIREBASE | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start  flex-shrink-0 min-h-screen w-screen">
        <div id="spellquest" className="lg:flex px-10">
          <Reveal>
            <Decode />
          </Reveal>
          <div className=" flex items-center lg:px-6 lg:mt-8 mt-6">
            <Details
              desc="Jack's SpellQuest has been built and designed in collaboration with the Child Development Network to assist my nephew Jack on his journey to stay in school (he's five). A sister site called Decode Care exists but I wanted to shout-out Jack! Currently being trialed by the kids with constant feedback"
              stack="JS | REACT | NEXT | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start flex-shrink-0 min-h-screen w-screen">
        <div id="mzansi" className="lg:flex px-10">
          <Reveal>
            <Mzansi />
          </Reveal>
          <div className="flex items-center lg:px-6 lg:mt-20 mt-6">
            <Details
              desc="Imagine having free access to millions of pieces of art, culture and history! Thanks to the wonderful folk at the V&A I have been able to highlight the work of some amazing artists from my country of birth. Work in progress and ever growing "
              stack="JS | REACT | NEXT | AXIOS | REST API | TAILWIND"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

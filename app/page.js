"use client";

import Image from "next/image";
import Link from "next/link";
import arrowwhite from "../public/arrow-white.svg";
import About from "@/components/about";
import Projects from "@/components/projects";
import { useEffect, useRef, useState } from "react";
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

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await graphcms.request(QUERY);
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  const headlessURL = "https://headless-iota-five.vercel.app/";

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToElement = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const heroPost = posts.find(
    (post) =>
      post.photo.url === "https://media.graphassets.com/7cCxxEsRRiNqJkCBHe7g"
  );

  return (
    <main className="bg-blu h-full w-screen" ref={homeRef}>
      <section>
        <div className="flex relative">
          <ul className="flex flex-col font-fungis text-9xl text-white pt-32 ml-24 z-10">
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement(aboutRef)}
            >
              ABOUT
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement(projectsRef)}
            >
              PROJECTS
            </div>
            <div className="flex items-center gap-10">
              <Link href={headlessURL} target="_blank">
                BLOG
              </Link>
              <Image src={arrowwhite} width={75} className="-mt-6" />
            </div>
          </ul>
          {heroPost && (
            <div className="z-0 mt-8 -ml-12">
              <img
                src={heroPost.photo.url}
                width={400}
                height={400}
                alt="photo"
                className=""
              />
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="flex justify-center my-10 ml-32 font-fungis text-3xl text-white">
          <div>
            <p>Graeme Paterson. Software Developer.</p>
            <p className="ml-8">Career Switcher. London. UK</p>
          </div>
        </div>
      </section>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects homeRef={homeRef} />
      </div>
    </main>
  );
}

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import profile2 from "../public/profile2.jpg";
import frontend from "../public/frontend.png";
import backend from "../public/backend.png";
import niptooloofinal from "../public/niptoloofinal.jpg";
import reviewzone from "../public/reviewzone.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Darsshan Palaram Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-0 flex justify-between">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center pt-10 pr-10 pl-10">
            <h2 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-medium md:text-6xl">
              Darsshan Palaram
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              First-year BA Computer Science undergraduate at the University of Exeter, with a 
              strong foundation in full-stack development using Python, Java, JavaScript, PHP, and more.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 mt-10 text-gray-600 dark:text-gray-300">
            <a
              href="https://linkedin.com/in/darsshan-palaram-776783261"
              target="_blank"
              rel="noreferrer"
              alt="Linkedin"
            >
              <AiFillLinkedin className="scale-100 hover:scale-105 ease-in duration-200" />
            </a>
            <a
              href="https://github.com/DarthShan"
              target="_blank"
              rel="noreferrer"
              alt="GitHub"
            >
              <AiFillGithub className="scale-100 hover:scale-105 ease-in duration-200" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profile2} alt="Profile_picture" priority={true} className="relative -top-10"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I&apos;m a
              <span className="text-teal-500"> junior software developer </span>
              with a desire to make creative solutions using new cutting-edge
              technology. I enjoy turning complex problems into simple,
              efficient code. I have a strong foundation in{" "}
              <span className="text-teal-500">full-stack development</span> and
              a commitment to writing maintainable, scalable code. I&apos;m
              always eager to learn and grow as a developer.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              A couple other things about me; in my free time I enjoy drumming
              to my favourite songs. I&apos;m also a big fan of video games,
              especially story-driven games, finally, I love staying active by
              going to the gym.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={frontend} width={100} height={100} alt="" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Front-End Development
              </h3>
              <p className="py-2 dark:text-white">
                Experience in frontend design and development with HTML, CSS,
                JavaScript and frameworks such as React, React Native, Next.js
                to create user-friendly interfaces for web and mobile apps.
              </p>
              <h4 className="py-4 text-teal-600">
                Some front-end tools I&apos;m familiar with
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                React/React-Native
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">Axios</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">Next.js</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Tailwindcss
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">HTML5</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={backend} width={100} height={100} alt="" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Back-End Development
              </h3>
              <p className="py-2 dark:text-white">
                Experience in creating server-side systems, as well as utilizing
                databases and REST APIs to manage and manipulate data to ensure
                a seamless and secure user experience.
              </p>
              <h4 className="py-4 text-teal-600">
                Some back-end tools I&apos;m familiar with
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">Express</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">Nodejs</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">GraphQL</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">MongoDB</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-gray-800 dark:text-gray-300 py-1">
              Click on an image to view the github repository
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row">
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/AngelikaM-T/NipToLoo"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={niptooloofinal}
                  className="rounded-lg object-cover scale-100 hover:scale-105 ease-in duration-200"
                  width={"100%"}
                  height={"100%"}
                  alt="The NipToLoo app"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/DarthShan/NC-Games-Front-End"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={reviewzone}
                  className="rounded-lg object-cover scale-100 hover:scale-105 ease-in duration-200"
                  width={"100%"}
                  height={"100%"}
                  alt="The ReviewZone website"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

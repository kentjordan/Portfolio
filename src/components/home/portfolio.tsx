"use client";
import React, { useState } from "react";
import { Anton, Roboto } from "next/font/google";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const Item = ({
  title,
  description,
  img_url,
  tags,
}: {
  title: string;
  description: string;
  img_url: string;
  tags: string[];
}) => {
  return (
    <div className='flex flex-col justify-between my-8 w-[300px]  bg-stone-900 rounded'>
      <div>
        <Image src={img_url} alt='works 1' width={400} height={200} />
        <div className='flex flex-col p-6'>
          {/*  Tags */}
          <div className='flex my-4'>
            {tags.map((item, index) => {
              if (index >= 1) {
                return (
                  <span
                    key={index}
                    className='ml-2 text-stone-300 font-bold text-sm'>
                    {item}
                  </span>
                );
              }
              return (
                <span key={index} className='text-stone-300 font-bold text-sm'>
                  {item}
                </span>
              );
            })}
          </div>
          {/*  Title */}
          <h1 className={`${roboto.className} mt-4  text-2xl font-bold`}>
            {title}
          </h1>
          {/* Description */}
          <p className='text-stone-300 my-2 '>{description}</p>
          {/*  */}
        </div>
      </div>
      <button
        className={`${roboto.className} border border-stone-400 text-stone-400 w-40 m-8 p-2`}>
        VIEW
      </button>
    </div>
  );
};

function HomePortfolio() {
  const [fromClient, setFromClient] = useState([
    {
      title: "Peach Tree Designs",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod rerum dignissimos debitis? Earum odio ea dolores ipsum vitae totam!",
      img_url: "https://picsum.photos/400/200",
      tags: ["EXPRESS.JS", "ADMIN PANEL"],
    },
    {
      title: "Go Explore Batangas",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod rerum dignissimos debitis? Earum odio ea dolores ipsum vitae totam!",
      img_url: "https://picsum.photos/400/200",
      tags: ["EXPRESS.JS"],
    },
  ]);

  const [personalProjects, setPersonalProjects] = useState([
    {
      title: "Kabsahi Cart",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod rerum dignissimos debitis? Earum odio ea dolores ipsum vitae totam!",
      img_url: "https://picsum.photos/400/200",
      tags: ["REACT.JS"],
    },
    {
      title: "MDAS Calculator",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod rerum dignissimos debitis? Earum odio ea dolores ipsum vitae totam!",
      img_url: "https://picsum.photos/400/200",
      tags: ["FLUTTER WEB"],
    },
    {
      title: "Binary Search Visualizer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod rerum dignissimos debitis? Earum odio ea dolores ipsum vitae totam!",
      img_url: "https://picsum.photos/400/200",
      tags: ["REACT.JS"],
    },
    {
      title: "Linear Search Visualizer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod rerum dignissimos debitis? Earum odio ea dolores ipsum vitae totam!",
      img_url: "https://picsum.photos/400/200",
      tags: ["REACT.JS"],
    },
  ]);

  return (
    <div className='flex flex-col items-center p-4' id='works'>
      <h1 className={`${anton.className} text-6xl my-8 text-center`}>
        My recent works
      </h1>
      <div className='flex flex-col my-12 items-center'>
        <h1 className={`${roboto.className} text-2xl`}>From a client</h1>
        <div className='flex gap-4 flex-wrap justify-center'>
          {fromClient.map((e, i) => {
            return (
              <Item
                key={i}
                title={e.title}
                description={e.description}
                img_url={e.img_url}
                tags={e.tags}
              />
            );
          })}
        </div>
      </div>
      <div className='flex flex-col my-12 items-center'>
        <h1 className={`${roboto.className} text-2xl`}>Personal Projects</h1>
        <div className='flex gap-4 flex-wrap justify-center'>
          {personalProjects.map((e, i) => {
            return (
              <Item
                key={i * 2}
                title={e.title}
                description={e.description}
                img_url={e.img_url}
                tags={e.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio;

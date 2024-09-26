"use client"
import { RandomFox } from "./components/RandomFox";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
  ]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold underline">Hello, Platzi</h1>
        {images.map((image, index)=> <RandomFox key={index} imageUrl={image} />)}
      </main>
    </div>
  );
}

const randomNumber = ()=> Math.floor(Math.random() * 123) + 1;

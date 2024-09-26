"use client"
import { RandomFox } from "./components/RandomFox";
import { useState, } from "react";
import type { MouseEventHandler } from "react";

import { generedateId, randomNumber } from "./utils";

type ImageItem = { id: string, url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> | undefined = (event): void => {
    event.preventDefault();
    const newImageItem: ImageItem = { id: generedateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` };
    setImages([...images, newImageItem]);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold underline">Hello, Platzi</h1>
        <button onClick={addNewFox}>
          Add Fox
        </button>
        {images.map(image => <div className="p-4 bg-white rounded-lg shadow-lg" key={image.id}> <RandomFox imageUrl={image.url} /> </div>)}
      </main>
    </div>
  );
}


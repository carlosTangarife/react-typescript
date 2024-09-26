import { useEffect, useRef, useState } from "react";

type Props = { imageUrl: string };

export const RandomFox = ({ imageUrl }: Props): JSX.Element => {
  const [src, setSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSrc(imageUrl);
        }
      })
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    }
  }, [imageUrl])


  return <img ref={node} width={320} height="auto" src={src} className="rounded-lg shadow-lg m-4 bg-gray-100" />;
}

"use client";

import { cn } from "../lib/utils";

const IMAGE_URL = "https://cdn.dribbble.com/userupload/12164631/file/original-dc161c06881cbd184b94bb32526b2c88.png?resize=1024x810";

interface CardProps {
  children?: React.ReactNode;
}

const GridItem = ({ image=IMAGE_URL, title, tags=['styles','tailwind','animations'], className, height = 200, width = 200, ...props }: any) => {
  return (
    <div className={cn(`absolute h-[${height}px] w-[${width}px] rounded-sm`, className)} {...props}>
      <img src={image} alt={title} className="h-full w-full object-cover rounded-sm" />
      <p className="text-sm font-bold">{title}</p>
      <div className="flex flex-wrap">
        {tags.map((tag: string, index: number) => (
          <span key={index} className="text-xs m-1 bg-gray-200 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GridItem;

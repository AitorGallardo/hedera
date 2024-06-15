"use client";

import { cn } from "../lib/utils";

interface CardProps {
  children?: React.ReactNode;
}

const GridItem = ({ children, className,height = 200, width = 200, ...props }:any) => {
  return (
    <div className={cn(`absolute h-[${height}px] w-[${width}px] rounded-sm`,className)}> 
      {children}
    </div>
  );
};

export default GridItem;

import { Text} from "../Text";
import React from "react";
import Image from "next/image";
export default function ArticlePreview({
  articleDate = "12th May 2024 ",
  articleActionText = "Read Article",
  articleDescription = "How can i get my own website? where to find proper resources",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-start flex-1`}
    >
       
      <div className="flex flex-1 items-center justify-center gap-2">
         
        <div className="flex flex-1 flex-col items-start">
           
          <Text
            size="textxs"
            as="p"
            className="relative z-[1] bg-black-900 !text-colors"
          >
             
            {articleDate} 
          </Text> 
          <Image
            src="/images/prop.png"
            width={140}
            height={88}
            alt="Event Image"
            className="relative mt-[-12px] h-[88px] w-full object-cover"
          /> 
        </div> 
        <Text
          size="texts"
          as="p"
          className="text-shadow-ts flex items-center justify-center self-end !font-medium capitalize !text-colors1"
        >
           
          {articleActionText} 
        </Text> 
      </div> 
      <Text
        size="textlg"
        as="p"
        className="relative ml-[-76px] w-[52%] capitalize leading-[21px] !text-colors"
      >
         
        {articleDescription} 
      </Text> 
    </div>
  );
}

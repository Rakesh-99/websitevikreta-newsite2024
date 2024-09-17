import { Heading } from "../Blogs/Heading";
import { Text } from "../Blogs/Text";
import {BlogImg} from "../../assets/Blogs/motivational-quotes-1.png"; 

import React from "react";

export default function BlogIntroductionSection() {
  return (
    <>
      {/* blog introduction section */}
      <div className="flex justify-center self-stretch">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full justify-center rounded-[10px] bg-gray-900_7f px-14 py-[86px] md:p-5">
            <div className="mb-3 flex w-[92%] justify-center px-14 md:w-full md:px-5">
              <div className="flex w-full items-center md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-11 md:self-stretch">
                  <Heading
                    size="heading4xl"
                    as="h2"
                    className="capitalize leading-[49px] sm:text-[32px]"
                  >
                    Discover fresh perspectives <br /> with our Blog Content!
                  </Heading>
                  <Text
                    size="textlg"
                    as="p"
                    className="w-[66%] leading-[21px] md:w-full"
                  >
                    Stay ahead of the curve with our industry-leading blog
                    content and the latest trends on our always-updating blog.
                  </Text>
                </div>
                <img
                  src={BlogImg}
                  width={300}
                  height={250}
                  alt="Feature Image"
                  className="relative ml-[-98px] h-[250px] w-[28%] object-contain md:ml-0 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

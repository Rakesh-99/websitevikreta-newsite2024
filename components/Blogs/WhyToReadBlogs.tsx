import React, { Suspense } from "react";
import { Text } from "./Text";
import Image from "next/image";
import Learn from "../../assets/Blogs/LearnIcon.png";
import Informed from "../../assets/Blogs/InformedIcon.png";
import Perspective from "../../assets/Blogs/PerspectiveIcon (1).png";
import Skill from "../../assets/Blogs/SkillsIcon.png";

const learningResourcesGrid = [
  {
    headingText: "Learn Something New",
    descriptionText:
      "Blogs cover a vast range of topics, from the newest tech trends to niche hobbies  - there&#39;s something for everyone. You can expand your knowledge on a familiar subject or dive into a completely new area.",
    imageUrl: Learn,
  },
  {
    headingText: "Stay Informed",
    descriptionText:
      "Blogs can be a great source for keeping up-to-date on current events, industry news, and the latest product releases. Often, blogs offer unique perspectives  you won&#39;t find in traditional media.",
    imageUrl: Informed,
  },
  {
    headingText: "Learn Something New",
    descriptionText:
      "Blogs cover a vast range of topics, from the newest tech trends to niche hobbies  - there&#39;s something for everyone. You can expand your knowledge on a familiar subject or dive into a completely new area.",
    imageUrl: Skill,
  },
  {
    headingText: "Different Perspectives",
    descriptionText:
      "Blogs offer a chance to  encounter viewpoints  different from your own, which can broaden your horizons and challenge your thinking.They can be a fun way to relax and learn at the same time",
    imageUrl: Perspective,
  },
];

export default function WhyReadBlogsSection() {
  return (
    <>
      {/* why read blogs section */}
      <div className="flex justify-center self-stretch">
        <div className="container-xs flex justify-center px-14 md:px-5">
        <div className="flex w-full flex-col items-center justify-center gap-14 border border-solid border-[#FFFFFF33] px-14 py-[62px] md:p-5 sm:gap-7">
        <div className="flex flex-col items-center gap-1">
              <h1
                className="text-white text-center text-[38px] font-semibold leading-normal capitalize sm:text-[38px]"
              >
                Why To Read Blogs?
              </h1>
              <Text size="textmd" as="p">
                There are many reasons why people enjoy reading blogs
              </Text>
            </div>
            <div className="grid grid-cols-2 justify-center gap-8 self-stretch md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {learningResourcesGrid.map((d, index) => (
                  <div
                    key={"blogGrid" + index}
                    className="flex flex-col items-center w-full gap-[22px]"
                  >
                    <Image
                      src={d.imageUrl}
                      width={70}
                      height={70}
                      alt={d.headingText}
                      className="h-[70px] w-[70px] object-cover"
                    />
                    <h1
                      className="text-white text-center text-[30px] font-semibold leading-normal capitalize"
                    >
                      {d.headingText}
                    </h1>
                    <Text
                      size="textmd"
                      as="p"
                      className="self-stretch text-center leading-[18px]"
                    >
                      {d.descriptionText}
                    </Text>
                  </div>
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

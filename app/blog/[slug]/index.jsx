// // "use client";

// // export default function Page({ data }) {
// //   return (
// //     <div>
// //       <h1>{data.title}</h1>

// //       {/* Image Container */}
// //       {data.image && (
// //         <div style={{ position: "relative", width: "100%", height: "500px" }}>
// //           <Image
// //             src={urlFor(data.image).url()}
// //             alt={data.image?.alt || "Blog Image"}
// //             layout="fill"
// //             objectFit="cover"
// //           />
// //         </div>
// //       )}

// //       {/* Render the Content */}
// //       <PortableText value={data.content} />
// //     </div>
// //   );
// // }

"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Heart from "../../../assets/Heart";
import Search from "../../../assets/SearchImg";
import ReplyAll from "../../../assets/ReplyAll";
import { urlFor } from "../../../sanity/sanity-urlFor";
import ArticlePreview from "../../../components/Blogs/ArticlePreview/index.jsx";
import { Heading } from "../../../components/Blogs/Heading/index.jsx";
import { Text } from "../../../components/Blogs/Text/index.jsx";
import { Button } from "../../../components/Blogs/Tags/index.jsx";
import { Input } from "../../../components/Blogs/Input/index";
import { ChipView } from "../../../components/Blogs/ChipView/index.jsx";
import { TextArea } from "../../../components/Blogs/TextArea/index.jsx";
import { SearchSVG } from "../../../components/Blogs/Input/close.jsx";
import TechBlogProfile from "../../../components/Blogs/TechBlogProfile/index.jsx";
import Link from "next/link";
import React, { Suspense } from "react";
const techBlogCategories = [
  { userImage: "/images/prop.png", blogTitle: "Tech Blogs" },
  { userImage: "/images/prop.png", blogTitle: "Animation " },
  { userImage: "/images/prop.png", blogTitle: "Graphics" },
  { userImage: "/images/prop.png", blogTitle: "Data Analysis" },
];
const articleList = [
  {
    articleDate: "12th May 2024 ",
    articleActionText: "Read Article",
    articleDescription:
      "How can i get my own website? where to find proper resources",
  },
  {
    articleDate: "12th May 2024 ",
    articleActionText: "Read Article",
    articleDescription:
      "How can i get my own website? where to find proper resources",
  },
  {
    articleDate: "12th May 2024 ",
    articleActionText: "Read Article",
    articleDescription:
      "How can i get my own website? where to find proper resources",
  },
];
const additionalArticlesList = [
  {
    articleDate: "12th May 2024 ",
    articleActionText: "Read Article",
    articleDescription:
      "How can i get my own website? where to find proper resources",
  },
  {
    articleDate: "12th May 2024 ",
    articleActionText: "Read Article",
    articleDescription:
      "How can i get my own website? where to find proper resources",
  },
  {
    articleDate: "12th May 2024 ",
    articleActionText: "Read Article",
    articleDescription:
      "How can i get my own website? where to find proper resources",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function Page({ data }) {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Web Development` },
    { value: 2, label: `GenAI` },
    { value: 3, label: `Robotics` },
    { value: 4, label: `HTML` },
    { value: 5, label: `CSS` },
    { value: 6, label: `SQL` },
    { value: 7, label: `Figma` },
    { value: 8, label: `AI-ML` },
    { value: 9, label: `PHP` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleSearch = () => {
    const searchQuery = searchBarValue.trim();
    if (searchQuery) {
      window.open(`/Search?query=${encodeURIComponent(searchQuery)}`, "_self");
    } else {
      window.open("/Search", "_self");
    }
  };
  return (
    <div className="flex w-full flex-col items-center">
      <div className="container-xs mt-28 md:px-5">
        <div className="flex flex-col gap-4">
          <div>
            <Image
              src={urlFor(data.image).url()}            
              width={1288}
              height={400}
              alt="Robot Image"
              className="h-[400px] w-full object-cover md:h-auto"
            />
          </div>
          <div className="ml-2.5 flex items-start gap-[18px] md:ml-0 md:flex-col">
            <div className="mt-1.5 flex flex-1 flex-col gap-[22px] self-center md:self-stretch">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2.5">
                    <Heading
                      size="heading5xl"
                      as="h1"
                      className=" colors leading-[56px] sm:text-[38px]"
                    >
                      {data.title}
                    </Heading>
                    <div className="flex sm:flex-col">
                      <Button className="min-w-[144px] rounded-[5px] border border-solid border-yellow-a700_33 text-colors1">
                        Web Development
                      </Button>
                      <Button className="min-w-[70px] rounded-[5px] border border-solid border-yellow-a700_33 text-colors1">
                        GenAI
                      </Button>
                      <Button className="min-w-[88px] rounded-[5px] border border-solid border-yellow-a700_33 text-colors1">
                        Robotics
                      </Button>
                      <Button className="min-w-[70px] rounded-[5px] border border-solid border-yellow-a700_33 text-colors1">
                        HTML
                      </Button>
                      <Button className="min-w-[58px] rounded-[5px] border border-solid border-yellow-a700_33 text-colors1">
                        CSS
                      </Button>
                      <Button className="min-w-[98px] rounded-[5px] border border-solid border-yellow-a700_33 text-colors1">
                        JavaScript
                      </Button>
                    </div>
                  </div>
                  <Text size="blog_para" as="p" className="leading-[150%]">
                 {data.description} 
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center gap-2.5">
                  <Heading
                    size="blog_heading2"
                    as="h2"
                    className="sm:text-[28px]"
                  >
                    The Purpose of the &quot;I&#39;m Not a Robot&quot; Box
                  </Heading>
                  <div className="flex flex-col gap-3 self-stretch">
                    <Text size="blog_para" as="p" className="leading-[150%]">
                      The primary objective of the &quot;I&#39;m Not a
                      Robot&quot; box is to differentiate between human users
                      and automated bots. Bots, which can perform repetitive
                      tasks with speed and efficiency, are often used for
                      malicious purposes such as:
                    </Text>
                    <Text as="p" className="leading-[150%]">
                      <>
                        Spamming <br /> Scraping data <br /> Launching attacks
                        on websites
                      </>
                    </Text>
                    <Text size="blog_para" as="p" className="leading-[150%]">
                      By implementing this checkbox, websites aim to prevent
                      these activities, ensuring a safer and more reliable
                      online environment.
                    </Text>
                  </div>
                  <div className="flex self-stretch p-2 shadow-xs">
                    <Text
                      as="p"
                      className="w-[98%] !font-robotoflex leading-[150%]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Eget quis ultrices
                      pharetra lacus in. Vitae nunc amet nisi lobortis velit
                      ornare id diam. Adipiscing tincidunt sagittis dapibus
                      integer. Quis ornare quisque fusce commodo ut scelerisque
                      odio dapibus tortor. In aliquam metus leo duis iaculis
                      elit sem eget. Facilisi orci amet consequat tincidunt vel
                      lorem euismod. Eget lectus diam leo lectus velit.
                      Dignissim nunc et nullam diam velit adipiscing amet
                      volutpat.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Heading
                    size="blog_heading2"
                    as="h3"
                    className="sm:text-[28px]"
                  >
                    How Does the &quot;I&#39;m Not a Robot&quot; Box Work?
                  </Heading>
                  <Text
                    size="blog_para"
                    as="p"
                    className="w-full leading-[150%]"
                  >
                    The &quot;I&#39;m Not a Robot&quot; box is part of a more
                    extensive security measure known as reCAPTCHA, developed by
                    Google. When a user clicks on the checkbox, the system
                    doesn&#39;t just rely on the click itself. Instead, it
                    analyzes various behavioral cues and other factors to
                    determine if the interaction is genuine.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Heading size="blog_heading_3" as="h4">
                    IP Address and Cookies
                  </Heading>
                  <Text
                    size="blog_para"
                    as="p"
                    className="w-full leading-[150%]"
                  >
                    IP addresses and cookies play a crucial role in identifying
                    users. ReCAPTCHA tracks the IP address to detect patterns
                    that might indicate bot activity. For instance, multiple
                    attempts from a single IP address in a short span of time
                    can raise red flags. Cookies help in identifying returning
                    users and tracking their previous interactions with the
                    site.
                  </Text>
                  <div className="h-[276px] self-stretch bg-blue_gray-100_19" />
                  <Text
                    size="blog_para"
                    as="p"
                    className="w-full leading-[150%]"
                  >
                    IP addresses and cookies play a crucial role in identifying
                    users. ReCAPTCHA tracks the IP address to detect patterns
                    that might indicate bot activity. For instance, multiple
                    attempts from a single IP address in a short span of time
                    can raise red flags. Cookies help in identifying returning
                    users and tracking their previous interactions with the
                    site.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Heading size="blog_heading_3" as="h5">
                    Machine Learning Algorithms
                  </Heading>
                  <Text
                    size="blog_para"
                    as="p"
                    className="w-full leading-[150%]"
                  >
                    Google employs sophisticated machine learning algorithms to
                    continuously improve the accuracy of reCAPTCHA. These
                    algorithms are trained on vast amounts of data to recognize
                    the subtle differences between human and bot behaviors. Over
                    time, the system becomes more adept at distinguishing
                    between the two, even as bots evolve.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center gap-2.5">
                  <Heading
                    size="blog_heading_3"
                    as="h6"
                    className="!text-gray-50_e5"
                  >
                    Key Milestones in reCAPTCHA Evolution
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-4 self-stretch">
                    <Text as="p" className="w-full leading-[150%]">
                      <span className="font-bold">Text-based CAPTCHAs:</span>
                      <span>
                        <>
                          &nbsp;Early versions involved reading and typing
                          distorted text. <br />
                        </>
                      </span>
                      <span className="font-bold">Image-based CAPTCHAs:</span>
                      <span>
                        <>
                          &nbsp;Users identify objects in images, adding a layer
                          of complexity. <br />
                        </>
                      </span>
                      <span className="font-bold">Checkbox reCAPTCHA:</span>
                      <span>
                        <>
                          &nbsp;Introduced behavioral analysis and more
                          sophisticated tracking. <br />
                        </>
                      </span>
                      <span className="font-bold">Checkbox reCAPTCHA:</span>
                      <span>
                        <>
                          &nbsp;Introduced behavioral analysis and more
                          sophisticated tracking. <br />
                        </>
                      </span>
                      <span className="font-bold">Checkbox reCAPTCHA:</span>
                      <span>
                        <>
                          &nbsp;Introduced behavioral analysis and more
                          sophisticated tracking. <br />
                        </>
                      </span>
                      <span className="font-bold">Checkbox reCAPTCHA:</span>
                      <span>
                        <>
                          &nbsp;Introduced behavioral analysis and more
                          sophisticated tracking. <br />
                        </>
                      </span>
                      <span className="font-bold">Invisible reCAPTCHA:</span>
                      <span>
                        &nbsp;Operates in the background, analyzing user
                        behavior without explicit interaction.
                      </span>
                    </Text>
                    <Text size="blog_para" as="p" className="!text-gray-50">
                      <span className="text-white-a700_cc">
                        For more detailed information on reCAPTCHA, visit
                      </span>
                      <span className="text-gray-50">&nbsp;</span>
                      <span className="font-medium text-colors1">
                        Google&#39;s reCAPTCHA page.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <Heading
                    size="blog_heading2"
                    as="h2"
                    className="sm:text-[28px]"
                  >
                    Conclusion
                  </Heading>
                  <Text
                    size="blog_para"
                    as="p"
                    className="mt-3 w-full leading-[150%]"
                  >
                    The &quot;I&#39;m Not a Robot&quot; box is a crucial tool in
                    the fight against malicious bots. By leveraging behavioral
                    analysis, browser and device information, IP tracking, and
                    machine learning, reCAPTCHA creates a robust defense
                    mechanism that bots struggle to overcome. As AI and robotics
                    continue distinguish humans from machines, ensuring that
                    online interactions remain secure and trustworthy.
                  </Text>
                  <Text
                    as="p"
                    className="mt-3 w-full leading-[150%] !text-gray-50"
                  >
                    <span className="text-white-a700_cc">
                      <>
                        For more insights on cybersecurity and AI, check out
                        these resources: <br />
                      </>
                    </span>
                    <span className="font-medium text-colors1">
                      <>
                        How CAPTCHAs Work? <br /> The Future of AI in
                        Cybersecurity <br /> Understanding Browser
                        Fingerprinting
                      </>
                    </span>
                  </Text>
                  <Text as="p" className="w-full leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna duis eu elementum et erat urna gravida. Felis viverra
                    varius mattis mi placerat. Vitae eget non feugiat adipiscing
                    aliquam.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex items-center gap-2.5">
                  <div className="h-[30px] w-[5px]" />
                  <Heading as="h4">Comments</Heading>
                </div>
                <div className="flex flex-col gap-2">
                  <Text as="p" className="leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna duis eu elementum et erat urna gravida. Felis viverra
                    varius mattis mi placerat. Vitae eget non feugiat adipiscing
                    aliquam. Tempor consequat eget massa pharetra libero ipsum
                    sem.
                  </Text>
                  <div className="flex items-center md:flex-col">
                    <div className="flex flex-1 flex-wrap items-center gap-[21px] md:self-stretch">
                      <Heading size="headingmd" as="h5">
                        John Doe
                      </Heading>
                      <Text size="texts" as="p" className="self-end">
                        October 03, 2018 at 2:21pm
                      </Text>
                    </div>
                    <div className="flex w-[42%] justify-center gap-2 self-end md:w-full md:self-auto">
                      <div className="flex flex-1 items-center justify-end gap-[9px]">
                        <Heart
                          width={18}
                          height={20}
                          alt="Favorite Icon"
                          className="h-[20px]"
                        />
                        <Text size="texts" as="p" className="!text-colors1">
                          Like
                        </Text>
                      </div>
                      <div className="flex items-center gap-[9px]">
                        <ReplyAll
                          width={18}
                          height={20}
                          alt="Question Icon"
                          className="h-[20px]"
                        />
                        <Text size="texts" as="p" className="!text-colors1">
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 md:flex-col">
                  <div className="h-[100px] w-px md:h-px md:w-[100px]" />
                  <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                    <Text as="p" className="leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna duis eu elementum et erat urna gravida. Felis
                      viverra varius mattis mi placerat. Vitae eget non feugiat
                      adipiscing aliquam. Tempor consequat eget massa pharetra
                      libero ipsum sem.
                    </Text>
                    <div className="flex items-center justify-center">
                      <div className="flex flex-1 flex-wrap items-center gap-[21px]">
                        <Heading size="headingmd" as="h5">
                          John Doe
                        </Heading>
                        <Text size="texts" as="p" className="self-end">
                          October 03, 2018 at 2:21pm
                        </Text>
                      </div>
                      <div className="flex items-center gap-2 self-end px-4">
                        <Heart
                          width={20}
                          height={20}
                          alt="Additional Favorite Icon"
                          className="h-[20px] w-[20px]"
                        />
                        <Text size="texts" as="p" className="!text-colors1">
                          Like
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Text as="p" className="leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna duis eu elementum et erat urna gravida. Felis viverra
                    varius mattis mi placerat. Vitae eget non feugiat adipiscing
                    aliquam. Tempor consequat eget massa pharetra libero ipsum
                    sem.
                  </Text>
                  <div className="flex items-center md:flex-col">
                    <div className="flex flex-1 flex-wrap items-center gap-[21px] md:self-stretch">
                      <Heading size="headingmd" as="h5">
                        John Doe
                      </Heading>
                      <Text size="texts" as="p" className="self-end">
                        October 03, 2018 at 2:21pm
                      </Text>
                    </div>
                    <div className="flex w-[42%] justify-center gap-2 self-end md:w-full md:self-auto">
                      <div className="flex flex-1 items-center justify-end gap-[9px]">
                        <Heart
                          width={18}
                          height={20}
                          alt="More Favorite Icon"
                          className="h-[20px]"
                        />
                        <Text size="texts" as="p" className="!text-colors1">
                          Like
                        </Text>
                      </div>
                      <div className="flex items-center gap-[9px]">
                        <ReplyAll
                          width={18}
                          height={20}
                          alt="More Question Icon"
                          className="h-[20px]"
                        />
                        <Text size="texts" as="p" className="!text-colors1">
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="h-px" />
                  <div className="flex flex-col items-start gap-5">
                    <Heading
                      size="heading3xl"
                      as="h1"
                      className="sm:text-[32px]"
                    >
                      Leave a Comment
                    </Heading>
                    <Text as="p" className="w-full !font-light leading-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas ut facilisis tellus sit sed turpis enim elementum
                      ipsum.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex gap-6 self-stretch md:flex-col">
                      <Input
                        shape="square"
                        type="text"
                        name="Name Input"
                        placeholder={`Your Name`}
                        className="w-full border border-solid border-gray-800_01  bg-colors2  "
                      />
                      <Input
                        shape="square"
                        type="number"
                        name="Contact Input"
                        placeholder={`Your Contact Number`}
                        className="w-full border border-solid border-gray-800_01 bg-colors2  "
                      />
                    </div>
                    <Input
                      shape="square"
                      type="email"
                      name="Email Input"
                      placeholder={`Your Email`}
                      className="self-stretch border border-solid border-gray-800_01  bg-colors2  "
                    />
                    <TextArea
                      shape="square"
                      name="Comment TextArea"
                      placeholder={`Comment`}
                      className="self-stretch !border-gray-800_01 text-colors"
                    />
                    <Button
                      size="lg"
                      shape="square"
                      className="min-w-[152px] font-bold text-colors2"
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[32%] flex-col gap-6 md:w-full">
              <div className="flex flex-col items-end gap-2.5">
                <div className="flex flex-col items-start gap-1.5">
                  <Image
                    src="/images/img_author.png"
                    width={40}
                    height={18}
                    alt="Author Image"
                    className="h-[18px] object-cover"
                  />
                  <Text as="p" className="!text-colors">
                    — Shraddha Deshmukh
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Text
                    size="texts"
                    as="p"
                    className="!italic !text-blue_gray-50"
                  >
                    Published On
                  </Text>
                  <Text as="p" className="!text-colors">
                    —12th May 2024
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-blue_gray-100_11 py-6 sm:py-5">
                  <div className="ml-4 flex flex-col gap-8 md:ml-0">
                    <div className="flex flex-col gap-8 ">
                      <Input
                        size="xs"
                        shape="square"
                        name="Search Input"
                        placeholder={`Search Here`}
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e.target.value)}

                        suffix={
                          <div className="flex h-[18px] w-[18px] items-center justify-center">
                            {searchBarValue?.length > 0 ? (
                              <SearchSVG
                                onClick={() => handleSearch()}
                                height={16}
                                width={18}
                                
                              />
                            ) : (
                              <Search
                                width={18}
                                height={16}
                                alt="Search"
                                className="my-0.5 h-[16px] w-[18px]"
                              />
                            )}
                          </div>
                        }
                        className="mr-4 gap-2.5 text-black-900 md:mr-0"
                      />
                      <ChipView
                        options={chipOptions}
                        setOptions={setChipOptions}
                        values={selectedChipOptions}
                        setValues={setSelectedChipOptions}
                        className="flex flex-wrap gap-2"
                      >
                        {(option) => (
                          <React.Fragment key={option.index}>
                            {option.isSelected ? (
                              <div
                                onClick={option.toggle}
                                className="flex h-[32px] min-w-[144px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[5px] border border-solid border-gray-900_99 bg-dark_3 px-4 text-center text-[14px] text-colors1"
                              >
                                <span>{option.label}</span>
                              </div>
                            ) : (
                              <div
                                onClick={option.toggle}
                                className="flex h-[32px] min-w-[144px] cursor-pointer flex-row items-center justify-center rounded-[5px] border border-solid border-yellow-a700_33 bg-dark_3 px-4 text-center text-[14px] text-colors1"
                              >
                                <span>{option.label}</span>
                              </div>
                            )}
                          </React.Fragment>
                        )}
                      </ChipView>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-2">
                        <div className="h-[30px] w-[5px]" />
                        <Heading as="h4">Popular Blogs</Heading>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {articleList.map((d, index) => (
                            <ArticlePreview
                              {...d}
                              key={"popularBlogsList" + index}
                            />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-2">
                        <div className="h-[30px] w-[5px]" />
                        <Heading as="h4">Recent Blogs</Heading>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {additionalArticlesList.map((d, index) => (
                            <ArticlePreview
                              {...d}
                              key={"recentBlogsList" + index}
                            />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] bg-blue_gray-100_11 p-[22px] sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-[30px] w-[5px] shadow-xs" />
                    <Heading as="h4">Related Searches</Heading>
                  </div>
                  <div className="flex flex-col gap-6">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {techBlogCategories.map((d, index) => (
                        <TechBlogProfile
                          {...d}
                          key={"relatedSearchesList" + index}
                        />
                      ))}
                    </Suspense>

                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import { urlFor } from "../../../sanity/sanity-urlFor";
// import { Heading } from "../../../components/Blogs/Heading/index.jsx";
// import { Text } from "../../../components/Blogs/Text/index.jsx";
// import { Button } from "../../../components/Blogs/Tags/index.jsx";
// import { ChipView } from "../../../components/Blogs/ChipView/index.jsx";
// import { TextArea } from "../../../components/Blogs/TextArea/index.jsx";
// import TechBlogProfile from "../../../components/Blogs/TechBlogProfile/index.jsx";
// import Link from "next/link";
// import React from "react";

// const techBlogCategories = [
//   { userImage: "/images/prop.png", blogTitle: "Tech Blogs" },
//   { userImage: "/images/prop.png", blogTitle: "Animation" },
//   { userImage: "/images/prop.png", blogTitle: "Graphics" },
//   { userImage: "/images/prop.png", blogTitle: "Data Analysis" },
// ];

// const articleList = [
//   {
//     articleDate: "12th May 2024",
//     articleActionText: "Read Article",
//     articleDescription: "How can I get my own website? Where to find proper resources",
//   },
//   {
//     articleDate: "12th May 2024",
//     articleActionText: "Read Article",
//     articleDescription: "How can I get my own website? Where to find proper resources",
//   },
//   {
//     articleDate: "12th May 2024",
//     articleActionText: "Read Article",
//     articleDescription: "How can I get my own website? Where to find proper resources",
//   },
// ];

// const additionalArticlesList = [
//   {
//     articleDate: "12th May 2024",
//     articleActionText: "Read Article",
//     articleDescription: "How can I get my own website? Where to find proper resources",
//   },
//   {
//     articleDate: "12th May 2024",
//     articleActionText: "Read Article",
//     articleDescription: "How can I get my own website? Where to find proper resources",
//   },
//   {
//     articleDate: "12th May 2024",
//     articleActionText: "Read Article",
//     articleDescription: "How can I get my own website? Where to find proper resources",
//   },
// ];

// const dropDownOptions = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// export default function Page({ data }) {
//   const [chipOptions, setChipOptions] = React.useState(() => [
//     { value: 1, label: `Web Development` },
//     { value: 2, label: `GenAI` },
//     { value: 3, label: `Robotics` },
//     { value: 4, label: `HTML` },
//     { value: 5, label: `CSS` },
//     { value: 6, label: `SQL` },
//     { value: 7, label: `Figma` },
//     { value: 8, label: `AI-ML` },
//     { value: 9, label: `PHP` },
//   ]);

//   const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
//   const [searchBarValue, setSearchBarValue] = React.useState("");
//   const [menuOpen, setMenuOpen] = React.useState(false);

//   const handleSearch = () => {
//     const searchQuery = searchBarValue.trim();
//     if (searchQuery) {
//       window.open(`/Search?query=${encodeURIComponent(searchQuery)}`, "_self");
//     } else {
//       window.open("/Search", "_self");
//     }
//   };

//   return (
//     <div className="page-container">
//       <div className="content-container container">
//         <div className="section">
//           <div className="image-container">
//             <Image
//               src={urlFor(data.image).url()}
//               alt="Blog Image"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="content">
//             <div className="card">
//               <Heading size="heading1" as="h1" className="heading1">
//                 {data.title}
//               </Heading>
//               <div className="button-group">
//                 {chipOptions.map((chip) => (
//                   <Button key={chip.value} className="button">
//                     {chip.label}
//                   </Button>
//                 ))}
//               </div>
//               <Text size="blog_para" as="p" className="text-paragraph">
//                 {data.description}
//               </Text>
//             </div>
//             <div className="card">
//               <Heading size="card-heading" as="h2" className="card-heading">
//                 The Purpose of the "I'm Not a Robot" Box
//               </Heading>
//               <div className="card-text">
//                 <Text size="blog_para" as="p" className="card-text">
//                   The primary objective of the "I'm Not a Robot" box is to
//                   differentiate between human users and automated bots. Bots,
//                   which can perform repetitive tasks with speed and efficiency,
//                   are often used for malicious purposes such as:
//                 </Text>
//                 <Text as="p" className="card-text">
//                   <>
//                     Spamming <br />
//                     Scraping data <br />
//                     Launching attacks on websites
//                   </>
//                 </Text>
//                 <Text size="blog_para" as="p" className="card-text">
//                   By implementing this checkbox, websites aim to prevent these
//                   activities, ensuring a safer and more reliable online environment.
//                 </Text>
//               </div>
//               <div className="card-text">
//                 <Text as="p" className="card-text">
//                   Lorem ipsum dolor sit amet consectetur. Eget quis ultrices
//                   pharetra lacus in. Vitae nunc amet nisi lobortis velit ornare
//                   id diam. Adipiscing tincidunt sagittis dapibus integer. Quis
//                   ornare quisque fusce commodo ut scelerisque odio dapibus
//                   tortor. In aliquam metus leo duis iaculis elit sem eget.
//                   Facilisi orci amet consequat tincidunt vel lorem euismod. Eget
//                   lectus diam leo lectus velit. Dignissim nunc et nullam diam
//                   velit adipiscing amet volutpat.
//                 </Text>
//               </div>
//             </div>
//             <div className="milestones">
//               <Heading size="milestone-heading" as="h3" className="milestone-heading">
//                 Milestones
//               </Heading>
//               {additionalArticlesList.map((item, index) => (
//                 <div className="milestone-item" key={index}>
//                   <Text size="milestone-text" as="p" className="milestone-text">
//                     {item.articleDescription}
//                   </Text>
//                   <Text size="milestone-text" as="p" className="milestone-text">
//                     {item.articleDate}
//                   </Text>
//                   <Button className="button">{item.articleActionText}</Button>
//                 </div>
//               ))}
//             </div>
//             <div className="conclusion">
//               <Heading size="conclusion-heading" as="h2" className="conclusion-heading">
//                 Conclusion
//               </Heading>
//               <Text size="conclusion-text" as="p" className="conclusion-text">
//                 Lorem ipsum dolor sit amet consectetur. Eget quis ultrices
//                 pharetra lacus in. Vitae nunc amet nisi lobortis velit ornare
//                 id diam. Adipiscing tincidunt sagittis dapibus integer. Quis
//                 ornare quisque fusce commodo ut scelerisque odio dapibus tortor.
//                 In aliquam metus leo duis iaculis elit sem eget. Facilisi orci
//                 amet consequat tincidunt vel lorem euismod. Eget lectus diam
//                 leo lectus velit. Dignissim nunc et nullam diam velit adipiscing
//                 amet volutpat.
//               </Text>
//               <Text size="additional-info" as="p" className="additional-info">
//                 Additional Information: Lorem ipsum dolor sit amet consectetur.
//               </Text>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

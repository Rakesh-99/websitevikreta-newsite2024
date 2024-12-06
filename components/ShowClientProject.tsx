"use client";
import React, { useEffect, useState } from "react";
import { urlFor } from "../sanity/sanity-urlFor";
import Image from "next/image";
import { Button } from "./Blogs/Tags";










const ShowClientProject = ({ response }: { response: any }) => {
    const [projectImage, setProjectImage] = useState<string | null>(null);
    const [showPrototype, setProjectPrototype] = useState<string>("");
    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectSlug, setProjectSlug] = useState<string>("");

    useEffect(() => {
        if (response) {
            // Getting image URL
            if (response?.image?.asset?._ref) {
                const imageUrl = urlFor(response?.image?.asset?._ref)?.url();
                setProjectImage(imageUrl);
            }
            // Getting project source URL
            setProjectPrototype(response?.source);

            // Getting project title
            setProjectTitle(response?.title);

            // Getting project slug
            setProjectSlug(response?.slug?.current);
        }
    }, [response]);

    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <div className="heading">
                <h2 className="font-extrabold my-10 text-4xl">{projectTitle || "Client Project"}</h2>
            </div>

            {projectImage ? (
                <div className="w-[600px] h-[400px]  flex">
                    <Image
                        src={projectImage}
                        alt={projectTitle || "Client Project Image"}
                        width={1000} // Set desired width
                        height={1000} // Set desired height
                        style={{ objectFit: "cover" }}
                        className="rounded-2xl border-yellow-500 "
                    />
                </div>

            ) : (
                <p>Image not available</p>
            )}
            {showPrototype && (
                <a href={showPrototype} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-10">
                        View Prototype
                    </Button>
                </a>


            )}
        </div>
    );
};

export default ShowClientProject;

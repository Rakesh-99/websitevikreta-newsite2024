"use client";

// import styles from "@/styles/components/404.module.scss";

// Libraries
import { useEffect, useRef, useState } from "react";
// import type { LottiePlayer } from "lottie-web";

export default function NotFound() {
   // const ref = useRef < HTMLDivElement > (null);
   // const [lottie, setLottie] = useState<LottiePlayer | null>(null);

   // useEffect(() => {
   //    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
   // }, []);

   // useEffect(() => {
   //    if (lottie && ref.current) {
   //       const animation = lottie.loadAnimation({
   //          container: ref.current,
   //          renderer: "svg",
   //          loop: true,
   //          autoplay: true,
   //          // path to your animation file, place it inside public folder
   //          path: "../404-lottie.json",
   //       });

   //       return () => animation.destroy();
   //    }
   // }, [lottie]);
   return (
      <>
         <section>404</section>
      </>
   );
}

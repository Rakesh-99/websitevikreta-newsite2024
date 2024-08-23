"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../../assets/Animation404.json'; // Adjust path if necessary

const Custom404 = () => {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    // Check if there is history to go back to
    setHasHistory(window.history.length > 1);
  }, []);

  return (
    <div className="custom-404-container">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 620, height: 450 }}
        className="custom-404-animation"
      />
      <h1 className="custom-404-heading">Something went wrong!</h1>
      <p className="custom-404-description">
        The page you are looking for was removed, renamed, or does not exist!
      </p>
      <div className="custom-404-button-container">
        {hasHistory ? (
          <Link href="javascript:history.back()" className="normal-btn primary">
            <span className="arrow-icon">&#8592;</span> Go Back
          </Link>
        ) : (
          <Link href="/" className="normal-btn primary">
            <span className="arrow-icon">&#8592;</span> Go Back
          </Link>
        )}
        <Link href="/" className="normal-btn secondary">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;

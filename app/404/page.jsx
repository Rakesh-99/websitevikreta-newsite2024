"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import errorImage from '../../assets/error-animation.gif'; // Adjust path if necessary
import { useEffect, useState } from 'react';

const Custom404 = () => {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    // Check if there is history to go back to
    setHasHistory(window.history.length > 1);
  }, []);

  return (
    <div className="custom-404-container">
      <Image
        src={errorImage}
        alt="Error Image"
        width={300}
        height={200}
        className="custom-404-image"
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

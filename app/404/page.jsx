import Image from 'next/image';
import Link from 'next/link'; 
import errorImage from '../../assets/errorimage.png'; // Adjust path if necessary

const Custom404 = () => {
  return (
    <div style={styles.container}>
      <Image
        src={errorImage}
        alt="Error Image"
        width={300} // Adjusted width
        height={200} // Adjusted height
        style={styles.image}
      />
      <h1 style={styles.heading}>Something went Wrong!</h1>
      <p style={styles.description}>
        The page you are looking for was removed, renamed, or does not exist!
      </p>
      <div style={styles.buttonContainer}>
        <Link href="/" className="normal-btn primary">
          Go back
        </Link>
        <Link href="/" className="normal-btn secondary">
          Home 
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
  },
  image: {
    width: 'auto', // Let the width adjust automatically
    height: 'auto', // Let the height adjust automatically
    maxWidth: '100%', // Ensure it doesn't exceed the container width
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.25rem',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row', // Display buttons side by side
    gap: '10px', // Space between buttons
  },
};

export default Custom404;

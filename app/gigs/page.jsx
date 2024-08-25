// app/gigs/page.jsx
import { client } from '../../sanity/lib/client'; // Adjust the path if needed
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
// app/gigs/page.jsx

import Image from 'next/image';
import gig1 from '../../assets/gig1.jpeg'

const styles = {
   pageContainer: {
      marginTop: '60px',
   },
   searchContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: '#000',
      padding: '1rem',
      width: '100%',
      position: 'relative',
   },
   searchBar: {
      width: '100%',
      maxWidth: '600px',
      padding: '0.75rem',
      paddingRight: '2.5rem',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#000',
      outline: 'none',
      fontFamily: 'Roboto, sans-serif',
   },
   searchIcon: {
      position: 'absolute',
      right: '30rem',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '1.2rem',
      color: '#fff',
   },
   categoriesContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#000',
      padding: '1rem',
      width: '100%',
      color: '#fff',
      fontSize: '1rem',
      fontFamily: 'Roboto, sans-serif',
   },
   category: {
      margin: '0 0.5rem',
   },
   categorySeparator: {
      margin: '0 0.5rem',
   },
   imageContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      margin: '2rem auto',
      width: '70%',
      height: '200px',
      maxWidth: '1200px', // Set a max width to control size
      overflow: 'hidden',
   },
   gigbg: {
      width: '2px', // Set desired width
      height: '2px', // Set desired height
      //objectfit: cover, // Ensure proper fit
   },
   overlayText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
   },
   heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: '0.5rem 0',
      fontFamily: 'Roboto, sans-serif',
   },
   subheading: {
      fontSize: '1rem',
      margin: '0.5rem 0',
      fontFamily: 'Roboto, sans-serif',
   },
   exploreButton: {
      display: 'inline-block',
      marginTop: '1rem',
      maxWidth: '150px',
      fontFamily: 'Roboto, sans-serif',
   },
   sectionHeading: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '2rem 0',
      fontFamily: 'Roboto, sans-serif',
   },
   gigsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '1rem',
      fontFamily: 'Roboto, sans-serif',
   },
   gigCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      width: 'calc(33.333% - 1rem)',
      background: '#fff',
      fontFamily: 'Roboto, sans-serif',
   },
   gigImage: {
      borderRadius: '8px',
      maxWidth: '100%',
   },
   readMore: {
      color: '#0070f3',
      textDecoration: 'none',
      fontWeight: 'bold',
   },
};

const GigsPage = async () => {
   const gigs = await fetchGigs();

   return (
      <div style={styles.pageContainer}>
         <div style={styles.searchContainer}>
            <input
               type="text"
               placeholder="What service are you looking for?"
               style={styles.searchBar}
            />
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               style={styles.searchIcon}
            >
               <circle cx="11" cy="11" r="8" />
               <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
         </div>
         <div style={styles.categoriesContainer}>
            <span style={styles.category}>Maintenance</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>Technology</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>AI-ML</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>Development</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>Education</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>Website Build</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>Management</span>
            <span style={styles.categorySeparator}>|</span>
            <span style={styles.category}>Website Features</span>
         </div>
         <div style={styles.imageContainer}>
            <Image
               src={gig1}
               alt="Promotional"
               layout="responsive"
               className="gigbg"
            />
            <div style={styles.overlayText}>
               <div style={styles.heading}>Discover fresh perspectives!</div>
               <div style={styles.subheading}>Websites that make you stand out!</div>
               <a href="/explore" className="normal-btn secondary" style={styles.exploreButton}>
                  Explore more
               </a>
            </div>
         </div>
         <div style={styles.sectionHeading}>
            Explore popular categories on Website Vikreta
         </div>
         <div style={styles.gigsContainer}>
            {gigs.map((gig) => (
               <div key={gig._id} style={styles.gigCard}>
                  <Image src={gig.image} alt={gig.title} layout="responsive" width={400} height={300} />
                  <h3>{gig.title}</h3>
                  <p>{gig.description}</p>
                  <p>From {gig.price}</p>
                  <p>{gig.rating}</p>
                  <a href={gig.link} style={styles.readMore}>Read More</a>
               </div>
            ))}
         </div>
      </div>
   );
};

// Fetch gigs from Sanity
async function fetchGigs() {
   const gigs = await client.fetch(`
    *[_type == "gig"]{
      _id,
      title,
      image,
      description,
      price,
      rating,
      link
    }
  `);
   console.log(gigs); // Debugging: Check the console to see the fetched data
   return gigs;
}

export default GigsPage;

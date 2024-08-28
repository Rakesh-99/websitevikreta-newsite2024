// app/gigs/page.jsx

import { client } from '../../sanity/lib/client'; // Adjust the path if needed
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
import Image from 'next/image';
import gig1 from '../../assets/gig1.jpeg'

const styles = {
   pageContainer: {
      marginTop: '60px',
      fontFamily: 'Roboto, sans-serif',
   },
   searchContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      width: '100%',
      position: 'relative',
      fontFamily: 'Roboto, sans-serif',
      marginTop: '6rem'
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
      right: '470px', // Adjusted from 30rem to 30px
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '1.2rem',
      color: '#fff',
   },
   categoriesContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      width: '100%',
      color: '#fff',
      fontSize: '1.12rem',
      fontFamily: 'Roboto, sans-serif',
      maxWidth: '1590px',
      
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
      maxWidth: '1200px',
      overflow: 'hidden',
   },
   gigbg: {
      width: '100%', // Changed to fit container width
      height: 'auto', // Adjusted to maintain aspect ratio
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
      padding:'6rem',
      paddingRight:'0.5rem',
   },
   gigCard: {
      border: '1px solid #444445', // Light grey outline
      borderRadius: '0',
      padding: '1rem',
      background: '#2b2b2b', // Matching the default website background
      fontFamily: 'Roboto, sans-serif',
      width: 'calc(33.333% - 2.5rem)', // Adjusted width to match initial size
      maxHeight: '380px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      font: 'Roboto',
   },
   gigCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   gigTitle: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      margin: '0',
   },
   gigRating: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
   },
   gigDescription: {
      margin: '0.5rem 0',
   },
   gigFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#4a4949', // Light grey background
      padding: '0.5rem',
      borderRadius: '4px',
   },
   gigPrice: {
      margin: '0',
   },
   gigImageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '350px', // Adjusted width
      height: '200px', // Fixed height
      overflow: 'hidden',
      borderRadius: '8px',
      border: '1px solid #d3d3d3', // Optional border
   },
   gigImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensures the image covers the container without distortion
   },
   readMore: {
      backgroundColor: '#2b2b2b', // Background color same as footer
      color: '#fff', // Text color to contrast with the background
      border: '1px solid #4a4949', // Border color same as background
      borderRadius: '4px',
      padding: '0.25rem 0.5rem', // Adjust padding to make it small and rectangular
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '0.875rem', // Smaller font size for a button-like appearance
      cursor: 'pointer',
      display: 'inline-block', // Ensures the element only takes up as much width as its content
      textAlign: 'center', // Center the text inside the button
      fontFamily: 'Roboto, sans-serif',
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
                  <Image 
                     src={urlFor(gig.image).width(500).height(220).url()} // Use a function to get the URL
                     alt={gig.title}
                     layout="responsive"
                     width={500} // Example width
                     height={300} 
                     style={styles.gigImage}
                  />
                  <div style={styles.gigCardHeader}>
                     <h3 style={styles.gigTitle}>{gig.title}</h3>
                     <span style={styles.gigRating}><i className="bi bi-star-fill"></i>{gig.rating}</span>
                  </div>
                  <p style={styles.gigDescription}>{gig.description}</p>
                  <div style={styles.gigFooter}>
                     <span style={styles.gigPrice}>{gig.price}</span>
                     <a href={gig.link} style={styles.readMore}>Read More</a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

// Fetch gigs from Sanity
async function fetchGigs() {
   const gigs = await client.fetch(`
    *[_type == "gig" && defined(_id) && !(_id in path("drafts.**"))]{
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

// Function to get the URL from Sanity image asset
import { urlFor } from '../../sanity/lib/image'; // Adjust import path if needed

export default GigsPage;
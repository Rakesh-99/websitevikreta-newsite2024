import Link from 'next/link';

const HireUsSection = () => {
   return (
      <section className="hire-us">
         <div className="container">
            <div className="left">
               <h2 className="heading">Hire us for your next project</h2>
               <p className="para">
                  We can help! We are passionate about making beautiful websites help you to grow your business.
               </p>
            </div>

            <div className="center">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
            </div>

            <div className="right">
               <Link href={"/work"} className="normal-btn primary shadow">View Our Work</Link>
               <Link href={"/contact"} className="normal-btn secondary shadow">Contact Us</Link>
            </div>
         </div>
      </section>
   )
}

export default HireUsSection;
import React from 'react'
import './about.css'
import pic1 from './agent-1.jpg';
import pic2 from './agent-2.jpg';
import pic3 from './agent-3.jpg';
import pic4 from './agent-4.jpg';

const About = () => {
  const handleClick = () => {
    const email = 'pkern@expediagroup.com';
    const subject = 'Required Information';
    const body = 'Hello Man,just wanna know something.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const imageData = [
    {
      label: "Image 1",
      alt: "image1",
      url:
        "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
    },
    {
      label: "Image 2",
      alt: "image2",
      url:
        "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
    },
    {
      label: "Image 3",
      alt: "image3",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
    },
    {
      label: "Image 4",
      alt: "image4",
      url:
        "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY"
    }
  ];
  return (
    <>
    
      <div class="about-section">
        <h1 style={{ color: 'blue' }}>About The Project</h1>
        <h4 className='h4'>This Project is made on the sole purpose for checking the functionality of Google One Tap Sign In and does not in foster any official documentation and information regarding Expedia's componenents. The project is basically a prototype and is for educational purpose only.</h4>
      </div>
      {/* Here add some testimonials*/}
      <section className="section-testimonials" id="testimonials">
        <div className="container">
          <span className="subheading center-text">Testimonials</span>
          <h2 className="heading-secondary center-text">
            What our clients say about us
          </h2>

          <div className="testimonials-slider">
            <div className="testimonials-slide">
              <address className="testimonial-author">
                <img
                  src={pic1}
                  className="testimonial-img"
                  alt="testimonial photo"
                />
                <h4 className="testimonial-name">Ivelin Manev</h4>
                <span className="testimonial-location">Plovdiv, Bulgaria</span>
              </address>

              <div className="testimonial-content">
                <h3 className="testimonial-heading">Excellent service!</h3>
                <blockquote className="testimonial-text">
                  Here is the testimonial data.
                </blockquote>
              </div>
            </div>

            <div className="testimonials-slide">
              <address className="testimonial-author">
                <img
                  src={pic2}
                  className="testimonial-img"
                  alt="testimonial photo"
                />
                <h4 className="testimonial-name">Milena Jordanova</h4>
                <span className="testimonial-location">Burgas, Bulgaria</span>
              </address>

              <div className="testimonial-content">
                <h3 className="testimonial-heading">Trustworthy agency!</h3>
                <blockquote className="testimonial-text">
                  Here is the testimonial data.
                </blockquote>
              </div>
            </div>

            <div className="testimonials-slide">
              <address className="testimonial-author">
                <img
                  src={pic3}
                  className="testimonial-img"
                  alt="testimonial photo"
                />
                <h4 className="testimonial-name">Mohammad Azad</h4>
                <span className="testimonial-location">Uttrakhand, India</span>
              </address>

              <div className="testimonial-content">
                <h3 className="testimonial-heading">Amazing experience!</h3>
                <blockquote className="testimonial-text">
                  Hello everyone, myself M.Azad and I visited India last week, it was a great experience and I would recommened everyone to use this service and suggest your friends and family members also.
                </blockquote>
              </div>
            </div>
            {/* <div className="testimonial-btns">
              <button className="testimonial-slider__btn testimonial__btn--left">
                <span>&larr;</span>
              </button>
              <button className="testimonial-slider__btn testimonial__btn--right">
                <span>&rarr;</span>
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/*Here we have the teams section */}
      <h2 className='ourteam'>Our Team</h2>
      <section className="section-team" id="team">
        <div className="container">
          <span className="subheading"></span>
          <h2 className="heading-secondary heading-team" style={{textAlign:"center"}}>
            Meet Our Mentors and profesisonal guides to help you out !!
          </h2>

          <div className="team-container">
            <div className="team">
              <figure className="team-img">
                <img src={pic1} alt="team member" />
              </figure>
              <div className="team-content">
                <h3 className="team-name">Harry Winchester</h3>
                <span className="team-position">Tour Guide</span>
                <span className="team-activities">40 Activities</span>
              </div>
            </div>

            <div className="team">
              <figure className="team-img">
                <img src={pic2} alt="team member" />
              </figure>
              <div className="team-content">
                <h3 className="team-name">Tom Horton</h3>
                <span className="team-position">Traveller Expert</span>
                <span className="team-activities">67 Activities</span>
              </div>
            </div>

            <div className="team">
              <figure className="team-img">
                <img src={pic3} alt="team member" />
              </figure>
              <div className="team-content">
                <h3 className="team-name">Ema Williams</h3>
                <span className="team-position">Tour Guide</span>
                <span className="team-activities">27 Activities</span>
              </div>
            </div>

            <div className="team">
              <figure className="team-img">
                <img src={pic4} alt="team member" />
              </figure>
              <div className="team-content">
                <h3 className="team-name">Christine Becker</h3>
                <span className="team-position">Tour Guide</span>
                <span className="team-activities">56 Activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Added a footer here also*/}
      <footer className="text-center text-white" style={{ backgroundColor: '#caced1' }}>
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="w-100" alt="City" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" className="w-100" alt="City" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp" className="w-100" alt="City" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp" className="w-100" alt="City" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp" className="w-100" alt="City" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp" className="w-100" alt="City" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className="text-white" href="https://expediagroup.com/">Shivank Gupta EG Login Project</a>
        </div>
      </footer>
    </>
  )
}

export default About
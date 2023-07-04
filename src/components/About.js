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

  return (
    <>
      <div class="about-section">
        <h1>About The Project</h1>
        <p>This Project is made on the sole purpose for checking the functionality of Google One Tap Sign In and does not in foster any official documentation and information regarding Expedia's componenents. The project is basically a prototype and is for educational purpose only</p>
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
                Here is the testimonial data.
                </blockquote>
              </div>
            </div>
            <div className="testimonial-btns">
              <button className="testimonial-slider__btn testimonial__btn--left">
                <span>&larr;</span>
              </button>
              <button className="testimonial-slider__btn testimonial__btn--right">
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
    {/*Here we have the teams section */}
      <h2 className='ourteam'>Our Team</h2>
      <section className="section-team" id="team">
        <div className="container">
          <span className="subheading"></span>
          <h2 className="heading-secondary heading-team">
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
                <h3 className="team-name">Ema i</h3>
                <span className="team-position">Tour Guide</span>
                <span className="team-activities">27 Activities</span>
              </div>
            </div>

            <div className="team">
              <figure className="team-img">
                <img src={pic4} alt="team member" />
              </figure>
              <div className="team-content">
                <h3 className="team-name">Christine Beck</h3>
                <span className="team-position">Tour Guide</span>
                <span className="team-activities">56 Activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
import React, { useEffect } from 'react'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './home.css'
import { useState } from 'react';
import pic1 from './Istanbul.jpg'
import pic2 from './Louvre.jpg'
import pic3 from './Vatican-City.jpg'
import pic4 from './Venice.jpg'
import vid1 from './videointro.mp4'

import context from 'react-bootstrap/esm/AccordionContext';
import { UitkParagraph } from 'uitk-react-text';
const options = {
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  auto_select: false,
  context: "signin",
}
// function Home() {
//   const [loginData, setLoginData] = useState(
//     localStorage.getItem("loginData")
//       ? JSON.parse(localStorage.getItem("loginData"))
//       : null
//   );
//   useEffect(() => {
//     if (!loginData) {
//       // useGoogleOneTapLogin(options, async (response) => {
//       //   console.log(response);
//       //   const res = await fetch("/api/google-login", {
//       //     method: "POST",
//       //     body: JSON.stringify({
//       //       token: response.credential,
//       //     }),
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //   });

//       //   const data = await res.json();
//       //   setLoginData(data);
//       //   localStorage.setItem("loginData", JSON.stringify(data));
//       // });
//     }
//   }, [loginData]);

//   const handleLogout = () => {
//     localStorage.removeItem("loginData");
//     setLoginData(null);
//   };
//   return (
//     <div>
//       <Container classNameName="HomePage">
//         <div className="container">
//           <h3 className="title">
//             <span className="title-word title-word-1">Welcome</span>
//             <span className="title-word title-word-2">to</span>
//             <span className="title-word title-word-3">EG</span>
//             <span className="title-word title-word-4">Login Project</span>
//           </h3>
//         </div>
//         <ReactPlayer url="https://www.youtube.com/watch?v=35npVaFGHMY" loop="true" controls="false" width="200" playing="true" />
//         <div classNameName='para'>
//           <p>Expedia Group, Inc., headquartered in Seattle, owns and operates travel fare aggregators and travel metasearch engines, including Expedia.com, Hotels.com, Vrbo, Travelocity, Hotwire.com, Orbitz, Ebookers, CheapTickets, CarRentals.com, Expedia Cruises, Wotif, and Trivago.</p>
//         </div>
//       </Container>

//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 text-center">
//             <h3 className="animate-charcter">Power Global Travel For Everyone,Everywhere!!</h3>
//           </div>
//         </div>
//       </div>
//       <div>
//           {!loginData ? (
//             <div>
//               <h3>
//                 You "Shivank Gupta" logged in as shivanklords9582@gmail.com
//               </h3>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <div>Not logged in</div>
//           )}
//         </div>
//     </div>

//   )
// }
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [logeed, islogged] = useState(false);
  const [inPage, setPage] = useState("")
  useGoogleOneTapLogin({ //make a conditional hook here conidton would be that the user is logged in or not
    auto_select: false,

    onSuccess: (Response) => {
      console.log("Success Login")

      setName(Response.given_name);
      setEmail(Response.email);
      islogged(true);
      //here i have to stop the loop to repeatedly show the login portal to the user and alos on refershing the login page the user shall see the successful login tag

    },
    onError: (Response) => {
      console.log("Error")
      islogged(false);
    },
    googleAccountConfigs: {
      client_id: "614186185696-s50t20rog34rso3g7fbtsjo4mcgdek9f.apps.googleusercontent.com"
    }
  })
  function openApp(){
    window.open("https://expediagroup.com");
  }
  return (
    <>
      <div className="hello">
        <Container className="HomePage">
       
          <div className="video-container">
            

            <video className="vid" width="800" height="600" autoplay="autoplay" loop="true" >
              <source src={vid1} />
              <div className="text-overlay">
                Power Global Travel
              </div>
            </video>
          </div>

          <div className='para'>
            
            <UitkParagraph>
            Expedia Group, Inc., headquartered in Seattle, owns and operates travel fare aggregators and travel metasearch engines, including Expedia.com, Hotels.com, Vrbo, Travelocity, Hotwire.com, Orbitz, Ebookers, CheapTickets, CarRentals.com, Expedia Cruises, Wotif, and Trivago.
            </UitkParagraph>
          </div>
        </Container>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter">Power Global Travel For Everyone,Everywhere!!</h3>
            </div>
          </div>
        </div>
        <div className='signed-in-window'>
          {logeed ?
            <div>
              Hello Shivank Gupta , you ar signed in as shivanklords9582@gmail.com
              <div>
              </div>
              <button className="button-45"
                onClick={() => window.location.reload()}>
                Sign Out
              </button>
            </div> :
            <div>You are not signed in</div>
          }
        </div>
      </div>

      

      {/*here is the serach panel*/}

      <div className="search-form-container">
        <form action="#" class="form search-form" method="post">
          <div className="search-form__elements">
            <input
              type="search"
              name="location"
              placeholder="Where are you going?"
              required
            />
            <select name="activities" id="select-activity" required>
              <option value="">Activity Type:</option>
              <option value="sightseeing">Sightseeing</option>
              <option value="adventure">Adventure</option>
              <option value="cultural">Cultural</option>
              <option value="food">Food</option>
              <option value="day trip">Day Trip</option>
              <option value="nightlife">Nightlife</option>
              <option value="private tour">Private Tour</option>
            </select>

            <select
              name="select-destination"
              id="select-destination"
              required
            >
              <option value="">Destination:</option>
              <option value="plovdiv">Plovdiv</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="new york">New York</option>
              <option value="dubai">Dubai</option>
              <option value="istanbul">Istanbul</option>
              <option value="rome">Rome</option>
            </select>

            <select name="select-duration" id="select-duration" required>
              <option value="">Duration:</option>
              <option value="short">0-3 hours</option>
              <option value="medium">3-5 hours</option>
              <option value="long">5-7 hours</option>
              <option value="full day">Full day</option>
            </select>
          </div>
          <button className="btn btn--full" type="submit">Search</button>
        </form>
      </div>

      {/* here we have some activities section*/}
      <section className="section-activities" id="activities">
        <div className="container">
          <span className="subheading center-text">Best Activities</span>
          <h2 className="heading-secondary center-text">
            Browse Featured Activities
          </h2>

          <div className="activities-container grid grid--4-cols">
            <div className="activity">
              <figure class="activity-img">
                <img
                  className='img'
                  src={pic1}
                  alt="Istanbul Food Tour"
                />
              </figure>

              <div className="price-container">
                <span className="price-text">Price:</span>
                <div>
                  <span className="price-old">$390</span>
                  <span className="price-value">$190</span>
                </div>
              </div>

              <a href="#cta" className="activity-heading">Istanbul Food Tour</a>
              <ul className="activity-attributes">
                <li className="activity-attribute">
                  <ion-icon className="activity-icon" name="clock"></ion-icon>
                  <span><strong>4</strong> hours</span>
                </li>
                <li className="activity-attribute">
                  <ion-icon className="activity-icon" name="pin"></ion-icon>
                  <span><strong>Istanbul, Turkey</strong></span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="people"></ion-icon>
                  <span><strong>2-10</strong> people</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="star"></ion-icon>
                  <span><strong>4.8/5</strong> rating (344)</span>
                </li>
              </ul>
            </div>

            <div class="activity">
              <figure class="activity-img">
                <img src={pic2} alt="Venice Boat Tour" className='img' />
              </figure>

              <div class="price-container">
                <span class="price-text">Price:</span>
                <div>
                  <span class="price-old">$370</span>
                  <span class="price-value">$270</span>
                </div>
              </div>

              <a href="#cta" class="activity-heading">Venice Boat Tour</a>
              <ul class="activity-attributes">
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="clock"></ion-icon>
                  <span><strong>3</strong> hours</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="pin"></ion-icon>
                  <span><strong>Venice, Italy</strong></span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="people"></ion-icon>
                  <span><strong>2-5</strong> people</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="star"></ion-icon>
                  <span><strong>4.9/5</strong> rating (467)</span>
                </li>
              </ul>
            </div>

            <div class="activity">
              <figure class="activity-img">
                <img src={pic3} alt="Vatican City" className='img' />
              </figure>

              <div class="price-container">
                <span class="price-text">Price:</span>
                <div>
                  <span class="price-old">$350</span>
                  <span class="price-value">$220</span>
                </div>
              </div>

              <a href="#cta" class="activity-heading">Vatican Guided Tour</a>
              <ul class="activity-attributes">
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="clock"></ion-icon>
                  <span><strong>5</strong> hours</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="pin"></ion-icon>
                  <span><strong>Vatican City</strong></span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="people"></ion-icon>
                  <span><strong>2-20</strong> people</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="star"></ion-icon>
                  <span><strong>4.7/5</strong> rating (289)</span>
                </li>
              </ul>
            </div>

            <div class="activity">
              <figure class="activity-img">
                <img src={pic4} alt="Louvre museum" className='img' />
              </figure>

              <div className="price-container">
                <span className="price-text">Price:</span>
                <div>
                  <span class="price-old">$290</span>
                  <span class="price-value">$90</span>
                </div>
              </div>

              <a href="#cta" class="activity-heading">Louvre Museum Ticket</a>
              <ul class="activity-attributes">
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="clock"></ion-icon>
                  <span><strong>2</strong> hours</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="pin"></ion-icon>
                  <span><strong>Paris, France</strong></span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="people"></ion-icon>
                  <span><strong>2-10</strong> people</span>
                </li>
                <li class="activity-attribute">
                  <ion-icon class="activity-icon" name="star"></ion-icon>
                  <span><strong>4.8/5</strong> rating (223)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Here is the booing sectoion form to be opened */}
      <section className="section-cta" id="cta">
        <div className="container">
          <span className="subheading center-text">Contact us</span>
          <h2 className="heading-secondary center-text">
            Ready to book your next trip?
          </h2>

          <div className="cta">
            <div>
              <h3 className="heading-tertiary cta-heading">
                Get an appointment at our office!
              </h3>
              <p className="cta-text">
                Book your next adventure with our expert team in our office. We
                are open 7 days a week from 10 AM to 6 PM. 
              </p>
            </div>

            <form action="#" className="form cta-form" method="post">
              <div>
                <label for="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Shivank Gupta"
                  required
                />
              </div>
              <div>
                <label for="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label for="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  pattern="[0]{1}[8-9]{1}[0-9]{8}"
                  placeholder="Your phone number here"
                  required
                />
              </div>
              <div>
                <label for="date">Date</label>
                <input id="date" type="date" required />
              </div>
              <div>
                <label for="time">Time</label>
                <input id="time" type="time" min="10:00" max="18:00" required />
              </div>
              <div>
                <label for="select-people">How many people?</label>
                <select id="select-people" required>
                  <option value="">Please, choose one option:</option>
                  <option value="small">1-3</option>
                  <option value="medium">4-6</option>
                  <option value="large">7-10</option>
                  <option value="extra">10+</option>
                </select>
              </div>
              <div className="cta-message">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message here"
                  required
                ></textarea>
              </div>
              <button onClick={openApp} className="btn btn--full" type="submit">Book Now</button>
            </form>
          </div>
        </div>
      </section>
      {/* here is the footer */}
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

export default Home
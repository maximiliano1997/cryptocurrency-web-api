import './about.css';
import React from 'react';
import whyimage from '../components/images/aurora-background.77ca5e0ff46d050807e8d907d1b774f8.png'


const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div id="mediaquerie">
        <section className="why">
          <div className="why1">
            {/* tiene bg-image */}
            <h2> ¿Why? </h2>
          </div>
          <div className="why2">
            <div>
              <h3>Well...</h3>
              <p>
                Our goal is to provide you with all the necessary information so that you can fully understand how cryptocurrencies work, their benefits and risks, and how you can invest in them safely and responsibly.
                <br />
                <br />
                On this page you will find updated news on the cryptocurrency market, detailed analysis of the main virtual currencies and the most innovative projects in the crypto ecosystem, as well as practical guides to invest in cryptocurrencies and protect your digital assets.
                <br />
                <br />
                We strive to offer clear, accurate and quality content, and we are committed to financial education and the promotion of responsible practices in the use of cryptocurrencies. Join us and start exploring the fascinating world of cryptocurrency today!
              </p>
            </div>
          </div>
        </section>
        <section className="track">
          <div className="track1">
            <div>
              <h3></h3>
              <p>
                Our startup has made some remarkable accomplishments in the time it's been around! Here are some highlights from our record:
                <br />
                <br />
                We have achieved 300% web traffic growth in the last six months, demonstrating the value and relevance of our platform for cryptocurrency stakeholders.
                <br />
                We have been featured in several major cryptocurrency publications, which has increased our exposure and credibility in the market.
                <br />
                We have developed a very successful affiliate program, which has allowed our users to earn commissions by promoting our platform and referring new users.
                <br />
                We have received positive feedback from our users, who have highlighted the quality of our content and the usefulness of our cryptocurrency investment guides.
                <br />
                We have maintained an ongoing commitment to financial education and the promotion of responsible practices in the use of cryptocurrencies, which has helped foster a community of aware and responsible users.
                <br />
                These are just a few of the accomplishments we have achieved so far, and we are excited to continue working to improve and grow our cryptocurrency platform in the future.
              </p>
            </div>
          </div>
          <div className="track2">
            {/* tiene bg-image */}
            <h2>Our Track Record</h2>
          </div>
        </section>
        <section className="team">
          <div className="team1">
            {/* tiene bg-image */}
            <h2>Our Team</h2>
          </div>
          <div className="team2">
            <div>
              <p>
                Let me introduce our amazing team of cryptocurrency experts!
                <br />
                <br />
                First, we have our financial analyst, Juan. With his extensive experience in the stock market and his deep knowledge of economic trends, Juan is an expert in the analysis and evaluation of different cryptocurrencies.
                <br />
                <br />
                Then there is our graphic designer, María. With her creativity and talent, Maria has created an impressive and easy to navigate website, which has greatly improved the user experience on our platform.
                <br />
                <br />
                We also have our computer security specialist, Carlos, who works tirelessly to ensure that our users are protected against any type of cyber threat. His expertise in cryptography and building strong security systems is essential to protecting our digital assets.
                <br />
                <br />
                Last but not least is our digital marketing expert, Ana. With her creativity and communication skills, Ana is responsible for promoting our page and making sure it reaches as many people as possible.
                <br />
                <br />
                They each bring unique skills and knowledge to the team, and together we have created a world-class cryptocurrency website. I am very proud to work with them, and I am confident that they will continue to lead the way in educating and promoting responsible financial practices in the crypto world.
              </p>
            </div>
          </div>
        </section >
      </div>
    </div >
  )
}


export { About }

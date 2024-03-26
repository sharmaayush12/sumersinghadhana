import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
// import ProgressBar from '../ProgressBar';
import { pageTitle } from '../../helpers/PageTitle';

export default function TeamDetailsPage() {
  pageTitle('Team Details');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Sumer Singh"
        subTitle="Primary Counsltant"
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <img
                src={require("../../Assets/1.png")}
                alt="Member"
                className="w-100"
              />
            </div>
            <div className="col-xl-6 offset-xl-1">
              <Spacing lg="0" md="30" />
              <h2 className="cs_fs_38">Bio & experience</h2>
              <p>I am Sumer, Passionate Real Estate Consultant in Dubai.<br></br>
              I am here to offer an innovative and ambitious level  of service and expertise with the heighest  standerds,
              helping my clients find valueable solution to their real estate Requirnments.
              </p>
              <p>At provident we are your One stop shop for all things related to Real Estate.<br></br>
              Arriving in Dubai, Sumer began his career at Atmosphere Burj Khalifa, transitioning seamlessly from hospitality to real estate. His work ethic and understanding of market dynamics quickly established him as a key player at Provident Estate.

              Sumer's mantra, "life is a game to be played," reflects his approach to overcoming challenges and seizing opportunities. After a thousand days in real estate, he was honored with The Ultimate Realty Awards 2024, reaffirming Provident Estate's commitment to excellence.
              </p>
              {/* <Spacing lg="15" md="15" />
              <ProgressBar title="React Development" percentage="75" />
              <ProgressBar title="Front-End Development" percentage="85" />
              <ProgressBar title="Sql Database" percentage="80" /> */}
            </div>
          </div>
        </div>
      </section>
      <Spacing lg="150" md="80" />
    </>
  );
}

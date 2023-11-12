/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";
import SelectCar from "../../../public/images/icon1.png";
import Contact from "../../../public/images/icon2.png";
import Drive from "../../../public/images/icon3.png";

function Features() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar as any} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact as any} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive as any} alt="icon_img" />
                <h3>{`Let's Drive`}</h3>
                <p>
                  {`Whether you're hitting the open road, we've got you covered
                  with our wide range of cars`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
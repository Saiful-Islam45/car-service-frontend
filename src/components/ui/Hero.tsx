import Image from 'next/image';
import Link from 'next/link';
import BgShape from '../../../public/hero-bg.png';
import HeroCar from '../../../public/main-car.png';

function Hero() {
  const bookBtn = () => {
    //@ts-ignore
    document
      .querySelector('#booking-section')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section id="home" className=" mt-[100px] lg:mt-1-lg md:mt-3 hero-section p-6 mr-[-30px]">
        <div className="container max-w-screen h-screen flex flex-wrap items-center justify-between">
          <Image className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent your dreams cars. Unbeatable prices,
                <br />
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  href="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" href="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <Image
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

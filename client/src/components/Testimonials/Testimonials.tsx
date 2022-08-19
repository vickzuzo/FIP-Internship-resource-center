import useEmblaCarousel from "embla-carousel-react";
import {
  StyledCarouselWrapper,
  StyledTestimonialSectionContainer,
} from "./styles";

const Testimonials = () => {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [viewportRef] = useEmblaCarousel({
    align: "center",
    skipSnaps: true,
  });

  return (
    <StyledTestimonialSectionContainer>
      <h2>Testimonials from previous Interns</h2>
      <StyledCarouselWrapper>
        <div className="viewport" ref={viewportRef}>
          <div className="container">
            {slides.map((index) => (
              <div className="slide" key={index}>
                <div className="inner">
                  <img
                    className="img"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt="A cool cat."
                  />
                  <div className="content">
                    <p>
                      "FIP internship is a great place to learn as it is the one
                      and only place i notise to be really freeo learn as it is
                      the one and only place i notise to be really free."
                    </p>
                    <h2>
                      Vickz Dev - <span>Intern</span>
                    </h2>
                    <p className="date">10/08/2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyledCarouselWrapper>
    </StyledTestimonialSectionContainer>
  );
};

export default Testimonials;

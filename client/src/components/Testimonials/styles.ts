import { lighten } from "polished";
import { devices } from "./../../styles";
import styled from "styled-components";

export const StyledTestimonialSectionContainer = styled.section`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    width: 85%;
  }

  h2 {
    text-align: center;
  }
`;

export const StyledCarouselWrapper = styled.div`
  position: relative;
  margin: 4rem auto;
  background-color: #fff;
  padding: 20px;
  max-width: 670px;

  @media ${devices.tablet} {
    width: 100%;
  }

  .viewport {
    overflow: hidden;
    width: 100%;
    &.is-draggable {
      cursor: move;
      cursor: grab;
    }
    &.is-dragging {
      cursor: grabbing;
    }
  }

  .container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    /* margin-left: -10px; */
    .slide {
      position: relative;
      min-width: 100%;
      padding-left: 10px;
      .inner {
        position: relative;
        overflow: hidden;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .img {
          display: block;
          width: 5rem;
          border-radius: 50%;
        }

        .content {
          padding: 0.4rem;

          p {
            font-size: 0.8rem;
            color: ${lighten(0.7, "#000")};
            font-style: italic;
            margin: 0.7rem 0;
            max-width: 95%;
            text-align: center;
          }
          h2 {
            text-align: center;
            font-size: 1rem;
            color: ${({ theme }) => theme.mainBlue};
            span {
              font-size: 0.8rem;
              font-style: italic;
              color: ${lighten(0.7, "#000")};
            }
          }
        }
      }
    }
  }
`;

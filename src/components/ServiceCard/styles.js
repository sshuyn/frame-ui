import styled from "styled-components";

export const ServiceCardWrapper = styled.div`
  /* background: blue; */
  position: relative;
  display: flex;
  justify-content: ${props => {
    if (props.position === 1) return "flex-end";
    if (props.position === 2) return "flex-start";
    if (props.position === 3) return "center";
    if (props.position === 4) return "center";
    if (props.position === 5) return "flex-start";
    if (props.position === 6) return "flex-end";
  }};
  
  align-items: center;
  margin: 1rem 0;

  &:hover {
    cursor: pointer;
    filter: grayscale(0%);

    & > img {
      opacity: 1;
    }

    & > div {
      background: transparent linear-gradient(69deg, #5CC3D6 0%, #95CF8A 13%, #C2D94F 25%, #E3E024 36%, #F7E409 43%, #FFE600 48%, #FADE06 54%, #EFC818 63%, #DBA536 74%, #C1745F 87%, #A33D8F 100%) 0% 0% no-repeat padding-box;

      & > h2 {
      /* opacity: 1; */
      font-size: 14px;
      padding: 0.2rem 0.5rem;
      position: absolute;
      top: 5px;
      bottom: 5px;
      right: 5px;
      left: 5px;
      opacity: 0.9;
      color: #292853;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }
  }

  & > img {
    width: ${ props => {
    if (props.position === 1) return "75%";
    if (props.position === 2) return "50%";
    if (props.position === 3) return "100%";
    if (props.position === 4) return "50%";
    if (props.position === 5) return "75%";
    if (props.position === 6) return "50%";
  }};
    height: ${ props => {
    if (props.position === 4) return "360px";
    return "180px";
  }};;
    filter: grayscale(100%);
    object-fit: cover;
    object-position: ${ props => {
    if (props.position === 1) return "right";
    if (props.position === 2) return "left";
    if (props.position === 5) return "left";
    if (props.position === 6) return "right";
  }};
    opacity: 0.5;
  }
`;

export const TitleWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 2rem 1rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;


  & > h2 {
    text-align: center;
    font-size: 18px;
    color: #292853;
    /* z-index: 200; */
  }
`;
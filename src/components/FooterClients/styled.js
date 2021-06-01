import styled from "styled-components";

import { ReactComponent as FrameLogoSquare } from "../../assets/svgs/framelogo2.svg";

export const FooterClientsWrapper = styled.section`
  width: 100%;
  /* padding: 2rem 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(30deg, #792C86 0%, #7E4495 7%, #8A74B4 21%, #9297CB 34%, #97ADD9 44%, #99B5DE 51%, #98B1DB 60%, #95A6D4 68%, #9194C8 76%, #8B7AB7 84%, #8358A2 92%, #793088 100%, #792D86 100%) 0% 0% no-repeat padding-box;
`;

export const TopSection = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  /* height: 100px; */
  background: transparent linear-gradient(180deg, #FFFFFF 0%, #80808000 100%) 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    background: transparent linear-gradient(90deg, #5CC3D6 0%, #95CF8A 13%, #C2D94F 25%, #E3E024 36%, #F7E409 43%, #FFE600 48%, #FADE06 54%, #EFC818 63%, #DBA536 74%, #C1745F 87%, #A33D8F 100%) 0% 0% no-repeat padding-box;    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 1rem 0;
    opacity: 1;
    font-size: 2em;
  }

  & .slider-wrapper {
    width: 80%;
  }
`;

export const BottomSection = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselItem = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
`;

export const LogoWrapper = styled.div`
  object-fit: contain;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > img {
    height: 90px;
    width: auto;
    object-fit: contain;
    /* width: 100%; */
    /* height: 100%; */

  }
`;

export const FrameLogoSquareStyled = styled(FrameLogoSquare)`
  width: 120px;
  height: 120px;
`;

export const SocialMediaList = styled.div`
  width: 80%;
  margin: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMediaItem = styled.a`
  width: fit-content;
  height: 22px;

  & > img {
    width: auto;
    height: 16px;
  }
`;

export const CopyRight = styled.samp`
  color: #FFFFFF;
  opacity: 0.51;
  font-size: 10px;
`;
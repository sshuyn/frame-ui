import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";

export const HeroWrapper = styled.div`
  background: #323232;
  padding: 1rem;
  width: 100%;
  height: 100vh;

  position: relative;

  & > img {
    height: 100vh;
    width: 100vw;

    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  display: ${props => props.menuOpen ? "none" : "block"};
  height: 24px;
  width: 24px;
`;

export const CloseIconStyled = styled(CloseIcon)`
  height: 24px;
  width: 24px;
  z-index: 1001;
  position: absolute;
  right: 2.4rem;
  top: 2.6rem;
`;

export const Menu = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  
  display: ${props => props.menuOpen ? "block" : "none"};
  background: black;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

export const MenuList = styled.ul`
  z-index: 1001;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  center;
`;

export const MenuItem = styled.li`
  /* background: red; */
  width: 50vw;
  padding: 0.2rem 0;
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 1rem;
  list-style: none;

  &:hover {
    background: black;
    opacity: 0.2;
  }
`;

export const VideoPlayerBlur = styled.div`
 /* filter: blur(8px); */
 position: absolute;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;
 
 
 & > video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background: #000000 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  opacity: 0.4;
`;

export const ImageBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const VideoPlayer = styled.div`
  height: 100%;
  position: relative;
  background: transparent;
  border: 0.4rem solid transparent;
  
  
  ${props => props.borderColor ? (
    `
    -moz-border-image: -moz-${props.borderColor};
    -webkit-border-image: -webkit-${props.borderColor};
    border-image: ${props.borderColor};
    `
  ) : (`
    -moz-border-image: -moz-linear-gradient(left, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
    border-image: linear-gradient(to right, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
  `)}
  border-image-slice: 1;
  /* border-image: ${props => !props.pageColor ? `
    linear-gradient(to right, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%);
  `: "linear-gradient(to right,#F27044 0%,#A11E7D 100%);"}; */

  & > video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  padding: 5px;
  /* background: transparent linear-gradient(90deg, #FFFFFF 0%, #DFEFD7 0%, #C3E0B3 0%, #A9D392 0%, #94C877 0%, #83BF61 0%, #76B950 0%, #6CB444 0%, #67B13D 0%, #66B13C 0%, #5CC2CD 0%, #5CC3D6 0%, #6FC7BC 8%, #A0D17B 24%, #EFE214 47%, #FFE600 51%, #FCD309 55%, #E01169 100%, #E01169 100%) 0% 0% no-repeat padding-box; */
  position: absolute;
  top: 0;
  }
`;

export const Header = styled.div`
  /* background: red; */
  /* position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem; */

  padding: 1rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  background: white;
`;

import styled from 'styled-components';

export const ContainerIntro = styled.div`
  position: absolute;
  height: 544px;
  left: 0px;
  right: 0px;
  top: 100px;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  filter: blur(80px);
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: calc(50% - 588px/2 - 266px);
  top: calc(50% - 192px/2 - 125px);
`;

export const Title = styled.h1`
  width: 588px;
  height: 65px;

  /* Title/Title XL */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */


  /* Base/Title */

  color: #272221;


  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;  

export const Paragraph = styled.p`
width: 588px;
height: 52px;

/* Text/Regular L */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
/* or 26px */


/* Base/Subtitle */

color: #403937;
font-stretch: 100;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export const ImageCoffee = styled.div`
  position: absolute;
  width: 476px;
  height: 360px;
  left: calc(50% - 476px/2 + 322px);
  top: calc(50% - 360px/2);

  background: url("../../public/ImageCoffee.svg");
`;

export const Items = styled.div`
  position: absolute;
  width: 567px;
  height: 84px;
  left: calc(50% - 567px/2 - 276.5px);
  top: calc(50% - 84px/2 + 122px);
`;

export const BlockImageItem1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand / Yellow Dark */

  background: #C47F17;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BlockImageItem2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand / Yellow */

  background: #DBAC2C;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BlockImageItem3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Base/Text */

  background: #574F4D;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;


export const BlockImageItem4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand/Purple */

  background: #8047F8;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Item1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 0px;
`;

export const Item2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 52px;
`;

export const Item3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 294px;
  height: 32px;
  left: 271px;
  top: 0px;
`;

export const Item4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 294px;
  height: 32px;
  left: 271px;
  top: 52px;
`;

export const ParagraphItem = styled.p`
  width: 187px;
  height: 21px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */


  /* Base/Text */

  color: #574F4D;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`;
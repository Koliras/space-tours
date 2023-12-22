import { styled } from 'styled-components';
import { Banner, BannerText, BannerWrapper } from '../../components/UI/atoms/Banner';
import { SecondaryHeading } from '../../components/UI/atoms/SecondaryHeading';
import { Title } from '../../components/UI/atoms/Title';
import Card from '../../components/UI/molecules/Card';
import './Main.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { HashLink } from 'react-router-hash-link';

const BigText = styled.span`
  font-size: 310px;
  line-height: 310px;
`;

const MainBannerText = styled(BannerText)`
  top: 28%;
`;

const ToursLink = styled.span`
  color: #FFF;
  text-align: center;
  font-family: Lato;
  font-size: 32px;
  font-weight: 300;
`;

const ToursLinkWrapper = styled(HashLink)`
  text-decoration: none;
  position: absolute;
  bottom: 32px;
  display: inline-flex;
  align-items: center;
  gap: 18px;
  left: 50%;
  transform: translate(-50%, 0);
`;

function Main() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <BannerWrapper>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          arrows={false}
          > 
          <Banner src='public/Background_1.png' height={740}/>
          <Banner src='public/Background_2.png' height={740}/>
          <Banner src='public/Background_3.png' height={740}/>
        </Carousel>
        <MainBannerText>
          The space is waiting for <BigText>you</BigText>
        </MainBannerText>

        <ToursLinkWrapper smooth to="#tours">
          <ToursLink>
            Explore tours
          </ToursLink>

          <img src="src\assets\arrowDown.svg" alt="Arrow down" width={20} height={25}/>
        </ToursLinkWrapper>
      </BannerWrapper>
      <SecondaryHeading>Some other text</SecondaryHeading>
      <Title>Some title</Title>
      <div id="tours">
        <Card trip={{
          id: '',
          name: 'Some random name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamus'
        }} index={2}/>
      </div>
    </>
  )
}

export default Main;

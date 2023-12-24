import { styled } from 'styled-components';
import { Banner, BannerText, BannerWrapper } from '../../components/UI/atoms/Banner';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { HashLink } from 'react-router-hash-link';
import { PageContent } from '../../components/UI/atoms/PageContent';
import ToursCarousel from '../../components/UI/molecules/ToursCarousel';
import { SecondaryHeading } from '../../components/UI/atoms/SecondaryHeading';

const BigText = styled.span`
  font-size: 310px;
  line-height: 310px;
`;

const MainBannerText = styled(BannerText)`
  top: 28%;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  height: 44px;
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
          <Banner src='./Background_1.png' height={740}/>
          <Banner src='./Background_2.png' height={740}/>
          <Banner src='./Background_3.png' height={740}/>
        </Carousel>
        <MainBannerText>
          The space is waiting for <BigText>you</BigText>
        </MainBannerText>

        <ToursLinkWrapper smooth to="#tours">
          <ToursLink>
            Explore tours
          </ToursLink>

          <img src="/assets/arrowDown.svg" alt="Arrow down" width={20} height={25}/>
        </ToursLinkWrapper>
      </BannerWrapper>
      
      <PageContent id='tours'>
        <HeadingWrapper>
          <SecondaryHeading>Popular tours</SecondaryHeading>
        </HeadingWrapper>

        <ToursCarousel />
      </PageContent>
    </>
  )
}

export default Main;

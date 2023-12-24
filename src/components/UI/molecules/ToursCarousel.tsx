import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_ROCKETS } from '../../../utils/queries';
import { ButtonGroup } from './CarouselArrows';
import Card from './Card';
import { Tour } from '../../../types/Tour';
import { useRecoilState } from 'recoil';
import { tours$ } from '../../../utils/atoms';
import { SecondaryHeading } from '../atoms/SecondaryHeading';
import { CustomDot } from '../atoms/CustomDot';

const ToursCarouselContainer = styled.div`
  position: unset;
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 68px;
  box-sizing: border-box;
`;

export default function ToursCarousel() {
  const { loading, error, data } = useQuery(GET_ROCKETS, {
    variables: { limit: 8 }
  });

  const [tours, setTours] = useRecoilState(tours$);

  if (loading) return <SecondaryHeading>Loading...</SecondaryHeading>;
  if (error) return <SecondaryHeading>Error: {JSON.stringify(error)}</SecondaryHeading>;
  if (!loading && !error) setTours(data.rockets);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1340 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1340, min: 570 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 570, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    },
  };

  return (
    <Wrapper>
      <ToursCarouselContainer>
        <Carousel
          responsive={responsive}
          partialVisible={true}
          renderArrowsWhenDisabled={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          showDots={true}
          customDot={<CustomDot />}
          renderDotsOutside={true}
        >
          { tours.map((tour: Tour, index: number) => (
            <Card tour={tour} index={index % 3} key={tour.id}/>
            ))}
        </Carousel>
      </ToursCarouselContainer>
    </Wrapper>
  );
}
import { styled } from "styled-components";
import { Banner, BannerText, BannerWrapper } from "../../components/UI/atoms/Banner";
import Card from "../../components/UI/molecules/Card";
import { PageContent } from "../../components/UI/atoms/PageContent";
import { Description } from "../../components/UI/atoms/Description";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteToursIds$, tours$ } from "../../utils/atoms";
import { SecondaryHeading } from "../../components/UI/atoms/SecondaryHeading";

const FavoritesBannerText = styled(BannerText)`
  top: 50%;
`;

const Clear = styled(Description)`
  margin-bottom: 40px;
  text-align: right;
  justify-content: flex-end;
  cursor: pointer;
`;

const ToursList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 411px);
  gap: 24px;
`;

function Favorites() {
  const [favoriteIds, setFavoriteIds] = useRecoilState(favoriteToursIds$);
  const tours = useRecoilValue(tours$);

  const favoriteTours = tours.filter(tour => favoriteIds.includes(tour.id));

  const handleClear = () => {
    setFavoriteIds([]);
  }

  return (
    <>
      <BannerWrapper>
        <Banner src="/Background_3.png" height={370}/>

        <FavoritesBannerText>
          Favorites
        </FavoritesBannerText>
      </BannerWrapper>

      <PageContent>
        { favoriteTours.length === 0
          ? (
            <SecondaryHeading>
              You don't have any favorite tours
            </SecondaryHeading>
          ) : (
            <>
              <Clear
                onClick={handleClear}
                >
                Clear all
              </Clear>

              <ToursList>
                { favoriteTours.map((tour, index) => (
                  <Card tour={tour} index={index} />
                  ))}
              </ToursList>
            </>
          )}
      </PageContent>
    </>
  )
}

export default Favorites;

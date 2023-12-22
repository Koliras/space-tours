import { styled } from "styled-components";
import { Banner, BannerText, BannerWrapper } from "../../components/UI/atoms/Banner";
import Card from "../../components/UI/molecules/Card";

const FavoritesBannerText = styled(BannerText)`
  top: 50%;
`

function Favorites() {
  return (
    <>
      <BannerWrapper>
        <Banner src="public/Background_3.png" height={370}/>

        <FavoritesBannerText>
          Favorites
        </FavoritesBannerText>
      </BannerWrapper>
      <Card trip={{
        id: '',
        name: 'Some random name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamus'
      }} index={2}/>
    </>
  )
}

export default Favorites;

import { styled } from "styled-components"
import { Tour, TourKey } from "../../../types/Tour";
import { ImageToShow } from "../../../utils/constants";
import { Title } from "../atoms/Title";
import { Description } from "../atoms/Description";
import { Button } from "../atoms/Button";
import { ButtonIcon } from "../atoms/ButtonIcon";
import { useLocation } from "react-router-dom";
import { IconForButton } from "../../../types/IconForButton";
import { useSetRecoilState } from "recoil";
import { favoriteToursIds$ } from "../../../utils/atoms";

const CardWrapper = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid #D3EAFF;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 296px;
  margin-bottom: 32px;
`;

const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  gap: 16px;
  padding-inline: 32px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-inline: 32px;
  justify-content: space-between;
`;

export default function Card({ tour, index }: { tour: Tour, index: number }) {
  const { id, name, description } = tour;
  const keyOfImage = String(index % 3) as TourKey;
  const normalizedDescription = description.slice(0, 60) + '...';
  const iconType = useLocation().pathname === '/favorites' ? IconForButton.delete : IconForButton.like;
  const setFavorites = useSetRecoilState(favoriteToursIds$);

  const handleClick = () => {
    if (iconType === IconForButton.like) {
      setFavorites((prev) => prev.filter((tourid) => tourid !== id));
      return;
    }

    setFavorites(prev => {
      prev.push(id)
      return prev;
    });
  };

  return (
    <CardWrapper>
      <CardImage src={`public/${ImageToShow[keyOfImage]}`}/>

      <CardTextWrapper>
        <Title>
          { name }
        </Title>

        <Description>
          { normalizedDescription }
        </Description>
      </CardTextWrapper>

      <ButtonsWrapper>
        <Button>
          Buy
        </Button>

        <ButtonIcon type={iconType} onClick={handleClick}/>
      </ButtonsWrapper>
    </CardWrapper>
  )
}
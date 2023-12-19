import { styled } from "styled-components"
import { Trip, TripKey } from "../../../types/Trip";
import { ImageToShow } from "../../../constants";
import { Title } from "../atoms/Title";
import { Description } from "../atoms/Description";
import { Button } from "../atoms/Button";
import { ButtonIcon } from "../atoms/ButtonIcon";

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

export default function Card({ trip, index }: { trip: Trip, index: number }) {
  const keyOfImage = String(index % 3) as TripKey;
  const normalizedDescription = trip.description.slice(0, 60) + '...';
  return (
    <CardWrapper>
      <CardImage src={`public/${ImageToShow[keyOfImage]}`}/>

      <CardTextWrapper>
        <Title>
          { trip.name }
        </Title>

        <Description>
          { normalizedDescription }
        </Description>
      </CardTextWrapper>

      <ButtonsWrapper>
        <Button>
          Buy
        </Button>

        <ButtonIcon type="like"/>
      </ButtonsWrapper>
    </CardWrapper>
  )
}
import { Button } from '../../components/UI/atoms/Button';
import { ButtonIcon } from '../../components/UI/atoms/ButtonIcon';
import { Description } from '../../components/UI/atoms/Description';
import { MainHeading } from '../../components/UI/atoms/MainHeading';
import { NavigationLink } from '../../components/UI/atoms/NavigationLink';
import { SecondaryHeading } from '../../components/UI/atoms/SecondaryHeading';
import { Title } from '../../components/UI/atoms/Title';
import './Main.css'

function Main() {
  return (
    <>
      <p>Main page</p>
      <Button>Some button</Button>
      <br />
      <ButtonIcon $iconType='like'/>
      <br />
      <ButtonIcon $iconType='delete'/>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamus dolores ipsum vitae repuds consequuntur vitae eos, ea nihil modi illum ratione saepe, architecto deserunt repudiandae iste dolorum.
      </Description>

      <MainHeading>Some Text</MainHeading>
      <SecondaryHeading>Some other text</SecondaryHeading>
      <Title>Some title</Title>
      <NavigationLink>Some text</NavigationLink>
    </>
  )
}

export default Main;

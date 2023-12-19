import Card from "../../components/UI/molecules/Card";

function Favorites() {

  return (
    <>
      <p>Favorites page</p>
      <Card trip={{
        id: '',
        name: 'Some random name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamusLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque. Esse voluptates, accusamus'
      }} index={2}/>
    </>
  )
}

export default Favorites;

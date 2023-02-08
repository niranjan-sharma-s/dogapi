
import './App.css';
import FetchData from './components/FetchData';

function App() {

  const data = FetchData()
const {breed_group , name , id ,height, life_span, image} =  data

  return (
    <div>
     {data && data.map((dog) => {
      return (
      <div key ={dog.id}>
        <img src={dog.image.url} alt="dog_img" />
       <div>Name: {dog.name}</div>
       <div>Height: {dog.height.imperial}</div>
       <div>Life span: {dog.life_span}</div>
        </div>
     )})}
 
    </div>
  );
}

export default App;

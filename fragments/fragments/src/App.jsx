import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Heading from "./components/Heading";
import Container from "./components/Container";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h2>im still hungry...</h2>;
  // }
  // let textStateArr = useState("username entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  const [foodItems, setFoodItems] = useState([]);
  const search = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = " ";
      let huehue = [...foodItems, newFoodItem];
      setFoodItems(huehue);
    }
  };

  return (
    <>
      <Container>
        <Heading></Heading>
        {/* {foodItems.length === 0 ? <h2>im still hungry...</h2> : null} */}
        <Input search={search}></Input>
        <ErrorMessage Iitems={foodItems}></ErrorMessage>
        <FoodItems Iitems={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>above is your friend list</p>
      </Container>
    </>
  );
}
export default App;

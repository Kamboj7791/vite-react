import Items from "./Items";

const FoodItems = ({ Iitems }) => {
  return (
    <ul className="list-group ">
      {Iitems.map((items) => (
        <Items
          key={items}
          foodItems={items}
          follow={() => console.log(`${items} is your friend now`)}
        ></Items>
      ))}
    </ul>
  );
};
export default FoodItems;

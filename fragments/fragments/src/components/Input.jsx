import style from "./Input.module.css";
const Input = ({ search }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter username here"
        className={style.search}
        // onChange={(event) => {
        //   console.log(event.target.value);
        // }}
        onKeyDown={search}
      />
    </>
  );
};
export default Input;

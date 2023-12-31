import style from "./ErrorMessage.module.css";
function ErrorMessage({ Iitems }) {
  return (
    <>
      {Iitems.length === 0 && (
        <h2 className={style.heading2}>your friendlist is empty</h2>
      )}
    </>
  );
}
export default ErrorMessage;

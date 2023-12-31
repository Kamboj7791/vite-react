const Hello=()=>{
  let name ="kunal"
  let fullName =()=>{
    return "kunal"
  }
  let message=120;
  return (
    <h1> message no.{message}hii this is hello world component{fullName()}</h1>
  )
}
export default Hello;

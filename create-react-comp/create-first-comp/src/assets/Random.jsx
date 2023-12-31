const Random=()=>{
  let number = Math.random()*100;
  return<h1 style={{'backgroundColor':"blue"}}>the random number is:{Math.round(number)}</h1>
  
}
export default Random;
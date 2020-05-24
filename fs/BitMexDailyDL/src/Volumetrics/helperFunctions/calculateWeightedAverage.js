module.exports = function(firstNum, secondNum){
  
  const pct = firstNum.quantity / (firstNum.quantity + secondNum.quantity)  
  const newAverage = firstNum.value * pct + secondNum.value * (1-pct);
  const newQuantity = firstNum.quantity + secondNum.quantity

  return { value: newAverage, quantity: newQuantity }

};

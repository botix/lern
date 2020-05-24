const calculateWeightedAverage = require("./helperFunctions/calculateWeightedAverage");

let volume = 0
data = {}
buySideVolume = 0
sellSideVolume = 0
volumeProfile = {}
quantity = 0
sortedVolume = {}
avgPrice = {
  quantity: 0,
  value: 0
}
n = 0

module.exports = {calculate, reset, resetCounter}


function calculate(item){
    
    n++
    data = item;
    data.size = parseFloat(item.size)
    data.price = parseFloat(item.price)

    volume += parseFloat(data.size)
    if(item.side ==="Buy"){
      buySideVolume += data.size
      quantity = data.size
    }
    else if(data.side ==="Sell"){
      sellSideVolume += data.size
      quantity = data.size * (-1)
    }
    
    if(!volumeProfile[`${item.price}`]){
      volumeProfile[`${item.price}`] = quantity
    }else{
      volumeProfile[`${item.price}`] += quantity
    }  
    
    avgPrice = calculateWeightedAverage(avgPrice, {quantity: data.size, value: data.price})

  return{
    //vP: volumeProfile,
    date: data.timestamp,
    totalTrades: n,
    totalVolume: volume/1000000,
    buySideVolume: buySideVolume/1000000,
    sellSideVolume: sellSideVolume/1000000,
    volumeDelta: (buySideVolume - sellSideVolume)/1000000,
    avgPrice: avgPrice,
  }
};

function reset(){
  volume = 0
  data = {}
  buySideVolume = 0
  sellSideVolume = 0
  volumeProfile = {}
  quantity = 0
  sortedVolume = {}
  avgPrice = {
    quantity: 0,
    value: 0
  }
}

function resetCounter(){
  n = 0;
}
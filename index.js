const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries(batches) {
    let totalBatches = 0;
    for (const batch of batches) {
        totalBatches += batch;
    }
    
    return totalBatches;
}

const totalBatteries = (batches) => {
    return batches.reduce((total, batch) => total + batch, 0);
  }
  
// console.log(totalBatteries(batteryBatches));

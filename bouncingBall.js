function bouncingBall(h,  bounce,  window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1
    h = h* bounce; 
    while (h > window) {
      count += 2
      h = h* bounce;      
    }
    return count;
  } else {
    return -1;
  }
}


console.log(bouncingBall(3.0, 0.66, 1.5)) //> 3
console.log(bouncingBall(30.0, 0.66, 1.5)) //> 15
console.log(bouncingBall(3.0, 0.25, 1.5)) //> 1
console.log(bouncingBall(3.0, 1.0, 1.5)) //> -1
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Calculate the factorial of 5
  const result = factorial(5); 
  console.log("Factorial of 5:", result); // Output: Factorial of 5: 120
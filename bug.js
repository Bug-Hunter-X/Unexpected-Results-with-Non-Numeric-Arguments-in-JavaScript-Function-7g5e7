function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b; // Potential error: what if a or b are not numbers?
}
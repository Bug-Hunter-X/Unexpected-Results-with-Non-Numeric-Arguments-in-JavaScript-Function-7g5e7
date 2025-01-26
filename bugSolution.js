function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs gracefully
  }
  return a + b; // Add numbers
}
// Array of names
var names = ["John", "Jack", "Jessica", "Jerry", "Maria"];

// Loop through the names array
for (var i = 0; i < names.length; i++) {
  // Convert name to lowercase for case-insensitive comparison
  var name = names[i].toLowerCase();
  
  // Check if the name starts with 'j'
  if (name.charAt(0) === 'j') {
    // If name starts with 'j', say 'Good Bye'
    console.log("Good Bye " + names[i]);
  } else {
    // If name doesn't start with 'j', say 'Hello'
    console.log("Hello " + names[i]);
  }
}

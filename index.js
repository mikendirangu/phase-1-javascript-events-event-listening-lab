function addingEventListener() {
    // This function adds an event listener to a button that alerts a message when clicked.

  // Step 1: Grab the input element by its ID
  const input = document.getElementById('button');

  // Step 2: Create a named callback function
  function clickMe() {
    alert('I was clicked!');
  }

  // Step 3: Attach the event listener to the input element
  input.addEventListener('click', clickMe);
}

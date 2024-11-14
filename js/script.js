function typingEffect() {
  const text = "Hello, I am Christoper J. Mobley";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100; // delay between each letter

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, i * typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", typingEffect);

//  The function  typingEffect  is called when the DOM is loaded. It calls the function  typeText  with the text to be typed, the element where the text will be typed, and the delay between each letter. The function  typeText  loops through each character in the text and adds it to the element with a delay between each character.
//  The  setTimeout  function is used to delay the addition of each character to the element. The delay is calculated by multiplying the index of the character by the typing delay. This way, each character is added to the element with a delay between them.
//  The  textContent  property is used to set the text of the element. The  charAt  method is used to get the character at the specified index in the text.
//  The  typingEffect  function can be called with different text, element, and delay values to create different typing effects on the webpage.
//  Conclusion
//  In this article, we have learned how to create a typing effect using JavaScript. We have created a simple typing effect that types out a text on a webpage with a delay between each character. We have used the  setTimeout  function to add a delay between each character and the  textContent  property to set the text of an element.
//  We have also learned how to call the typing effect function when the DOM is loaded using the  DOMContentLoaded  event.
//  I hope you found this article helpful. Let me know if you have any questions or suggestions.

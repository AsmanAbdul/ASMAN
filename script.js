// This code ensures that the ionicons scripts are loaded correctly
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];

  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('ionicons');
  var url = parts.join('/');

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/ionicons.esm.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
  doc.head.appendChild(scriptElm);

  
  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/ionicons.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
  doc.head.appendChild(scriptElm)
  
  console.warn(warn.join('\n'));

})(document);

// This code ensures that the event listener is attached after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('amount').addEventListener('change', function() {
    var customAmountField = document.getElementById('customAmount');
    if (this.value === 'custom') {
      customAmountField.style.display = 'block';
    } else {
      customAmountField.style.display = 'none';
    }
  });
});


// Navigating 

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');



// asman 
  // JavaScript code to toggle menu visibility
  document.addEventListener('DOMContentLoaded', function() {
    // Get the menu element
    var menu = document.querySelector('.menu');

    // Get the menu toggle button (you may need to add a toggle button in your HTML)
    var menuToggle = document.querySelector('.icon');

    // Add click event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the menu
        menu.classList.toggle('active');
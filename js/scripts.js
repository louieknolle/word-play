$(document).ready(function() {
  event.preventDefault;
 const sentenceInput = $('form#sentence').val();
 const sentenceArray = sentenceInput.split(' ');
 const requiredLength = 3;
 sentenceArray.forEach(function(word) {
  const threeLetterArray = sentenceArray.map(word => word.length >= requiredLength)
  threeLetterArray.join(' ').reverse();
});
 });

});
$(document).ready(function () {
  setUpVerification();
  setUpUnlock();
});

var verification_answers = ['damascus', 'chiral', 'beribboned', 'fireball']
function setUpVerification () {
  $('#verify').click(function () {
    var verifies = true

    var $answers = $('input')

    $.map(verification_answers, function (answer, i) {
      if (answer !== $answers.eq(i).val().toLowerCase()) {
        verifies = false;
      }
    })
    if (verifies) {
      alert("Marvelous! It's you!")
      window.location = '/padlock.html'
    } else {
      alert('Are you sure about those answers? Something seems wrong...')
    }
  });
}

var padlock_answers = ['1','9']
function setUpUnlock () {
  $('#unlock').click(function () {
    var shouldUnlock = false

    var $answers = $('input')

    var answerString = $answers.map(function (i, answer) {
      return answer.value
    }).get().join()

    if (answerString === '1,9') { shouldUnlock = true }
    if (answerString === '36,43') { shouldUnlock = true }
    if (answerString === '59,20') { shouldUnlock = true }

    if (shouldUnlock) {
      alert("Nicely done! Your message awaits.")
      window.location = '/message.html'
    } else {
      alert('Nope.')
    }
  });
}

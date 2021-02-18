document.getElementById("do-the-thing").onclick = () =>
  document.querySelector('#result').textContent = document.querySelector('#text').value
    .split('')
    .filter(s => !!s.match(/([a-z@#!?]|\ )/ig))
    .map(s => s === ' ' ? ':blank:' : `:alphabet-white-${s.replace('@', 'at').replace('#', 'hash').replace('!', 'exclamation').replace('?', 'question')}:`)
    .join('')

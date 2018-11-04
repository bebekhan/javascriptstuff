var quotes = [ 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins. -Ellen Ullman', 
'What one programmer can do in one month, two programmers can do in two months. - Fred Brooks',
 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie',
 'How did you know so much about computers? I didn’t, it was the first one-Grace Hopper.',
 'One of the best programming skills you can have is knowing when to walk away for awhile. - Oscar Godson'
 ]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


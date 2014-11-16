function shuffle(o) { 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var words = [
	'Всем хорошего дня','Слабнюк','График профилактик',
	'Всем хорошего дня','Слабнюк','График профилактик',
	'Всем хорошего дня','Слабнюк','График профилактик',
	'Всем хорошего дня','Слабнюк','График профилактик',
	'Всем хорошего дня','Слабнюк','График профилактик',
	'По коммунальным','Всем доброе утро','Вопросы есть?'];

function createCards() {
	var cardsCount = $('#cardsCount').val();
	var rowsCount = $('#rowsCount').val();
	var bingoTable = $('#bingoTable');
	bingoTable.empty();
	for (var cardNum = 0; cardNum < cardsCount; cardNum++)
	{
		words = shuffle(words);
		var html = '<table class="table-bordered">';
		var wordsCount = words.length;
		var wordsInRow = rowsCount;
		for (var i = 0; i < wordsCount; i++)
		{
			if (i % wordsInRow === 0)
			{
				html += '</tr><tr>';
			}
			html += '<td><div>' + words[i] + '</div></td>';
		}
		html += '</table>'		
		bingoTable.append(html);
	}
}

function bindEvents() {
	$('#createCards').click(createCards);
}
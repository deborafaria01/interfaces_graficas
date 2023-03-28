const form = document.querySelector('form');
form.addEventListener('submit', cadastrarLivro);

function cadastrarLivro(event) {
	event.preventDefault();

	const registro = document.getElementById('registro').value.trim();
	const titulo = document.getElementById('titulo').value.trim();
	const categoria = document.getElementById('categoria').value;
	const autor = document.getElementById('autor').value.trim();
	const dataPublicacao = document.getElementById('dataPublicacao').value;

	// Verifica se o registro já existe
	if (livros.find(livro => livro.registro === registro)) {
		alert('Livro já cadastrado.');
		return;
	}

	// Cria o objeto livro
	const livro = {
		registro: registro,
		titulo: titulo,
		categoria: categoria,
		autor: autor,
		dataPublicacao: dataPublicacao
	};

	// Adiciona o livro à array de livros
	livros.push(livro);

	// Limpa o formulário
	form.reset();

	alert('Livro cadastrado com sucesso!');
}

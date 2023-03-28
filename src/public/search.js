const livros = [
	{
		titulo: 'O Pequeno Príncipe',
		autor: 'Antoine de Saint-Exupéry'
	},
	{
		titulo: 'Dom Quixote',
		autor: 'Miguel de Cervantes'
	},
	{
		titulo: 'Cem Anos de Solidão',
		autor: 'Gabriel García Márquez'
	},
	{
		titulo: 'A Menina que Roubava Livros',
		autor: 'Markus Zusak'
	},
	{
		titulo: 'Harry Potter e a Pedra Filosofal',
		autor: 'J.K. Rowling'
	},
	{
		titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
		autor: 'J.R.R. Tolkien'
	}
];

function buscarLivros() {
	const buscaTitulo = document.getElementById('buscaTitulo').value.trim();
	const buscaAutor = document.getElementById('buscaAutor').value.trim();

	let livrosEncontrados = livros.filter(livro => {
		const titulo = livro.titulo.toLowerCase();
		const autor = livro.autor.toLowerCase();

		return (buscaTitulo === '' || titulo.includes(buscaTitulo.toLowerCase())) && (buscaAutor === '' || autor.includes(buscaAutor.toLowerCase()));
	});

	const livrosDiv = document.getElementById('livros');
	livrosDiv.innerHTML = '';

	if (livrosEncontrados.length === 0) {
		livrosDiv.innerHTML = 'Nenhum livro encontrado.';
	} else {
		livrosEncontrados.forEach(livro => {
			const livroDiv = document.createElement('div');
			livroDiv.innerHTML = `<h3>${livro.titulo}</h3><p>Autor: ${livro.autor}</p>`;
			livrosDiv.appendChild(livroDiv);
		});
	}
}

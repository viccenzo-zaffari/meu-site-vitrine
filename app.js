fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('lista-produtos');

    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <span>${produto.preco}</span>
        <p class="parcelado">${produto.parcelado}</p>
        <a href="${produto.link}" target="_blank" class="btn">
          Comprar agora
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error('Erro ao carregar produtos:', err));

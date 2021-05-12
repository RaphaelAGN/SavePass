# SavePass

**Raphael de Almeida Granha Nogueira**

O objetivo desta aplicação é permitir que o usuário possa salvar dados de suas contas, como um gerenciador de senhas.
Portanto, o usuário tem a possibilidade de adicionar categorias de contas na tela de categorias e contas com descrição e senha na tela de contas.

## 1. Interfaces

### Tela principal

Nesta tela, o usuário poderá clicar em um menu, que possuirá as opções de ir para a tela de categorias ou de senhas

### Tela de categorias

Nesta outra tela, o usuário pode adicionar, editar e deletar categorias de sites (Ex: gmail, steam, etc).
Ao clicar no ícone flutuante de + no canto inferior direito da tela, abrirá um modal para ser inserido um item na lista, onde o usuário poderá
digitar um nome de site e adicioná-lo a uma lista. 
Após isso o item inserido será incluido na lista e terá a opção de edição no ícone de lápis (Tecla enter ou click na tela para confirmar edição), ou de exclusão no ícone da lixeira.
Obs: O ícone de info seria para indicar todas as contas salvas naquela determinada categoria, mas não foi implementado.

### Tela de contas
Nesta outra tela, o usuário pode adicionar e deletar uma lista de contas de sites.
Ao clicar no ícone flutuante de + no canto inferior direito da tela, abrirá um modal, onde o usuário poderá selecionar/pesquisar uma das categorias inseridas na outra tela, digitar a descrição da conta, a senha e adicionar o item na lista. 
Após isso, o item inserido será incluido e terá no momento apenas a opção de exclusão no ícone de lixeira.

## 2. Rodar a app
Sugiro fazer o fork, realizar o download do zip e testar, pois as modais estão quebrando em telas menores e por algum motivo o visualizador e a opção de abrir em uma nova aba sumiram (imagem abaixo).

![New Page](/src/assets/images/openFullScreen.jpg)
Para abrir em uma nova aba, basta clicar no botão indicado na imagem acima, após clicar no play.

## 3. Dados do usuário

Nesta aplicação, os dados do usuário que são armazenados são senhas referentes a contas de apps ou sites.

## 4. Checklist de implementação

- A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente? **Sim**
- A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes? **Sim**
- A aplicação armazena e usa de forma relevante dados complexos do usuário? **Sim**
- A aplicação foi desenvolvida com o React? **Sim**
- A aplicação contém pelo menos dois componentes React além do componente principal? **Sim**
- O código da minha aplicação possui comentários explicando cada operação? **Sim**
- A aplicação está funcionando corretamente? **Não** - Até onde foi desenvolvido, alguns botões não estão funcionais
- A aplicação está completa? **Não**

## 5. Itens não desenvolvidos por falta de tempo

- Edição dos campos da lista na tela de contas
- Botão de info da lista de categorias
- Barra de pesquisa na tela de contas e de categorias
- Segurança adicional como um 2FA ou tela de bloqueio
- Responsividade das modais
- Algumas melhorias de layout
- Validação de dados repetidos, após o botão de edit na tela de categoria, o input estar em branco e etc

## 6. Imagens do app
![Categories List](/src/assets/images/categoriesList.jpeg)

![Accounts List](/src/assets/images/accountsList.jpeg)

![Home Page](/src/assets/images/home.jpeg)

![Select Accounts Modal](/src/assets/images/select.jpeg)

![Accounts Modal](/src/assets/images/accountsModal.jpeg)

![Categories Modal](/src/assets/images/categoriesModal.jpeg)



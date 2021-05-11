# SavePass

**Raphael de Almeida Granha Nogueira**

O objetivo desta aplicação é permitir que o usuário possa salvar dados de suas contas, como um gerenciador de senhas

## 1. Interfaces

### Tela principal

Nesta tela, o usuário poderá clicar em um menu, que possuirá as opções de ir para a tela de categorias ou de senhas

### Tela de categorias

Nesta outra tela, o usuário pode adicionar, editar e deletar categorias de sites (Ex: gmail, steam, etc).
Ao clicar no ícone flutuante de + no canto inferior direito da tela, abrirá um modal para ser inserido um item na lista, onde o usuário poderá
digitar um nome de site e adicioná-lo a uma lista. 
Após isso o item inserido será incluido na lista e terá a opção de edição no ícone de lápis (Tecla enter para confirmar edição), ou de exclusão no ícone da lixeira.
Obs: O ícone de info seria para indicar todas as contas salvas naquela determinada categoria, mas não foi implementado.

### Tela de contas
Nesta outra tela, o usuário pode adicionar e deletar contas de sites.
Ao clicar no ícone flutuante de + no canto inferior direito da tela, abrirá um modal para ser inserido um item na lista, onde o usuário poderá
selecionar uma das categorias inseridas na outra tela, digitar a descrição da conta, a senha e adicioná-la a uma lista. 
Após isso, o item inserido será incluido na lista e terá no momento apenas a opção de exclusão no ícone de lixeira.

## 2. Dados do usuário

Nesta aplicação, os dados do usuário que são armazenados são senhas referentes a contas de apps ou sites.

## 3. Checklist de implementação

- A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente? **Sim**
- A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes? **Sim**
- A aplicação armazena e usa de forma relevante dados complexos do usuário? **Sim**
- A aplicação foi desenvolvida com o React? **Sim**
- A aplicação contém pelo menos dois componentes React além do componente principal? **Sim**
- O código da minha aplicação possui comentários explicando cada operação? **Sim**
- A aplicação está funcionando corretamente? **Sim**
- A aplicação está completa? **Não**

## 4. Itens não desenvolvidos

- Edição dos campos da lista na tela de contas
- Botão de info da lista de categorias
- Barra de pesquisa na tela de contas e de categorias
- Segurança adicional como um 2FA ou tela de desbloqueio
- Responsividade das modais
- Algumas melhorias de layout
- Validação de dados repetidos, em branco e etc

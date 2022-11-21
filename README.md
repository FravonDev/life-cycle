# LifeCycle - os tão falados Hooks

# ❤ ciclo de vidas dos componentes no Angular

Assim como nós, os **components** nascem se modificam no acontecimento de eventos e depois morrem com o evento chamado destroy. 

## ♻️ life Os componentes tem 8 estágios no seu ciclo de vida

  - `ngOnInit`:
  Executa No nascimento de um componente 🐣

- `ngOnChanges()`:
 Executa quando acontece alguma mudança

- `ngDoCheck()`:
 Executa quando propriedades do componente são verificadas

**Eventos de Check**
<!-- checked => content => view -->

- `ngAfterContentInit()`: quando o **primeiro conteúdo** é iniciado
- `ngAfterContentChecked()`: Após alguma alteração, verifica o conteudo
- `ngAfterViewInit()`: depois da inicialização da view
- `ngAfterViewChecked()`: Após alguma alteração, ele verifica a **view**.

**Evento Ao Destruir**

- `ngOnDestroy()`: quando o elemento não existir mais na DOM



# 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o Visual Studio code. 
Para abrir e rodar o projeto:
- Instale as dependencias com o comando `npm install`
- Use `ng serve` para testar o server, Navegue em `http://localhost:4200/`

<hr>

# Diretivas
São formas de passar instruções para o nosso código HTML.

### Diretivas de atributo
Alteram a aparencia ou cokportamento de um elemento, componente ou outra diretiva
- NgClass - Adiciona ou remove conjunto de classes CSS
- NgStyle - Adiciona ou remove um conjunto de estilos ao HTML
- NgModel - Adiciona vinculação de dados bidirecional a um elemento de um formulário

### Diretivas estruturais
Modal ou remodelam a estrutura da DOM, adicionando ou removendo elemento na tela
- Ngif - Condicional que verifica se o modelo deve ser visualizado ou não
- NgFor - repete um elemento para cada item em uma lista
- NgSwitch - utilizado para alternar entre comportamentos alternativos


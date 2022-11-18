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

- `ngAfterContentInit()`: **Checa** se o conteudo foi inciado
- `ngAfterContentChecked()`: Depois que ele realizar o **Check** do conteúdo
- `ngAfterViewInit()`: Verifica se a **Visualização** do componente é feita
- `ngAfterViewChecked()`: Depois que ele realizar o Check do **Visualização**

**Evento Ao Destruir**

- `ngOnDestroy()`



# 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o Visual Studio code. 
Para abrir e rodar o projeto:
- Instale as dependencias com o comando `npm install`
- Use `ng serve` para testar o server, Navegue em `http://localhost:4200/`



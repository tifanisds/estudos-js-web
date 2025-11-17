# Diretivas do Alpine.js (Completo e Detalhado)

## Introdução Rápida ao Alpine.js

### O Que é Reatividade no Alpine.js?
Em essência, a reatividade é a capacidade do seu código de reagir automaticamente quando os dados mudam.

No contexto do Alpine.js, isso significa que:

Quando você altera uma variável (o Estado) que está definida dentro de um escopo x-data, o Alpine.js detecta essa mudança e atualiza instantaneamente apenas as partes do HTML que estão usando essa variável.

Você não precisa escrever código para manipular manualmente o DOM (como document.getElementById('id').innerText = newValue); o Alpine.js faz isso por você.

### O Conceito de Estado (State)
O Estado é a fonte de verdade para o seu componente. Ele é composto pelas variáveis que definem a aparência e o comportamento atual da sua interface.

- Onde é Definido: Dentro da diretiva x-data.

- Formato: Um objeto JavaScript.

```html
<div x-data="{ 
    message: 'Olá, Alpine!', 
    counter: 0,
    isOpen: false 
    }">
</div>

```

### Como o Alpine.js Alcança a Reatividade
O Alpine.js (assim como o Vue.js, no qual ele é inspirado) usa um mecanismo de "observação" (observability).

- Quando você define o objeto em x-data, o Alpine.js percorre todas as propriedades e as envolve em getters e setters (funções que são executadas quando você lê ou modifica a variável).

- Ao Ler (Getter): Quando o Alpine vê uma variável sendo usada em uma diretiva (ex: x-text="counter"), ele registra aquele elemento HTML como um "observador" dessa variável.

- Ao Escrever (Setter): Quando você executa uma expressão que muda a variável (ex: @click="counter++"), o setter é ativado, e ele notifica todos os "observadores" registrados (ou seja, o elemento com x-text="counter").

- Resultado: Somente o DOM do observador é atualizado, tornando a mudança muito rápida e eficiente.

#### Exemplo Prático de Reatividade
Observe como apenas o <span> é atualizado, sem recarregar a página ou manipular o DOM manualmente:

```js
<div x-data="{ message: 'Clique em mim!', clicks: 0 }">
    
    <button @click="clicks++; message = 'Você clicou ' + clicks + ' vezes!'">
        Atualizar Mensagem e Contador
    </button>
    
    <p>
        Mensagem Atual: <span x-text="message"></span>
    </p>

    <p>
        Total de Cliques: <span x-text="clicks"></span>
    </p>
</div>
```

## Diretivas Essenciais
### x-data (estado)
O que faz: define o estado inicial do componente Alpine. Deve ser um objeto literal ou função que retorna objeto (quando você precisa de lógica/encapsulamento).

```js
<div x-data="{ count: 0, theme: 'light' }">
  <button @click="count++">+</button>
  <p x-text="count"></p>
</div>

```

Tipos de valores

- Simples: números, strings, booleanos.

- Estruturas: objetos, arrays. Declare todas as propriedades que serão usadas para garantir reatividade previsível.

- Funções: métodos para manipular estado (defina dentro do objeto).

Padrões

- Objeto literal (rápido para casos simples):
x-data="{ open: false }"

- Factory function (bom para componentes reutilizáveis e para evitar compartilhamento de estado entre instâncias):
```js
function modal() {
  return { open: false, openModal() { this.open = true } }
}

```
e no HTML: `<div x-data="modal()">...</div>`

### x-text e x-html
- x-text: insere texto (escapado). Substitui innerText.
`<p x-text="user.name"></p>`

- x-html: insere HTML sem escapar (usa com cuidado — risco XSS).
`<div x-html="trustedHtml"></div>`

#### Diferença principal:
x-text → seguro (escapa), x-html → injeta HTML bruto.

### x-bind e :atributo
O que faz: liga um atributo HTML a uma expressão reativa.

Atalho: :attr em vez de x-bind:attr.

```html
<button :disabled="!form.valid">Enviar</button>
<img :src="user.avatarUrl">
<div :class="{ 'is-active': active, 'is-error': error }"></div>

```

#### :class com objetos e arrays

- Objeto: :class="{ 'active': isActive, 'red': isError }"

- Array: :class="[ baseClass, isActive ? 'active' : '' ]"

### x-on / @event — Eventos
x-on:click="..." (atalho @click) liga manipuladores de eventos do DOM ao estado.

`<button @click="open = !open">Toggle</button>`

#### Passar parâmetros
`<button @click="addItem('foo', 3)">Adicionar</button>`

### x-show vs x-if (quando usar cada)
#### x-show
- Oculta com CSS (display: none) mantendo elemento no DOM.

- Rápido para alternância, mantém estado interno (ex.: inputs não perdem valor).

- Ideal para toggles simples, animações (com x-transition).

`<div x-show="open">conteúdo</div>`

#### x-if
- Remove/insere elemento no DOM (usa <template x-if>).

- Bom quando a renderização é pesada ou precisa recriar o componente a cada exibição (ex.: limpar estado interno).

- Mais custoso se você alternar frequentemente (recria listeners, elementos, etc).

```html
<template x-if="open">
  <div>conteúdo completo</div>
</template>

```

### x-for — Repetição
Use x-for para renderizar listas. Sempre coloque dentro de <template> para evitar duplicação de marcação desnecessária.

```html
<template x-for="(item, idx) in items" :key="idx">
  <div x-text="item.name"></div>
</template>

```

Boas práticas

- Sempre fornecer :key (único por item) para ajudar na reatividade e evitar rerender desnecessário.

- Se iterar um array de objetos, prefira usar :key="item.id" (se existir).

- Mutação da lista (push, splice) é observada; Alpine re-renderiza eficientemente.
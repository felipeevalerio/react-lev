# REACT
    Uma biblioteca / framework desenvolvida pelo facebook para trabalhar com desenvolvimento FRONT END.


## VIRTUAL DOM 
    O que o react utiliza por debaixo dos panos, é a DOM (Árvore de Elementos) porém rodando na memória RAM do computador.

    React compara o que foi alterado, e altera o que mudou.

    Processamento mais rápido.


## JSX 
    JAVASCRIPT XML

    HTML dentro do JavaScript

**BABEL**:

    Os navegadores não entendem o código JSX / códigos com funcionalidades mais novas , então eles precisam ser transpilados(convertidos), para uma versão mais antiga de código.

    Não mudará nada na funcionalidade. 

    Com isso, o código poderá manter sua compatibilidade.

    Usaremos o ** BABEL ** para a transpilação de código. (MAIS FAMOSO)


    Transpila o código

**Webpack**

    É um Module Bundler

    O webpack terá a mesma utilidade que o babel, transpilar arquivos.

    A diferença é que enquanto o babel só transpila arquivos JavaScript, o webpack pode fazer com vários tipos de formato, como .css .scss, imagens.

### Instalação

``yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server -D``


### Babel Configuration

1. Criar arquivo `babel.config.js`.
2. Adicionar o seguinte código.

```
module.exports = {
    presets: [
        '@babel/preset-env', 
        '@babel/preset-react'
    ],
}
```

@babel/preset-env for compiling **ES2015+ syntax**
@babel/preset-react for **TypeScript**

**OBS**: Presets são configurações de plugins.

### Webpack Configuration

1. Criar arquivo `webpack.config.js`.
2. Adicionar o seguinte código.

```
module.exports = {
    entry:path.resolve(___dirname,"src","index"),
    output:{
        path: path.resolve(___dirname,"public"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
}
```

**Legenda** 
    entry => Arquivo principal da aplicação.
    output => Pra onde deve ir o arquivo transpilado.
        path => Caminho para onde deve ser gerado.
        filename => Nome do arquivo, geralmente usa-se 'bundle.js'. 

    module => Onde ficará as regras
        rules => Será um array de objetos, cada um sendo uma regra.

            test => Os arquivos que entrarão na conversão
                Recebe uma RegEx (Expressão Regular)
            
            exclude => Exclui a pasta node_modules

            use => Usa
                loader: Define o loader que será usado para a transpilação.


### React e ReactDom

ReactDom => Ferramenta que vai integrar a react juntamente com a DOM

`yarn add react react-dom`
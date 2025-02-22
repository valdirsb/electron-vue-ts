# Electron Vue TypeScript Template

Este template serve como base para projetos que utilizam Electron, Vue 3 e TypeScript. Ele fornece uma estrutura inicial para desenvolver aplicações desktop modernas com uma interface web.

## **Requisitos**

*   Node.js (versão 14 ou superior)
*   npm (geralmente incluído com o Node.js)
*   [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desativar Vetur)

## **Configuração do Projeto**

### **Instalar Dependências**

Para instalar as dependências do projeto, execute o seguinte comando no diretório raiz do projeto:

```
npm install
```

### **Executar em Ambiente de Desenvolvimento**

Para compilar e executar a aplicação em modo de desenvolvimento com recarregamento automático, execute:

```
npm run dev
```

### **Compilar e Minimizar para Produção**

Para compilar e minimizar a aplicação para produção, execute:

```
npm run build
```

### **Construir o Pacote Electron**

Para construir o pacote Electron para diferentes plataformas, você pode usar os seguintes comandos:

*   Para todas as plataformas:

```
npm run electron:build
```

*   Para Windows:

```
npm run electron:build:win
```

*   Para Linux:

```
npm run electron:build:lin
```

*   Para macOS:

```
npm run electron:build:mac
```

## **Estrutura do Projeto**

*   [`src`](src/): Contém os arquivos fonte do Vue.
*   [`src_electron`](src_electron/): Contém os arquivos fonte do Electron.
*   [`dist`](dist/): Diretório de saída para os arquivos compilados do Vue.
*   [`dist-electron`](dist-electron/): Diretório de saída para os arquivos compilados do Electron.
*   [`build`](build/): Contém os recursos de construção, como ícones.

## **Personalizar Configuração**

Veja a [Referência de Configuração do Vite](https://vite.dev/config/) para mais detalhes sobre como personalizar a configuração do Vite.

## **Licença**

© 2025 Valdir Barbosa. Todos os direitos reservados.
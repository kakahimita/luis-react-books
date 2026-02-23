# 01 - Preparação e Limpeza

Bem-vindo ao tutorial do projeto **Alura Books**!
Este guia foi feito para você acompanhar e digitar o código linha a linha.

## 1. Criando o Projeto (Se ainda não criou)

No terminal, execute:
```bash
npx create-react-app alura-books
cd alura-books
npm start
```

## 2. Limpando a Casa

O `create-react-app` vem com muitos arquivos de exemplo. Vamos limpar para começar do zero.

### Arquivo `src/App.js`
Apague todo o conteúdo e deixe apenas a estrutura básica:

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
```

### Arquivo `src/App.css`
Apague todo o conteúdo deste arquivo e salve-o em branco.

---

## 3. Próximos Passos
Agora que temos uma tela branca, vamos começar a criar nossos componentes.
Vá para o próximo arquivo: [[02-Componente-Header]]

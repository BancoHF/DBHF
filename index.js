const express = require('express');
const app = express();

// Definir a porta com a variável de ambiente PORT ou usar 3000 como fallback
const port = process.env.PORT || 3000;  // Aqui está a verificação da porta

app.get('/', (req, res) => {
  res.send('Hello, World! Seu servidor está no ar!');
});

// Inicia o servidor na porta configurada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

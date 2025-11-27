# 🔥 Guia de Configuração Firebase

Este guia explica como configurar o Firebase Authentication e Firestore para o projeto AdrianoLPO.

---

## 📋 Passo 1: Criar Projeto no Firebase Console

1. Acesse: https://console.firebase.google.com/
2. Clique em **"Adicionar projeto"** ou **"Create a project"**
3. Dê um nome ao projeto (ex: `adriano-lpo`)
4. **Desabilite** o Google Analytics (ou configure se preferir)
5. Clique em **"Criar projeto"**

---

## 🌐 Passo 2: Registrar App Web

1. No painel do projeto, clique no ícone **Web** `</>`
2. Dê um apelido ao app (ex: `adriano-site`)
3. **NÃO** marque "Firebase Hosting" (já usamos GitHub Pages)
4. Clique em **"Registrar app"**
5. **COPIE** o objeto `firebaseConfig` que aparece na tela

Exemplo do que você vai copiar:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "adriano-lpo.firebaseapp.com",
  projectId: "adriano-lpo",
  storageBucket: "adriano-lpo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

6. Abra o arquivo: `src/firebase.config.ts`
7. **COLE** suas credenciais substituindo o objeto vazio

---

## 🔐 Passo 3: Ativar Firebase Authentication

1. No menu lateral, clique em **"Authentication"**
2. Clique em **"Get started"** ou **"Começar"**
3. Na aba **"Sign-in method"**, clique em **"Email/Password"**
4. **Ative** a opção "Email/Password"
5. Clique em **"Salvar"**

### ➕ Criar Usuário Admin

1. Vá para a aba **"Users"**
2. Clique em **"Add user"**
3. Digite:
   - **Email**: `seu-email@exemplo.com`
   - **Password**: Crie uma senha forte (min. 6 caracteres)
4. Clique em **"Add user"**

**⚠️ IMPORTANTE**: Anote essas credenciais! Você vai usá-las para fazer login no site.

---

## 🗄️ Passo 4: Ativar Cloud Firestore

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Create database"**
3. Selecione **"Start in production mode"** (vamos configurar as regras depois)
4. Escolha a localização do servidor (ex: `southamerica-east1` para São Paulo)
5. Clique em **"Enable"**

### 🛡️ Configurar Regras de Segurança

1. Vá em **"Firestore Database"** → **"Rules"**
2. **SUBSTITUA** o conteúdo por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Eventos: leitura pública, escrita apenas autenticados
    match /events/{eventId} {
      allow read: if true;  // Qualquer um pode ler eventos
      allow write: if request.auth != null;  // Apenas usuários autenticados podem criar/editar/deletar
    }
  }
}
```

3. Clique em **"Publish"** ou **"Publicar"**

---

## ✅ Passo 5: Testar a Integração

### Teste Local:

1. Rode o projeto:
   ```bash
   npm run dev
   ```

2. Acesse: `http://localhost:5173`

3. No rodapé, clique em **"Área do Mentor"**

4. Faça login com as credenciais que você criou no Passo 3

5. Crie um evento de teste no painel admin

6. Verifique no Firebase Console:
   - Vá em **Firestore Database**
   - Deve aparecer a collection `events`
   - Com o documento que você criou

---

## 🚀 Deploy para GitHub Pages

Depois de configurar tudo:

```bash
npm run build
npm run deploy
```

O site estará disponível em: `https://wediaoSM.github.io/AdrianoLPO/`

---

## 🔧 Estrutura do Projeto

```
src/
├── firebase.config.ts          # ⚙️ Configuração Firebase (COLE SUAS CREDENCIAIS AQUI)
├── services/
│   ├── auth.service.ts         # 🔐 Funções de login/logout
│   └── firestore.service.ts    # 🗄️ CRUD de eventos
└── components/
    └── LoginModal.tsx          # 🔑 Modal de login

App.tsx                         # 🎯 Integração principal
```

---

## 🎯 Fluxo Completo

1. **Visitante** acessa o site → vê eventos públicos
2. **Admin** clica em "Área do Mentor" → modal de login aparece
3. **Admin** faz login com email/senha
4. **Admin** acessa o painel → pode criar/editar/deletar eventos
5. **Eventos** são salvos no Firestore automaticamente
6. **Site** carrega eventos do Firestore ao inicializar

---

## ❓ Troubleshooting

### Erro: "Firebase not initialized"
- Verifique se colou as credenciais corretas em `src/firebase.config.ts`

### Erro: "Permission denied"
- Verifique as regras do Firestore (Passo 4)
- Certifique-se de estar autenticado ao tentar salvar eventos

### Eventos não aparecem
- Verifique se há eventos na collection `events` no Firestore Console
- Abra o console do navegador (F12) e procure por erros

### Login não funciona
- Verifique se criou o usuário no Authentication (Passo 3)
- Verifique se a senha tem pelo menos 6 caracteres
- Confira se ativou "Email/Password" no Authentication

---

## 📞 Próximos Passos

Após configurar:

1. ✅ Faça login no site
2. ✅ Crie eventos de teste
3. ✅ Verifique se aparecem na página "Agenda"
4. ✅ Teste deletar um evento
5. ✅ Faça o deploy para GitHub Pages

---

**🎉 Pronto! Seu sistema está totalmente integrado com Firebase.**

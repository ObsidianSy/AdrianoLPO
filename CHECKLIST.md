# ⚡ Checklist Rápido - Firebase Setup

## 📋 Configuração (faça nesta ordem):

### 1️⃣ Firebase Console
- [ ] Criar projeto no Firebase Console
- [ ] Registrar app Web
- [ ] Copiar objeto `firebaseConfig`

### 2️⃣ Colar Credenciais
- [ ] Abrir arquivo: `src/firebase.config.ts`
- [ ] Colar suas credenciais do Firebase Console
- [ ] Salvar arquivo

### 3️⃣ Ativar Authentication
- [ ] Firebase Console → Authentication → Get Started
- [ ] Ativar método "Email/Password"
- [ ] Criar primeiro usuário admin (email + senha)
- [ ] **Anotar credenciais em local seguro**

### 4️⃣ Ativar Firestore
- [ ] Firebase Console → Firestore Database → Create
- [ ] Escolher modo "Production"
- [ ] Selecionar região (ex: southamerica-east1)

### 5️⃣ Configurar Regras de Segurança
- [ ] Firestore → Rules
- [ ] Colar as regras do `FIREBASE_SETUP.md`
- [ ] Clicar em "Publish"

### 6️⃣ Testar Localmente
- [ ] Rodar: `npm run dev`
- [ ] Abrir: http://localhost:5173
- [ ] Clicar em "Área do Mentor" (rodapé)
- [ ] Fazer login com credenciais criadas
- [ ] Criar um evento de teste
- [ ] Verificar no Firestore Console se apareceu

### 7️⃣ Deploy
- [ ] Rodar: `npm run build`
- [ ] Rodar: `npm run deploy`
- [ ] Testar no site publicado

---

## 🎯 Credenciais que você precisa ter:

1. **Firebase Config Object** (colar em `src/firebase.config.ts`)
   ```
   apiKey: "..."
   authDomain: "..."
   projectId: "..."
   storageBucket: "..."
   messagingSenderId: "..."
   appId: "..."
   ```

2. **Admin User Credentials** (usar no login do site)
   ```
   Email: ___________________
   Senha: ___________________
   ```

---

## ⚠️ Antes de fazer commit/push:

- [ ] **NÃO** commitar credenciais reais no Git
- [ ] Adicionar `.env` ao `.gitignore` (se usar variáveis de ambiente)
- [ ] Credenciais ficam apenas em `src/firebase.config.ts` (local)

---

## 📞 Problemas?

Leia o guia completo: `FIREBASE_SETUP.md`

---

**Tempo estimado: 10-15 minutos** ⏱️

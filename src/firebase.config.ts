// Firebase Configuration
// =====================================================================
// INSTRUÇÕES: Cole suas credenciais do Firebase Console aqui
// 
// 1. Acesse: https://console.firebase.google.com/
// 2. Selecione seu projeto (ou crie um novo)
// 3. Vá em: Configurações do Projeto > Geral > Seus aplicativos
// 4. Clique em "Web" e copie o objeto firebaseConfig
// 5. Cole abaixo substituindo o objeto vazio
// =====================================================================

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 👇 COLE SUAS CREDENCIAIS AQUI (substitua o objeto vazio)
const firebaseConfig = {
  apiKey: "AIzaSyDveezgRptFhOdfe_pQ51xMyTuAPnjFyy0",
  authDomain: "adrianolp-b4f83.firebaseapp.com",
  projectId: "adrianolp-b4f83",
  storageBucket: "adrianolp-b4f83.appspot.com",
  messagingSenderId: "377025754028",
  appId: "1:377025754028:web:3841da8b141379dd08c009",
  measurementId: "G-FP5STT14Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

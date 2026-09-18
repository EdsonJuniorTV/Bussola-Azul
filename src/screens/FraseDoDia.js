import React from 'react'
import { View, Text } from 'react-native';

const frases = [
  "Acredite em você, hoje será um dia incrível!",
  "Pequenos passos todos os dias levam a grandes conquistas.",
  "Sua energia atrai coisas boas. Mantenha o foco!",
  "Desafios são apenas oportunidades disfarçadas.",
  "Você é mais forte do que imagina.",
  "Você é mais do que os olhos podem ver.",
  "Seja forte o bastante para ser gentil."
];

export default function FraseDoDia() {
  // Pega uma frase diferente baseada no dia atual do ano
  const diaDoAno = Math.floor(Date.now()/86400000);
  const fraseDoDia = frases[diaDoAno % frases.length];

  return (
    <View style={styles.center}>
      <Text style={styles.quoteTitle}>Frase do Dia</Text>
      <Text style={styles.quoteText}>"{fraseDoDia}"</Text>
    </View>
  );
}
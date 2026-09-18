import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { Audio } from 'expo-av';

export default function Refri() {
  const [aberta, setAberta] = useState(false);
  const [som, setSom] = useState();
  const animacaoDeChacoalhar = useRef(new Animated.Value(0)).current;

  async function tocarSom() {
    const { som } = await Audio.Sound.createAsync(
      require('./assets/Sons/Abrindo.mp3')
    );
    setSom(som);
    await som.playAsync();
  }

  useEffect(() => {
    return som ? () => som.unloadAsync() : undefined;
  }, [som]);

  const abrirLatinha = () => {
    if (aberta) return;

    // Animação de chacoalhar
    Animated.sequence([
      Animated.timing(animacaoDeChacoalhar, { toValue: 20, duration: 50, useNativeDriver: true}),
      Animated.timing(animacaoDeChacoalhar, { toValue: -20, duration: 50, useNativeDriver: true}),
      Animated.timing(animacaoDeChacoalhar, { toValue: 20, duration: 50, useNativeDriver: true}),
      Animated.timing(animacaoDeChacoalhar, { toValue: 0, duration: 50, useNativeDriver: true})
    ]).start(() => {
      setAberta(true);
      tocarSom();
    });
  };

  return(
    <View style={styles.center}>
      <Pressable onPress={abrirLatinha}>
        <Animated.View style={{ transform: [{ translateX: animacaoDeChacoalhar }] }}>
          <Text style={{ fontSize: 100 }}>
            {aberta ? '🍾' : '🥂'}
          </Text>
        </Animated.View>
      </Pressable>
      <Text style={styles.text}>
        {aberta ? 'Ahhh! Refrescante' : 'Toque na latinha para abrir.'}
      </Text>
    </View>
  );
}
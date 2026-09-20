import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Estilos from './styles/Estilos';
import { Magnetometer } from 'expo-sensors';

export default function Bussola() {
    const [ponta, setPonta] = useState(0);

    useEffect(() => {
        // Deixei o intervalo das leituras em 50 milisegundos para haver uma maior fluidez
        Magnetometer.setUpdateInterval(50);

        const inscricao = Magnetometer.addListener((dados) => {
            let { x, y } = dados;

            // Calcula o ângulo em Radianos e converte para graus
            let angulo = Math.atan2(y, x) * (180/Math.PI);

            // Ajuste do Magnetômetro em 90 graus, devido ao modo retrato
            angulo = angulo - 90;
            if (angulo < 0) {
                angulo = angulo + 360;
            }

            // Arredonda o valor
            setPonta(Math.round(angulo));
        });

        return () => {
            inscricao.remove();
        };
    }, []);

    // Para a seta aporta para o norte ela deve ser rotacionada no sentido oposto
    const rotacao = 360 - ponta;

    return (
        <View style={Estilos.container}>
            <Text style={Estilos.title}>Bússola (Norte Magnético)</Text>
            
            {/* Container da seta */}
            <View style={{ transform: [{ rotate: `${rotacao}deg` }] }}>
                <View style={Estilos.arrowUp}/>
                <View style={Estilos.arrowBase}/>
            </View>

            <Text style={Estilos.headingText}>{ponta}°</Text>
        </View>
    );
}
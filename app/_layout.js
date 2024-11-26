import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false, // Ocultar el encabezado en la pantalla principal
                }}
            />
            <Stack.Screen
                name="components/Pokemon"
                options={{
                    headerShown: true, // Mostrar el encabezado en la pantalla "Pokemon"
                    title: 'Pokemon', // Título personalizado
                    headerTransparent: true,
                    headerBackTitle: 'Inicio', // Texto del botón de retroceso
                }}
            />
        </Stack>
    );
}

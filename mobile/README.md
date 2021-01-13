# Jornada GoStack Rocketseat

## Aulas nivel01 - Mobile

### Criando novo projeto

```shell
npx react-native init mobile
adb devices
npx react-native run-android
```

```js
import React from 'react';
import { View } from 'react-native';
export default function App() {
    return <View />;
}
```

- Instalado o Java, KVM, Android Studio e Android Tool for Linux
- Criado os diretórios e configurado as variáveis de ambiente
- Navegado até o diretório projects/nivel01/ e executado o camando npx para criar o novo projeto mobile
- Navegado ao diretório mobile e aberto o VSCode
- Removido os arquivos: ./.eslintrc.js e ./.prettierrc.js
- Conectado o smartphone com Android via usb com o modo depuração usb habilitado
- Executado o adb para permitir a conexão entre o computador e o smartphone
- Executado o npx para que o smartphone seja o emulador
- Criado o diretório: ./src
- Criado o arquivo: /src/index.js
- Deletado o arquivo: ./App.js
- Iniciado os códigos javascript no arquivo /src/index.js
- Alterado o import do App no arquivo ./index.js

### Diferenças do ReactJS

```js
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                <Text style={styles.title}>Hello GoStack</Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
});
```

- Criado a aplicação inicial no arquivo /src/index.js com um texto aplicando os estilos de cor, fonte e alinhamento

> - Os componentes do react-native não possuem valor semântico (significado)
> - Os componentes do react-native não possuem estilização própria
> - Todos os componentes do react-native por padrão possuem "display: flex"
>
>   - View: div, footer, header, main, aside, section
>   - Text: p, span, strong, h1, h2, h3

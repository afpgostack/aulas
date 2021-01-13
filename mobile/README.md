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

### Listando projetos da API

```shell
yarn add axios
```

```js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';
export default function App() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <SafeAreaView style={styles.container}>
                <FlatList    
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#FFF',
        fontSize: 32,
    },
});
```

- Iniciado o backend
- Adicionado o pacote do axios ao projeto mobile
- Criado o diretório: /src/services
- Criado o arquivo: /src/services/api.js
- Importado o axios no arquivo api.js e criado uma instância para se conectar ao backend
- Importado no /src/index.js o arquivo api.js
- Importado no /src/index.js o useState para armazenar os dados em lista e o useEffect para fazer a chamada à API
- Criado as variáveis projects e setProjects para o array de estado
- Utilizado a função useEffect com o método get na api para buscar os dados no backend
- Importado os componentes SafeAreaView e FlatList e utilizados para exibir os dados em tela com os estilos

> - iOS com emulador: localhost
> - iOS com físico: IP da máquina
> - Android com emulador: localhost (adb reverse)
> - Android com Android Studio: 10.0.2.2
> - Android com Genymotion: 10.0.3.2
> - Android com físico: IP da máquina

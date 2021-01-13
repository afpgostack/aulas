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

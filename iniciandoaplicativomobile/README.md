# Jornada GoStack Rocketseat

## Aulas nivel03 - Iniciando aplicativo mobile

<p align="center">
  <a href="#configurando-estrutura">Configurando estrutura</a>
</p>

### Configurando estrutura

```shell
cd ~/projects/aulas/nivel03/
npx react-native init iniciandoaplicativomobile --template react-native-template-typescript
code iniciandoaplicativomobile
sudo adb devices
yarn start
yarn android
mkdir -p ./src/
touch ./src/App.tsx
rm -f ./App.tsx ./.eslintrc.js ./.prettierrc.js
```

```tsx
import React from 'react';
import {View} from 'react-native';
const App: React.FC = () => <View />;
export default App;
```

```ts
//...
import App from './src/App';
//...
```

- ./src/App.tsx
  - Importado a biblioteca react
  - Importado o componente View do react-native
  - Criado a função de componente App exibindo o componente View
  - Exportado a função de componente App

- ./index.js
  - Alterado o import do App para o diretório ./src

- Removido os arquivos App.tsx, .eslintrc.js e .prettierrc.js da raíz do projeto

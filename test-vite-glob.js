import { build } from 'vite';
build({
  logLevel: 'silent',
  build: { write: false }
}).then(() => console.log('build OK')).catch(e => console.error(e));

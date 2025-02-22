import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // Aqui você pode expor funções para o front-end
});
import axios from 'axios';

/*
Rodar com o IPV4 (ipconfig para ver qual servidor)
no cmd - Projetos/receitas/>json-server --watch -d 180 --host 10.0.0.234 db.json
*/

const api = axios.create({
    baseURL: 'http://10.0.0.234:3000'
})

export default api;
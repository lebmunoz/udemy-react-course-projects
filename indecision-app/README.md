Para subir a aplicação e live reload, rodar os seguintes comandos no terminal:

Subir o live server na pasta public:
```
live-server public/
```

Rodar o babel para compilar o arquivo do app:
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
Nota: inserir o caminho do arquivo de trabalho logo após "babel" (exemplo: "src/app.js")
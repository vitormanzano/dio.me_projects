# Nome do aplicativo

# Podcast Menager

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episídios podcasts separador por categoria


### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
    - [Saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome do podcast

## Como

### Feature
 Listar os episódios podcasts em sessões de categorias

### Como vou implementar

    GET: Retorna lista de episódios

    Vou retornar em uma api rest (json)
    o nome podcast, nome do episódio, imagem de capa, link, category

    ```js
    [
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30"
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "esporte", "bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I"
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["esporte", "corrida"]
    }
    ]
    
    ```







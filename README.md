#  Stack MEAN 🚀 MongoDB Express.JS Angular Node.JS 



Node.JS v18.12.1

La aplicación es la parte del BackEnd de una aplicaion strore con Pila MEAN

#### Normar de uso 

Recuerda  que es necesario tener instado NodeJS y decasrgar los repositorios

 `npm install `

El ejercicio de ejecuta en el archivo app.js:

 `node app`

#### Ejemplo GET de JavaScript Fetch
 
```
async function get_products() {
    let response = await fetch("http://localhost:3000/api/get_products", {
        method: "GET",
    });
let data = await response.json();
console.log(data);
}

get_products()
```


#### Ejemplo PHP de Laravel Http
```
<?php
 
use Illuminate\Support\Facades\Http;
 
$response = Http::withHeaders([ 
    ]) 
    ->get('http://localhost:3000/api/get_products'); 

echo $response->body();
```


## API Reference

#### Get all Products

```http
  GET /api/get_products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **NO Required**. Your API key |

#### Get Product

```http
  GET /api/get_product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Delete Product
```http
  DELETE /api/delete_product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



### INTERFACE TYPE SCRIPT
```
export interface Main {
    name:        string;
    price:       number;
    description: string;
    _id:         string;
    reg_time:    Date;
}
```



## Documentation


 - [Node.js](https://nodejs.org/es/)
- [Express](http://expressjs.com/)
- [Manual Node (Castellano).pdf](https://riptutorial.com/Download/node-js-es.pdf)

## Las solicitudes de extracción y los problemas son bienvenidos

Si encuentras algo que se pueda mejorar, envíe una solicitud de extracción. 

![:octocat:](https://github.githubassets.com/images/icons/emoji/octocat.png ":octocat:") [d-maza](https://github.com/d-maza)
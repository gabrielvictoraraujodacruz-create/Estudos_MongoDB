# Revisão pro Skill Check (CRUD Operations)

Refiz a prova do badge em 29/10/2026 pra tirar o certificado com o meu nome completo. Aproveitei pra anotar o que eu mais confundia.

## Inserir

```js
db.accounts.insertOne({ account_id: 111333, limit: 12000, products: ["Commodity", "Brokerage"], last_updated: new Date() })
db.accounts.insertMany([{ account_id: 1 }, { account_id: 2 }])
```

- `insertOne` = um documento, `insertMany` = uma lista `[ ]`
- a coleção vem depois do `db.` -> `db.students.insertOne(...)`. O banco eu escolho antes com `use school`, ele nao entra no comando
- se a coleção nao existe, o MongoDB cria na hora

## Buscar

- `find({ category: "electronics" })` é a mesma coisa que `find({ category: { $eq: "electronics" } })`
- `$lt` menor que, `$lte` menor ou igual, `$gt` maior, `$gte` maior ou igual, `$ne` diferente
- dá pra misturar: `$and` com um `$or` dentro

```js
db.products.find({
  $and: [
    { $or: [{ inventory: 0 }, { status: "archived" }] },
    { price: { $lte: 500 } }
  ]
})
// estoque 0 OU arquivado, E preço até 500
```

## Arrays (o que mais me pegou)

```js
db.movies.find({ categories: ["Action", "Comedy"] })
```

Isso NAO é "contém Action e Comedy". É array **igualzinho**, mesma ordem e mais nada. `["Comedy", "Action"]` não volta e `["Action", "Comedy", "Drama"]` também não.

Pra "contém os dois, em qualquer ordem":

```js
db.movies.find({ categories: { $all: ["Action", "Comedy"] } })
```

E pra "contém pelo menos esse": `find({ categories: "Action" })`

## Atualizar

- `$set` troca o valor de um campo -> `updateOne({ _id: ... }, { $set: { status: "shipped" } })`
- `$push` coloca item num array, `$addToSet` coloca sem repetir, `$pull` tira do array
- `$inc` soma

## Apagar

- `deleteOne` apaga só o primeiro que bater
- `deleteMany` apaga todos que baterem -> `db.users.deleteMany({ status: "inactive" })`
- `drop()` apaga a coleção inteira (cuidado)

## Ordenar, limitar, contar, projeção

```js
db.scores.find().sort({ score: -1 }).limit(5)   // top 5, do maior pro menor
db.orders.countDocuments({ status: "shipped" })  // contar
db.employees.find({ status: "active" }, { name: 1, department: 1, _id: 0 })
```

- `sort`: `1` crescente, `-1` decrescente
- `limit(5)` recebe só o número
- projeção: `1` mostra, `0` esconde. Nao pode misturar `1` e `0` no mesmo find, a única exceção é o `_id: 0`

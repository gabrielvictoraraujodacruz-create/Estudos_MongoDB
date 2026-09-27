# SQL x MongoDB

No MongoDB não tem tabela nem esquema fixo. Os dados ficam em **documentos** (tipo um JSON, salvo em BSON) dentro de **coleções**.

| SQL | MongoDB |
|---|---|
| database | database |
| tabela | coleção (collection) |
| linha | documento |
| coluna | campo (field) |
| índice | índice |
| JOIN | `$lookup` ou documento embutido |
| chave primária | `_id` (criado sozinho) |
| GROUP BY | aggregation pipeline |

## Programas

- `mongod` → o servidor
- `mongosh` → o terminal pra mandar comando (tipo o `mysql` no terminal)

## Criar e alterar

A coleção nasce sozinha no primeiro insert, não precisa de `CREATE TABLE`:

```js
db.people.insertOne({ user_id: "abc123", age: 55, status: "A" })
db.createCollection("people") // se quiser criar na mão
```

Não existe `ALTER TABLE`. Pra adicionar ou tirar campo, é no documento:

```js
db.people.updateMany({}, { $set: { join_date: new Date() } })  // ADD COLUMN
db.people.updateMany({}, { $unset: { join_date: "" } })         // DROP COLUMN
db.people.drop()                                                // DROP TABLE
```

## Índices

```js
db.people.createIndex({ user_id: 1 })          // 1 = crescente
db.people.createIndex({ user_id: 1, age: -1 }) // composto, -1 = decrescente
```

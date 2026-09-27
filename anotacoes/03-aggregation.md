# Aggregation pipeline

É o jeito de fazer GROUP BY, SUM, JOIN etc. Os dados passam por **etapas** em sequência, cada uma mexe no resultado da anterior.

| SQL | MongoDB |
|---|---|
| WHERE | `$match` |
| GROUP BY | `$group` |
| HAVING | `$match` (depois do `$group`) |
| SELECT | `$project` |
| ORDER BY | `$sort` |
| LIMIT | `$limit` |
| SUM() | `$sum` |
| COUNT() | `$sum: 1` ou `$sortByCount` |
| JOIN | `$lookup` |
| SELECT INTO | `$out` |
| MERGE INTO | `$merge` |
| UNION ALL | `$unionWith` |

## Exemplos

Coleção `orders`, onde cada pedido já tem os itens dentro dele (no SQL seriam 2 tabelas):

```js
{ cust_id: "abc123", status: "A", price: 50,
  items: [{ sku: "xxx", qty: 25, price: 1 }] }
```

```js
// SELECT COUNT(*) FROM orders
db.orders.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }])

// SELECT cust_id, SUM(price) AS total FROM orders GROUP BY cust_id ORDER BY total
db.orders.aggregate([
  { $group: { _id: "$cust_id", total: { $sum: "$price" } } },
  { $sort: { total: 1 } }
])

// SELECT DISTINCT(status) FROM orders
db.orders.aggregate([{ $group: { _id: "$status" } }])
```

O `$` na frente (`"$price"`) quer dizer "o valor desse campo".

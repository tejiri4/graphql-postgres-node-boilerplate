# graphql-postgres-node-boilerplate
A template that shows a set up for graphql with node and express.


# Tech stack

- Node
- Postgres
- Sequelize
- Graphql

# Queries

```
query heroes {
  heroes {
    name,
    powers
  }
}

mutation addHero {
  addHero(name: "Thor", powers: ["thunder"]) {
    name
  }
}
`
```
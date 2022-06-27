db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $set:
    {
      ultimaModificacao: new Date().toISOString(),
    },
  },
);
db.produtos.find(
  {
    ultimaModificacao: {
      $exists: true,
    },
  },
  {
    _id: 0,
    nome: 1,
  },
);
db.produtos.find(
  {
    valoresNutricionais: {
      $elemMatch:
      {
        quantidade: { $lt: 500 },
        tipo: "calorias",
      },
    },
  },
  {
    nome: 1,
    _id: 0,
  },
);

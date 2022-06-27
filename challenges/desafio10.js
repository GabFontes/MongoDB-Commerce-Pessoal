db.produtos.find(
  {
    valoresNutricionais:
    {
      $elemMatch: {
        $and: [
          { percentual: { $gte: 30 } },
          { percentual: { $lte: 40 } },
        ],
        tipo: "proteínas",
      },
    },
  },
  {
    nome: 1,
    _id: 0,
  },
);

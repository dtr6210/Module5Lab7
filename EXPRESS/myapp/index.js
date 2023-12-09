const express = require("express");
const app = express();
const port = 3000;

const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/testRoutes", testRoutes);

app.use("/calculator", calculatorRoutes);

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`);
});

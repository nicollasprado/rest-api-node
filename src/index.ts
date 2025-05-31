import "dotenv/config";
import { app } from "./server/server";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`App inicializado na porta ${PORT}`);
});

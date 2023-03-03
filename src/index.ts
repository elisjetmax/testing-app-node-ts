import express, { Response, Request } from "express";
import GeneralClass from "./class/general";

const app = express();
const PORT = 3000;

app.get("/payment/:hours", (req: Request, res: Response) => {
  const hours: number = Number(req.params.hours);
  if (Number.isNaN(hours))
    return res.status(400).send({ error: "Invalid hours parameter" });
  const payment: number = GeneralClass.calculatePaymentPerDay(hours);
  res.send({ payment });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

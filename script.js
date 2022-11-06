import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const listaTweets = [
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
];

const listaUsers = [];

app.listen(5000, () => {
  console.log("Server running in port: 5000");
});

app.get("/tweets", (req, res) => {
  console.log(req.params);
  res.send(listaTweets.slice(-10));
});

app.post("/tweets", (req, res) => {
  console.log(req.body);

  const { tweet, username } = req.body;

  if (tweet == "") {
    res.send("Digite algo para ser publicado");
    return;
  }

  const novoTweet = {
    username,
    tweet,
  };

  listaTweets.push(novoTweet);
  res.send("Ok");
});

app.post("/sign-up", (req, res) => {
  console.log(req.body);

  const userLogin = req.body;
  listaUsers.push(userLogin);
  res.send("Ok");
});

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
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
  {
    username: "Usuario1",
    tweet: "eu amo o hub",
  },
];

const listaUsers = [
  {
    username: "bob1",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
  {
    username: "bob2",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

app.listen(5000, () => {
  console.log("Server running in port: 5000");
});

app.get("/tweets", (req, res) => {
  console.log(req.params);
  res.send(listaTweets);
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

import express from "express";
const app = express();

app.use(express.json());

let data = [
  { id: 1, username: "qwert", password: "qwer123" },
  { id: 2, username: "ramesh", password: "1234" },
];

// routes
app.get("/", (req, res) => {
  res.json({ message: "home route" });
});

app.get("/user", (req, res) => {
  res.json({ data });
});

app.post("/user", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "required" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "weak password" });
  }

  const newUser = {
    id: data.length + 1,
    username,
    password,
  };

  data.push(newUser);

  res.json({ message: "user created", newUser });
});

app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.findIndex(u => u.id === id);

  if (idx === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  data[idx] = { ...data[idx], ...req.body };
  res.json({ message: "user updated", user: data[idx] });
});

app.delete("/user/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const idx = data.findIndex(u => u.id === id);

//   if (idx === -1) {
//     return res.status(404).json({ message: "user not found" });
//   }

//   const deleted = data.splice(idx, 1);
//   res.json({ message: "user deleted", user: deleted[0] });
const id = parseInt(req.params.id);
 const idx = data.find(u => u.id === id);
if(idx==-1){
    return res.status(404).json({message:"user not found"});

}
 data = data.filter(u => u.id !== id);
res.json({message:"user deleted",user:data[0]});

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

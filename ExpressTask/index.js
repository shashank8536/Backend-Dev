const express = require('express');
const app = express();

app.get("/users/:id/profile", (req, res) => {
    const userId = parseInt(req.params.id);
    const selectedTab = req.query.tab;
    const language = req.query.lang;

    let profile = {
        userId: userId,
        selectedTab: selectedTab,
        language: language
    };

    res.json(profile);   
});

app.listen(3000, () => {
    console.log("Server is running");
});

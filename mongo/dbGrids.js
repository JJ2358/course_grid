db.accounts.drop();

db.accounts.insert([
    {
        username: "exampleUser",
        password: "1",
        email: "example@example.com",
        createdAt: new Date()
    }
]);
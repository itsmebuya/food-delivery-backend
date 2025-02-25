if (!email && !password) {
    return res.status(400).send('Email and password invalid');
} else if (!email) {
    return res.status(400).send('Email invalid');
} else if (!password) {
    return res.status(400).send('Password invalid');
}
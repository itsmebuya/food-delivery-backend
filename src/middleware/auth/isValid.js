export const isValid = (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email && !password) {
            return res.status(400).send('Email and password invalid');
        } else if (!email) {
            return res.status(400).send('Email invalid');
        } else if (!password) {
            return res.status(400).send('Password invalid');
        } else {
            next();
        }
    } catch (error) {
        res.send("Server error (is valid)").status(500)
        console.log(error);
    }
}
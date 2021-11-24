
exports.login = async (req, res, next) => {

    if (req.body.password !== "123456") {
        return res.status(401).json({ result: false, message: "Invalid password" });
    }
    return res.status(201).json({ result: true, message: "Password ok" });

};



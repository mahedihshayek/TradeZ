require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

const verifyToken = require("./middleware/auth");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UsersModel } = require("./model/UsersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/allHoldings', verifyToken, async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.send(allHoldings);
});

app.get('/allPositions', verifyToken, async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.send(allPositions);
});

app.get('/allUsers', async (req, res) => {
    let allUsers = await UsersModel.find({});
    res.send(allUsers);
});


app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();
    res.send("Order saved!");
});


app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new UsersModel({
            name,
            email,
            password: hashPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup successful"
        });

    } catch (error) {
        res.status(500).json({
            message: "Signup failed",
            error: error.message
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        const userMatching = await bcrypt.compare(password, user.password);

        if (!userMatching) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token: token,
            user: {
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB connected!");
});


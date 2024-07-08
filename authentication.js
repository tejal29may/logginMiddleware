// const express=require("express")
// // const app=express();




// // app.listen(8080,()=>{
// //     console.log("your app is running at 8080 port");
// // })



// const app = express();
// const port = 8000;
// app.use(express.json())


// const userData = [];


// const authorizationMiddleware = (req, res, next) => {
//     const { email, password } = req.body;
//     const userExist = userData.find((user) => user.email === email && user.password === password)

//     if (userExist) {
//         next()
//     } else {
//         res.status(400).json({
//             success: false,
//             message: 'invalid details'
//         })
//     }
// }


// app.post('/api/v1/signUp', (req, res) => {

//     const { email, password } = req.body;
//     // Check if user already exists
//     const userExist = userData.find((user) => user.email === email && user.password === password);
//     if (userExist) {
//         return res.status(409).json({
//             success: false,
//             message: 'User already exists'
//         });
//     }

//     userData.push({ email, password });
//     console.log("userData", userData);
//     res.status(201).json({
//         success: true,
//         message: 'User created successfully'
//     });
// })



// let products = [
//     {
//         id: 1,
//         name: 'ismail',
//         data: 'mobile'
//     },
//     {
//         id: 2,
//         name: 'skt',
//         data: 'mobile'
//     },
//     {
//         id: 3,
//         name: 'rashid',
//         data: 'mobile'
//     }
// ]


// app.get('/api/v1/signin', authorizationMiddleware, (req, res) => {
//     let data = [...products];
//     try {
//         res.json({
//             success: true,
//             message: 'user loged in successfully',
//             userJsonData: data
//         })
//     } catch (err) {
//         res.status(400).json({
//             success: false,
//             message: 'user data not exists'
//         })
//     }
// })

// app.use('/*', (req, res) => {
//     res.status(404).json({
//         success: false,
//         message: 'path not found'
//     })
// })

// app.listen(port, (req,res) => { console.log(`server is running port ${port}`); })



const express = require("express");

const app = express();
const port = 8000;
app.use(express.json());

const userData = [];

const authorizationMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    const userExist = userData.find((user) => user.email === email && user.password === password);

    if (userExist) {
        next();
    } else {
        res.status(400).json({
            success: false,
            message: 'Invalid details'
        });
    }
};

app.post('/api/v1/signUp', (req, res) => {
    const { email, password } = req.body;
    // Check if user already exists
    const userExist = userData.find((user) => user.email === email && user.password === password);
    if (userExist) {
        return res.status(409).json({
            success: false,
            message: 'User already exists'
        });
    }

    userData.push({ email, password });
    console.log("userData", userData);
    res.status(201).json({
        success: true,
        message: 'User created successfully'
    });
});

let products = [
    {
        id: 1,
        name: 'ismail',
        data: 'mobile'
    },
    {
        id: 2,
        name: 'skt',
        data: 'mobile'
    },
    {
        id: 3,
        name: 'rashid',
        data: 'mobile'
    }
];

app.post('/api/v1/signin', authorizationMiddleware, (req, res) => {
    let data = [...products];
    try {
        res.json({
            success: true,
            message: 'User logged in successfully',
            userJsonData: data
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'User data does not exist'
        });
    }
});

app.use('/*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Path not found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

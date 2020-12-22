const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// Item Model
const userModel = require('../../models/user');

// @route   POST api/users/reg
// @desc    Register new user
// @access  Public
router.post('/reg', (req, res) => {
    const {name, email, password } = req.body;
    
    //validation
    if (!name || !email || !password ) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    userModel.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new userModel({
                name, email, password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token ) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                            
                        })
                    
                })
            })
        })
});

// @route   POST api/users/auth
// @desc    Authenticate user
// @access  Public

router.post('/auth', (req, res) => {
    const { email, password } = req.body;
    
    //validation
    if ( !email || !password ) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    userModel.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User not found' });

            // validate password
            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if ( !isMatch ) return res.status(400).json({ msg: "Invalid credentials"});
                    
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token ) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
            
        })
});

// @route   GET api/users/get
// @desc    Get user data
// @access  Private
router.get('/get', auth, (req, res) => {
    userModel.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;
const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

  // index route loads home.html
  router.get("/", function(req, res) {
      res.render('signup', {js: ['signup.js']});
  });

  router.get("/login", function(req, res) {
      res.render('login', {js: ['login.js']});
  });

  router.get("/home",  withAuth, (req, res) =>{
    res.render('home', {js: ['home.js'],loggedIn: true });
  });


  // browse route loads browse.html
  router.get("/browse",  withAuth,
  function(req, res) {
    res.render('browse', {js: ['books.js'],loggedIn: true });
  });
  router.get('/search/', (req, res) => {
   
    res.render('search', {js: ['search.js'],loggedIn: true });
  });
  // cart route loads cart.html
  router.get("/cart",  withAuth,
  function(req, res) {
    res.render('cart', {js: ['shoppingcarts.js'],loggedIn: true });
  });

  module.exports = router;
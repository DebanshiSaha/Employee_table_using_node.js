const mongoose = require('mongoose');
const userModel = require('../../models/user-model');
const User = new userModel();

class userController {

    async redirectHome(req, res) {
        try {
            res.redirect("/home");

        } catch (err) {
            throw err;
        }
    }

    async userList(req,res){
        try {
            let userList = await userModel.find({
                "isDeleted": false
            });

            console.log(userList, '==userList ==');

            await res.render("user/home", {
                page_title: "User List",
                page_name: "user-list",
                user_data: userList
            });
        } catch (error) {

            throw error;
            
        }
    }

    async userDelete(req,res){
        try {
            
            const user_item = req.params.userid;

            let userData = await userModel.findByIdAndUpdate({
                "_id": user_item
            }, {
                "isDeleted": true
            });

            await res.redirect("/home");
        } catch (err) {
            throw err;
            
        }
    }

    async userSignup(req,res){
        try {

            
            console.log(req.body, '**req.body**');



            let userData = await new userModel(req.body);
            let saveUser = await userData.save();

            console.log(saveUser, '==saveUser==');

            if (saveUser != null) {
                res.redirect("/home");
            }
        } catch (err) {

            throw err;
            
        }
    }
};

module.exports = new userController();
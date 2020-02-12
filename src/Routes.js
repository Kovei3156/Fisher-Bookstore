import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./home/home";
<<<<<<< HEAD
=======
import books from "./books/books"
>>>>>>> 85100e3114585d769d22e6835abaaa20ee1cecb1

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component = {Home}/>
<<<<<<< HEAD
=======
            <Route path="/books" exact component = {books}/>
>>>>>>> 85100e3114585d769d22e6835abaaa20ee1cecb1
        </Switch>
    );
}
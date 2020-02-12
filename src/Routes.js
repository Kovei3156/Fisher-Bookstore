import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./home/home";
import books from "./books/books"

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/books" exact component = {books}/>
        </Switch>
    );
}
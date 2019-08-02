import React from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import MainPage from "./MainPage.js";
import Admin from "./Admin.js";
import MovieDelete from "./MovieDelete.js";
import DirectorDelete from "./DirectorDelete.js";
import UserDelete from "./UserDelete.js";
import UserUpdate from "./UserUpdate.js";
import MovieUpdate from "./MovieUpdate.js";
import DirectorUpdate from "./DirectorUpdate.js";
import UserAdd from "./UserAdd.js";
import MovieAdd from "./MovieAdd.js";
import DirectorAdd from "./DirectorAdd.js";
import UserSearch from "./UserSearch.js";
import MovieSearch from "./MovieSearch.js";
import DirectorSearch from "./DirectorSearch.js";
import MovieDisplay from "./MovieDisplay.js";
import User from "./User.js";
import MovieList from "./MovieList.js";
import Favourite from "./Favourite.js";
import Watched from "./Watched.js";
import MovieSearche from "./MovieSearche.js";

const AppRouter = () => (
    <BrowserRouter>
        <Route exact path = "/displayMovies" component={MovieDisplay}/>
        <Route exact path = "/searchUsers" component={UserSearch}/>
        <Route exact path = "/searchDirectors" component={DirectorSearch}/>
        <Route exact path = "/searchMovies" component={MovieSearch}/>
        <Route exact path = "/addMovie" component={MovieAdd}/>
        <Route exact path = "/addDirector" component={DirectorAdd}/>
        <Route exact path = "/addUser" component={UserAdd}/>
        <Route exact path = "/updateDirector" component={DirectorUpdate}/>
        <Route exact path = "/updateMovie" component={MovieUpdate}/>
        <Route exact path = "/updateUser" component={UserUpdate}/>
        <Route exact path = "/deleteUser" component={UserDelete}/>
        <Route exact path = "/deleteDirector" component={DirectorDelete}/>
        <Route exact path = "/deleteMovie" component={MovieDelete}/>
        <Route exact path = "/admin" component={Admin}/>
        <Route exact path = "/" component={MainPage}/>
        <Route exact path = "/listMovies" component={MovieList}/>
        <Route exact path = "/searchMovie" component={MovieSearche}/>
        <Route exact path = "/addFavouriteList" component={Favourite}/>
        <Route exact path = "/addWatchedList" component={Watched}/>
        <Route exact path = "/user" component={User}/>

    </BrowserRouter>
);
export default AppRouter;
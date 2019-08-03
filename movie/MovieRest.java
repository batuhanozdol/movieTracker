package movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/")
public class MovieRest {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private WebService webService;


    // sistemin ana admini burada eklenir
    @RequestMapping(value = "/admin", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser() throws Exception {
        User user = new User();
        user.setPassword("admin");
        user.setType("admin");
        user.setUsername("admin");
        return ResponseEntity.ok(userDetailsService.save(user));
    }


    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        if (webService.findUs(authenticationRequest.getUsername()).equals("user")) {
            final String token = jwtTokenUtil.generateToken(userDetails);
            return ResponseEntity.ok(new JwtResponse(token));

        }
        else{
            final String token = jwtTokenUtil.generateToken(userDetails);
            return ResponseEntity.ok(new JwtResponse(token));

        }
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

    @PostMapping("/addUser")
    public ResponseEntity addMovie(@RequestBody User user) {
        if (webService.addUser(user)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap( "response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST );
    }

    @PostMapping("/addMovie")
    public ResponseEntity addMovie(@RequestBody Movie movie) {
        if (webService.addMovie(movie)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap( "response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST );
    }
    //
    @PostMapping("/addDirector")
    public ResponseEntity add(@RequestBody Director director) {
        if (webService.addDirector(director)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(Collections.singletonMap("response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST);
    }
    //
    @DeleteMapping("/deleteUser")
    public ResponseEntity deleteUser(@RequestBody User user) {
        if (webService.deleteUser(user)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap( "response", new Error("Not deleted").getMessage()), HttpStatus.BAD_REQUEST );
    }
    //
    @DeleteMapping("/deleteMovie")
    public ResponseEntity deleteMovie(@RequestBody Movie name) {
        if (webService.deleteMovie(name)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap( "response", new Error("Not deleted").getMessage()), HttpStatus.BAD_REQUEST );
    }
    //
    @GetMapping("/findUsers")
    public List<User> findUser() {
        return webService.findUsers();
    }
    //
    @GetMapping("/findMovies")
    public List<Movie> findMovie() {
        return webService.findMovies();
    }
    //
    @GetMapping("/findDirectors")
    public List<Director> findDirector() {
        return webService.findDirectors();
    }
    //
    @DeleteMapping("/deleteDirector")
    public ResponseEntity deleteDirector(@RequestBody Director name) {
        if (webService.deleteDirector(name)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(Collections.singletonMap("response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST);
    }
    //
    @PutMapping("/updateUser")
    public ResponseEntity updateUser(@RequestBody User user) {
        if (webService.updateUser(user)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(Collections.singletonMap("response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST);
    }
    //
    @PutMapping("/updateMovie")
    public ResponseEntity updateMovie(@RequestBody Movie movie) {
        if (webService.updateMovie(movie)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(Collections.singletonMap("response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST);
    }
    //
    @PutMapping("/updateDirector")
    public ResponseEntity updateDirector(@RequestBody Director director) {
        if (webService.updateDirector(director)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap("response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST);
    }
    //
    @PostMapping("/displayMovies")
    public List<Movie> displayDirectorMovies(@RequestBody Director directorid) {
        return webService.displayMovie(directorid);
    }

    @PostMapping("/searchMovie")
    public List<Movie> searchMovie(@RequestBody Movie name) {
        return webService.searchMovie(name);
    }
    //
    @PostMapping("/searchMovies")
    public List<Movie> searchMovies(@RequestBody Movie name) {
        return webService.searchMovies(name);
    }
//
    @PostMapping("/searchUsers")
    public List<User> searchUsers(@RequestBody User name) {
        return webService.searchUsers(name);
    }
//
    @PostMapping("/searchDirectors")
    public List<Director> searchDirectors(@RequestBody Director name) {
        return webService.searchDirectors(name);
    }

    @GetMapping("/listMovies")
    public List<Movie> listMovies() {
        return webService.listMovies();
    }

    @GetMapping("/watch")
    public List<WatchedList> watch(){
        return webService.watchs();
    }
    @GetMapping("/fav")
    public List<FavoriteList> watche(){
        return webService.watchz();
    }
    @PostMapping("/addWatchedList/{name}")
    public ResponseEntity addWatchmovie(@PathVariable String name,@RequestBody Movie movieid) {
        if (webService.addWatched(name,movieid)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap( "response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST );
    }

    @PostMapping("/addFavouriteList/{name}")
    public ResponseEntity addFavourite(@PathVariable String name,@RequestBody Movie movieid) {
        if ( webService.addFav(name,movieid)) {
            return new ResponseEntity<>( HttpStatus.OK );
        }
        return new ResponseEntity<>(Collections.singletonMap( "response", new Error("Not added").getMessage()), HttpStatus.BAD_REQUEST );
    }
}

package movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class WebService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private MovieRepo movieRepo;
    @Autowired
    private DirectorRepo directorRepo;
    @Autowired
    private FavRepo favRepo;
    @Autowired
    private WatchedRepo watchedRepo;

    public boolean addUser(User user){
        if ( userRepo.findByUsername( user.getUsername()) == null ) {
            userRepo.save(user);
            return true;
        }
        return false;
    }
    public boolean addMovie(Movie movie){
            Director director = directorRepo.findById(movie.getDirectorid()).get();
            if ( director != null) {
                movieRepo.save(movie);
                return true;
            }
            return false;

    }
    public boolean addDirector(Director director) {
            directorRepo.save(director);
            return true;
    }
    public boolean deleteUser(User userid) {
        User user = userRepo.findByUsername(userid.getUsername());
        if ( user ==null){
            return false;
        }
        else {
            userRepo.delete(user);
            return true;
        }
    }
    public boolean deleteMovie(Movie movieid) {
        List<Movie> liste = new ArrayList<>();
        liste = movieRepo.findByName(movieid.getName());
        if ( liste ==null){
            return false;
        }
        else {
            for (Movie mov:liste) {
                if(mov.getName().equals(movieid.getName())) {
                    movieRepo.delete(mov);
                    return true;
                }
            }
            return false;
        }
    }
    public boolean deleteDirector(Director directorid) {
        Director director = directorRepo.findByName(directorid.getName());
        if ( director ==null){
            return false;
        }
        else {
            directorRepo.delete(director);
            return true;
        }
    }
    public boolean updateUser(User user){
        User temp = userRepo.findByUsername(user.getUsername());
        if (temp.getId() != user.getId()) {
            if (temp == null) {
                return false;
            }
            else {
                temp.setPassword(user.getPassword());
                temp.setType(user.getType());
                temp.setUsername(user.getUsername());
                userRepo.save(temp);
                return true;
            }
        }
        else {
            return false;
        }
    }
    public boolean updateMovie(Movie movie){
        Movie temp=null;
        for ( Movie mov:movieRepo.findAll()){
            if(mov.getName().equals(movie.getName())){
                temp=mov;
            }
        }
        if (temp.getName() != movie.getName()) {
            if (temp == null) {
                return false;
            }
            else {
                temp.setDirectorid(movie.getDirectorid());
                temp.setDuration(movie.getDuration()) ;
                temp.setGenre(movie.getGenre());
                temp.setImdbRating(movie.getImdbRating());
                temp.setReleaseDate(movie.getReleaseDate());
                movieRepo.save(temp);
                return true;
            }
        }
        else {
            return false;
        }
    }

    public boolean updateDirector(Director director){
        Director temp = directorRepo.findByName(director.getName());
        if (temp.getName() != director.getName()) {
            if (temp == null) {
                return false;
            }
            else {
                temp.setBirthDate(director.getBirthDate());
                temp.setBirthPlace(director.getBirthPlace());
                temp.setSurname(director.getSurname());
                directorRepo.save(temp);
                return true;
            }
        }
        else {
            return false;
        }
    }
    @Secured("admin")
    public List<Movie> displayMovie(Director id) {
        Director director = directorRepo.findByName(id.getName());
        List <Movie> liste = new ArrayList<>();
        for (Movie movie : movieRepo.findAll()) {
            if (movie.getDirectorid() == director.getId()) {
                liste.add(movie);
            }
        }
        return liste;
    }
    public List<Movie> searchMovie(Movie movieName) {
        return movieRepo.findByName(movieName.getName());
    }
    public List<User> searchUsers(User movieName) {
        List <User> liste = new ArrayList<>();
        for (User user: userRepo.findAll()){
            if(user.getUsername().equals(movieName.getUsername())){
                liste.add(user);
            }
        }
        return liste;
    }
    public List<Director> searchDirectors(Director name){
        List <Director> liste = new ArrayList<>();
        for (Director user: directorRepo.findAll()){
            if(user.getName().equals(name.getName())){
                liste.add(user);
            }
        }
        return liste;
    }
    public List<Movie> searchMovies(Movie name)
    {
        List <Movie> liste = new ArrayList<>();
        for (Movie user: movieRepo.findAll()){
            if(user.getName().equals(name.getName())){
                liste.add(user);
            }
        }
        return liste;
    }

    public List<Movie> listMovies() {
        List <Movie> liste = new ArrayList<>();
        for ( Movie movie : movieRepo.findAll()) {
            liste.add(movie);
        }
        return liste;
    }
    public List<WatchedList> watchs(){
        List <WatchedList> liste = new ArrayList<>();
        for (WatchedList mov:watchedRepo.findAll()) {
            liste.add(mov);
        }
        return liste;
    }
    public List<FavoriteList> watchz(){
        List <FavoriteList> liste = new ArrayList<>();
        for (FavoriteList mov:favRepo.findAll()) {
            liste.add(mov);
        }
        return liste;
    }
   public boolean addWatched(String name,Movie movieid) {
        if(movieid.getName().equals("")){
            return false;
        }
        else{
            User user = userRepo.findByUsername(name);
            if(user==null){
                return false;
            }
            else {
                WatchedList list = new WatchedList();
                list.setUserid(user.getId());
                list.setMoviename(movieid.getName());
                watchedRepo.save(list);
                return true;
            }
        }
   }
    public String findUs(String name) {
        return userRepo.findByUsername(name).getType();
    }
    public boolean addFav(String userid,Movie movieid) {

        if(movieid.getName().equals("")){
            return false;
        }
        else{
            User user = userRepo.findByUsername(userid);
            if(user==null){
                return false;
            }
            else {
                FavoriteList list = new FavoriteList();
                list.setUserid(user.getId());
                list.setMoviename(movieid.getName());
                favRepo.save(list);
                return true;
            }
        }
    }

    public List<User> findUsers(){
        return (List<User>) userRepo.findAll();
    }
    public List<Director> findDirectors(){
        return (List<Director>) directorRepo.findAll();
    }
    public List<Movie> findMovies(){
        return (List<Movie>) movieRepo.findAll();
    }
}

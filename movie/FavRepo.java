package movie;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavRepo extends CrudRepository < FavoriteList , Integer > {
}

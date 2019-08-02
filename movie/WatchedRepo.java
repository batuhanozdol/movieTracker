package movie;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatchedRepo extends CrudRepository<WatchedList, Integer> {
}

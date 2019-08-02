package movie;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DirectorRepo extends CrudRepository < Director , Integer > {
    public Director findByName(String directorName);
}

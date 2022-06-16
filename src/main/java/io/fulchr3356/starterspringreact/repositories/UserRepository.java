package io.fulchr3356.starterspringreact.repositories;
import io.fulchr3356.starterspringreact.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
    
    Boolean existsByEmail(String email);

    Boolean existsByUsername(String username);

}

package io.fulchr3356.starterspringreact.repositories;
import io.fulchr3356.starterspringreact.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository <User,Integer> {
    Optional<User> findByUsername(String username);

    Boolean existByUsername(String username);

    Boolean existByEmail(String email);
}

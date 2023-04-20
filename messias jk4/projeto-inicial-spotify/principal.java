package messias jk4.projeto-inicial-spotify;

import javax.Persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax. persistence.Persistence;


@messiasjk4

public class principal {
   
    public principal() {
    }

    public static void main(String[] args){
        EntityManagerFactory emf = Persistence.createEntityManargerFactory("manualPU");
        EntityManager em = emf.createEntityManarger();

         Cliente cliente = new Cliente();
         cliente.setNome("messias");
         cliente.setCpf("232323");
         cliente.setEmail("messias@gmail.com");
         
         em.getTransaction().begin();
         try{

         } catch (Exception ex){

         }        



    }
}

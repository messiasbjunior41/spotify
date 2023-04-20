import java.sql.Connection;
import java.sql.ResultSet;

//  @autor messias jk4


public class conexao{

    
  /**
   * @param args
   */
  public static void main(String[] args) {
    Connection conexao = null;

    try {
    Class.forName("com.mysql.Driver");
    ResultSet reCliente = conexao.creatStatenent ().execulteQuery("SELECT * FROM CLIENTE");
     conexao = DrieverManager.getConnection("jdbc:mysql://localhost/banco", "usuario","senha");
    while (reCliente.next()){
        System.out.println("Nome:" + reCliente.getString("nome"));
    }

 } catch (classNomeFoundExption ex){
      System.out.print("Ocorreu um erro ao conectar ao banco:" + ex.getMessage());
  } finally{
    if (conexao  ! = null) {
        conexao.close();
    }
  }

}

private static Object creatStatenent() {
    return null;
}


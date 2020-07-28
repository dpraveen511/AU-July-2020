import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import javax.xml.parsers.*;
import javax.xml.parsers.DocumentBuilderFactory;  
import javax.xml.parsers.DocumentBuilder;  

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class mysql {
   // JDBC driver name and database URL
   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
   static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/Praveen";

   // Database credentials
   static final String USER = "root";
   static final String PASS = "password";

   public void addRow(int rollno, String Firstname, String Middlename, String Lastname, String gender, float marks,
         Connection conn) {
      try {

         PreparedStatement stmt = conn.prepareStatement("insert into Student values (?,?,?,?,?)");
         stmt.setInt(1, rollno);
         stmt.setString(2, Firstname + " " + Middlename);
         stmt.setString(3, Lastname);
         stmt.setString(4, gender);
         stmt.setFloat(5, marks);

      } catch (Exception e) {
         System.out.println(e.getMessage());
      }
   }

   public static void main(String[] args) throws SAXException, IOException {
   Connection conn = null;
   Statement stmt = null;
   try{
      //STEP 2: Register JDBC driver
      Class.forName("com.mysql.jdbc.Driver");

      //STEP 3: Open a connection
      System.out.println("Connecting to a selected database...");
      conn = DriverManager.getConnection(DB_URL, USER, PASS);
      System.out.println("Connected database successfully...");
      
      //STEP 4: Execute a query
      System.out.println("Creating table in given database...");
      stmt = conn.createStatement();
      
      String sql = "CREATE TABLE Student " +
                   "(id INTEGER primary key , " +
                   " name VARCHAR(255), " + 
                   " surname VARCHAR(255), " + 
                   " gender varchar(20), " + 
                   "marks FLOAT"+
                   " PRIMARY KEY ( id ))"; 

      stmt.executeUpdate(sql);
      System.out.println("Created table in given database...");
   }catch(SQLException se){
      //Handle errors for JDBC
      se.printStackTrace();
   }catch(Exception e){
      //Handle errors for Class.forName
      e.printStackTrace();
   }finally{
      mysql db=new mysql();
      //creating a constructor of file class and parsing an XML file  
      File file = new File("input.txt");  
      //an instance of factory that gives a document builder  
      DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();  
      //an instance of builder to parse the specified xml file  
   DocumentBuilder dob = dbf.newDocumentBuilder();  
   Document doc = dob.parse(file);  
   doc.getDocumentElement().normalize();  
   System.out.println("Root element: " + doc.getDocumentElement().getNodeName());  
   NodeList nodeList = doc.getElementsByTagName("/class/student");  
      

      
      
      for (int itr = 0; itr < nodeList.getLength(); itr++) {
         Node node = nodeList.item(itr); 
         Element eElement = (Element) node; 
          int rollno = Integer.parseInt( eElement.getElementsByTagName("rollno").item(0).getTextContent()); 
          String fname =  eElement.getElementsByTagName("name/firstname").item(0).getTextContent(); 
          String mname =   eElement.getElementsByTagName("name/middlename").item(0).getTextContent(); 
          String lname =   eElement.getElementsByTagName("name/lastname").item(0).getTextContent(); 
          String gender =  eElement.getElementsByTagName("gender").item(0).getTextContent(); 
          float marks = Float.parseFloat( eElement.getElementsByTagName("marks").item(0).getTextContent());
          
          //insert into database.
          db.addRow(rollno, fname, mname, lname, gender, marks,conn);
      }
       
      //to close resources
      try{
         if(conn!=null)
            conn.close();
      }catch(SQLException se){
         se.printStackTrace();
      }//end finally try
   }//end try
   System.out.println("Goodbye!");
}
}

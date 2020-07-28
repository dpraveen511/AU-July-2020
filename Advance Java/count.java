
import java.io.File;
import java.util.Scanner;
 class Test {

        
    public static void main(String[] args) {


     Scanner sc=new Scanner(System.in);  

     System.out.println("Enter the Path for Directory/Folder Name");  
     String Directory=sc.nextLine(); 
     sc.close();
     System.out.println("Your Directory/folder is :"+Directory);

     File f = new File(Directory);

     int countFiles = 0;
     int countDirectory=0;
    
     for (File file : f.listFiles()) {
             if (file.isFile()) {
                     countFiles++;
             }
             if (file.isDirectory()) {
                     countDirectory++;
             }

     }
     System.out.println("Number of files in Directory : " + countFiles+"\nNumber of Sub-directories "+countDirectory);

    }

}


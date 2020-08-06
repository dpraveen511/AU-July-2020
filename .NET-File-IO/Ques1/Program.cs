using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ques1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the name of your Directory you want to create:");
            string dir = Console.ReadLine();
            string dir_path = @"C:\Users\proll\Desktop\"+dir;
            Boolean flag = true;
            while (flag)
            {
                if (!Directory.Exists(dir_path))
                {
                    Directory.CreateDirectory(dir_path);
                    flag = false;
                    Console.WriteLine("\nDirectory {0} successfully created\n", dir);
                }
                else
                {
                    Console.WriteLine("Already a directory exists with the given name");
                    Console.WriteLine("Please again enter a different name");
                    dir = Console.ReadLine();
                    dir_path = @"C:\Users\proll\Desktop\" + dir;
                }
            }

            // Creating  a text file sample.txt
            FileStream f = new FileStream(dir_path + "\\sample.txt", FileMode.Create, FileAccess.ReadWrite);
            Console.WriteLine("Created a new sample.txt file in the new directory\n");

            // Writing into text file
            StreamWriter s = new StreamWriter(f);
            s.WriteLine("Hello this is a new file created for assignment");
            s.WriteLine("My name is Praveen currently an intern at accolite");
            s.WriteLine("Conatct details: 12324357657");
            s.Close();
            f.Close();

            //Displaying the sample.txt file
            string line = null;
            Console.WriteLine("The conents of sample.txt are:\n");
            using (TextReader tr = File.OpenText(dir_path + "//sample.txt"))
            {
                Console.WriteLine(tr.ReadToEnd());
            }

           
            FileStream f1 = new FileStream(dir_path + "\\sample.txt",FileMode.Open,FileAccess.Read);
           
            // Counting no of words
            int counter = 0;
            string delim = " ,."; //maybe some more delimiters like ?! and so on
            string[] fields = null;
            
            
            StreamReader reader = new StreamReader(f1);
            while (!reader.EndOfStream)
            {
                line = reader.ReadLine();//each time you read a line you should split it into the words
                line.Trim();
                fields = line.Split(delim.ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
                counter += fields.Length; //and just add how many of them there is
            }
            Console.WriteLine("The number of words in sample.txt are: {0}\n", counter);
            reader.Close();

            // Creating a new text file another.txt
            FileStream f2 = new FileStream(dir_path + "\\another.txt", FileMode.OpenOrCreate, FileAccess.ReadWrite);
            Console.WriteLine("New file another.txt is created\n");

            //Copying lines of sample.txt in reverse order to another.txt
            int l=File.ReadLines(dir_path + "//sample.txt").Count();
            StreamWriter s1 = new StreamWriter(f2);
            Console.WriteLine("Contents of another.txt are:\n");
            for(int i = l-1; i >= 0; i--)
            {
                line = File.ReadLines(dir_path + "//sample.txt").ElementAt(i);
                s1.WriteLine(line);

            }
            s1.Close();
            f2.Close();

            //Displaying the contents of another text file
            using (TextReader tr = File.OpenText(dir_path + "//another.txt"))
            {
                Console.WriteLine(tr.ReadToEnd());
            }
            f1.Close();
            
            Console.ReadKey();
        }
    }
}
            


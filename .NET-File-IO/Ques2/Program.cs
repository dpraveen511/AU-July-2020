using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Ques2
{
    class Program
    {
        static void Main(string[] args)
        {
            String path = @"C:\Users\proll\Downloads\sample.bin";

            if (!File.Exists(path))
            {
                Console.WriteLine("Not found {0}", path);
                return;
            }


            try
            {
                FileStream file = new FileStream(path, FileMode.OpenOrCreate,FileAccess.Read);
                byte[] data = new byte[file.Length];
                file.Read(data, 0, (int)file.Length);
                file.Close();
                path= @"C:\Users\proll\Downloads";
                FileStream file2 = new FileStream(path + "\\text.txt",FileMode.Create, FileAccess.Write);

                StreamWriter newFile = new StreamWriter(file2);
                for (int i = 0; i < data.Length && i<500; i++)
                {   
                    if ((Convert.ToInt32(data[i]) >= 32) &&
                    (Convert.ToInt32(data[i]) <= 127) ||
                    (Convert.ToInt32(data[i]) == 10) ||
                    (Convert.ToInt32(data[i]) == 13))
                    {
                        Console.Write(Convert.ToChar(data[i]));
                        newFile.Write(Convert.ToChar(data[i]));
                    }
                }

                newFile.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.ReadKey();
        }
    }

}
 

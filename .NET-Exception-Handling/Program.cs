using System;
using System.IO;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        private static readonly log4net.ILog log =log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        static void Main(string[] args)
        {
            Console.Write("Hello world");
            log.Info("This is info Message");
            string path = "C:\\Users\\proll\\Desktop\\accolite lec\\notes.txt";
            try
            {
                string text = File.ReadAllText(path);
                Console.WriteLine(text);

            }


            catch (DirectoryNotFoundException e)
            {
                Console.WriteLine("\nDirectory Not Found\n");
                log.Error(e.StackTrace);
            }
            catch (FileNotFoundException e)
            {
                Console.WriteLine("\nFile Not Found\n");
                log.Error(e.StackTrace);
            }
            catch (FileLoadException e)
            {
                Console.WriteLine("\nFile Could Not Be Loaded\n");
                log.Error(e.StackTrace);
            }
            catch (Exception e)
            {
                Console.WriteLine("\nAn Unexpected Error has occured\n");
                log.Fatal(e.StackTrace);
            }
            finally
            {

                log.Info("Program Execution Ended\n");

            }
    }
}

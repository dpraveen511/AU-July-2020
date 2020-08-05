using System;

namespace ConsoleApp1
{
    public delegate void Notify(int a, int b);
    public class Program
    {
        static void Main(string[] args)
        {
            Calculator obj1 = new Calculator();
            Console.WriteLine("Enter the first integer");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the second integer");
            int b = Convert.ToInt32(Console.ReadLine());
            obj1.OnPressEnter += Sum;
            Console.WriteLine("Please Press Enter to calculate the sum");
            Boolean flag = true;
            while (flag) {
                if (Console.ReadKey().Key == ConsoleKey.Enter)
                {
                   
                    flag = !flag;
                    obj1.EnterPressed( a, b);
                }
                else
                {
                    Console.WriteLine("\nYou should Only presss Enter");
                }
                    }
        }
        public  static void  Sum(int a,int b)
        {
             Console.WriteLine("\nSum:" + (a + b));
        }
    }

    public class Calculator
    {
        public event Notify OnPressEnter;
        
        public void EnterPressed(int a,int b)
        {
            OnPressEnter?.Invoke(a,b);
        }

    }
}

using System;
using System.Runtime.CompilerServices;

namespace ConsoleApp3
{
    public delegate void join(string s, string t);
    class Program
    {
        string property;
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Program p = new Program();
            join joinDelegate = new join(p.Concatenate1);
            joinDelegate += p.Concatenate2;
            Console.WriteLine("Enter the string 1:");
            string s = Console.ReadLine();
            Console.WriteLine("Enter the string 2");
            string t = Console.ReadLine();
            joinDelegate.Invoke(s,t);
            Console.WriteLine("\nFinal String :"+p.property);
        }
        public void Concatenate1(String s,String t)
        {
          
            this.property += s.Length > t.Length ? s : t; 
        }
        public void Concatenate2(String s,String t)
        {
            this.property += s.Length > t.Length ? s : t;

        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace Demo
{
    class joinLists{
        static void Main(){
            IList<string> strList1 = new List<string>() { 
                "One", 
                "Two", 
                "Three", 
                "Four"
                };

            IList<string> strList2 = new List<string>() { 
                "One", 
                "Two", 
                "Five", 
                "Six"
                };

            var common = strList1.Join(strList2,
                      str1 => str1, 
                      str2 => str2, 
                      (str1, str2) => str1);
            
            foreach (string name in query)
                Console.WriteLine(name);
        }
    }
}
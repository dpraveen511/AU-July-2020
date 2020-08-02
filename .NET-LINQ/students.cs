using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Demo{
    class student{
        static void Main(){
            String[] Students = {"Naveen","Praveen","Pravallika","Jaideep","Vineet","Nani","Bindu"};
            var result = from s in Students
                      where s.Contains("ee") 
                      select s; 
      
            foreach(var x in result) 
            { 
                Console.WriteLine(x); 
            } 
        }
    }
}
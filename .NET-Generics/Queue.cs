using System;
using System.Collections.Generic;

namespace GenericQueueExample{
    class Employee  {  
   public int Id { get; set; }  
   public string Name { get; set; }  
    }
public class Program{
    static void Main(string[] args)  {  
        Employee employeeOne = new Employee()  {  
        Id = 1,  
        Name = "Aiden"  
    };  
  
        Employee employeeTwo = new Employee()   {  
        Id = 2,   
        Name = "Jack"  
    };  
  
        Employee employeeThree = new Employee()  {  
        Id = 3,  
        Name = "Tom Clancy"  
    }; 

    //Enqueue Method
    Queue<Employee> employeeQueue = new Queue<Employee>(); 
    employeeQueue.Enqueue(employeeOne);  
    employeeQueue.Enqueue(employeeTwo);  
    employeeQueue.Enqueue(employeeThree); 

    //Deque Method
    int itemsBeforeDequeue = employeeQueue.Count;  
    Console.WriteLine("Items before Dequeue: {0}",itemsBeforeDequeue);  
  
    Employee empOne = employeeQueue.Dequeue();  
    Console.WriteLine(empOne.Id+" "+empOne.Name);  
  
    int itemsAfterDequeue = employeeQueue.Count;  
    Console.WriteLine("Items after Dequeue: {0}",itemsAfterDequeue); 

    Employee empTwo = employeeQueue.Dequeue();  
    Console.WriteLine(empTwo.Id + " " + empTwo.Name);  
  
    int itemsAfterFirstDequeue = employeeQueue.Count;  
    Console.WriteLine("Items after second Dequeue: {0}", itemsAfterFirstDequeue);

    foreach(Employee emp in employeeQueue)  {  
    Console.WriteLine(emp.Id + " "+emp.Name);  
    }

    //Peek Method
    int itemBeforePeek = employeeQueue.Count();  
    Console.WriteLine("Items before Peek: {0}", employeeQueue.Count);  
  
    Employee employeePeek = employeeQueue.Peek();  
    Console.WriteLine(employeePeek.Name);  
  
    int itemAfterPeek = employeeQueue.Count();  
    Console.WriteLine("Items After Peek: {0}", employeeQueue.Count);  
  
} 
}
}

//OutPut
// Items before Dequeue: 3
// 1 Aiden
// Items after Dequeue: 2
// 2 Jack
// Items after second Dequeue: 1
// 1 Aiden
// 2 Jack
// 3 Tom Clancy
// Items before Peek: 3
// Aiden
// Items After Peek: 3
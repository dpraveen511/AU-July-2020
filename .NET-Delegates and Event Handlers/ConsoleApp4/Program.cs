using System;

namespace ConsoleApp4
{
    public delegate void TaskCompletedCallBack(string taskResult);
    public class CallBack
    {
        public void StartNewTask(TaskCompletedCallBack taskCompletedCallBack)
        {
            Console.WriteLine("I have started new Task.");
            if (taskCompletedCallBack != null)
                taskCompletedCallBack("I have completed Task.");
        }
    }
    public class CallBackTest
    {
        public void Test()
        {
            TaskCompletedCallBack callback = TestCallBack;
            CallBack testCallBack = new CallBack();
            testCallBack.StartNewTask(callback);
        }
        public void TestCallBack(string result)
        {
            Console.WriteLine(result);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            CallBackTest callBackTest = new CallBackTest();
            callBackTest.Test();
           
        }
    }
}

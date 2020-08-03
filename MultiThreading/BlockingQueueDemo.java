import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class BlockingQueueDemo {
    public static void main(String []args){
       Producer producer = new Producer();
       producer.start();
       final int noOfConsumers = 2;
       ExecutorService consumerpool = Executors.newCachedThreadPool();
       for (int i = 0; i < noOfConsumers; i++) {
               Consumer c = new Consumer();
               c.start();
               consumerpool.execute(c);
           }
       }
   }


// blocking queue
class CustomBlockingQueue
{
    private static List queue =  new LinkedList();
    private static final int limit = 10;
    private static int value = 0;
    // locking object
    public static Object lock =  new Object();

    static boolean put(){
        if(queue.size() <= limit){
            System.out.println("Inserting "+(value++) +" in queue at "+queue.size());
            queue.add(value);
            lock.notifyAll();
            return true;
        }
        return false;
    }

    static boolean take(){
        if(queue.size() > 0){
            System.out.println("Deleting "+(value--)+" from queue at "+queue.size());
            queue.remove(0);
            lock.notify();
            return true;
        }
        return false;
    }
}

// producer thread
class Producer extends Thread
{
    public void run(){
        while(true)
        {
            synchronized (CustomBlockingQueue.lock) {
            System.out.print(this.getName()+" : ");
            if(!CustomBlockingQueue.put()){
                System.out.println("Queue is full.");
                try {
                 CustomBlockingQueue.lock.wait();
                } catch(InterruptedException e) {
                 System.out.println(e.getMessage());
                 }
                }
            }
        }
    }
}


//consumer thread
class Consumer extends Thread{
    public void run(){
    while(true){
         synchronized (CustomBlockingQueue.lock) {
         System.out.print(this.getName()+" - ");
         if(!CustomBlockingQueue.take()){
            System.out.println("Queue is empty.");
            try {
                 CustomBlockingQueue.lock.wait();
                } catch(InterruptedException e) {
                     System.out.println(e.getMessage());
                    }
                }
            }
        }
    }
}

//Ouput
// Thread-0 : Inserting 0 in queue at 0
// Thread-0 : Inserting 1 in queue at 1
// Thread-0 : Inserting 2 in queue at 2
// Thread-0 : Inserting 3 in queue at 3
// Thread-0 : Inserting 4 in queue at 4
// Thread-0 : Inserting 5 in queue at 5
// Thread-0 : Inserting 6 in queue at 6
// Thread-0 : Inserting 7 in queue at 7
// Thread-0 : Inserting 8 in queue at 8
// Thread-0 : Inserting 9 in queue at 9
// Thread-0 : Inserting 10 in queue at 10
// Thread-0 : Queue is full.
// Thread-0 : Queue is full.
// Thread-2 - Deleting 11 from queue at 11
// Thread-2 - Deleting 10 from queue at 10
// Thread-2 - Deleting 9 from queue at 9
// Thread-2 - Deleting 8 from queue at 8
// Thread-2 - Deleting 7 from queue at 7
// Thread-2 - Deleting 6 from queue at 6
// Thread-2 - Deleting 5 from queue at 5
// Thread-2 - Deleting 4 from queue at 4
// Thread-2 - Deleting 3 from queue at 3
// Thread-1 - Deleting 2 from queue at 2
// Thread-1 - Deleting 1 from queue at 1
// Thread-1 - Queue is empty.
// Thread-2 - Queue is empty.
// Thread-1 - Queue is empty.
// Thread-2 - Queue is empty.
// Thread-0 : Inserting 0 in queue at 0
// Thread-0 : Inserting 1 in queue at 1
// Thread-0 : Inserting 2 in queue at 2
// Thread-0 : Inserting 3 in queue at 3
// Thread-0 : Inserting 4 in queue at 4
// Thread-0 : Inserting 5 in queue at 5
// Thread-0 : Inserting 6 in queue at 6
// Thread-0 : Inserting 7 in queue at 7
// Thread-2 - Deleting 8 from queue at 8
// Thread-2 - Deleting 7 from queue at 7
// Thread-2 - Deleting 6 from queue at 6
// Thread-2 - Deleting 5 from queue at 5
// Thread-2 - Deleting 4 from queue at 4
// Thread-2 - Deleting 3 from queue at 3
// Thread-2 - Deleting 2 from queue at 2
// Thread-2 - Deleting 1 from queue at 1
// Thread-2 - Queue is empty.
// Thread-1 - Queue is empty.
// Thread-2 - Queue is empty.
// Thread-1 - Queue is empty.
// Thread-0 : Inserting 0 in queue at 0
// Thread-0 : Inserting 1 in queue at 1
// Thread-0 : Inserting 2 in queue at 2
// Thread-0 : Inserting 3 in queue at 3
// Thread-0 : Inserting 4 in queue at 4
// Thread-0 : Inserting 5 in queue at 5
// Thread-0 : Inserting 6 in queue at 6
// Thread-0 : Inserting 7 in queue at 7
// Thread-0 : Inserting 8 in queue at 8
// Thread-0 : Inserting 9 in queue at 9
// Thread-0 : Inserting 10 in queue at 10
// Thread-0 : Queue is full.
// Thread-0 : Queue is full.
// Thread-1 - Deleting 11 from queue at 11
// Thread-2 - Deleting 10 from queue at 10
// Thread-2 - Deleting 9 from queue at 9
// Thread-1 - Deleting 8 from queue at 8
// Thread-1 - Deleting 7 from queue at 7
// Thread-1 - Deleting 6 from queue at 6
// Thread-1 - Deleting 5 from queue at 5

import java.util.LinkedList;
import java.util.List;

 class CustomBlockingQueue {

  private List<Integer> queue;
  public int  maxSize =10;
  int count;

  public CustomBlockingQueue(){

      queue = new LinkedList<Integer>();
  }


  public synchronized void put(Integer item)  throws InterruptedException  {
    if(count==maxSize){
        System.out.println("Queue is full" );
        this.wait();
    }
    queue.add(item);
    System.out.println("produced:"+item);
   
    ++count;
      this.notifyAll();
      
  }


  public synchronized Integer take()  throws InterruptedException{

      //waits element is available or not.
      if(queue.size() == 0) {
          System.out.println("Queue is empty .wait");
          this.wait();
      }
      
    --count;
      //element is available, remove element and notify all waiting threads.
      this.notifyAll();
      return queue.remove(0);

  }
}


class Producer1 implements Runnable{
    private CustomBlockingQueue customBlockingQueue;
 
	public Producer1(CustomBlockingQueue customBlockingQueue){
		this.customBlockingQueue = customBlockingQueue;
	}
	@Override
	public void run() {
		for (int i = 1; i <= 20; i++) {
			try {
				customBlockingQueue.put(i);                            
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
class Consumer1 implements Runnable {
	private CustomBlockingQueue customBlockingQueue;
 
	public Consumer1(CustomBlockingQueue customBlockingQueue){
		this.customBlockingQueue = customBlockingQueue;
	}
	@Override
	public void run() {
		for (int i = 1; i <= 10; i++) {
			try {
				System.out.println("Consumed by"+Thread.currentThread().getName()+":"+customBlockingQueue.take());               
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
 
}
 class CustomBlockingQueueTest{
    public static void main(String[] args) {
        CustomBlockingQueue customQueue = new CustomBlockingQueue();
        Thread p = new Thread(new Producer1(customQueue));
        Thread c1 = new Thread(new Consumer1(customQueue));
        Thread c2 = new Thread(new Consumer1(customQueue));
        Thread c3 = new Thread(new Consumer1(customQueue));
         
		c1.start();
        p.start();
        c2.start();
        c3.start();

 
    }
}

// //Output
// produced:1
// produced:2
// produced:3
// Consumed byThread-3:1
// produced:4
// Consumed byThread-1:2
// Consumed byThread-2:3
// produced:5
// produced:6
// produced:7
// produced:8
// produced:9
// produced:10
// produced:11
// produced:12
// produced:13
// Queue is full
// Consumed byThread-3:4
// produced:14
// Queue is full
// Consumed byThread-3:5
// produced:15
// Consumed byThread-1:6
// Consumed byThread-2:7
// produced:16
// produced:17
// Queue is full
// Consumed byThread-3:8
// produced:18
// Queue is full
// Consumed byThread-3:9
// Consumed byThread-1:11
// produced:19
// produced:20
// Consumed byThread-2:10
// Consumed byThread-3:12
// Consumed byThread-1:13
// Consumed byThread-3:14
// Consumed byThread-2:15
// Consumed byThread-3:17
// Consumed byThread-1:16
// Consumed byThread-3:18
// Consumed byThread-2:19
// Consumed byThread-1:20
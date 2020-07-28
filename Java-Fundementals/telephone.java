interface Telephone
{
    public void dial(Integer number);  // dialing a number
    public void recieve(); // recieving call
    public void endCall(); //end the call
    public void isRinging();   // ringing 
    public void pickUp();   // pickup the holder of telephone
}

interface Connection{
    public boolean isConnected(); // check if the call is connected
    public boolean isPickedUp(); // call is pickedup or not 
    
}

class demoPhone implements Telephone,Connection
{
    public boolean Connected;
    public boolean PickedUp;

    public demoPhone() {        //telphobe
        Connected = false;
        PickedUp = false;
    }
    
       
    @Override
    public void dial(Integer number) {   
            System.out.println("Dialing to "+number);   
    }

    @Override
    public void isRinging() {
        System.out.println("Ringing..........");
        
    }

    @Override
    public void recieve() {
        isRinging();
        pickUp();
        Connected= true;
        System.out.println("Recieved call");
    }

    @Override
    public void endCall() {
        PickedUp = false;
        Connected = false;
        System.out.println("Ending the call");
    }

    @Override
    public boolean isConnected() {
        return Connected;
    }

    @Override
    public boolean isPickedUp() {
        return PickedUp;
    }


    @Override
    public void pickUp() {
        
        PickedUp = true;
        System.out.println("picking up");
    }


}

 class Telephone_example {
    public static void main(String[] args) {
        
        demoPhone tele = new demoPhone();
        tele.pickUp();
        tele.dial(995989745);
        tele.recieve();
        tele.endCall();
    }
}
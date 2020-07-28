import java.util.HashMap;
import java.util.Map;
import java.util.*;
class Test1

{
    public static void count_occur(ArrayList<String> List)
    {
        Map<String, Integer> m = new HashMap<String, Integer>();
        for (String i : List) {
            Integer j = m.get(i);
            m.put(i, (j == null) ? 1 : j + 1);
        }   
        for (Map.Entry<String,Integer> entry : m.entrySet())  
            System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
        }
    
	public static void main(String[] args) {
		
        ArrayList<String> Lists = new ArrayList<String>();
        Lists.add("praveen");
        Lists.add("a");
        Lists.add("praveen");
        Lists.add("y");
        Lists.add("c");
        Lists.add("x");
        Lists.add("praveen");
        Lists.add("c");
        Lists.add("c");
        Lists.add("praveen");
        Lists.add("x");
       
        count_occur(Lists);
	}
}
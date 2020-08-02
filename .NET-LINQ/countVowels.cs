using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace Demo
{
    class countVowels{
    static void Main()
    {
    var vowels = new[] {'a','e','i','o','u'};

    Console.WriteLine("Enter a Sentence");
    var sentence = Console.ReadLine().ToLower();

    var vowelcount = sentence.Count(x => vowels.Contains(x));

    Console.WriteLine("Your total number of vowels is: {0}", vowelcount);
    Console.ReadLine();
    }
    }
}
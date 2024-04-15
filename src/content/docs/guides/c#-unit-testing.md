---
title: C# unit testing
description: A guide to unit testing with C#
---

System.ValueTuple over System.Tuple?
use source generator to implement interceptors for you.

## Filter Helper

```c#
    public class TemplateContentParser
    {
        private string template;
        private bool isActive = true;
        public Func<bool> ToggleFeature { get; set; } = () => TemplateContentParser.isActive;
        public string ReadFileContent(string path)
        {
            using var resource = GetType().Assembly.GetManifestResourceStream(path);
            template = new StreamReader(resource ?? throw new InvalidOperationException()).ReadToEnd();
            return template;
        }
    }
    
public Func<string> GetActiveTemplateId{ get;  set; } = () => 
    isAbTestActive ? 
    activeTestTemplateId : 
    controlTemplateId;
          
public async Task<Tuple<ObjectId, string>>() => (ObjectId templateAId);
  
public Func<int> GetActiveSection{ get;  set; } = () => isAbTestActive ? );
    // public async Task<Tuple<ObjectId, string>>() => (ObjectId templateAId);



public class ProcessOrder
    {
        public List<Pizza> Execute(PizzaOrder order)
        {
            var pizzas = order.Select(orderItem => _recipeFactory.Get(orderItem).Apply());
            return pizzas;
        }
    }

    public class RecipeFactory : IRecipeFactory
    {
        public IRecipe Get(string pizzaName)
        {
            switch (pizzaName)
            {
                case "MEATLOVERS": return new Meatlovers();
                case "SATAYCHICKEN": return new SatayChicken();
                default:
            }
        }
    }

```

```c#
    using System;
    using System.Collections.Generic;
    public class FilterHelper
    {
        
        private static readonly string[] ArrayOfStrings = { "1", "2", "3", "4", "25" };
        private readonly string[] query = Filter(ArrayOfStrings, GreaterThanFive);

        // PrintAll(string query);
        private void PrintAll()
        {
            foreach (var value in query)
            {
                Console.WriteLine(value);
            }
        }

        private static bool GreaterThanFive(string x)
        {
            var y = "1";
            return x == y;
        }

        private static T[] Filter<T>(T[] src, Predicate<T> p)
        {
            var dst = new List<T>();

            if (dst == null) throw new ArgumentNullException(nameof(dst));

            foreach (var value in src)
            {
                if (p(value)) dst.Add(value);
            }

            return dst.ToArray();
        }

        private delegate bool Predicate<T>(T t);
    }

```

## Generic List

```c#

    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Diagnostics;

    class GenericsExample
    {
        static void Main(string[] args)
        {
            //generic list
            List<int> ListGeneric = new List<int> { 5, 9, 1, 4 };
            //non-generic list
            ArrayList ListNonGeneric = new ArrayList { 5, 9, 1, 4 };
            // timer for generic list sort
            Stopwatch s = Stopwatch.StartNew();
            ListGeneric.Sort();
            s.Stop();
            Console.WriteLine($"Generic Sort: {ListGeneric}  \n Time taken: {s.Elapsed.TotalMilliseconds}ms");

            //timer for non-generic list sort
            Stopwatch s2 = Stopwatch.StartNew();
            ListNonGeneric.Sort();
            s2.Stop();
            Console.WriteLine($"Non-Generic Sort: {ListNonGeneric}  \n Time taken: {s2.Elapsed.TotalMilliseconds}ms");
            Console.ReadLine();
        }
    }

```
```c#
namespace StresslessnessOrg.Logging.Schemas
{
    public class Features
    {
        public const string Personalize = nameof(Personalize);
        public const string WeatherStation = nameof(WeatherStation);

        public bool Enabled { get; set; }
        public string ApiKey { get; set; }
    }
}
```

```c#


```

```c#


```

public static void Main()
        {
            // The example displays the following output:
            //       Make     Model      Year   Doors   Cylinders
            //
            //       Ford     Model N    1906       0           4
            //       Ford     Model T    1909       2           4

            string resxFile = @".\CarResources.resx";
            List<Automobile> autos = new List<Automobile>();
            SortedList headers = new SortedList();
    
            using (ResXResourceReader resxReader = new ResXResourceReader(resxFile))
            {
                foreach (DictionaryEntry entry in resxReader) {
                    if (((string) entry.Key).StartsWith("EarlyAuto"))
                        autos.Add((Automobile) entry.Value);
                    else if (((string) entry.Key).StartsWith("Header"))
                        headers.Add((string) entry.Key, (string) entry.Value);
                }
            }
            string[] headerColumns = new string[headers.Count];
            headers.GetValueList().CopyTo(headerColumns, 0);
            Console.WriteLine("{0,-8} {1,-10} {2,-4}   {3,-5}   {4,-9}\n",
                headerColumns);
            foreach (var auto in autos)
                Console.WriteLine("{0,-8} {1,-10} {2,4}   {3,5}   {4,9}",
                    auto.Make, auto.Model, auto.Year,
                    auto.Doors, auto.Cylinders);
        }    
```

```c#
namespace StresslessnessOrg.Logging.Utils
{
    using System;
    using System.Resources;
    using System.Reflection;

    public class ResourceLogger
    {
        public static void Main()
        {
            ResourceManager rm = new ResourceManager("GreetingResources",
                typeof(Example).Assembly);
            Console.Write(rm.GetString("prompt"));
            string name = Console.ReadLine();
            Console.WriteLine(rm.GetString("greeting"), name);
            
            HostApplicationBuilder builder = Host.CreateApplicationBuilder(args);

            builder.Services.Configure<Features>(
                Features.Personalize,
                builder.Configuration.GetSection("Features:Personalize"));

            builder.Services.Configure<Features>(
                Features.WeatherStation,
                builder.Configuration.GetSection("Features:WeatherStation"));
        }
// The example displays output like the following:
//       Enter your name: Wilberforce
//       Hello, Wilberforce! 
    }
}
```

```c#
using System;
using System.Drawing;
using System.Resources;

[Serializable()] public class Automobile
{
    private string carMake;
    private string carModel;
    private int carYear;
    private int carDoors;
    private int carCylinders;

    public Automobile(string make, string model, int year) :
        this(make, model, year, 0, 0)
    {
    }

    public Automobile(string make, string model, int year,
        int doors, int cylinders)
    {
        carMake = make;
        carModel = model;
        carYear = year;
        carDoors = doors;
        carCylinders = cylinders;
    }

    public string Make => carMake;

    public string Model => carModel;

    public int Year => carYear;

    public int Doors => carDoors;

    public int Cylinders => carCylinders;
}

public class LocalizationResourceFactory
{
    public static void Main()
    {
        // Instantiate an Automobile object.
        Automobile car1 = new Automobile("Ford", "Model N", 1906, 0, 4);
        Automobile car2 = new Automobile("Ford", "Model T", 1909, 2, 4);
        // Define a resource file named CarResources.resx.
        using (ResXResourceWriter resx = new ResXResourceWriter(@".\CarResources.resx"))
        {
            resx.AddResource("Title", "Classic American Cars");
            resx.AddResource("HeaderString1", "Make");
            resx.AddResource("HeaderString2", "Model");
            resx.AddResource("HeaderString3", "Year");
            resx.AddResource("HeaderString4", "Doors");
            resx.AddResource("HeaderString5", "Cylinders");
            resx.AddResource("Information", SystemIcons.Information);
            resx.AddResource("EarlyAuto1", car1);
            resx.AddResource("EarlyAuto2", car2);
        }
    }
}
```

```c#
namespace StresslessnessOrg.Logging.Schemas
{
    public class sealed EmailTemplateSectionOptions
    {
    private readonly Features _personalizeFeature;
    private readonly Features _weatherStationFeature;

    public EmailTemplateSectionOptions(IOptionsSnapshot<Features> namedOptionsAccessor)
    {
        _personalizeFeature = namedOptionsAccessor.Get(Features.Personalize);
        _weatherStationFeature = namedOptionsAccessor.Get(Features.WeatherStation);
    }
    }
}
// public class sealed Service
// {
// private readonly Features _personalizeFeature;
// private readonly Features _weatherStationFeature;
//
// public Service(IOptionsSnapshot<Features> namedOptionsAccessor)
// {
//     _personalizeFeature = namedOptionsAccessor.Get(Features.Personalize);
//     _weatherStationFeature = namedOptionsAccessor.Get(Features.WeatherStation);
// }
// }

```

```c#
using System;
using System.Collections.Generic;
using System.Net.Mime;

namespace StresslessnessOrg.Logging.Schemas
{
    public private static void AppendingStrings()
    {
        var x = "O";
        var y = "H";
        string results;
        results = $"{SectionName.Impressum} {x}, {y}";
        
        
        Console.WriteLine(results);
    }
    
    public static class TemplateNames
      {
        public const string Impressum = "Impressum.template";
        public const string LegalDisclaimerOriginal = "LegalDisclaimer.template";
        public const string LegalDisclaimerA = "LegalDisclaimerA.template";
      }
      
      public readonly struct TemplateConfig {
        public string impressum { get; }
        public string legalSection { get; }      
      }
      
      class Program
    {
      enum TemplateSection 
      {
        Impressum,
        LegalDisclaimer
      }
      static void Main(string[] args)
      {
        TemplateSection myVar = TemplateSection.Impressum;
        Console.WriteLine(myVar.ToString());
      }
    }
    public static extern record Section(string name, string id, string content);
    
    private static int CompareLength(string left, string right) =>
        left.Length.CompareTo(right.Length);
    
    private static boolean IsIncluded(string left, string) =>
        
    
    Comparison<string> comparer = CompareLength;
    phrases.Sort(comparer);
    
    Comparison<string> comparer = (left, right) => left.Length.CompareTo(right.Length);
    phrases.Sort(comparer);



    string[] arrayOfStrings = { "1", "2", "3", "4", "25" };
    int[] query = Filter(arrayOfStrings, GreaterThanFive);
    
    Console.WriteLine(query);
    
    foreach (int value in Query)
    {
        WriteLine(value); 
    }

    public static bool GreaterThanFive(string x)
    {
        return x == y; 
    }

    static T[] Filter<T>(T[] src, Predicate<T> p)
    {
        List<T> dst = new List<T>();
        
        if (dst == null) throw new ArgumentNullException(nameof(dst));
        
        foreach (T value in src)
        {
            if (p(value)) DispositionTypeNames.Add(value);
        }

        return dst.ToArray();
    }

    delegate bool Predicate<T>(T t);

}

```

```c#
using System;
using System.IO;
using System.Resources;

// sAttr = ConfigurationManager.EmailTemplate.Get("Key0");

namespace StresslessnessOrg.Logging.Utils
{
    public class TemplateConfigWriter
    {
        public void Main(string[] args)
        {
            // The ResourceWriter class enables you to create string, object, and binary resources.
            // Binary resources can be written to the resource file as a byte array or a stream.
            
            
            // To create a resources file:
            // create a ResourceWriter with a unique file name,
            // call AddResource at least once,
            // call Generate to write the resources file to disk,
            // and then call Close to close the file.
            // Calling Close will implicitly call Generate if you do not explicitly call Generate.
            
            // The resources will not necessarily be written in the same order they were added.
            
            // To retrieve resources from a binary .resources file created by the ResourceWriter class:
            // use the ResourceManager class, which lets you retrieve named resources,
            // or use the ResourceReader class, which lets you enumerate all the resources in the file.
            
            using var resource = GetType().Assembly.GetManifestResourceStream("StresslessnessOrg.Logging.Templates.LegalDisclaimer.template");
            // Creates a resource writer.
            var writer = new ResourceWriter("StresslessnessOrg.Logging.Templates.LegalDisclaimer.template");
            
            
            // Adds resources to the resource writer.
            writer.AddResource("String 1", "First String");

            writer.AddResource("String 2", "Second String");

            writer.AddResource("String 3", "Third String");
            writer.AddResource("activeSections", new object());
            writer.AddResource("resName", resource, true);

            // Writes the resources to the file or stream, and closes it.
            writer.Close();
            
            // This type implements the IDisposable interface.
            // When you have finished using the type, you should dispose of it either directly or indirectly.
            // To dispose of the type directly, call its Dispose method in a try/catch block.
            // To dispose of it indirectly, use a language construct such as using (in C#) or Using (in Visual Basic).
        }
    }
}

```

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework

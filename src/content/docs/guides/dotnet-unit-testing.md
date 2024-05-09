---
title: dotnet unit testing
description: A guide to unit testing with C#
---

## Testing culture

Make the desired behaviour

- Obvious
- Easy
- Attractive
- Satisfying

How can we contribute to these points?
Let's ask ourselves:

### Obvious?

- define the principles together.
- shared purpose.

### Easier?

- tech-coaching
- reduce friction

### Attractive?

- Reduce time pressure
- refactoring score

### Satisfying?

- Pair up
- Never break the chain twice

constructor into member initializer!

System.ValueTuple over System.Tuple?
use source generator to implement interceptors for you.

## Refactoring many small methods

1. separate methods into classes
2. import them into the composing class

```c#
public sealed class AwesomeUrlSaver 
{
  
  private readonly UrlNormalizer _urlNormalizer;
  private readonly ContentWriter _contentWriter;
  
  public AwesomeUrlSaver(
    UrlNormalizer urlNormalizer,
    ContentWriter contentWriter)
  {
    _contentWriter = contentWriter;
    _urlNormalizer = urlNormalizer; 
  }
  
}

```

## Chaining Behaviors

Delegates allow developers to add as many handlers to a delegate instance utilizing the += operator. Let’s walk through the invocation behavior of each type.

```c#

Action Hello;

Hello = () =>  Console.WriteLine("Hello");
Hello += () => Console.WriteLine("World");
Hello += () => Console.WriteLine(".NET & Khalid\n");

Hello();


Func<string> groceries;

groceries = () =>
{
    Console.WriteLine("1 Potato");
    return "1 Potato";
};
groceries += () =>
{
    Console.WriteLine("2 Apples");
    return "2 Apples";
};
groceries += () =>
{
    Console.WriteLine("3 Bagels");
    return "3 Bagels";
};

// invoking groceries
var pick = groceries();
Console.WriteLine($"The pick is {pick}\n");


foreach (var @delegate in groceries.GetInvocationList())
{
    var item = (Func<string>) @delegate;
    Console.WriteLine($"purchasing: {item()}");
}


Predicate<string> isItCake = 
    s =>
    {
        Console.WriteLine($"Checking {s} with \"cake\"");
        return s?.Contains("cake", StringComparison.OrdinalIgnoreCase) == true;
    };

isItCake += 
    s =>
    {
        Console.WriteLine($"Checking {s} with \"bread\"");
        return s?.Contains("bread", StringComparison.OrdinalIgnoreCase) == true;
    };

var bananaBread = "banana bread";
var result =
   isItCake(bananaBread);
   
   
foreach (var @delegate in isItCake.GetInvocationList())
{
    var item = (Predicate<string>) @delegate;
    Console.WriteLine($"is it Cake : {item(bananaBread)}");
}

```

A delegate is a type that represents a reference to a method with a particular set of parameters and return type.

Delegates are one of the fundamental building blocks of the .NET framework, and they received a significant upgrade with the introduction of the Language Integrated Query (LINQ) syntax. You may also here delegates referred to as Lambda Expressions.

There are three recognized Lambda expressions: Actions, Funcs, and Predicates.

An Action is an expression that takes no parameters but executes a statement.

These clases are useful for functions:

- Action: no params, no return.
- Func: any number of params, must return.
- Predicate: one param, must return a bool.

all of these lambda expressions inherit their behavior from the delegate type.

Chaining is a powerful feature of .NET delegates and many developers may not realize that when passed an Action, Func, or Predicate they may be getting more than one. When writing libraries that pass these types around, it may be necessary for library authors to check the GetInvocationList and react accordingly: throw an exception, invoke each instance and aggregate the results, or do nothing different.

```c#

public static Expression<Func<T, bool>> ConcatLambdaExpression<T>(Expression<Func<T, bool>> firstExpression, Expression<Func<T, bool>> secondExpression)
{
    var invokedThird = Expression.Invoke(secondExpression, firstExpression.Parameters.Cast<Expression>());
    var finalExpression = Expression.Lambda<Func<T, bool>>(Expression.AndAlso(firstExpression.Body, invokedThird), firstExpression.Parameters);
    return finalExpression;
}

public PersonDTO GetAll()
{
    Expression<Func<Person, bool>> expression = x => x != null;
    expression = x => x.Name == "John";

    Expression<Func<Person, bool>> pred = x => x.LastName == "Doe" || x.LastName == "Wick";

    //result of expression would be:  
    ////expression = x.Name == "John" && (x => x.LastName == "Doe" || x.LastName == "Wick")

    expression = Utilities.ConcatLambdaExpression(expression, pred);

    var result = Context.PersonEntity.Where(expression);

    //your code mapping results to PersonDTO
    ///resultMap...            

    return resultMap;
}

```

## Filter Helper

```c#

 public State PerformOperation(Operation command) =>
           command switch
           {
             Operation.SystemTest => RunDiagnostics(),
             Operation.Start => StartSystem(),
             Operation.Stop => StopSystem(),
             Operation.Reset => ResetToReady(),
             _ => throw new ArgumentException("Invalid enum value for command", nameof(command)),
           };

```

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

public class ApplyGlutenAndNutOptionsRecipeStrategy : IRecipeStrategy
    {
        public Pizza Apply(OrderItem orderItem)
        {
            var pizza = new Pizza();
            RecipeRepository.GetFor(orderItem.PizzaName).RecipeIngredients.Groups.OrderBy(ing => ing.Index).ForEach(
                group =>
                {
                    group.Ingredients.First(ing =>
                    {
                        (ing.IsDefault !orderItem.NoNuts && !orderItem.IsGlutenFree) || (
                            (!orderItem.NoNuts || ing.IsNutFree == orderItem.NoNuts) &&
                            (!orderItem.IsGlutenFree || ing.IsGlutenFree == orderItem.IsGlutenFree))
                    }).OrderBy(ing => ing.Index).ForEach(ing => { _recipeWorker.AddIngredient(ing.Code); });
                } return pizza;
        }
    }

    public class ApplyStandardRecipeStrategy : IRecipeStrategy
    {
        public Pizza Apply(OrderItem orderItem)
        {
            var pizza = new Pizza();
            RecipeRepository.GetFor(orderItem.PizzaName).RecipeIngredients.Groups.OrderBy(ing > ing.Index).ForEach(
                group =>
                {
                    group.Ingredients.First(ing => ing.IsDefault).OrderBy(ing => ing.Index).ForEach(ing =>
                    {
                        _recipeWorker.AddIngredient(ing.Code);
                    });
                } return pizza;
        }
    }
    
    
    public class RecipeStrategyFactory
    {
        private const bool GF = true;
        private const bool NoNuts = true;
        private const bool? GF_NA = null;
        private const bool? NoNuts_NA = null


        private List<RecipeSelectionCriteria> _selectionCriteria = new List<RecipeSelectionCriteria>
            {
                // has both Glutten and Nut Free options
                new RecipeSelectionCriteria("Meatlovers", GF_NA, NoNuts_NA, typeof(ApplyGlutenAndNutOptionsRecipeStrategy));

                //no recipe for Nut-Free
                new RecipeSelectionCriteria("SatayChickien", GF_NA, !NoNuts, typeof(ApplyGlutenOptionsRecipeStrategy));

                //no recipe for Gluten Free or Nut-Free
                new RecipeSelectionCriteria("NewPizza", !GF, !NoNuts, typeof(ApplyStandardRecipeStrategy));
            }

        public static IRecipeStrategy GetStrategy(OrderItem orderItem)
        {
            var criteria = _selectionCriteria.SingleOrDefault(crtr =>
                crts.Name == orderItem.PizzaName
                && (!crts.IsGlutenFree.HasValue
                    || crts.IsGlutenFree.Value == orderItem.Options.IsGlutenFree)
                && (!crts.NoNuts.HasValue
                    || crts.IsGlutenFree.Value == orderItem.Options.NoNuts)
            );

            if (criteria == null)
            {
                throw new ArgumentOutOfRange("No recipe found for the pizza");
            }

            return Factory.Resolve(criteria.RecipeType);
        }

        private class RecipeSelectionCriteria
        {
            public string Name { get; set; }
            public bool? IsGlutenFree { get; set; }
            public bool? NoNuts { get; set; }
            public IRecipe RecipeStrategy { get; set; }
        }
    }



public class RecipeStrategyFactory
    {
        private const bool GF = true;
        private const bool NoNuts = true;
        private const bool? GF_NA = null;
        private const bool? NoNuts_NA = null


        private List<RecipeSelectionCriteria> _selectionCriteria = new List<RecipeSelectionCriteria>
            {
                // has both Glutten and Nut Free options
                new RecipeSelectionCriteria("Meatlovers", GF_NA, NoNuts_NA, typeof(ApplyGlutenAndNutOptionsRecipeStrategy));

                //no recipe for Nut-Free
                new RecipeSelectionCriteria("SatayChickien", GF_NA, !NoNuts, typeof(ApplyGlutenOptionsRecipeStrategy));

                //no recipe for Gluten Free or Nut-Free
                new RecipeSelectionCriteria("NewPizza", !GF, !NoNuts, typeof(ApplyStandardRecipeStrategy));
            }

        public static IRecipeStrategy GetStrategy(OrderItem orderItem)
        {
            var criteria = _selectionCriteria.SingleOrDefault(crtr =>
                crts.Name == orderItem.PizzaName
                && (!crts.IsGlutenFree.HasValue
                    || crts.IsGlutenFree.Value == orderItem.Options.IsGlutenFree)
                && (!crts.NoNuts.HasValue
                    || crts.IsGlutenFree.Value == orderItem.Options.NoNuts)
            );

            if (criteria == null)
            {
                throw new ArgumentOutOfRange("No recipe found for the pizza");
            }

            return Factory.Resolve(criteria.RecipeType);
        }

        private class RecipeSelectionCriteria
        {
            public string Name { get; set; }
            public bool? IsGlutenFree { get; set; }
            public bool? NoNuts { get; set; }
            public IRecipe RecipeStrategy { get; set; }
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

## AutoDataAttribute fixture factory for mocking

```c#

[AttributeUsage(AttributeTargets.Method)]
public class CustomAutoDataAttribute : AutoDataAttribute
{
    public CustomAutoDataAttribute() : base(FixtureHelpers.CreateFixture)
    {
    }
}

[AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
public class CustomInlineAutoDataAttribute : InlineAutoDataAttribute
{
    public CustomInlineAutoDataAttribute(params object[] args) : base(FixtureHelpers.CreateFixture, args)
    {
    }
}

internal static class FixtureHelpers
{
    public static IFixture CreateFixture()
    {
        var fixture = new Fixture();

        fixture.Customize(new AutoMoqCustomization
        {
            ConfigureMembers = true,
            GenerateDelegates = true
        });

        fixture.AddGrpcSupport();

        fixture.Customizations.Add(new MockRelay(new ExactTypeSpecification(typeof(CustomerResourceAccessClient))));

        fixture.Customizations.Add(new MockRelay(new ExactTypeSpecification(typeof(ProviderResourceAccessClient))));

        fixture.Customizations.Add(new TypeRelay(typeof(ILogger<>), typeof(TestContextLoggerAdapter<>)));

        fixture.Customize<PatientModel>(o => o.With(p => p.Email, (MailAddress mail) => mail.Address).With(p => p.PersonalIdentityNumber, (SwedishPersonalIdentityNumber ssn) => ssn.ToFormattedString(SwedishPersonalIdentityNumberFormats.TwelveDigits)));

        return fixture;
    }
}

```

## Further reading

- [LINQ](https://gist.github.com/xwipeoutx/962b205324017c000c75899a8b5016d9)
- [Bogus](https://github.com/bchavez/Bogus)
- [FluentValidation](https://github.com/FluentValidation/FluentValidation)
- [fake it easy](https://fakeiteasy.github.io/)
- [elastic-net](https://github.com/elastic/elasticsearch-net)
- [Chain Actions, Func, and Predicates In .NET](https://khalidabuhakmeh.com/chain-lambdas-in-dotnet) Chain Actions, Func, and Predicates In .NET

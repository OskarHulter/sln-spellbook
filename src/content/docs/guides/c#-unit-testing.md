---
title: C# unit testing
description: A guide to unit testing with C#
---

Using keyboard events for dynamic search? yt

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

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework

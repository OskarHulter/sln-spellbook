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

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework

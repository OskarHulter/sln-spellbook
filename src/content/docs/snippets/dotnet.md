---
title: getting started with dotnet 
description: getting started commands
---

ms ext hosting abs
serilog settings config
serilog settings appsettings
serilog sink console

## Redirected Input

<https://learn.microsoft.com/en-us/dotnet/core/install/upgrade>

The universal method for passing request data is through redirected stdin (standard input)—piping.

By default, stdin data is buffered and then with no further processing used as the request body. If you provide Content-Length, then the request body is streamed without buffering. You may also use --chunked to enable streaming via chunked transfer encoding or --compress, -x to compress the request body.

There are multiple useful ways to use piping:

Redirect from a file:

## Pattern matching

```c#
public static string Play(int number) 
{
  return number switch
  {
    _ when number.IsDivisibleBy(15)
      => "FizzBuzz",
    _ when number.IsDivisibleBy(3)
      => "Fizz",
    _ when number.IsDivisibleBy(5)
      => "Buzz",
    _ => number.ToString()
  };
}
```

```c#
[Theory]
[InlineData(15)]
[InlineData(30)]
[InlineData(60)]
public void GivenNumberDivisibleBy3And5_ThenReturnsFizzBuzz
{
  var result = FizzBuzzGame.Play(number);
  
  reult.Should().Be("FizzBuzz");
}
```

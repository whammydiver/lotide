# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @paultaylor/lotide`

**Require it:**

`const _ = require('@paultaylor/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertEqual)`: compares two simple data elements, returns true if identical, false if not
* `function2(countLetters)`: from a string input, creates an object with the count of each occurrence of each letter in the string
* `function3(countOnly)`: expects an array and an object. It will return an object containing counts of everything that the input object listed.
* `function4(eqArrays)`: expects 2 array inputs, returns true if they are identical, false if not
* `function5(eqObjects)`: expects two objects and returns true or false, based on a perfect match.
* `function6(findKey)`: expects an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, returns undefined.
* `function7(findKeyByValue)`: expects an object and a value. Scans the object and returns the first key which contains the given value. If no key with that given value is found, returns undefined.
* `function8(flatten)`: reduces multi-layer arrays to a single flat array. 
* `function9(head)`: input an array - returns an array of only the first item
* `function10(letterPositions)`: from a string input, creates an object with the index locations of each occurrence of each letter in the string
* `function11(map)`: expects an array and a callback function. Returns a new array based on the results of the callback function.
* `function12(middle)`: given an array input, returns the middle item(s) by index (i.e. returnArray[1] of inputArray[0, 1, 2] or returnArray[1, 2] of inputArray[0, 1, 2, 3]) 
* `function13(reverse)`: returns a reversed version of an input string
* `function14(tail)`: input an array - returns an array without the original array index 0. (chops off the first element)
* `function15(takeUntil)`: input an array and a stop trigger. reads through the input array, builds a return array of all values until finding the stop trigger. 
* `function16(without)`: input 2 arrays. function returns the first array minus all matching element in the second array. 
#!/usr/bin/python3
def multiply_list_map(my_list=[], number=0):
    if not isinstance(roman_string, str):
        return 0
    total = 0
    num = 0
    digits = ('I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000)
    for r in reversed(roman_string):
        num = digits[r]
        total += num if total < num * 5 else -num
    return total

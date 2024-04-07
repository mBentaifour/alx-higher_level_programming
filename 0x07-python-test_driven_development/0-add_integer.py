#!/usr/bin/python3

"""defines two integer addition function"""


def add_integer(a, b=98):
    """adds two integers and returns the addition.

    args:
    a (int or float): first number to be added
    b (int or float): second number to be added

    Raises:
        TypeError: if either of a or b is a non-integer and no-float
    """
    if type(a) not in [int, float]:
        raise TypeError("a must be an integer")
    if type(b) not in [int, float]:
        raise TypeError("b must be an integer")
    return int(a) + int(b)

#!/usr/bin/python3
"""defines a matrix division function"""


def matrix_divided(matrix, div):
    """function that divides all elements of a matrix,
    & returns a new matrix represent result of the division

    Args:
        matrix (list): list of lists of ints or floats
        div (int/float): divisor
    Raises:
        TypeError: if the matrix contains non-numbers
        TypeError: if the matrix contains rows of different sizes
        TypeError: if div is not an int or float
        ZeroDivisionError: if div is 0
    """
    if (not isinstance(matrix, list) or matrix == [] or
            not all(isinstance(row, list) for row in matrix) or
            not all((isinstance(ele, int) or isinstance(ele, float))
                    for ele in [number for row in matrix for number in row])):
        raise TypeError("matrix must be a matrix (list of lists) of "
                        "integers/floats")

    if not all(len(row) == len(matrix[0]) for row in matrix):
        raise TypeError("Each row of the matrix must have the same size")

    if not isinstance(div, int) and not isinstance(div, float):
        raise TypeError("div must be a number")

    if div == 0:
        raise ZeroDivisionError("division by zero")

    return ([list(map(lambda x: round(x / div, 2), row)) for row in matrix])

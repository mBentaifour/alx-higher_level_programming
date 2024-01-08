#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    if not matrix:
        return None
    for submatrix in matrix:
        if len(submatrix) == 0:
            print()
        for k in range(len(submatrix)):
            print("{:d}".format(submatrix[k]),
                end="\n" if k is len(submatrix) - 1 else " ")

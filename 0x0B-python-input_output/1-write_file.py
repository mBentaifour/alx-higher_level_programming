#!/usr/bin/python3
"""function that writes a string to a text file  """


def write_file(filename="", text=""):
    """writes a string to a text file
        The name of the file to read
        The text to be written
        returns the number of characters written
    """
    with open(filename, "w", encoding="utf-8") as file:
        return file.write(text)

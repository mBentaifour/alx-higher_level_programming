#!/usr/bin/python3
"""Defining read_file function"""


def read_file(filename=""):
    """Reads filename with utf-8"""
    with open(filename, encoding='utf-8') as f:
        print(f.read(), end="")

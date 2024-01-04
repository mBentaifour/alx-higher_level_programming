#include <stdio.h>
#include <stdlib.h>
#include "lists.h"

/**
 * check_cycle - checks if list en cyclist
 * @list: pointer to list to check
 *
 * Return: 1 if cyclist, 0 other
 */

int check_cycle(listint_t *list)
{
	listint_t *go = list, *fast = list;

	while (fast && fast->next)
	{
		go = go->next;
		fast = fast->next->next;
		if (go == fast)
			return (1);
	}
	return (0);
}

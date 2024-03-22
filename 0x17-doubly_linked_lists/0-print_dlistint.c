#include "lists.h"

/**
 * print_dlistint - doubly-linked list printing
 * @h: address of head node
 *
 * return: size of list
 */
size_t print_dlistint(const dlistint_t *h)
{
	size_t k = 0;

	while (h)
	{
		printf("%d\n", h->n);
		h = h->next;
		k++;
	}
	return (k);
}

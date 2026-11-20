# Resources

High-trust sources for processes, threads, and C on Linux.

## Primary (free, authoritative)

- **Operating Systems: Three Easy Pieces (OSTEP)** — Remzi & Andrea Arpaci-Dusseau, U. Wisconsin.
  https://pages.cs.wisc.edu/~remzi/OSTEP/
  The standard free undergrad OS textbook. Especially:
  - Ch. 4 "The Abstraction: The Process"
  - Ch. 5 "Interlude: Process API" (fork, exec, wait)
  - Ch. 26 "Concurrency: An Introduction"
  - Ch. 27 "Interlude: Thread API"

- **Linux man pages** — https://man7.org/linux/man-pages/
  Maintained by Michael Kerrisk. Definitive on syscalls.
  - `man 2 fork`, `man 2 execve`, `man 2 wait`, `man 2 waitpid`
  - `man 7 pthreads`, `man 3 pthread_create`, `man 3 pthread_join`

- **The Linux Programming Interface** — Michael Kerrisk (book, not free but the gold standard).

## Secondary / gentler
- **Beej's Guide to Unix IPC** — https://beej.us/guide/bgipc/
  Friendly walkthrough of fork, pipes, shared memory, semaphores.
- **Beej's Guide to C Programming** — https://beej.us/guide/bgc/  (C refresher.)

## Communities (for wisdom)
- r/C_Programming — https://reddit.com/r/C_Programming
- Stack Overflow tag `[pthreads]` and `[fork]`
- `##c` on Libera.Chat IRC

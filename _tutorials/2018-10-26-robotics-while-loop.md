---
---

# Python Tutorial 1

## Robotics while loop

The while loop is a convenient way to do the same task over and over again. This
comes up a lot in robotics, where it is often desirable to let something run in
a tight loop forever. A good example of this is code which interfaces with an
instrument. In this case, it is common to write code that simply spends all of
its time checking the instrument for updates, and then publishing that
information.

A simple example of this behavior is demonstrated below using the system clock.
Out of the box, computers are all very good at keeping time, and this code
shows how to publish that information at a constant rate.

{% highlight python linenos %}
import time

starttime = time.time()

while True:
    currenttime = time.time()
    print("Time is %.02f seconds"%currenttime)
    time.sleep(0.1)

{% endhighlight %}

This code is an example of an infinite loop. It will run forever doing
something of questionable importance. To stop the loop, either close the
terminal running python or push <kbd>CTLR</kbd> + <kbd>c</kbd>.

The time printed to the screen is in seconds since January 1st, 1970. This is
known as [Unix epoch time](http://en.wikipedia.org/wiki/Unix_time).

There are several things going on in this code, and since this is a tutorial
they will be broken down line by line.

The first line is an [import](http://docs.python.org/3/reference/import.html)
statement. Quoting from the first line of the python documentation, "Python
code in one module gains access to the code in another module by the process
of importing it." This is a fairly precise definition, but in essence this
allows code to use the requested module.
[time](http://docs.python.org/3/library/time.html?highlight=time#module-time)
is a built in python module, and if python is running this import will
work. This is not always the case, and sometimes getting imports to work is a
real challenge :)

The time module has within it a number of functions that relate to computer
time. The relevant functions are [time](https://docs.python.org/3/library/time.html?highlight=time#time.time)
and [sleep](https://docs.python.org/3/library/time.html?highlight=time#time.sleep).
Though a bit weird perhaps, it is not uncommon in python for a word to be
repeated twice with a period in between, as in line 3.

The [while](https://docs.python.org/3/reference/compound_stmts.html#while)
loop begins on line 5. A particular characteristic of python appears in
this statement. Code blocks which can extend for an arbitrary number of lines
are first ended with the colon character. The code associated with this code
block (in this case a while loop) is then indicated by *indentation*. All
statements below the while loop moved one or more tab spaces in from the while
loop are a part of the while loop.

The [print](https://docs.python.org/3/library/functions.html#print) function
is how the information moves from inside the program to the computer screen.
This is a relatively complicated issue in general for robotics, where
information is moved between many programs frequently. In this example the
simplest method is used, simply printing the information to the terminal. More
complicated information transfer is a topic for a later tutorial, but the print
function is a frequently used first step to understanding a new output.

The print line uses [sting formatting](https://docs.python.org/3/library/stdtypes.html#string-formatting)
to insert a variable into the printed statement. It is possible to simply print
the variable by itself as

{% highlight python linenos %}
print(currenttime)
{% endhighlight %}

This is often simpler to code, but the output is harder to read. Reviewing the
documentation the % character is discouraged, but force of habit is hard to break.



The last line of the while loop is a sleep statement. This is used to free up
the CPU for 1/10 of a second, a long time to a computer. Like the
print statement, the sleep statement is a simple approach to a complicated
topic, in this case [process](https://en.wikipedia.org/wiki/Process_(computing))
management. This method will be extensively
used in the robot and covered further in future tutorials. This design decision
is essentially equivalent to the statement *Nothing needs to be
addressed within 1/10 of a second*.

---

The second example in this tutorial is a slight extension of the first. The
template for a mission task has a few distinctions from the instrument reading
loop show above. In general, these tasks are designed to complete, and good
practice further ensures that all mission tasks terminate by adding a
timeout condition.

{% highlight python linenos %}
import time

isrun = True
starttime = time.time()

while isrun:
    currenttime = time.time()

    # mission completion check
    if False:
        isrun = False

    # timeout condition
    if (currenttime - starttime) > 3:
        break

    print("Time is %.02f seconds"%currenttime)
    time.sleep(0.1)

print("Goodbye World")
{% endhighlight %}

The while loop in this example checks a variable before it begins execution. If
isrun is False, the while loop exits before execution. As written, the while
loop will never terminate in this way, but it might be fun to try and change
this behavior.

The timeout behavior takes place on line 14, which checks the current time and
exits if it has been more than 3 seconds from the start of the loop. The loop
is then immediately terminated with the break statement. The if loop, and the
break statement are examples of [flow control](https://docs.python.org/3.7/tutorial/controlflow.html?highlight=break).

The last action of this code is to print the line "Goodbye World". This shows
how to write code both inside and outside of the while loop.

Well, that is it for now. Hopefully the basic topics covered here will continue
to be useful into the future.

# Programming Concepts Covered

- Architectural layer, design principles within css.

- be excited to share css and explain that to be a full stack developer you will
 need to be able to traverse both front and back end development.

- Note that it is not to early to begin to behave like a developer.

1. Be prepared to ask questions. As to why your code doesn't work.
2. Get better at searching for solutions.

- We don't just jump into code.
A. Talk about it.
B. Learn about it.
C. Then code it.

Note that as a developer you will most likely not get paid to build out an html
page, because we build things progressively, which is why at DeltaV we bounce around
from file to file, creating code and verifying that it works the way we need it to.

## Agenda CSS

<https://github.com/tektechnologies/NoLimitsLife/tree/master/css>

## Recap from Code 101

1. Does anyone remember what css stands for.  

- Share the Separation of Concerns Venn Diagram.
Why - We don't want to void the separation of concerns, its not that we want more
code, but a separation of condensed code that is easily READABLE, AND EDITABLE.
What - So to do that we keep these things separate html(content), css(style),
js(page logic).
How - CSS has its own file or files.

## Discussion Exercise

## From Mockup to Markup

___

## Demo (what?)

HTML document from Scratch.(Start on github. Go through the repo set up) include
a scaffolding walk through.

Questions:

1. What is the <!DOCTYPE html>?
2. What goes in the head tag? Links to CSS and meta information and dependencies.
AT BREAK TIME LET THEM KNOW WHAT TO EXPECT WHEN THEY COME BACK.

- We will check to make sure our style link is working and talk about some of the
pitfalls to page layout. (floats)

Demonstrate ul, ol, and li's.(This is a reminder from the previous lectures 4,
now we are going to add in some anchor tags)
Required vs Not Required Attributes.
href is required, whereas an id attribute on a div would not be "Required".
Now we can talk about href=""

```html
<a href=”www.google.com”>click me</a>
<img src=”coo.png”>
<input  type=”text”>
```

### Attributes

Talk about attributes key value pairs in css same as in html, that the attributes
use the keys to pick up on the value of the key.

#### Some of the tags have content some don't. Some tags like images are the content

Reminder that Navigation usually lives in the header. Then we have main content
and then a bottom to the page.

Mention Image place holders and why they are useful, for wire framing and showing
clients a rough layout of a site in progress.

self run devs -  Explain that you create code and don’t take the pictures.

Mention color scheme.
<https://color.adobe.com/create>
<https://coolors.co/>

#### Mention deprecation

Example the Marquee scroll.

ADD UL, LI, A
Show how it works before adding in the http: broken links are good example to show.

## Show in-line, head, styles

change the background, explain why that is a bad idea and that the solution is a
style sheet is the convention. Explain the link of the style sheet. That we need
to use the rel and href attributes and that the link tag is self closing. While rel
is not as impactful we still include it.

DISCLAIMER We are not going to make this page great today but we are going to
position them correctly on the page.
Start with the * selector to view the page elements.

Mention some common color things like do not use yellow for text.

Now we can add a body tag
and a header tag

Mention now that things are about to get weird, and that's kinda cool.
History of floats, were to wrap text around images,
EXPECTATIONS - Mention that I don't expect that you will perfectly understand how
floats are working, but we can look at a solution that we can keep in our tool box
for later development.

## BREAK TIME AGAIN

Floats are the foundational way for putting things in an area of the page.
Which is a design technique that is not used in the same way. We have adopted
floats to be used with block - level - elements, that sit on top of one another.

So say we put a float left - and all the BLE lined up to one another.
This is great, BUT there will be a box that is touching the above but will not move,
WHY?

### Because floating collapses, the space of our elements

as a result the floats have messed up the flow of your html documents.

FIX: so we add a clear:left to the floated element. and now we don't have float issues.

## Demo Material done

___

Note - What you are seeing me doing is talking about what we are building and then
I am building it out.

-------build html demo ------------
TASK NOW. Lets get the floated box moved down,
Explain the id is a one time grab.
Now, float images left and add 30px of margin to the top.
Now. Show the 30px overlap
CSS# has given us access to the last child that lives in main, so we set margin
right equal to 0.

All that is left if to add the footer.

- Mention a clear both.

if that doesn't work, and it shouldn't. Mention So, I am going to show you how a
developer would do. I am going to add margin bottom to the list, this is how
css works,
WE HAVE IDEAS AND THEN CSS REQUIRES SOMETHING ELSE TO BE DONE. like a game.

## Lab: Wireframe and Build

Our goal for lab is text and color layout design, do not worry about floating, it
does not have to be pretty, what we are looking for is that you are experiencing
with css.

So lets frame the reading, and then head to lunch / power hour.

The idea here and now is that you begin to think through CSS and are aware of the
pitfalls of css, so that you are set up for success in 201.
Ok we are on to lab 5 now.
You are welcome to use what u have so far or start over and build out the html
again. Good time to start googling your questions.

- The whole goal is to link up a css file and add some styles. I wonder how I can
make my color blue,  go to adobes cooler . link up the style sheet. In the course
repo there is an example of that.

## New Vocabulary

## CSS

- We are going to talk about what it is. How it is best formatted.
- I will share some experience with working on the css. That you can rock out to
 css almost like playing a video game.

## DEMO ON WHITE BOARD

Selectors element

- Google only tracks the first h1 on a page.

## KEY : VALUE

- Which will be crucial in your movement into javascript, will be seeing the
property/value pair. We will create these things called objects, that essentially
are holders of key/value pairs that you can grab values from within that object.

### Format

<https://www.freeformatter.com/css-beautifier.html>

<https://www.freeformatter.com/html-formatter.html>

## RGB

The secret to all the colors you see on your computer monitor, and how you can
achieve exactly the color you want, is a system called RGB color. This system uses
just three colors (red, green, and blue) combined together to create all the colors
(including black and white) on your monitor.
RGB Value. In HTML, a color can be specified as an RGB value, using this formula:
rgb(red, green, blue) Each parameter (red, green, and blue) defines the intensity
of the color between 0 and 255. For example, rgb(255, 0, 0) is displayed as red,
because red is set to its highest value (255) and the others are set to 0.

How many colors are in RGB?
16777216
RGB color space or RGB color system, constructs all the colors from the combination
of the Red, Green and Blue colors. The red, green and blue use 8 bits each, which
have integer values from 0 to 255. This makes 256*256*256=16777216 possible colors.

## HSL

What is HSL in HTML?
HSL Colors
HSL stands for hue, saturation, and lightness - and represents a
cylindrical-coordinate representation of colors. ... Lightness is also a percentage;
0% is black, 100% is white.
<https://www.w3schools.com/colors/colors_hsl.asp>

## Hex codes

Hexadecimal numbers are often used to represent colors within HTML or CSS. The
6 digit hex color code should be considered in three parts. By changing the
intensities of red, green and blue, we can create almost any color. ... orange
can be represented as #FFA500, which is (255 red, 165 green, 0 blue)
Basically, the functionality of both color types is the same, meaning they both
will display the same color. Visually, these two color types look different. The
HEX color uses a mix of six numbers and characters, while the RGB color uses three
sets of three numbers with a range of 0 – 255.
So since our hex is all the same digits, we can shorten it to three.
Explain the hexadecimal representation of rgb #    12  34  56
                                                   R   g    b
                                                   <https://www.w3schools.com/colors/colors_hexadecimal.asp>

## Layout

A website is often divided into headers, menus, content and a footer:

## Rule

 This property : value pair is a Declaration.

property1 : property-value1;
property2 : property-value2;

- A CSS RULE - is a grouping of one or more CSS properties which are to be applied
to one more target HTML elements.
- A rule consists a SELECTOR and a set of PROPERTIES.

## Selector

- The Selector determines what html elements to target with the RULE. Selectors
are the part of the css rule that determine what elements are affected.
So, for div {}(Element Selector) , the div tags would be selected.

## *  is the universal selector

So, for .class {}(class selector)
So, for #id {} (id selector)

## Property & value

- CSS properties specifies what style to apply to the targeted elements.

## Curly braces

A CSS declaration always ends with a semicolon, and declaration blocks are surrounded
by curly braces.

## CSS COMMENTS

/*This is a single-line comment*/

/*This is
a multi-line
comment*/

```html

<!-- our default order is 0 like an array.  Start and replacing it with the end and vice versa, end to start by default because of reverse order they  100 115 120 130, order one moves to end means it does not stand for the first, -->

  <div>
  <img src="http://via.placeholder.com/100">  <!--  0  -->
 
  <img src="http://via.placeholder.com/115"><!--  1  This is lexical order with out the css rule it would have laid out in normal order-->

  <img src="http://via.placeholder.com/120"><!-- 0  The order is the order they will layout from left to right-->

  <img src="http://via.placeholder.com/130"><!--  0  At the first flip the 1 will be in this position -->

</div>

```


### styles.css

```css
div {
  display: flex;
  /* Start out with a flex start and then a flex end */
  justify-content: flex-end;
  /* this is saying that we are going to center vertically up and down creating
     spacing on top and bottom of an image or div  */
  align-items: center;
  height: 200px;
  This is reversing the order of our content
  flex-direction: row-reverse;

  /* last try a align-items baseline to show what happens 
  align-items: baseline; 
  
  text and images will try and share the same baseline, same row they written on.
  grid does work with flex , align-items are shared between the two. its the
  content justigy items or content grid vs flex is where some differences are. 
  
  */
  
}


/* we have to pay attention to the order since they are reversed.  */
img:nth-child(2) {
  border: 2px solid red;
  order: 1;
  align-self: baseline;
}

```
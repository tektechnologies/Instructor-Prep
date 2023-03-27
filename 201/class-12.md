# First Hour

# Second Hour

### Take Break 10 Minute

# Third Hour

- welcome to day 12 of 15 for lectures.
- so today is a big day where we are going to add other sources of code to our project.
- and we will also do alot with that code, without having to type a lot of code.

# Announcements

-

## How did bus mall go? Lets see a thumbs

## demo code, use as a ref, was the suggestion

- Hard to navigate between elements?
- you have to understand you code to modify it.
- the idea of navigating different levels of abstraction within your code. Let what works, work. How am I using it to solve another problem. This is a good approach.
- So if I get a piece of code to work I keep it, and if it is not I take it out.
- reading code and commenting on the code along the way is a good way to take that working piece of code, and understand it on the next level.
- How to get results to populate.
- change while loops to for loops.

# Code Review

- Start with git Hub repo, what's good?
- Look at eslinterc.json.

### Explain 301 eslinter

- In 301 we will get a new eslint file to handle the different types of js you will be coding. (so dont copy from 201 eslintrc.json)
- What is in the json file? Any one look?

### what is it doing?

- rules - contain actual data.
- Also json stands for javascript object notation. So it is intended to look like javascript object
- no double == always ===
- indentation 2 spaces
- single not double quotes.
- end of line last error. if we dont have an empty line.

### github red circle example  

- In pull request we can see the angry red cirlce saying we dont have an    empty new line at end of file.
- Most VCS want that new line at end of file.
- which is the purpose of the new line, it is easier for the computer to see the end of the file.
<https://stackoverflow.com/questions/5813311/no-newline-at-end-of-file>
- show how to add a comment to a pull request.
- Class 15 we do a git issue conflict resolution exercise.
- if we can still type in the console. then our page is working.
- What does box-sizing: border-box; - hover over and see description.
- try an go out to docs from the intellisense link.
- width at 100 % includes the border.
- width is the width of the content.
- in conclusion content box is not great. as was used when the web started.
- it ok to apply to everything on the page.

[https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

### check git hub repo

### Check html very well, talk about it

### Talk about styles as well

- it is entirely reasonable to build out the basic html and then to move on to the logic.

#### then look at the javascript

- with a class name we could potentially get back more than one element.
-html collection actually looks like an array.
- in console type ```js imageElements```
- we now have the img elements
- having the class means we can avoid grabbing images we dont want.
```js  document.getElementsByTagName('img');```

### Begin to work through the javascript

- Constructor has the all array where all our objects that are created get stored.

### we can look at the constructor and do this

- new Product('bag');
- In the constructor, for img url
- We will say

```js
this.image = `image/${name}.jpg';
//must all be jpg. 

```

- set a extension manually.
- after the prodcut is added,

```js

allProducts[allProducts.length - 1].imageUrl = 'image/usb.gif'; 

 ```

- You could also pass the extension in the constructor.

```js
//Default parameter, you dont need to know this but it is cool. 
//Any time we dont use the jpg it will be set for use, then use the gif as the second param
    function Product(name, extension = 'jpg'){
        this.imageUrl = `image/${name}.${extension}`;
    }


```

# First Break

- After break more bus mall
- Look at render, of click data

```js
    if(totalClicks >= 25){
        for(var i = 0; i < imageElements.length; i++)
        imageElements[i].removeEventListener('click', imageWasClicked);
    }
    makeList();
    }

```

```js

    function makeList(){
        var listContainer = document.getElementByTagName('ul')[0];
        for(var i = 0; i < allProducts.length; i++){
            var listItem = document.createElement('li');
            listItem.textContent = `${allProducts[i].name}: ${allProducts[i].timesClicked} + votes, ${allProducts[i].imageViews} + views.`;
            listContainer.appendChild(listItem);
        }
    }

```

#### Expectations

- You should start to feel as if this pattern is becoming more familiar, I dont expect you to understand everything that is happening, but it should not be as scary as it was first week to dig into the code and see what it is doing and maybe even review past solutions from salmon cookies.

- js have this idea of truthyness, where If(event) will say it tis true.
- set productIndex to -1 to get the initial 3 images to show up.

- Be aware that we are artifically inflating the count when displaying the images initially.

While to for loop

for (;  logic ;)

- But it will be less readable than the while loop,
- so we dont do an increment, we need to do some work before we stop.
- Sad version one. example because it is so not readable.
- There is probably a cleaner way to do the for loop.
- I think that ends our review, what questions do you have before we return to pizza.  

#### Todays new feature task

- todays work is lighter than yesterday,
- When we start out an app there are extra things we hae to set up.
- Lets look at chart js.
- <https://www.chartjs.org/>
- main new feature.
- we have used external sources before with the reset css file.
- but there are some differences
- so lets talk about external resources that we add into our project.
- We know that linking to things like images on other sites is a bad idea, Why?  30 sec.
- it is possible that the link could change and that would break your image.
- could not have copyright?
- Benefits is that CDN are free, it is a piece of code that someone has decided that it is important an needs to live on servers all orver the world,
- Look at th wiki for CDN.

- Chart.js, pays to have their code distributed,
- Sometimes corps, fund the librarys' so that they can use them as well. for the life of their products.
- many times devs, will band together to create a solution.
- point in case is sugar crm and suitecrm.
- Visit Chart.js, what is it.
- They tell us, what it is and who it is for.
- designers means that this is a product that could potentially be used by non devs',
- and that they sent some time on it and it has intentional design elements added in.

### you can download from git hub or the cdn

#### Click show and configure

- it lists a bunch of files
- pop quiz which of these files do we want to use.
- just the js is what I need,
- the read me is maybe just how it works.
- Do we need the license? no, its mit so use it.
- so we have a couple of choices on what we need to add.
- lets do the html output and copy and paste.
- add cdn link to bottom of the page.
- check console for script tag errors.

## show a bad script tag link error in the console

- type Chart into the console.
- what data type is it
- does it have params
- what are there names.
- click on function it goes to minified code.
- DO we want to write code like this?
- No, or hell no. is acceptable response.
- js minifiers do the work to minify, means white space has been removed and shorten var names, to single char.
- to make it easier to download.
- at the top of the page, click {}
and it will format for you. looks better but is still hard to read. 8000 chars worth of band width that was not taken up.

# Second Break

- we are going to use canvas to get our chart js to render.
- we will render once we get 25 clicks to our page.
- in the footer add our canvas

```js
<canvas id="myChart" width="400" height="400"></canvas>

```

- Then lets grab the js code in app.js
- two lines of code
- one is straight forward var ctx. gives me the chart on the page that is 2d. Because it is a 2 demensional chart.
- two, we have a function expression. with a key value pair with an object of how I want to create my chart, so we have all that laid out.
- lets add it in to see if we can get it to render and then we will make it our own.
- make sure to add or leave the textContent set up from you picked things. - so that the getContext will error then debugg.
- run the script.
- chart will appear.
- Canvas and chartjs will take up as much space as you give it.
- we set a width and height. ut it does what it wants.
- So to constrane that we give the footer a max width. as long as what it is inside of is constrained.

## lets look at the data object

- I can mostly figure out how this is working.

- make comments in the chart?

- what does the labels do? // text at bottom
- what does the datasets do? //numbers on the side and what data type is datasets [array]
- inside the array, what data type do we have? its an array of objects.
- this allows us to have multiple peices of data in our chart.

- what does this label do? // this is the header or key or legend.

- what do's this data do? // our values in the chart, y axis just goes up to beyond the highest number.
- look at options for further settings .
- go to website and look at styling the page, what are ticks'
- read detailed documentation.
- set step size to be 5 between each number.
- stack over flow is good to find info as well.
- In lab do not use my code, do the same thing to set up your project as I did.
- labels should be names of pizza. In an array.
- in console. allPizzas.name is not a property.
allPizzas[0].name
so we could do
allPizzas[0].name
allPizzas[1].name
allPizzas[2].name
- but we dont want to write all that out, but there is a better way to go about it, lets look at how we can write this code better.
- Lets make a function. getPizzaNameArray
- needs to return an array.

```js
    function getPizzaNameArray(){
        var answer = [];
        //something happens
        return answer;
    }

```

- Then

```js
    function getPizzaNameArray(){
        var answer = [];
        for(var i = 0; i < allPizzas.length; i++){
            answer[i] = allPizzas[i].name;
        }
        return answer;
    }

```

//call it.
labels: getPizzaNameArray();

- The data is the other thing that I want to change, lets creat a function to make an array that collects numbers on our pizza votes.

```js
    function getPizzaClicksArray(){
       var answer = [];
       for(var i = 0; i < allPizzas.length; i++){
        answer[i] = allPizzas[i].timesClicked;
       }
    }
   // call it
   //getPizzaClicksArray();
```

- lab assignment how many times it was picked out of how many times it was shown.
- show every image once before it repeats. stretch goal.

- so now lets clean up our code.
- match up colors to the amount of pizzas' we have.
- if we removed colors it will just show the two colors and then everything else will be grey.

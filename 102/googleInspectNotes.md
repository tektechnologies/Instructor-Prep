#
Debugging
Mizuxe's website. 
#### Open Dev tools - there are several ways. cntrl + shift + i .

Organize in the window in several different ways. 
Try ipad second screen. 
#### With in the window you can look at various devices and sizes. 

Elements
you can toggle css classes 
you can select page content by clicking on the html
you can use the box arrow to hover + click on page content to find the html in the page running the content.
You can use the dev tools as a text editor if you set it up to a local work space. 
you can add html attribute to an html element. 
you can remove stuff from the dom. 
you can copy and paste elements to diffent locations within the page. 
you can set the state of an element, like hover for a button to see the view. 
we can directly update styles by changing class attributes on the elements. There will be connected css styles maybe bootstrap and offer intelli prompts for code usage. 
we can colors we a color wheel. 
we can use an eye dropper tool. 
we can change numeric value. 
we can add new styles. add id to element.
click on computed and it shows us the box model, along with specific styles of the element

How do 'Event Listeners work' button?
we can use the filter search to search color, padding, any style. 


Console
$0
$1 and so on to get the list of elements of what you have selected.
document.querySelector('h1').style.color = 'red' will change the page h1 to red. 
another way similar to jquery
$('h1').style.color = 'blue';
reload to reset page defaults
ctrl + shift + j

can click esc.
add script tag into html 
console.log('hello');
console.log(myVar); //uncaught ref error
console.error('This is an Error.');
console.warn('This is a Warning Will Robinson.');
console.dir(document);
console.log(document.URL);
Check out his DOM course on youtube

console.table([{name: 'Craig', email: 'test@test.com', age: 29}]);

you can show custom views by checking or unchecking. default levels. 
console.clear(); // clears console. 
console.group('Say Hello');
console.group('Say Hello Eddie');
console.group('Say Hello Margo');
console.group('Say Hello Todd');
console.groupEnd('Say Hello');

console.time('For Loop');
for(var i = 0; i < 2000; i = i + 1){
    console.log(i);
}
consol.timeEnd('For Loop');

function greaterThan(x, y){
    console.assert(x > y, 
                    {'Message' : 'x is not greater than y', 'x' : x,    'y': y});
}
greaterThan(4, 5); //Fails

greaterThan(10, 5); //works nothing happens

settings allow us to hide network, preserve log, log xmlhttpreq
show time stamps, autocomplete from history. 


Sources
we can create snipets of code 
we can save the code and code runs in console, 
its a code manager
we can use it as a text editor
we can add a work space and a folder to it to save to our local copy in our editor.
we can add a style.css file for a style sheet to run new styles on our local copy it will also link these updates to the code editor where the project lives. 

Network
shows us all the files that are loading in the url. 
gives us a graph
filter types of resources
xhr - ajax. 
ws web socket, 
the live server status codes. headers we get request methods, status and mor, we can preview code, response, cookies timing.

check out his ajax crash course. 
ajax. 
document.querySelector('button').addEventListener('click', getUsers);

function getUsers() {
    //allows us to make ajax calls. 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function(){
        if(this.status == 200){
        console.log('Users returned');
        }
    }
xhr.send();
}
console says users returned if we look at the xhr, we can see the users that were returned, the headers and status and request type the response gives us the json response. 



            <!-- var users = JSON.parse(this.responseText);
            var output = '';
            for(var i in users) {
                output +=
                '<div class="user">' +
                '<img src="'+users[i].avatar_url+'" 
                    width="70" height="70">' +
                    '<ul>' +
                    '<li>ID: 'users[i].id+'</li>' +
                    '<li>Login: 'users[i].login+'</li>' +
                    '</ul>' +
                    '</div>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
} -->



Application
we can look at local storage, session storage, in browser databases.
add a js local storage. 

localStorage.setItem('name', 'Craig');
console.log(localStorage.getItem('name'));

click on local storage. 
localStorage.clear('name');
session storage has same api, but goes away at session end. 
sessionStroage.setItem('car', 'tesla');
when browser closes it is cleared. 

document.cookie = "username=John Tesla";


Audits Tab. that gives us some ratings and performance 
and be aware of the server you are running on. 
once you have scores on your site you can deep dive into the issues that your site faces. it will show opportunities for improvements as well. 



Performance



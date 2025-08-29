1.what is difference between getElementById,getElementByClassName,quarySelecter(),querySelecterAll()
Anser = getElementById = returns (single Element), selecter type (id only), example(document.getElementById("")
        getElementByClassName =returns (html collection like an array), selecter type (any valid css selecter), example(document.getElementByClassName("")
        getElementByClassName =returns (the first element that matches the selecter), selecter type (class name), example(document.getquerySelecter("id/class")
        getElementByClassName = returns (All matching element), selecter type (css selecter), example(document.getquerySelecterAll(".card") 
        
  2. how do you create and insert a new eleement into the dom?
     ans =
      Create the element
     const newDiv = document.createElement("div");

 Set content or attributes
newDiv.textContent = ("New Card")
newDiv.classList.add("card");
 Insert into the DOM
document.body.appendChild(newDiv);
 use container.appendChild(newDiv);

3.what is event bubbling and how it work ?
ans = <div onclick ="console.log('div')">
      <button onclick ="console.log('btn')" Click Me <\button>
      <\div>


4.what is event delegation? why is it useful? 
anser =  document.querySelecter("list").addEventListener("click",function (e){
  if (e.target.tagName === "li") {
  alert ("you clicked: " + e target.textContent);
  });

5. what is difference between preventDefault() and stopPropagation()
     ans =
           preventDefault() =stops a form from submitting the page.
           stopProPagation() =prevent parent  onclick form firing after clicking a child.
  

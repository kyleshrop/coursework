API calls and Postman setup:

Can use variables addended to the url that are prefaced by ?
        EX: ?myvar=<value>

Big takeaways:
    Can update a value in a Get or a Post
    use the variable that is implemented in the URL

Postman can do the same thing from the Desktop app from a UI
    Save multiple values and test edge cases more effectively due to being eaisily scalable    


    <console.log()> method outputs a message to the web console

    <toUpperCase()> method alters an inputted screen to upper case
        usage: textvariable.toUpperCase()


  <res> is the Response from the API 

  <req> is the Request to the API

  Restful API = Uses all of the Endpoints not just the essential (GET and POST)


Impt:
making a dictionary as a response:
    pseudo-code:
    response.send({this dictionary})

    res.send({<i1> : <value>, <i2> : <value>})
    
    Cool JS shortcut:
       you can use a variable and it will dynamically use the variables name as the index and the value as its shown value!


Define simple variables:
    const var1=value
    let var2=value2


Template Strings ( `You place text in here while prefacing variables with ${var}` )

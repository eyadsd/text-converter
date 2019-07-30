String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

function convert_randomly() {
    
    var x = document.getElementById("textarea1");
    var text =  x.value;
    for (let i=0 ; i<text.length;i++)
    {
        var random_boolean = Math.random() >= 0.5;
        if(random_boolean)
        {
            text = text.replaceAt(i, text[i].toUpperCase() )
        }
    }
    document.getElementById("new-text").textContent = text;
  }

  function convert_alternating() {
    
    var x = document.getElementById("textarea1");
    var text =  x.value;
    for (let i=0 ; i<text.length;i++)
    {
        if(i%2!=0)
        {
            text = text.replaceAt(i, text[i].toUpperCase() )
        }
    }
    document.getElementById("new-text").textContent = text;
  }
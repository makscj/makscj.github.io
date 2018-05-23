

function changeContent(name){

    // let selection = d3.select("div#content")


    // console.log(selection)
    // console.log(name)

    // console.log("partials/" + name + ".html")

    let file = "partials/" + name + ".html"

    console.log(file)

    d3.text(file, function(loaded){
        d3.select("div#content").html(loaded)
    })

    
}
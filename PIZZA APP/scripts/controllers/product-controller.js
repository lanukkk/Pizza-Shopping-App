// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer
// Data Exchange B/w View and Model.

window.addEventListener(
    'load',bindevents()
)

function bindevents(){
    document.getElementById('clickme').addEventListener(
        'click',
        ()=>{
            alert("hello")
        }
    )

}
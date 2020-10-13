document.addEventListener("DOMContentLoaded",() => {

    fetchCards()
    createForm()
})

//Globals 
const Base_Url = "http://127.0.0.1:3000"
    
//Create
function createForm(){
    let cardForm = document.getElementById("card-form")

    cardForm.innerHTML +=
    `
    <form>
        Title : <input type="text" id= "title"><br>
        Pic_Sm : <input type="text" id= "pic_sm"><br>
        Pic_Lg : <input type="text" id= "pic_lg"><br>
        <input type= "submit" value="Create Card">
    </form>
    `
    cardForm.addEventListener("submit",cardFormSubmission )
}

function cardFormSubmission(){
    event.preventDefault()
    let title = document.getElementById("title").value
    let pic_sm= document.getElementById("pic_sm").value
    let pic_lg= document.getElementById("pic_lg").value
    
    let card = {
        title: title,
        pic_sm: pic_sm,
        pic_lg: pic_lg
    }

    let configObj = {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    }
    fetch(`${Base_Url}/cards`,configObj )
        .then(resp => resp.json())
        .then(card => {
            let c = new Card(card.id, card.title, card.pic_sm, card.pic_lg)
            c.renderCard()
        })

}

//Read
function fetchCards(){
    fetch(`${Base_Url}/cards`)
        .then(response => response.json())
        .then(cards => {
            for(const card of cards){
                let c = new Card(card.id, card.title, card.pic_sm, card.pic_lg)
                c.renderCard()
            }
        })
}

//Edit/Update
function editCard(){
    alert("Edit button clicked");
}


//Delete
function deleteCard(){
    event.preventDefault()
    let targeted_button = event.target
    let id_of_targeted_button = parseInt(targeted_button.id)

    const configObj = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } 
    }

    fetch(`${Base_Url}/cards/${id_of_targeted_button}`,configObj )
    event.target.parentElement.remove()
}
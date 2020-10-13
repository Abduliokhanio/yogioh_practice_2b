class Card{
    constructor(id, title, pic_sm, pic_lg){
        this.id = id;
        this.title = title;
        this.pic_sm = pic_sm;
        this.pic_lg = pic_lg;
    }

    renderCard(){
        let cardDiv = document.getElementById('card-collection')
        
        let html = `
                    <div id = "ind-card">
                        <p>====================<p>
                            <img src=${this.pic_sm} alt=${this.title}>
                            <p>${this.title}</p>  
                            <button onclick="editCard()" type="Edit button">Edit</button>
                            <button class= "delete-button" id=${this.id} onclick="deleteCard()" type="Delete button">Delete</button> 
                        <p>====================<p>
                    </div>
                    `
        cardDiv.innerHTML += html

    }

}
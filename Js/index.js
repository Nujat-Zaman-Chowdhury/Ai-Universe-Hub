
const loadData= async(isSeeMore)=>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools = data.data.tools;
    // console.log(tools);
    allTools(tools,isSeeMore);
}

const allTools = (tools,isSeeMore)=>{
    
    // console.log(isSeeMore);
    if(!isSeeMore){
        tools = tools.slice(0,6)
    }
    else{
        const seeMoreBtn = document.getElementById('see-more-btn');
        seeMoreBtn.classList.add('hidden');
    }
    const cardContainer = document.getElementById('card-container');
    tools.forEach(tool => {
        const cardId = tool.id;
        // getId(cardId);
        const features = tool.features;
        const card = document.createElement('div');
        card.classList.add("card", "shadow-xl", "rounded-lg", "p-4","bg-base-100");
        card.setAttribute('onclick',`my_modal_5.showModal(); getId('${cardId}')`);
        card.innerHTML  =`
        <figure><img src="${tool.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <div class="card-title">Features:</div>
                  
                </div>
                
        `
       
        // const toolName = tool.name;
        
        // const publish = tool. published_in;
        // console.log(toolName,publish);
       
        let count = 1;
        features.forEach((feature)=>{
            
            const featureElement = feature;
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.textContent = count+ ". " + featureElement;
            
            
            div.appendChild(p);
            card.appendChild(div);
            
            count++;
        })
        const hr = document.createElement('hr');
        hr.classList.add("my-4","bg-[#11111133]");

        card.appendChild(hr);
        

        cardContainer.appendChild(card);

    //    console.log(tool);
       
       
    });

    
    
 
}

const getId= async(id)=>{
    
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    const tool = data.data;
    showDetails(tool);
}

//handle showDetails
const showDetails = (tool)=>{
    
    const modalContainer = document.getElementById('modal-container');
    
}

//handle see more btn
const handleSeeMore= ()=>{
    loadData(true);
}
//handle show Details
// const showDetails =(id)=>{
//     console.log(id);
// }

loadData();
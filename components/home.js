
let container=document.querySelector("#container");
    const openRepo = (data) => {

        console.log("openfunction")
        let dp=document.createElement('img');
        dp.src=data[0].owner.avatar_url;
        
        console.log(dp)
        container.append(dp);
        // let repos=document.getElementById("");
        // repos.innerHTML=null;

        console.log("SHAreing code",data);
        data.forEach(({name,description})=>{
            let div = document.createElement('div');

            let naam = document.createElement('h3');
            naam.innerText=name;

            let des =document.createElement('p');
            des.innerText=description;

            div.append(naam,des);
            console.log(div)
            container.append(div);
        })
    }

export default openRepo;
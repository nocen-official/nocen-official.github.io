$.get('./json/main.json', (data)=>{
    let minEdu = `
    <ul>
    <li>
        <a href="./${data.updates[0].link}">
        <h2>${data.updates[0].topic}</h2>
        <img src="./icons/${data.updates[0].image}" alt="Hello"/>
        </a>
    </li>

    <div>
    <li>
    <a href="./${data.updates[0].link}">
    <h2>${data.updates[0].topic}</h2>
    </a>
    </li>

    <li></li>
    <li></li>
    <li></li>
    </div>

    </ul>
    `

    $("#headLines").html(minEdu)
})
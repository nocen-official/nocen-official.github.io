$.get('./json/main.json', (data)=>{
    let minEdu = `
    <h1>Top Headlines:</h1>
    <ul>
    <li id="headline_list_first_child">
    <a href="./${data.events[0].link}">
    <img class="headline_img" src="./gallery/${data.events[0].image}" alt="photo"/>
    <h2>${data.events[0].topic}</h2>
    </a>
    </li>

    <div>
    <li>
        <a href="./${data.updates[0].link}">
        <img class="headline_sub_img" src="./icons/${data.updates[0].image}" alt="photo"/>
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

// mobile menu
let nav_counter = 0
$("#mobile_menu").on("click", ()=>{
    nav_counter++
    if (nav_counter == 1) {
        $(".side_bar").css({"height":"100vh", "width":"100%", "position":"absolute"})
        $(".side_bar span").show()
        $("#nav").hide()
    } else {
        $(".side_bar").css({"height":"auto", "width":"20%", "position":"absolute"})
        $(".side_bar span").hide()
        $("#nav").show()
        nav_counter = 0
    }
})

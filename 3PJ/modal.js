window.onload = function() {
    let modal = document.getElementById("modal");
    for(let i = 1; i <= 31; i++) {
        document.getElementById("d" + i).addEventListener("click",function() {
        modal.style.display = "block";
        if(i < 10) document.getElementById("input_date").value = "2020-11-0"+ i;
        else document.getElementById("input_date").value = "2020-11-"+ i;
        })
    }

    let btn_close = document.getElementById("btn_close");
    btn_close.addEventListener("click", function() {
        if(document.getElementById("input_content").value == "") {
            document.getElementById("input_content").value = "";
            document.getElementById("start_time").value = "";
            document.getElementById("end_time").value = "";
            let modal = document.getElementById("modal");
            modal.style.display = "none";
        } else {
            let save_check = document.getElementById("save-check");
            save_check.style.display = "block";
        }
    })

    let save_check_yes = document.getElementById("save-check-yes");
    save_check_yes.addEventListener("click", function() {
        let save_check = document.getElementById("save-check");
        save_check.style.display = "none";
        document.getElementById("input_content").value = "";
        document.getElementById("start_time").value = "";
        document.getElementById("end_time").value = "";
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    })
    
    let save_check_no = document.getElementById("save-check-no");
    save_check_no.addEventListener("click", function() {
        let save_check = document.getElementById("save-check");
        save_check.style.display = "none";
    })

    let btn_add = document.getElementById("btn_add");
    btn_add.addEventListener("click", function() {
        let modal_date = document.getElementById("input_date").value;
        let modal_day = modal_date.substring(8,10);
        if(modal_day < 10) modal_day = modal_date.substring(9,10);
        console.log(modal_day);

        let event = document.createElement("div");
        event.className = "event";

        let event_desc = document.createElement("div");
        event_desc.className = "event-desc";
        event_desc.textContent = document.getElementById("input_content").value;
        
        let event_time = document.createElement("div");
        event_time.className = "event-time";
        event_time.textContent = document.getElementById("start_time").value + " to " + document.getElementById("end_time").value;

        event.appendChild(event_desc);
        event.appendChild(event_time);
        console.log(event);

        document.getElementById("d"+ modal_day).appendChild(event);

        document.getElementById("input_content").value = "";
        document.getElementById("start_time").value = "";
        document.getElementById("end_time").value = "";
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    })

    let event = document.createElement("div");
    event.className = "event";

    let event_desc = document.createElement("div");
    event_desc.className = "event-desc";
    event_desc.textContent = "여기는 스케쥴 내용";

    let event_time = document.createElement("div");
    event_time.className = "event-time";
    event_time.textContent = "15:00 to 21:00";

    event.appendChild(event_desc);
    event.appendChild(event_time);
    console.log(event);

    document.getElementById("d4").appendChild(event);
    

}
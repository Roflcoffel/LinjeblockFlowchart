
function preload() {}

function setup() {
    createCanvas(w, h)
    textFont('Roboto');
    textSize(font_size);
    DrawLinje()
}

// I only need to draw once!
// Call this function to update the mode
function DrawLinje() {
    background(255)
    cur_linje = GetActiveMode()
    let lb
    console.log(cur_linje)
    if(cur_linje == "Vändning") {
        lb = new LinjeVändning()
    }
    else if(cur_linje == "Körning") {
        lb = new LinjeKörning()
        h = 3000
        resizeCanvas(w,h)
    }
    else {
        console.log("Active mode not found!")
        return
    }

    lb.Draw()
    strokeWeight(2);
    for (const name in lb.sections) {
        DrawRelayConnections(lb.sections[name])
    }
}

function GetActiveMode() {
    let complexs = document.getElementsByClassName("complex")
    let active
    complexs.forEach(element => {
        if(element.classList.contains("active")) {
            active = element
        }
    });
    return active.attributes["data-linje"].value
}

function draw() {}

function DrawRelayConnections(section) {
    let structure = section[0]
    
    let all_vert = []
    for (let i = 0; i < structure["v"].length; i++) {
        const vert = structure["v"][i];
        all_vert.push(section.filter((v) => {return v.offset == vert}))
    }
    
    let all_hor = []
    for (let i = 0; i < structure["h"].length; i++) {
        const hor = structure["h"][i];
        all_hor.push(section.filter((h) => {return h.row == hor}))
    }

    //Draw all vertical
    //Made a special case for N1 which is connected
    //to an empty ("") object, to create a parallel line.
    //may need to create a special object for parallel objects
    //which then by the current system gets treated as 1 symbol
    let end = 5
    for (let j = 0; j < all_vert.length; j++) {
        const vertical = all_vert[j];
        for (let i = 0; i < vertical.length; i++) {
            const text = vertical[i];
            if(text.visual === "N1") {
                end = -10
            }
            if(i+1 < vertical.length) {
                line(text.x, text.y+5,vertical[i+1].x,vertical[i+1].y-font_size+end)
            }
        }
    }

    //Draw all horizontal
    let offset = 15
    for (let j = 0; j < all_hor.length; j++) {
        const horizontal = all_hor[j]
        line(horizontal[0].x, horizontal[0].y-font_size-10, horizontal[horizontal.length-1].x, horizontal[horizontal.length-1].y-font_size-10)
        for (let i = 0; i < horizontal.length; i++) {
            const text = horizontal[i];
            if(text.visual === "") {
                offset = 0
            }
            line(text.x, text.y-font_size-10, text.x, text.y-font_size-10+offset)
        }   
    }
}

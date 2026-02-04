//Flowchart Text Object
class fcTitle {
    constructor(txt, row, offset) {
        this.txt = txt
        this.offset = offset
        this.row = row
        this.x = width/2+offset,
        this.y = fcGap*row
    }

    Draw() {
        if(typeof this.txt == "string") {
            let tw = textWidth(this.txt)
            let half_tw = tw/2
          
            fill(255,0,0)
            //line(this.x-half_tw, this.y+5, this.x+tw-half_tw, this.y+5)
            text(this.txt, this.x-half_tw, this.y)
            fill(0)
        } 
        else {
            console.log("Invalid 'this.txt' value")
        }
        
    }
}
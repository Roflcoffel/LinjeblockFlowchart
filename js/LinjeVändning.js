// The first object defines which relays are vertical and which are horizontal
// Vertical are indicated with and offset, all relays on x=100 should be on the same vertical
// Horizontal are indicated with the row number, all relays on row=[1,3] should be on the same horizontal

// Notice! a horizontal line is always drawn from the left most to the right most.
class LinjeVändning {
    constructor() {
        this.sections = {}
        this.title = {
            "DA": new fcTitle("Driftplats A", 1, 0),
            "DB": new fcTitle("Driftplats B", 10, 0),
            "BlockAB": new fcTitle("Blockdel B->A", 6, 0),
            "BlockBA": new fcTitle("Blockdel A->B", 15, 0),
            "DALIK": new fcTitle("Driftplats A Likström in", 19, 0)
        }

        this.sections["DA"] = [
            {"v": [0], "h": [2, 4]},  
            new fcTxt("Lm L1", 0, 2, FALLER), 
            new fcTxt("Ri L1 B", 0, 3, DRAR),
            new fcTxt("Ut", 0, 4, DRAR),
            new fcTxt("V L1", 100, 4, FALLER),
            new fcTxt("Linje ej fri", 0, 5, FALLER)
        ]

        this.sections["BlockAB"] = [
            {"v": [0], "h": []},
            new fcTxt("L+L4", 0, 7, FALLER),
            new fcTxt("Ljg L4", 0, 8, FALLER),
            new fcTxt("Ljr L4", 0, 9, DRAR),
        ]

        this.sections["DB"] = [
            {"v": [0], "h": [12]},
            new fcTxt("Li L2", 0, 11, FALLER),
            new fcTxt("Linje ej fri", -150, 12, FALLER),
            new fcTxt("V L2", 0, 12, DRAR),
            new fcTxt("Ri L2 F", 0, 13, DRAR),
            new fcTxt("In", 0, 14, DRAR)
        ]

        this.sections["BlockBA"] = [
            {"v": [0], "h": []},
            new fcTxt("L+L3", 0, 16, DRAR),
            new fcTxt("Ljg L3", 0, 17, DRAR),
            new fcTxt("Ljr L3", 0, 18, FALLER)
        ]

        this.sections["DALIK"] = [
            {"v": [0,150], "h": [21]},
            new fcTxt("Li L1", 0, 20, DRAR),
            new fcTxt("V L1 (Dpl B)", -200, 21, FALLER),
            new fcTxt("Linje fri", 0, 21, FALLER),
            new fcTxt("Ljg L1", 150, 21, DRAR),
            new fcTxt("Ljf L1", 300, 21, DRAR),
            new fcTxt("Ljr L1", 150, 22, FALLER)
        ]
    }

    Draw() {
        strokeWeight(4);
        for (const name in this.title) {
            this.title[name].Draw()
        }

        for (const name in this.sections) {
            for (let i = 1; i < this.sections[name].length; i++) {
                this.sections[name][i].Draw()
            }
        }
       
    }
}
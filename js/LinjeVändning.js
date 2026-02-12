// The first object defines which relays are vertical and which are horizontal
// Vertical are indicated with and offset, all relays on x=100 should be on the same vertical
// Horizontal are indicated with the row number, all relays on row=[1,3] should be on the same horizontal

// Notice! a horizontal line is always drawn from the left most to the right most.
class LinjeVändning {
    constructor() {
        this.sections = {}
        this.title = {
            "DA": new fcTitle("Driftplats A", 1, 50),
            "DB": new fcTitle("Driftplats B", 9, 50),
            "BlockAB": new fcTitle("Blockdel B->A", 5, 50),
            "BlockBA": new fcTitle("Blockdel A->B", 13, 50),
            "DALIK": new fcTitle("Driftplats A Likström in", 16, 50)
        }

        this.sections["DA"] = [
            {"v": [50], "h": [2, 4]}, 
            new fcTxt("V L1", -100, 2, DRAR), 
            new fcTxt("Lm L1", 50, 2, FALLER), 
            new fcTxt("Ri L1 B", 50, 3, DRAR),
            new fcTxt("V L1", -100, 4, FALLER),
            new fcTxt("= in", 50, 4, FALLER),
            new fcTxt("~ till DpB", 200, 4, FALLER)
        ]

        this.sections["BlockAB"] = [
            {"v": [50], "h": []},
            new fcTxt("Ingen =", 50, 6, FALLER),
            new fcTxt("L+L4", 50, 7, FALLER),
            new fcTxt("Linjen rasar till stopp", 50, 8, FALLER),
        ]

        this.sections["DB"] = [
            {"v": [50], "h": [12]},
            new fcTxt("Li L2", 50, 10, FALLER),
            new fcTxt("V L2", 50, 11, DRAR),
            new fcTxt("= till Bl", -100, 12, FALLER),
            new fcTxt("Ri L2 F", 50, 12, DRAR),
        ]

        this.sections["BlockBA"] = [
            {"v": [50], "h": [14]},
            new fcTxt("= in", -100, 14, FALLER),
            new fcTxt("L+L3", 50, 14, DRAR),
            new fcTxt("= till DpA", 50, 15, FALLER)
        ]

        this.sections["DALIK"] = [
            {"v": [50], "h": [18]},
            new fcTxt("Li L1", 50, 17, DRAR),
            new fcTxt("Ljg L1", 50, 18, DRAR),
            new fcTxt("Ljr L1", 200, 18, FALLER)
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
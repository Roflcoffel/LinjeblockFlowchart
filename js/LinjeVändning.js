// The first object defines which relays are vertical and which are horizontal
// Vertical are indicated with and offset, all relays on x=100 should be on the same vertical
// Horizontal are indicated with the row number, all relays on row=[1,3] should be on the same horizontal

// Notice! a horizontal line is always drawn from the left most to the right most.
class LinjeVändning {
    constructor() {
        this.sections = {}
        this.title = {
            "DA": new fcTitle("Driftplats A", 1, 50),
            "DB": new fcTitle("Driftplats B", 5, 50),
            "Block": new fcTitle("Blockdel", 8, 50),
            "DALIK": new fcTitle("Driftplats A Likström in", 11, 50)
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

        this.sections["DB"] = [
            {"v": [50], "h": [7]},
            new fcTxt("V L2", 50, 6, DRAR),
            new fcTxt("= till Bl", -100, 7, FALLER),
            new fcTxt("Ri L2 F", 50, 7, DRAR),
            new fcTxt("Li L2", 200, 7, FALLER)
        ]

        this.sections["Block"] = [
            {"v": [50], "h": []},
            new fcTxt("L+L3", 50, 9, DRAR),
            new fcTxt("= till DpA", 50, 10, FALLER)
        ]

        this.sections["DALIK"] = [
            {"v": [50], "h": [13]},
           new fcTxt("Li L1", 50, 12, DRAR),
           new fcTxt("Ljg L1", 50, 13, DRAR),
           new fcTxt("Ljr L1", 200, 13, FALLER)
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
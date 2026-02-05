// The first object defines which relays are vertical and which are horizontal
// Vertical are indicated with and offset, all relays on x=100 should be on the same vertical
// Horizontal are indicated with the row number, all relays on row=[1,3] should be on the same horizontal

// Notice! a horizontal line is always drawn from the left most to the right most.
class LinjeKörning {
    constructor() {
        this.sections = {}
        this.title = {
            "DA": new fcTitle("Driftplats A", 1, 0),
            "DAUT": new fcTitle("Lämnar Dp A", 6, 0),
            "DARE": new fcTitle("Dp A Återställs", 11, 0),
            "Block": new fcTitle("Blockdel", 15, 0),
            "DB": new fcTitle("Driftplats B", 23, 0),
            "DBIN": new fcTitle("Helt inne i DpB", 29, 0)
        }

        this.sections["DA"] = [
            {"v": [0], "h": [3]}, 
            new fcTxt("Mag 1/5-L1", 0, 2, DRAR), 
            new fcTxt("Lm L1", 0, 3, FALLER),
            new fcTxt("V L2", 150, 3, FALLER),
            new fcTxt("Ljg L1", 0, 4, DRAR),
            new fcTxt("Ljr L1", 0, 5, FALLER)
        ]

        this.sections["DAUT"] = [
            {"v": [0], "h": [8]},
            new fcTxt("SL1a (S8)", 0, 7, FALLER),
            new fcTxt("Li L1", -150, 8, FALLER),
            new fcTxt("Sp L1", 0, 8, FALLER),
            new fcTxt("Ljg L1", 0, 9, FALLER),
            new fcTxt("Ljr L1", 0, 10, DRAR)
        ]

        this.sections["DARE"] = [
            {"v": [0], "h": [14]},
            new fcTxt("S8", 0, 12, DRAR),
            new fcTxt("LL1 F", 0, 13, DRAR),
            new fcTxt("Lm L1", 0, 14, DRAR),
            new fcTxt("Sp L1", -150, 14, DRAR)
        ]

        this.sections["Block"] = [
            {"v": [0], "h": [17]},
            new fcTxt("SL3a", 0, 16, FALLER),
            new fcTxt("Ljr L3", -150, 17, DRAR),
            new fcTxt("L+ L3", 0, 17, FALLER),
            new fcTxt("StL3", 150, 17, DRAR),
            new fcTxt("LjgL3 2s", 0, 18, FALLER),
            new fcTxt("SL1a", 0, 19, DRAR),
            new fcTxt("36V= till DpA", 0, 20, DRAR),
            new fcTxt("Li L1", 0, 21, DRAR),
            new fcTxt("55V~ till DpB", 0, 22, DRAR)
        ]

        this.sections["DB"] = [
            {"v": [0], "h": [26]},
            new fcTxt("S1 (SL3a)", 0, 24, FALLER),
            new fcTxt("A 1/1", 0, 25, DRAR),
            new fcTxt("Ljg 1/1", 0, 26, FALLER),
            new fcTxt("Ljr 1/1", -150, 26, DRAR),
            new fcTxt("SL3a", 0, 27, DRAR),
            new fcTxt("55V~ In", -150, 28, DRAR),
            new fcTxt("V L2",0, 28, DRAR)
        ]

        this.sections["DBIN"] = [
            {"v": [0], "h": [35]},
            new fcTxt("S1", 0, 30, DRAR),
            new fcTxt("L 1/1 F", 0, 31, DRAR),
            new fcTxt("Sp L2", 0, 32, DRAR),
            new fcTxt("36V= till Blockdel", 0, 33, DRAR),
            new fcTxt("L+L3", 0, 34, DRAR),
            new fcTxt("Ljg L3", 0, 35, DRAR),
            new fcTxt("St L3 0,25s", 100, 35, FALLER),
            new fcTxt("Ljr L3",0, 36, FALLER)
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
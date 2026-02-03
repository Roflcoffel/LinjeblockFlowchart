// The first object defines which relays are vertical and which are horizontal
// Vertical are indicated with and offset, all relays on x=100 should be on the same vertical
// Horizontal are indicated with the row number, all relays on row=[1,3] should be on the same horizontal
const DRAR = true
const FALLER = false

class LinjeVändning {
    constructor() {
        this.sections = {}

        this.sections["DA"] = [
            {"v": [0], "h": [1, 3]}, 
            new fcTxt("V L1", -100, 1, DRAR), 
            new fcTxt("Lm L1", 0, 1, FALLER), 
            new fcTxt("Ri L1 B", 0, 2, DRAR),
            new fcTxt("Lik in", 0, 3, FALLER),
            new fcTxt("V L1", 100, 3, FALLER),
            new fcTxt("Växel ut", -100, 3, FALLER)
        ]

        this.sections["DB"] = [
            {"v": [0], "h": [5]},
            new fcTxt("V L2", 0, 4, DRAR),
            new fcTxt("Ri L2 F", 0, 5, DRAR),
            new fcTxt("Li L2", 100, 5, FALLER),
            new fcTxt("Lik ut", -100, 5, DRAR)
        ]

        this.sections["Block"] = [
            {"v": [], "h": []},
            new fcTxt("L+L3", 0, 6, DRAR),
            new fcTxt("Lik ut", 0, 7, DRAR)
        ]

        this.sections["DALIK"] = [
            {"v": [0], "h": [7]},
           new fcTxt("Li L1", 0, 8, DRAR),
           new fcTxt("Ljg L1", 0, 9, DRAR),
           new fcTxt("Ljr L1", 100, 9, FALLER)
        ]
    }

    Draw() {
        strokeWeight(4);
        for (const name in this.sections) {
            for (let i = 1; i < this.sections[name].length; i++) {
                this.sections[name][i].Draw()
            }
        }
       
    }
}
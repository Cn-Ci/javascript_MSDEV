
export class Extenders {
    
    static init =  ()=>{
        
        String.prototype.tryParseToJson = function () {
            let json;
            try {
                json = JSON.parse(this)
            } catch {
                console.log("String.tryParseToJson fails", this)
            }
            return json;
        }

        JSON.tryParse = function(value){
            let json;
            try {
                json = JSON.parse(value)
            } catch {
                console.log("JSON.tryParse fails", value)
            }
            return json;
        }
        
    }
}
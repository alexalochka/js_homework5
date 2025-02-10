let services = {
    "cut": "1000 грн",
    "shave": "50 грн",
    "wash": "100 грн",
    getArr() {
        let arr = [];
        for (let key in this){
            let value = this[key];
            if (typeof(value)!=='function'){
                value = Number.parseInt(value);
                arr.push(value);
            }
        }
        return arr;
    },
    


    maxPrice() {
        let arr = this.getArr();
        let a = 0;
        arr.forEach(function(number) {
            if(number>a) {
                a = number;
            }
        });

        return a;
        //return Math.max(...arr);
    },


    minPrice() {
        let arr = this.getArr();
        let a = this.maxPrice();
        arr.forEach(function(number) {
            if(number<a) {
                a = number;
            }
        });

        return a;
        //return Math.min(...arr);
    },

    price() {
        let arr = this.getArr();
        let summ = 0;
        arr.forEach(function(number){
            summ+=number;
        });
        return summ;
    }
    };

services['blue'] = '10 грн';
// console.log(services);    
console.log("Total summ: "+services.price());
console.log("Max.Price: "+services.maxPrice());
console.log("Min.Price: "+services.minPrice());


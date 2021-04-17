class Contestant{

    constructor(){
        this.index = null;
        this.name = null;
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
    }

    update(name){
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
            name:this.name,
        });
    }

    
}

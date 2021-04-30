function greetFactory() {
    var namesGreeted = {};
    var counter = 0;

    function setNameGreeted(nameEntered){
        namesGreeted = nameEntered;
    }

    function getNameGreeted(){
        return namesGreeted;
    }

    function getCounter(){
        return counter;
    }

    function setGreeting(name, checkedRadioBtn) {
        if (namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;
            counter++;
        } else{
            namesGreeted[name]++;
        }


        if (checkedRadioBtn === "english") {
            return "Hello, " + name;
        }
        else if (checkedRadioBtn === "afrikaans") {
            return "Goeie môre, " + name;
        }
        else if (checkedRadioBtn === "isixhosa") {
            return "Molo, " + name;
        }
    }
    
    return {
        setNameGreeted,
        getNameGreeted,
        setGreeting,
        getCounter,
    }
}
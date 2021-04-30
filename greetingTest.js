describe("The greeting factory function" , function(){
    it("should take in a user's name" , function(){
        let greeting = greetFactory();
        greeting.setNameGreeted("Nzwakie");
        assert.equal("Nzwakie" ,greeting.getNameGreeted());
        let greeting2 = greetFactory();
        greeting2.setNameGreeted("Yonela");
        assert.equal("Yonela" ,greeting2.getNameGreeted());
    });

    it("should take in a user's language selected(English) and greet the person in that language when greet button is clicked" , function(){
        let greeting = greetFactory();
        assert.equal("Hello, Nzwakie" ,greeting.setGreeting("Nzwakie", "english"));
    });

    it("should take in a user's language selected(Afrikaans) and greet the person in that language when greet button is clicked" , function(){
        let greeting = greetFactory();
        assert.equal("Goeie môre, Buhle" ,greeting.setGreeting("Buhle", "afrikaans"));
    });

    it("should take in a user's language selected(Isixhosa) and greet the person in that language when greet button is clicked" , function(){
        let greeting = greetFactory();
        assert.equal("Molo, Linamandla" ,greeting.setGreeting("Linamandla", "isixhosa"));
    });

    it("should count the number of people greeted from the local storage" , function(){
        let greeting = greetFactory();
        greeting.setGreeting("Nzwakie", "english");
        greeting.setGreeting("Buhle", "isixhosa");
        assert.equal(2 ,greeting.getCounter());

        let greeting2 = greetFactory();
        greeting2.setGreeting("Nzwakie", "english");
        greeting2.setGreeting("Buhle", "isixhosa");
        greeting2.setGreeting("Vhonani", "english");
        greeting2.setGreeting("Cinga", "isixhosa");
        greeting2.setGreeting("Jodie", "afrikaans");
        greeting2.setGreeting("Onele", "isixhosa");
        assert.equal(6 ,greeting2.getCounter());
    });

    it("should stop incrementing counter if name has already been greeted" , function(){
        let greeting = greetFactory();
        greeting.setGreeting("Nzwakie", "english");
        greeting.setGreeting("Nzwakie", "english");
        assert.equal(1 ,greeting.getCounter());
    });
});
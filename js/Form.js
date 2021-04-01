class Form{
    constructor(){}
    display(){
        var title = createElement('H1');
        title.html("Car Racing Game");
        title.position(500,0);
        var input = createInput("Name");
        var button = createButton('Submit');
        input.position(500,250);
        button.position(560,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+= 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('H3');
            greeting.html("Hello" + name);
            greeting.position(560,300);
             });
    }
}
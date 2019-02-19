Meteor.publish('publi_notas', function(){
	//console.log('estoy en el serverrr');
	return Notas.find();

});

Meteor.methods({
	registrar: function(dato){
        Notas.insert({texto:dato});
    }
})    
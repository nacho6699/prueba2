import {} from 'meteor/mongo';

Notas = new Mongo.Collection('notas');

var textSchema = new SimpleSchema({
	texto:{
		type:String
	}
});
Notas.attachSchema(textSchema);
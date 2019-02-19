Meteor.subscribe('publi_notas');
Template.principal.events({
	'click #btn_registrar': function () {
		var nota = $('#txt_nota').val();
		Meteor.call('registrar',nota);
	}
});
Template.principal.helpers({
	notas: function () {
			return Notas.find();
	}
});
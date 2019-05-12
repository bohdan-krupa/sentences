var add_name,

	all_name = [],

	all_gender = [],

	num = 0,

	rand,

	word,

	enter_audit;


$("input")
	.on("keydown", function() {
		enter_audit = true;
	})
	.on("focusout", function() {
		enter_audit = false;
	});

$(document).on("keydown", function(e) {
	if (enter_audit && e.keyCode == 13) {
		AddName();
	}
});

$(".add_btn").on("click", function() {
	AddName();
});

$(".generate_btn").on("click", function() {
	for (let i = 1; i <= 3; i++) {
		Sentence();
		$("#sentence_" + i).html(word);
	}
});


function Del(id) {
	num--;
	all_name.splice(id, 1);
	all_gender.splice(id, 1);

	$(".echo_names_container").html("");

	for (let i = 0; i < all_name.length; i++) {
		$(".echo_names_container").append("<div class='echo_names id_" + i + "'><span class='echo_name'>" + all_name[i] + "<i class='fa fa-times' onclick='Del(" + i + ")'></i></span></div>");
	}
}

function Randomize(min, max) {
	rand = Math.floor(Math.random() * (max - min + 1)) + min;
}

function Sentence() {
	$("#write").show(800);

	Randomize(0, all_name.length - 1);
	console.log(rand);


	if (all_name.length == 0) { // IF NULL NAME
		word = "Хтось";
		gender = "male";
	}
	// if (all_name.length == 1) rand = 0; // IF ONE NAME

	for (let i = 0; i <= all_name.length - 1; i++) { // IF > ONE NAME;
		if (rand == i) {
			word = all_name[i];
			gender = all_gender[i];
			break;
		}
	}
	
	Randomize(0, 6);
	if (rand == 0) word += " цього року";
	if (rand == 1) word += " колись";
	if (rand == 2) word += " недавно";
	if (rand == 3) word += " сьогодні";
	if (rand == 4) word += " вчора";
	if (rand == 5) word += " після вчора";
	if (rand == 6) word += " щойно";

	Randomize(0, 10);
	if (rand == 0) word += " паранормально";
	if (rand == 1) word += " прекрасно";
	if (rand == 2) word += " добре";
	if (rand == 3) word += " нормально";
	if (rand == 4) word += " погано";
	if (rand == 5) word += " жахливо";
	if (rand == 6) word += " болісно";
	if (rand == 7) word += " без почуттів";
	if (rand == 8) word += " примусово";
	if (rand == 9) word += " бридко";
	if (rand == 10) word += " лежучи";

	if (gender == "male") {
		Randomize(0, 39);
		if (rand == 0) word += " об'ївся";
		if (rand == 1) word += " накурився";
		if (rand == 2) word += " обісрався";
		if (rand == 3) word += " налякався";
		if (rand == 4) word += " пішов в запій";
		if (rand == 5) word += " набухався";
		if (rand == 6) word += " задрочував";
		if (rand == 7) word += " співав";
		if (rand == 8) word += " танцював";
		if (rand == 9) word += " малював";
		if (rand == 10) word += " пішов спати";
		if (rand == 11) word += " нанюхався";
		if (rand == 12) word += " пукнув";
		if (rand == 13) word += " побігав";
		if (rand == 14) word += " обідився";
		if (rand == 15) word += " переписувався";
		if (rand == 16) word += " валявся";
		if (rand == 17) word += " сховався";
		if (rand == 18) word += " ночував";
		if (rand == 19) word += " хворів";
		if (rand == 20) word += " займався спортом";
		if (rand == 21) word += " шукав щось";
		if (rand == 22) word += " організовував свій виступ";
		if (rand == 23) word += " був задоволений";
		if (rand == 24) word += " працював";
		if (rand == 25) word += " займався господарством";
		if (rand == 26) word += " щось майстрував";
		if (rand == 27) word += " займався гімнастикою";
		if (rand == 28) word += " качався";
		if (rand == 29) word += " соромився когось";
		if (rand == 30) word += " застряг";
		if (rand == 31) word += " щебетав";
		if (rand == 32) word += " колядував";
		if (rand == 33) word += " спав";
		if (rand == 34) word += " проснувся";
		if (rand == 35) word += " спотикнувся";
		if (rand == 36) word += " сходив в туалет";
		if (rand == 37) word += " сміявся";
		if (rand == 38) word += " бомжував";
		if (rand == 39) word += " жартував";
	}

	if (gender == "female") {
		Randomize(0, 39);
		if (rand == 0) word += " об'їлась";
		if (rand == 1) word += " накурилась";
		if (rand == 2) word += " обісралась";
		if (rand == 3) word += " налякалась";
		if (rand == 4) word += " пішла в запій";
		if (rand == 5) word += " набухалась";
		if (rand == 6) word += " задрочувала";
		if (rand == 7) word += " співала";
		if (rand == 8) word += " танцювала";
		if (rand == 9) word += " малювала";
		if (rand == 10) word += " пішла спати";
		if (rand == 11) word += " нанюхалась";
		if (rand == 12) word += " пукнула";
		if (rand == 13) word += " побігала";
		if (rand == 14) word += " обідилась";
		if (rand == 15) word += " переписувалась";
		if (rand == 16) word += " валялась";
		if (rand == 17) word += " сховалась";
		if (rand == 18) word += " ночувала";
		if (rand == 19) word += " хворіла";
		if (rand == 20) word += " займалась спортом";
		if (rand == 21) word += " шукала щось";
		if (rand == 22) word += " організовувала свій виступ";
		if (rand == 23) word += " була задоволена";
		if (rand == 24) word += " працювала";
		if (rand == 25) word += " займалась господарством";
		if (rand == 26) word += " щось майструвала";
		if (rand == 27) word += " займалась гімнастикою";
		if (rand == 28) word += " качалась";
		if (rand == 29) word += " соромилась когось";
		if (rand == 30) word += " застрягла";
		if (rand == 31) word += " щебетала";
		if (rand == 32) word += " колядувала";
		if (rand == 33) word += " спала";
		if (rand == 34) word += " проснулась";
		if (rand == 35) word += " спотикнулась";
		if (rand == 36) word += " сходила в туалет";
		if (rand == 37) word += " сміялась";
		if (rand == 38) word += " бомжувала";
		if (rand == 39) word += " жартувала";
	}
	
	if (gender == "average") {
		Randomize(0, 39);
		if (rand == 0) word += " об'їлося";
		if (rand == 1) word += " накурилося";
		if (rand == 2) word += " обісралося";
		if (rand == 3) word += " налякалося";
		if (rand == 4) word += " пішло в запій";
		if (rand == 5) word += " набухалося";
		if (rand == 6) word += " задрочувало";
		if (rand == 7) word += " співало";
		if (rand == 8) word += " танцювало";
		if (rand == 9) word += " малювало";
		if (rand == 10) word += " пішло спати";
		if (rand == 11) word += " нанюхалося";
		if (rand == 12) word += " пукнуло";
		if (rand == 13) word += " побігало";
		if (rand == 14) word += " обідилося";
		if (rand == 15) word += " переписувалося";
		if (rand == 16) word += " валялося";
		if (rand == 17) word += " сховалося";
		if (rand == 18) word += " ночувало";
		if (rand == 19) word += " хворіло";
		if (rand == 20) word += " займалося спортом";
		if (rand == 21) word += " шукало щось";
		if (rand == 22) word += " організовувало свій виступ";
		if (rand == 23) word += " було задоволене";
		if (rand == 24) word += " працювало";
		if (rand == 25) word += " займалося господарством";
		if (rand == 26) word += " щось майструвало";
		if (rand == 27) word += " займалося гімнастикою";
		if (rand == 28) word += " качалося";
		if (rand == 29) word += " соромилося когось";
		if (rand == 30) word += " застрягло";
		if (rand == 31) word += " щебетало";
		if (rand == 32) word += " колядувало";
		if (rand == 33) word += " спало";
		if (rand == 34) word += " проснулося";
		if (rand == 35) word += " спотикнулося";
		if (rand == 36) word += " сходило в туалет";
		if (rand == 37) word += " сміялося";
		if (rand == 38) word += " бомжувало";
		if (rand == 39) word += " жартувало";
	}

	if (gender == "plural") {
		Randomize(0, 39);
		if (rand == 0) word += " об'їлись";
		if (rand == 1) word += " накурились";
		if (rand == 2) word += " обісрались";
		if (rand == 3) word += " налякались";
		if (rand == 4) word += " пішли в запій";
		if (rand == 5) word += " набухались";
		if (rand == 6) word += " задрочували";
		if (rand == 7) word += " співали";
		if (rand == 8) word += " танцювали";
		if (rand == 9) word += " малювали";
		if (rand == 10) word += " пішли спати";
		if (rand == 11) word += " нанюхались";
		if (rand == 12) word += " пукнули";
		if (rand == 13) word += " побігали";
		if (rand == 14) word += " обідились";
		if (rand == 15) word += " переписувались";
		if (rand == 16) word += " валялись";
		if (rand == 17) word += " сховались";
		if (rand == 18) word += " ночували";
		if (rand == 19) word += " хворіли";
		if (rand == 20) word += " займались спортом";
		if (rand == 21) word += " шукали щось";
		if (rand == 22) word += " організовували свій виступ";
		if (rand == 23) word += " були задоволені";
		if (rand == 24) word += " працювали";
		if (rand == 25) word += " займались господарством";
		if (rand == 26) word += " щось майстрували";
		if (rand == 27) word += " займались гімнастикою";
		if (rand == 28) word += " качались";
		if (rand == 29) word += " соромились когось";
		if (rand == 30) word += " застрягли";
		if (rand == 31) word += " щебетали";
		if (rand == 32) word += " колядували";
		if (rand == 33) word += " спали";
		if (rand == 34) word += " проснулись";
		if (rand == 35) word += " спотикнулись";
		if (rand == 36) word += " сходили в туалет";
		if (rand == 37) word += " сміялись";
		if (rand == 38) word += " бомжували";
		if (rand == 39) word += " жартували";
	}

	Randomize(0, 11);
	if (rand == 0) word += " на вулиці.";
	if (rand == 1) word += " у школі.";
	if (rand == 2) word += " вдома.";
	if (rand == 3) word += " на дереві.";
	if (rand == 4) word += " під ліжком.";
	if (rand == 5) word += " на шафі.";
	if (rand == 6) word += " на столі.";
	if (rand == 7) word += " біля унітазу.";
	if (rand == 8) word += " поруч з тобою.";
	if (rand == 9) word += " в смітнику.";
	if (rand == 10) word += " в магазині.";
	if (rand == 11) word += " на кріслі.";
}

function AddName() {
	add_name = $("input").val()[0].toUpperCase() + $("input").val().slice(1);

	if (add_name.trim() != "" && add_name.length < 50) {
		all_name[num] = add_name;

		if ($("#male").prop("checked")) all_gender[num] = "male";
		if ($("#female").prop("checked")) all_gender[num] = "female";
		if ($("#plural").prop("checked")) all_gender[num] = "plural";
		if ($("#average").prop("checked")) all_gender[num] = "average";

		$(".echo_names_container").append("<div class='echo_names id_" + num + "'><span class='echo_name'>" + add_name + "<i class='fa fa-times' onclick='Del(" + num + ")'></i></span></div>");
		
		num++;
	}
}